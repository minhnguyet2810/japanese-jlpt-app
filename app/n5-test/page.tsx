'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import WritingChallenge from '@/components/WritingChallenge';
import { Sidebar } from '@/components/Sidebar';
import {
  n5MockTestQuestions,
  type N5TestQuestion,
  N5_VOCAB_POOL,
} from '@/data/mockVocab';

import { speakJapaneseNow } from '@/lib/speakJapanese';
import { MicroPermissionPrompt } from '@/components/MicroPermissionPrompt';

// 4 chế độ mock chính tương ứng 4 nhóm bài:
// G1: B1–5, G2: B6–8 (+9), G3: B10–12, G4: B13–14
type MockMode = 'after5' | 'after8' | 'after12' | 'after14';

const listeningQuestionsAfter5: Array<{
  jp: string;
  vi: string;
  options: string[];
  correctIndex: number;
}> = [
  {
    jp: 'あした、学校へ行きます。',
    vi: 'Ngày mai tôi đi đến trường.',
    options: [
      'Ngày mai tôi đi đến trường.',
      'Hôm nay tôi nghỉ học.',
      'Hôm qua tôi đi đến trường.',
    ],
    correctIndex: 0,
  },
  {
    jp: '先生は日本語を教えます。',
    vi: 'Thầy cô dạy tiếng Nhật.',
    options: [
      'Thầy cô học tiếng Nhật.',
      'Thầy cô dạy tiếng Nhật.',
      'Thầy cô nói tiếng Anh.',
    ],
    correctIndex: 1,
  },
  {
    jp: '日曜日に友達と公園で遊びます。',
    vi: 'Chủ nhật tôi chơi ở công viên với bạn.',
    options: [
      'Chủ nhật tôi chơi ở công viên với bạn.',
      'Chủ nhật tôi đi làm.',
      'Chủ nhật tôi học ở trường.',
    ],
    correctIndex: 0,
  },
];

const listeningQuestionsAfter8: Array<{
  jp: string;
  vi: string;
  options: string[];
  correctIndex: number;
}> = [
  {
    jp: '日本の生活はとても楽しいです。',
    vi: 'Cuộc sống ở Nhật rất vui.',
    options: [
      'Cuộc sống ở Nhật rất vui.',
      'Cuộc sống ở Nhật rất buồn.',
      'Tôi không thích cuộc sống ở Nhật.',
    ],
    correctIndex: 0,
  },
  {
    jp: '富士山は高いですが、とてもきれいです。',
    vi: 'Núi Phú Sĩ cao nhưng rất đẹp.',
    options: [
      'Núi Phú Sĩ thấp nhưng đẹp.',
      'Núi Phú Sĩ cao nhưng rất đẹp.',
      'Núi Phú Sĩ cao nhưng không đẹp.',
    ],
    correctIndex: 1,
  },
  {
    jp: '日曜日に友達とデパートへ行きます。',
    vi: 'Chủ nhật tôi đi trung tâm thương mại với bạn.',
    options: [
      'Chủ nhật tôi đi trung tâm thương mại với bạn.',
      'Chủ nhật tôi đi làm.',
      'Chủ nhật tôi đi học.',
    ],
    correctIndex: 0,
  },
  {
    jp: '毎朝パンと卵を食べます。',
    vi: 'Mỗi sáng tôi ăn bánh mì và trứng.',
    options: [
      'Mỗi sáng tôi ăn cơm.',
      'Mỗi sáng tôi ăn bánh mì và trứng.',
      'Mỗi sáng tôi không ăn sáng.',
    ],
    correctIndex: 1,
  },
  {
    jp: '友達からきれいな花をもらいました。',
    vi: 'Tôi nhận được bó hoa đẹp từ bạn.',
    options: [
      'Tôi tặng hoa cho bạn.',
      'Tôi nhận được bó hoa đẹp từ bạn.',
      'Tôi mua hoa cho bạn.',
    ],
    correctIndex: 1,
  },
];

const listeningQuestionsAfter9: Array<{
  jp: string;
  vi: string;
  options: string[];
  correctIndex: number;
}> = [
  {
    jp: '来週の土曜日、小沢征爾のコンサートがあります。',
    vi: 'Thứ Bảy tuần sau có buổi hòa nhạc của Ozawa Seiji.',
    options: [
      'Thứ Bảy tuần sau tôi đi xem phim.',
      'Thứ Bảy tuần sau có buổi hòa nhạc của Ozawa Seiji.',
      'Chủ nhật tuần sau có trận bóng chày.',
    ],
    correctIndex: 1,
  },
  {
    jp: '土曜日はちょっと・・・。',
    vi: 'Thứ Bảy thì có lẽ không được rồi. (từ chối khéo)',
    options: [
      'Thứ Bảy tôi rất bận.',
      'Thứ Bảy thì có lẽ không được rồi.',
      'Thứ Bảy tôi đi chơi.',
    ],
    correctIndex: 1,
  },
  {
    jp: 'わたしはイタリア料理が好きです。',
    vi: 'Tôi thích món ăn Ý.',
    options: [
      'Tôi thích món ăn Nhật.',
      'Tôi thích món ăn Ý.',
      'Tôi không thích món ăn Ý.',
    ],
    correctIndex: 1,
  },
  {
    jp: '時間がありませんから、新聞を読みません。',
    vi: 'Vì không có thời gian nên tôi không đọc báo.',
    options: [
      'Tôi đọc báo mỗi ngày.',
      'Vì không có thời gian nên tôi không đọc báo.',
      'Tôi có nhiều thời gian.',
    ],
    correctIndex: 1,
  },
  {
    jp: '日本語が少しわかります。',
    vi: 'Tôi hiểu tiếng Nhật một chút.',
    options: [
      'Tôi không hiểu tiếng Nhật.',
      'Tôi hiểu tiếng Anh.',
      'Tôi hiểu tiếng Nhật một chút.',
    ],
    correctIndex: 2,
  },
  {
    jp: 'ええ、約束がありますから。また今度お願いします。',
    vi: 'Vâng, vì tôi có hẹn rồi. Hẹn anh/chị lần sau vậy.',
    options: [
      'Tôi đi được. Cảm ơn anh.',
      'Vâng, vì tôi có hẹn rồi. Hẹn anh/chị lần sau vậy.',
      'Tuần sau tôi rảnh.',
    ],
    correctIndex: 1,
  },
  {
    jp: 'どんなスポーツが好きですか。',
    vi: 'Anh/chị thích môn thể thao nào?',
    options: [
      'Anh/chị có thích thể thao không?',
      'Anh/chị thích môn thể thao nào?',
      'Tôi thích bóng đá.',
    ],
    correctIndex: 1,
  },
  {
    jp: '日曜日に友達とデパートへ行きます。',
    vi: 'Chủ nhật tôi đi trung tâm thương mại với bạn.',
    options: [
      'Chủ nhật tôi ở nhà.',
      'Chủ nhật tôi đi trung tâm thương mại với bạn.',
      'Tôi thích đi chơi với bạn.',
    ],
    correctIndex: 1,
  },
];

const listeningQuestionsAfter15: Array<{
  jp: string;
  vi: string;
  options: string[];
  correctIndex: number;
}> = [
  {
    jp: 'ここで写真を撮ってもいいですか。',
    vi: 'Tôi chụp ảnh ở đây được không?',
    options: [
      'Tôi chụp ảnh ở đây được không?',
      'Không được chụp ảnh ở đây.',
      'Tôi không thích chụp ảnh.',
    ],
    correctIndex: 0,
  },
  {
    jp: 'ここでたばこを吸ってはいけません。',
    vi: 'Không được hút thuốc ở đây.',
    options: [
      'Không được hút thuốc ở đây.',
      'Được hút thuốc ở đây.',
      'Tôi muốn hút thuốc.',
    ],
    correctIndex: 0,
  },
  {
    jp: 'ミラーさんは銀行で働いています。',
    vi: 'Anh Miller đang làm việc ở ngân hàng.',
    options: [
      'Anh Miller đang làm việc ở ngân hàng.',
      'Anh Miller là học sinh.',
      'Anh Miller đang học ở đại học.',
    ],
    correctIndex: 0,
  },
  {
    jp: '両親は大阪に住んでいます。',
    vi: 'Bố mẹ tôi sống ở Osaka.',
    options: [
      'Bố mẹ tôi sống ở Osaka.',
      'Bố mẹ tôi đi Osaka chơi.',
      'Bố mẹ tôi làm việc ở Osaka một ngày.',
    ],
    correctIndex: 0,
  },
];

type SpeakingItem = {
  jp: string;
  romaji: string;
  vi: string;
  group: 'G1' | 'G2' | 'G3' | 'G4';
};

// Một số câu mẫu để luyện speaking cho từng nhóm bài
const SPEAKING_ITEMS: SpeakingItem[] = [
  // Nhóm 1: B1–5
  {
    group: 'G1',
    jp: 'わたしは会社員です。',
    romaji: 'Watashi wa kaishain desu.',
    vi: 'Tôi là nhân viên công ty.',
  },
  {
    group: 'G1',
    jp: 'これは日本語の本です。',
    romaji: 'Kore wa Nihongo no hon desu.',
    vi: 'Đây là sách tiếng Nhật.',
  },
  {
    group: 'G1',
    jp: 'あした学校へ行きます。',
    romaji: 'Ashita gakkō e ikimasu.',
    vi: 'Ngày mai tôi đi đến trường.',
  },
  // Nhóm 2: B6–8
  {
    group: 'G2',
    jp: '日本の料理はおいしいです。',
    romaji: 'Nihon no ryōri wa oishii desu.',
    vi: 'Món ăn Nhật rất ngon.',
  },
  {
    group: 'G2',
    jp: '日曜日に友達と映画を見ます。',
    romaji: 'Nichiyōbi ni tomodachi to eiga o mimasu.',
    vi: 'Chủ nhật tôi xem phim với bạn.',
  },
  {
    group: 'G2',
    jp: 'コーヒーはあまり飲みません。',
    romaji: 'Kōhī wa amari nomimasen.',
    vi: 'Tôi không uống cà phê nhiều lắm.',
  },
  // Nhóm 3: B10–12
  {
    group: 'G3',
    jp: '毎朝七時に起きます。',
    romaji: 'Maiasa shichiji ni okimasu.',
    vi: 'Mỗi sáng tôi dậy lúc 7 giờ.',
  },
  {
    group: 'G3',
    jp: '駅までバスで行きます。',
    romaji: 'Eki made basu de ikimasu.',
    vi: 'Tôi đi đến nhà ga bằng xe buýt.',
  },
  {
    group: 'G3',
    jp: '田中さんに日本語を教えてもらいました。',
    romaji: 'Tanaka-san ni Nihongo o oshiete moraimashita.',
    vi: 'Tôi được anh Tanaka dạy tiếng Nhật.',
  },
  // Nhóm 4: B13–14
  {
    group: 'G4',
    jp: '日本へ経済を勉強しに来ました。',
    romaji: 'Nihon e keizai o benkyō shi ni kimashita.',
    vi: 'Tôi đến Nhật để học kinh tế.',
  },
  {
    group: 'G4',
    jp: 'ここで写真を撮ってもいいですか。',
    romaji: 'Koko de shashin o totte mo ii desu ka.',
    vi: 'Tôi chụp ảnh ở đây được không?',
  },
  {
    group: 'G4',
    jp: 'ミラーさんは銀行で働いています。',
    romaji: 'Mirā-san wa ginkō de hataraite imasu.',
    vi: 'Anh Miller đang làm việc ở ngân hàng.',
  },
];

function getQuestionLabel(q: N5TestQuestion): string {
  switch (q.type) {
    case 'vocab-meaning':
      return 'Từ vựng – chọn nghĩa';
    case 'vocab-reading':
      return 'Từ vựng – cách đọc hiragana';
    case 'grammar-particle':
      return 'Ngữ pháp – trợ từ';
    case 'grammar-sentence':
      return 'Ngữ pháp – chọn câu đúng';
    case 'sentence-order':
      return 'Sắp xếp câu (trật tự từ)';
    default:
      return '';
  }
}

export default function N5TestPage() {
  const searchParams = useSearchParams();
  const modeParam = searchParams?.get('mode');
  const initialMode: MockMode =
    modeParam === 'after5'
      ? 'after5'
      : modeParam === 'after8'
      ? 'after8'
      : modeParam === 'after12'
      ? 'after12'
      : 'after14';

  const [mode, setMode] = useState<MockMode>(initialMode);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [orderTokens, setOrderTokens] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [listeningIndex, setListeningIndex] = useState(0);
  const [listeningSelections, setListeningSelections] = useState<(number | null)[]>(() => {
    const m = initialMode;
    const len =
      m === 'after5'
        ? listeningQuestionsAfter5.length
        : m === 'after8'
        ? listeningQuestionsAfter8.length
        : listeningQuestionsAfter15.length;
    return new Array(len).fill(null);
  });
  const [completedModes, setCompletedModes] = useState<MockMode[]>([]);
  const [speakingIndex, setSpeakingIndex] = useState(0);
  const [speakingRecognized, setSpeakingRecognized] = useState('');
  const [speakingScore, setSpeakingScore] = useState<number | null>(null);
  const [speakingComment, setSpeakingComment] = useState<string | null>(null);
  const [speakingLoading, setSpeakingLoading] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = window.localStorage.getItem('n5-mock-completed-modes');
      if (!raw) return;
      const parsed = JSON.parse(raw) as MockMode[];
      if (Array.isArray(parsed)) {
        setCompletedModes(parsed);
      }
    } catch {
      // ignore
    }
  }, []);

  // Nhóm bài cho từng chế độ mock – để mỗi nhóm có đề riêng, không lặp nhóm khác
  const groupForMode = (m: MockMode): 'G1' | 'G2' | 'G3' | 'G4' => {
    switch (m) {
      case 'after5':
        return 'G1'; // B1–5
      case 'after8':
        return 'G2'; // B6–8 (+9)
      case 'after12':
        return 'G3'; // B10–12
      case 'after14':
      default:
        return 'G4'; // B13–14
    }
  };

  const maxLessonForMode = (m: MockMode): number => {
    switch (m) {
      case 'after5': return 5;
      case 'after8': return 8;
      case 'after12': return 12;
      case 'after14': return 14;
      default: return 14;
    }
  };

  const questions = useMemo(() => {
    const group = groupForMode(mode);
    const base = n5MockTestQuestions.filter((q) => {
      // Mỗi nhóm bài một đề riêng (không dùng chung giữa nhóm)
      switch (group) {
        case 'G1':
          // Nhóm 1: Bài 1–5 – kana + từ vựng + ngữ pháp cơ bản
          return (
            q.lessonScope === 'B0-3' ||
            q.lessonScope === 'B4-5' ||
            q.lessonScope === 'N5-mix'
          );
        case 'G2':
          // Nhóm 2: Bài 6–8: tính từ, so sánh, sở thích, lời mời và lịch hẹn
          return q.lessonScope === 'B6-8';
        case 'G3':
          // Nhóm 3: Bài 10–12
          return q.lessonScope === 'B10-15';
        case 'G4':
        default:
          // Nhóm 4: Bài 13–14 – vẫn dùng nhóm câu hỏi B10–15 nhưng vocab random chỉ lấy từ 13–14
          return q.lessonScope === 'B10-15';
      }
    });

    // Thêm ~100 câu hỏi từ vựng random từ pool N5_VOCAB_POOL theo từng nhóm bài
    const extraVocabQuestions = createRandomVocabQuestionsForGroup(group, 100);
    return [...base, ...extraVocabQuestions];
  }, [mode]);
  const total = questions.length;
  const current = questions[index];
  const isSentenceOrder = current.type === 'sentence-order';

  const isCorrect = (() => {
    if (isSentenceOrder) {
      if (!orderTokens.length) return false;
      return orderTokens.join('') === current.options.join('');
    }
    if (selected == null) return false;
    return selected === current.correctIndex;
  })();

  const handleCheck = () => {
    if (checked) return;
    if (isCorrect) {
      setScore((s) => s + 1);
    }
    setChecked(true);
  };

  const handleNext = () => {
    if (index + 1 >= total) {
      setFinished(true);
      // đánh dấu mode hiện tại đã hoàn thành
      setCompletedModes((prev) => {
        if (prev.includes(mode)) return prev;
        const next = [...prev, mode];
        if (typeof window !== 'undefined') {
          window.localStorage.setItem('n5-mock-completed-modes', JSON.stringify(next));
        }
        return next;
      });
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setOrderTokens([]);
    setChecked(false);
  };

  const progressText = `${index + 1} / ${total}`;

  const listeningQuestions = (() => {
    const group = groupForMode(mode);
    if (group === 'G1') return listeningQuestionsAfter5;
    if (group === 'G2') {
      // Nhóm 2: dùng listening tương ứng tới Bài 8
      return listeningQuestionsAfter8;
    }
    // Nhóm 3 & 4: dùng listening nâng cao (thể て, xin phép, nghề nghiệp – gia đình)
    return listeningQuestionsAfter15;
  })();

  const speakingItemsForGroup = useMemo(() => {
    const group = groupForMode(mode);
    return SPEAKING_ITEMS.filter((item) => item.group === group);
  }, [mode]);

  function createRandomVocabQuestionsForGroup(
    group: 'G1' | 'G2' | 'G3' | 'G4',
    count: number
  ): N5TestQuestion[] {
    // Giới hạn khoảng bài cho từng nhóm
    const [minLesson, maxLesson] = (() => {
      switch (group) {
        case 'G1':
          return [1, 5] as const; // B1–5
        case 'G2':
          return [6, 8] as const; // B6–8
        case 'G3':
          return [10, 12] as const; // B10–12
        case 'G4':
        default:
          return [13, 14] as const; // B13–14
      }
    })();

    const pool = N5_VOCAB_POOL.filter(
      (v) => v.lesson >= minLesson && v.lesson <= maxLesson
    );
    if (pool.length === 0) return [];

    // Shuffle shallow copy
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));

    const pickScope = (lesson: number): N5TestQuestion['lessonScope'] => {
      if (lesson <= 3) return 'B0-3';
      if (lesson <= 5) return 'B4-5';
      if (lesson <= 8) return 'B6-8';
      if (lesson <= 9) return 'B9';
      return 'B10-15';
    };

    return selected.map<N5TestQuestion>((item) => {
      // Lấy 3 nghĩa nhiễu khác
      const others = pool.filter((v) => v.id !== item.id);
      const distractors = [...others].sort(() => Math.random() - 0.5).slice(0, 3);
      const options = [item.vietnamese, ...distractors.map((d) => d.vietnamese)];
      // Shuffle đáp án
      const shuffledOpts = [...options].sort(() => Math.random() - 0.5);
      const correctIndex = shuffledOpts.indexOf(item.vietnamese);

      return {
        id: `rand-${item.id}-${Math.random().toString(36).slice(2, 7)}`,
        type: 'vocab-meaning',
        lessonScope: pickScope(item.lesson),
        promptVi: `Chọn nghĩa đúng cho từ: ${item.japanese}`,
        options: shuffledOpts,
        correctIndex,
      };
    });
  }

  const handleModeChange = (newMode: MockMode) => {
    if (newMode === mode) return;
    setMode(newMode);
    setIndex(0);
    setSelected(null);
    setOrderTokens([]);
    setChecked(false);
    setScore(0);
    setFinished(false);
    setListeningIndex(0);
    const len = (() => {
      const group = groupForMode(newMode);
      if (group === 'G1') return listeningQuestionsAfter5.length;
      if (group === 'G2') return listeningQuestionsAfter8.length;
      // G3 & G4
      return listeningQuestionsAfter15.length;
    })();
    setListeningSelections(new Array(len).fill(null));
  };

  function normalizeJapanese(s: string): string {
    return s
      .replace(/\s+/g, '')
      .replace(/[　\u3000]/g, '')
      .replace(/。|、|！|？/g, '')
      .trim()
      .toLowerCase();
  }

  function similarityPercent(a: string, b: string): number {
    const na = normalizeJapanese(a);
    const nb = normalizeJapanese(b);
    if (na.length === 0) return nb.length === 0 ? 100 : 0;
    let matches = 0;
    for (let i = 0; i < Math.min(na.length, nb.length); i++) {
      if (na[i] === nb[i]) matches++;
    }
    const maxLen = Math.max(na.length, nb.length);
    return Math.round((matches / maxLen) * 100);
  }

  function handleStartSpeaking(item: { jp: string; vi: string }) {
    if (typeof window === 'undefined') return;
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSpeakingComment('Trình duyệt không hỗ trợ nhận diện giọng nói. Thử Chrome.');
      return;
    }
    setSpeakingLoading(true);
    setSpeakingRecognized('');
    setSpeakingScore(null);
    setSpeakingComment(null);

    const recognition = new SpeechRecognition();
    recognition.lang = 'ja-JP';
    recognition.continuous = true;
    recognition.interimResults = true;

    let transcript = '';
    recognition.onresult = (e: SpeechRecognitionEvent) => {
      for (let i = e.resultIndex; i < e.results.length; i++) {
        transcript += e.results[i][0].transcript || '';
      }
    };
    recognition.onend = () => {
      setSpeakingLoading(false);
      const final = transcript.trim() || '';
      setSpeakingRecognized(final || '(không nghe được)');
      if (final) {
        const score = similarityPercent(final, item.jp);
        setSpeakingScore(score);
        if (score >= 80) setSpeakingComment('Rất tốt! Bạn nói gần đúng câu mẫu.');
        else if (score >= 50) setSpeakingComment('Khá ổn. Luyện thêm để cải thiện.');
        else setSpeakingComment('Thử nghe câu mẫu và nói lại.');
      } else {
        setSpeakingComment('Không nhận diện được. Thử nói rõ hơn hoặc bật microphone.');
      }
    };
    recognition.onerror = () => {
      setSpeakingLoading(false);
      setSpeakingComment('Lỗi nhận diện giọng nói. Kiểm tra microphone.');
    };
    recognition.start();
    setTimeout(() => {
      try {
        recognition.stop();
      } catch {
        /* ignore */
      }
    }, 15000);
  }

  return (
    <div className="sb-layout">
      <Sidebar currentLessonId="n5-test" />
      <div className="sb-content">

      <main className="lesson-page">
        <section className="lesson-hero">
          <h1 className="lesson-title">
            {(() => {
              const group = groupForMode(mode);
              switch (group) {
                case 'G1':
                  return 'Mock 1-14 – Nhóm 1 (Bài 1–5)';
                case 'G2':
                  return 'Mock 1-14 – Nhóm 2 (Bài 6–8)';
                case 'G3':
                  return 'Mock 1-14 – Nhóm 3 (Bài 10–12)';
                case 'G4':
                default:
                  return 'Mock 1-14 – Nhóm 4 (Bài 13–14)';
              }
            })()}
          </h1>
          <p className="lesson-subtitle">
            {(() => {
              const group = groupForMode(mode);
              switch (group) {
                case 'G1':
                  return 'Nhóm 1: Bài 1–5 (kana, giới thiệu bản thân, nghề nghiệp, đồ vật cơ bản, địa điểm).';
                case 'G2':
                  return 'Nhóm 2: Bài 6–8 (tính từ, so sánh, sở thích, kế hoạch cuối tuần, mời rủ).';
                case 'G3':
                  return 'Nhóm 3: Bài 10–12 (thời gian, địa điểm, phương tiện, tặng/nhận, tiền – số đếm).';
                case 'G4':
                default:
                  return 'Nhóm 4: Bài 13–14 (muốn có / muốn làm, thể て, xin phép & cấm đoán, nghề nghiệp – gia đình).';
              }
            })()}
          </p>
          <p style={{ marginTop: '1rem' }}>
            <Link href="/n5-test-21-25" style={{ display: 'inline-block', padding: '0.5rem 1rem', background: '#0f766e', color: '#fff', borderRadius: 8, fontWeight: 600, textDecoration: 'none' }}>
              → Mock Test Bài 21–25 (đề tốt nghiệp N5)
            </Link>
          </p>
        </section>

        <section className="card practice-card">
          <div className="card-header">
            <h2>Mock 1-14 – Chọn nhóm bài</h2>
            <p className="section-caption">
              Phạm vi Bài 1–14. 4 nhóm: (1–5), (6–8), (10–12), (13–14). Mỗi nhóm là một đề riêng.
            </p>
          </div>
          <div className="card-body practice-body">
            <div className="practice-actions">
              <button
                type="button"
                className={
                  'secondary-button' +
                  (mode === 'after5' ? ' primary-button' : '') +
                  (completedModes.includes('after5') ? ' completed' : '')
                }
                style={
                  completedModes.includes('after5')
                    ? { backgroundColor: '#16a34a', borderColor: '#16a34a', color: '#ecfdf5' }
                    : undefined
                }
                onClick={() => handleModeChange('after5')}
              >
                Nhóm 1 – Sau Bài 5
              </button>
              <button
                type="button"
                className={
                  'secondary-button' +
                  (mode === 'after8' ? ' primary-button' : '') +
                  (completedModes.includes('after8') ? ' completed' : '')
                }
                style={
                  completedModes.includes('after8')
                    ? { backgroundColor: '#16a34a', borderColor: '#16a34a', color: '#ecfdf5' }
                    : undefined
                }
                onClick={() => handleModeChange('after8')}
              >
                Nhóm 2 – Sau Bài 8
              </button>
              <button
                type="button"
                className={
                  'secondary-button' +
                  (mode === 'after12' ? ' primary-button' : '') +
                  (completedModes.includes('after12') ? ' completed' : '')
                }
                style={
                  completedModes.includes('after12')
                    ? { backgroundColor: '#16a34a', borderColor: '#16a34a', color: '#ecfdf5' }
                    : undefined
                }
                onClick={() => handleModeChange('after12')}
              >
                Nhóm 3 – Sau Bài 12
              </button>
              <button
                type="button"
                className={
                  'secondary-button' +
                  (mode === 'after14' ? ' primary-button' : '') +
                  (completedModes.includes('after14') ? ' completed' : '')
                }
                style={
                  completedModes.includes('after14')
                    ? { backgroundColor: '#16a34a', borderColor: '#16a34a', color: '#ecfdf5' }
                    : undefined
                }
                onClick={() => handleModeChange('after14')}
              >
                Nhóm 4 – Sau Bài 14
              </button>
            </div>
          </div>
        </section>

        <section className="card practice-card">
          <div className="card-header">
            <h2>Câu hỏi {progressText}</h2>
            <p className="section-caption">
              {getQuestionLabel(current)} ・ Phạm vi: {current.lessonScope}
            </p>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <p className="practice-question">
                <strong>{current.promptVi}</strong>
              </p>
              {current.promptJp && <div className="jp">{current.promptJp}</div>}
            </div>

            {/* Trắc nghiệm thường */}
            {!isSentenceOrder && (
              <div className="practice-options">
                {current.options.map((opt, idx) => {
                  const selectedNow = selected === idx;
                  const isOptionCorrect = idx === current.correctIndex;
                  const className =
                    'practice-option' +
                    (checked
                      ? selectedNow && isOptionCorrect
                        ? ' correct'
                        : selectedNow && !isOptionCorrect
                        ? ' wrong'
                        : ''
                      : '');
                  return (
                    <button
                      key={opt}
                      type="button"
                      className={className}
                      onClick={() => {
                        if (checked) return;
                        setSelected(idx);
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Sắp xếp câu */}
            {isSentenceOrder && (
              <div className="builder-body">
                <div className="builder-output" style={{ marginBottom: '1rem' }}>
                  <div className="builder-label">Câu bạn ghép</div>
                  <div className="builder-jp">
                    {orderTokens.length ? orderTokens.join(' ') : '・・・'}
                  </div>
                </div>
                <div className="builder-tokens">
                  {current.options.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className="token-chip"
                      onClick={() => {
                        if (checked) return;
                        setOrderTokens((prev) => [...prev, t]);
                      }}
                    >
                      <span className="token-jp">{t}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {checked && (
              <div className="builder-feedback" style={{ marginTop: '1rem' }}>
                {isCorrect ? (
                  <span className="correct-text">✅ Chính xác!</span>
                ) : (
                  <span className="wrong-text">
                    ❌ Chưa đúng.
                    {current.explanationVi ? ` ${current.explanationVi}` : ''}
                  </span>
                )}
              </div>
            )}

            <div className="practice-actions" style={{ marginTop: '1.5rem' }}>
              <button
                type="button"
                className="primary-button"
                onClick={handleCheck}
                disabled={checked || (!isSentenceOrder && selected == null)}
              >
                Kiểm tra
              </button>
              <button
                type="button"
                className="secondary-button"
                onClick={handleNext}
                disabled={!checked}
              >
                {index + 1 >= total ? 'Xem kết quả' : 'Câu tiếp →'}
              </button>
              {isSentenceOrder && (
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => {
                    if (checked) return;
                    setOrderTokens([]);
                  }}
                >
                  Xoá câu
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Speaking Mock – Luyện nói với chấm nội dung bằng nhận diện giọng nói */}
        {speakingItemsForGroup.length > 0 && (
          <section className="card practice-card">
            <div className="card-header">
              <h2>Mock 1-14 – Speaking</h2>
              <p className="section-caption">
                Bấm &quot;Nhấn để nói&quot;, bạn có 15 giây để nói câu tiếng Nhật tương ứng. Máy sẽ nhận diện và so sánh với câu mẫu.
              </p>
            </div>
            <div className="card-body practice-body">
              <MicroPermissionPrompt />
              {(() => {
                const item =
                  speakingItemsForGroup[speakingIndex % speakingItemsForGroup.length];
                if (!item) return null;
                return (
                  <>
                    <div className="practice-prompt">
                      <p className="practice-question">
                        Hãy nói bằng tiếng Nhật câu sau:
                      </p>
                      <p className="vi">
                        <strong>{item.vi}</strong>
                      </p>
                    </div>
                    <div className="practice-actions" style={{ gap: '0.75rem', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        className="primary-button"
                        onClick={() => handleStartSpeaking(item)}
                        disabled={speakingLoading}
                      >
                        {speakingLoading ? 'Đang nghe… (nói trong 15s)' : 'Nhấn để nói (15s)'}
                      </button>
                      <button
                        type="button"
                        className="secondary-button"
                        onClick={() => speakJapaneseNow(item.jp)}
                      >
                        🔊 Nghe câu mẫu
                      </button>
                      <button
                        type="button"
                        className="secondary-button"
                        onClick={() => {
                          setSpeakingRecognized('');
                          setSpeakingScore(null);
                          setSpeakingComment(null);
                          setSpeakingIndex((i) => i + 1);
                        }}
                      >
                        Câu khác →
                      </button>
                    </div>
                    {speakingRecognized && (
                      <div
                        className="writing-feedback writing-result"
                        style={{ marginTop: '1rem' }}
                      >
                        <p className="section-caption">Máy nghe được:</p>
                        <p className="jp" style={{ marginBottom: '0.25rem' }}>
                          {speakingRecognized}
                        </p>
                        {speakingScore != null && (
                          <p className="writing-score">
                            Độ giống với câu mẫu:{' '}
                            <strong>{speakingScore}%</strong>
                          </p>
                        )}
                        {speakingComment && (
                          <p className="writing-overview">{speakingComment}</p>
                        )}
                        <hr style={{ margin: '0.75rem 0' }} />
                        <p className="section-caption">Câu mẫu chuẩn:</p>
                        <div className="jp">{item.jp}</div>
                        <div className="romaji">{item.romaji}</div>
                        <div className="vi">{item.vi}</div>
                      </div>
                    )}
                    {!speakingRecognized && speakingComment && (
                      <div
                        className="writing-feedback writing-error"
                        style={{ marginTop: '1rem' }}
                      >
                        {speakingComment}
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </section>
        )}

        {/* Mini test Listening – N5 */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mock 1-14 – Listening</h2>
            <p className="section-caption">
              Nghe câu (không xem chữ), chọn nghĩa đúng. Sau khi chọn mới hiện kết quả và nghĩa tiếng Việt.
            </p>
          </div>
          <div className="card-body practice-body">
            <p className="practice-question" style={{ marginBottom: '0.5rem' }}>
              <strong>Câu {listeningIndex + 1} / {listeningQuestions.length}</strong>
            </p>
            <div className="practice-prompt">
              <button
                type="button"
                className="secondary-button"
                onClick={() => speakJapaneseNow(listeningQuestions[listeningIndex].jp)}
              >
                🔊 Nghe câu
              </button>
              <p className="practice-question" style={{ marginTop: '0.75rem' }}>
                Chọn nghĩa tiếng Việt đúng:
              </p>
            </div>
            <div className="practice-options">
              {listeningQuestions[listeningIndex].options.map((opt, idx) => {
                const selectedNow = listeningSelections[listeningIndex] === idx;
                const isCorrectOption = idx === listeningQuestions[listeningIndex].correctIndex;
                const hasAnswered = listeningSelections[listeningIndex] != null;
                const className =
                  'practice-option' +
                  (hasAnswered
                    ? selectedNow && isCorrectOption
                      ? ' correct'
                      : selectedNow && !isCorrectOption
                      ? ' wrong'
                      : ''
                    : '');
                return (
                  <button
                    key={opt}
                    type="button"
                    className={className}
                    onClick={() => {
                      if (listeningSelections[listeningIndex] != null) return;
                      setListeningSelections((prev) => {
                        const next = [...prev];
                        next[listeningIndex] = idx;
                        return next;
                      });
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {listeningSelections[listeningIndex] != null && (
              <div className="writing-feedback writing-result" style={{ marginTop: '1rem' }}>
                <div className="writing-score">
                  {listeningSelections[listeningIndex] === listeningQuestions[listeningIndex].correctIndex
                    ? '✅ Đúng'
                    : '❌ Chưa đúng'}
                </div>
                <p className="writing-overview">
                  <strong>Nghĩa:</strong> {listeningQuestions[listeningIndex].vi}
                </p>
                <p className="practice-question" style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                  <span className="jp">{listeningQuestions[listeningIndex].jp}</span>
                </p>
            </div>
            )}
            <div className="practice-actions" style={{ marginTop: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <button
                type="button"
                className="secondary-button"
                disabled={listeningIndex === 0}
                onClick={() => setListeningIndex((i) => i - 1)}
              >
                ← Câu trước
              </button>
              <button
                type="button"
                className="secondary-button"
                disabled={listeningIndex >= listeningQuestions.length - 1}
                onClick={() => setListeningIndex((i) => i + 1)}
              >
                Câu sau →
              </button>
            </div>
          </div>
        </section>

        {finished && (
          <section className="card">
            <div className="card-header">
              <h2>Kết quả Mock 1-14</h2>
            </div>
            <div className="card-body">
              <p className="lesson-subtitle">
                Bạn đúng <strong>{score}</strong> / <strong>{total}</strong> câu trắc nghiệm.
              </p>
              <p className="section-caption">
                Nếu điểm chưa cao, bạn có thể quay lại các bài B0–B8 để ôn lại từ vựng và ngữ
                pháp, rồi làm test lần nữa.
              </p>
              <div className="practice-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => {
                    setIndex(0);
                    setSelected(null);
                    setOrderTokens([]);
                    setChecked(false);
                    setScore(0);
                    setFinished(false);
                  }}
                >
                  Làm lại từ đầu
                </button>
              </div>
            </div>
          </section>
        )}

        <div id="writing-task">
          <WritingChallenge
            title="Writing task – Mock 1-14"
            sectionCaption="Tự viết 3–5 câu dùng đúng các mẫu đã học (tính từ, trợ từ, thì hiện tại). Có thể viết trước hoặc sau khi làm trắc nghiệm. Bấm «Chấm bài bằng AI» để nhận điểm và gợi ý sửa."
            tips={
              <ul className="grammar-list">
                <li>Ít nhất 1 câu giới thiệu: 「N は N です。」 hoặc 「N は い/な-adj です。」</li>
                <li>Ít nhất 1 câu có thời gian/địa điểm + trợ từ: 「～で／～へ／～に」.</li>
                <li>
                  Thêm 1–2 câu dùng mẫu đã học: ví dụ 「N は どんな N ですか。」, 「N は い-adj ですが、～です。」,
                  hoặc 「N1 は N2 に N3 を あげます。」.
                </li>
              </ul>
            }
            placeholder={`Ví dụ:\nわたしは学生です。\n日曜日に友達とデパートへ行きます。\n富士山は高いですが、とてもきれいです。`}
            rows={5}
            lessonId="N5-mock"
            grammarContext="B0–B9: N は N です, い/な-adj, trợ từ で・へ・に・を・が, どんな N, ですが, あげます・もらいます・ならいます, N が 好きです・わかります・から"
          />
        </div>
      </main>
    </div>
    </div>
  );
}