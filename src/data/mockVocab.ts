import type { VocabItem } from '../types/japanese';
import { lesson1 } from './lessons/lesson1';
import { lesson2 } from './lessons/lesson2';
import { lesson3 } from './lessons/lesson3';
import { lesson4 } from './lessons/lesson4';
import { lesson5 } from './lessons/lesson5';
import { lesson6 } from './lessons/lesson6';
import { lesson7 } from './lessons/lesson7';
import { lesson8 } from './lessons/lesson8';
import { lesson9 } from './lessons/lesson9';
import { lesson10 } from './lessons/lesson10';
import { lesson11 } from './lessons/lesson11';
import { lesson12 } from './lessons/lesson12';
import { lesson13 } from './lessons/lesson13';
import { lesson14 } from './lessons/lesson14';
import { lesson15 } from './lessons/lesson15';
import { lesson21 } from './lessons/lesson21';
import { lesson22 } from './lessons/lesson22';
import { lesson23 } from './lessons/lesson23';
import { lesson24 } from './lessons/lesson24';
import { lesson25 } from './lessons/lesson25';

// -----------------------------
// N5 vocab pool (ôn tập tổng quát)
// -----------------------------

export const mockVocab: VocabItem[] = [
  // N5 general vocabulary
  {
    id: 'n5-001',
    kanji: '学校',
    hiragana: 'がっこう',
    meaning: 'trường học',
    example: '明日、学校へ行きます。',
    exampleMeaning: 'Ngày mai tôi đi đến trường.',
    level: 'N5',
    tags: ['daily', 'study'],
  },
  {
    id: 'n5-002',
    kanji: '先生',
    hiragana: 'せんせい',
    meaning: 'giáo viên, thầy/cô',
    example: '先生は日本語を教えます。',
    exampleMeaning: 'Thầy cô dạy tiếng Nhật.',
    level: 'N5',
    tags: ['daily', 'school'],
  },
  {
    id: 'n5-003',
    kanji: '学生',
    hiragana: 'がくせい',
    meaning: 'học sinh, sinh viên',
    example: '私は日本語を勉強している学生です。',
    exampleMeaning: 'Tôi là học sinh đang học tiếng Nhật.',
    level: 'N5',
    tags: ['daily', 'school'],
  },
  {
    id: 'n5-004',
    kanji: '本',
    hiragana: 'ほん',
    meaning: 'sách',
    example: 'この本はとてもおもしろいです。',
    exampleMeaning: 'Quyển sách này rất thú vị.',
    level: 'N5',
    tags: ['daily'],
  },
  {
    id: 'n5-005',
    kanji: '水',
    hiragana: 'みず',
    meaning: 'nước',
    example: '水を一杯ください。',
    exampleMeaning: 'Cho tôi một cốc nước.',
    level: 'N5',
    tags: ['daily', 'food'],
  },
  {
    id: 'n5-006',
    kanji: '食べる',
    hiragana: 'たべる',
    meaning: 'ăn',
    example: '毎日、朝ごはんを食べますか。',
    exampleMeaning: 'Bạn có ăn sáng mỗi ngày không?',
    level: 'N5',
    tags: ['daily', 'verb', 'food'],
  },
  {
    id: 'n5-007',
    kanji: '飲む',
    hiragana: 'のむ',
    meaning: 'uống',
    example: '友だちとコーヒーを飲みました。',
    exampleMeaning: 'Tôi đã uống cà phê với bạn.',
    level: 'N5',
    tags: ['daily', 'verb', 'food'],
  },
  {
    id: 'n5-008',
    kanji: '行く',
    hiragana: 'いく',
    meaning: 'đi',
    example: '週末に東京へ行きます。',
    exampleMeaning: 'Cuối tuần tôi sẽ đi Tokyo.',
    level: 'N5',
    tags: ['daily', 'verb', 'travel'],
  },
  {
    id: 'n5-009',
    kanji: '来る',
    hiragana: 'くる',
    meaning: 'đến',
    example: '友だちが家に来ます。',
    exampleMeaning: 'Bạn tới nhà tôi.',
    level: 'N5',
    tags: ['daily', 'verb'],
  },
  {
    id: 'n5-010',
    kanji: '見る',
    hiragana: 'みる',
    meaning: 'xem, nhìn',
    example: '映画をよく見ます。',
    exampleMeaning: 'Tôi thường xem phim.',
    level: 'N5',
    tags: ['daily', 'verb'],
  },
  {
    id: 'n5-011',
    kanji: '聞く',
    hiragana: 'きく',
    meaning: 'nghe, hỏi',
    example: '音楽を聞きながら勉強します。',
    exampleMeaning: 'Tôi học bài trong khi nghe nhạc.',
    level: 'N5',
    tags: ['daily', 'verb'],
  },
  {
    id: 'n5-012',
    kanji: '買う',
    hiragana: 'かう',
    meaning: 'mua',
    example: '新しい辞書を買いました。',
    exampleMeaning: 'Tôi đã mua một cuốn từ điển mới.',
    level: 'N5',
    tags: ['daily', 'shopping'],
  },
  {
    id: 'n5-013',
    kanji: '安い',
    hiragana: 'やすい',
    meaning: 'rẻ',
    example: 'この店は安くて人気です。',
    exampleMeaning: 'Cửa hàng này rẻ và nổi tiếng.',
    level: 'N5',
    tags: ['daily', 'shopping'],
  },
  {
    id: 'n5-014',
    kanji: '高い',
    hiragana: 'たかい',
    meaning: 'cao, đắt',
    example: 'このビルはとても高いです。',
    exampleMeaning: 'Tòa nhà này rất cao.',
    level: 'N5',
    tags: ['daily', 'shopping'],
  },
  {
    id: 'n5-015',
    kanji: '仕事',
    hiragana: 'しごと',
    meaning: 'công việc',
    example: '父は仕事がとても忙しいです。',
    exampleMeaning: 'Ba tôi rất bận với công việc.',
    level: 'N5',
    tags: ['daily', 'business'],
  },
  {
    id: 'n5-016',
    kanji: '時間',
    hiragana: 'じかん',
    meaning: 'thời gian, giờ',
    example: '今は何時ですか。',
    exampleMeaning: 'Bây giờ là mấy giờ?',
    level: 'N5',
    tags: ['daily', 'time'],
  },
  {
    id: 'n5-017',
    kanji: 'お金',
    hiragana: 'おかね',
    meaning: 'tiền',
    example: 'お金を貯めています。',
    exampleMeaning: 'Tôi đang tiết kiệm tiền.',
    level: 'N5',
    tags: ['daily', 'finance'],
  },
  {
    id: 'n5-018',
    kanji: '友達',
    hiragana: 'ともだち',
    meaning: 'bạn bè',
    example: '友達と公園で遊びました。',
    exampleMeaning: 'Tôi đã chơi với bạn ở công viên.',
    level: 'N5',
    tags: ['daily', 'people'],
  },
  {
    id: 'n5-019',
    kanji: '家',
    hiragana: 'いえ',
    meaning: 'nhà',
    example: '家でゆっくり休みたいです。',
    exampleMeaning: 'Tôi muốn nghỉ ngơi thong thả ở nhà.',
    level: 'N5',
    tags: ['daily', 'home'],
  },
  {
    id: 'n5-020',
    kanji: '車',
    hiragana: 'くるま',
    meaning: 'xe ô tô',
    example: '兄は車を運転できます。',
    exampleMeaning: 'Anh trai tôi có thể lái xe ô tô.',
    level: 'N5',
    tags: ['daily', 'transport'],
  },

  // Finance / Economics / CFA-related vocabulary (mainly N2–N1 level content but we keep level flexible)
  {
    id: 'fin-001',
    kanji: '利益',
    hiragana: 'りえき',
    meaning: 'lợi nhuận',
    example: '会社の利益は去年より増加しました。',
    exampleMeaning: 'Lợi nhuận của công ty đã tăng so với năm ngoái.',
    level: 'N2',
    tags: ['finance', 'business', 'cfa'],
  },
  {
    id: 'fin-002',
    kanji: '損失',
    hiragana: 'そんしつ',
    meaning: 'tổn thất, lỗ',
    example: '投資の失敗で大きな損失を出しました。',
    exampleMeaning: 'Do thất bại trong đầu tư nên đã chịu tổn thất lớn.',
    level: 'N2',
    tags: ['finance', 'investment', 'cfa'],
  },
  {
    id: 'fin-003',
    kanji: '資産',
    hiragana: 'しさん',
    meaning: 'tài sản',
    example: '資産配分はリスク管理の基本です。',
    exampleMeaning: 'Phân bổ tài sản là cơ bản của quản lý rủi ro.',
    level: 'N1',
    tags: ['finance', 'cfa'],
  },
  {
    id: 'fin-004',
    kanji: '負債',
    hiragana: 'ふさい',
    meaning: 'nợ phải trả',
    example: '負債と資本のバランスを分析します。',
    exampleMeaning: 'Phân tích cân bằng giữa nợ phải trả và vốn.',
    level: 'N1',
    tags: ['finance', 'accounting', 'cfa'],
  },
  {
    id: 'fin-005',
    kanji: '株式',
    hiragana: 'かぶしき',
    meaning: 'cổ phiếu',
    example: '株式市場は今日も大きく変動しました。',
    exampleMeaning: 'Thị trường cổ phiếu hôm nay cũng biến động mạnh.',
    level: 'N2',
    tags: ['finance', 'investment', 'cfa'],
  },
  {
    id: 'fin-006',
    kanji: '債券',
    hiragana: 'さいけん',
    meaning: 'trái phiếu',
    example: '債券は株式より価格変動が小さいとされます。',
    exampleMeaning: 'Trái phiếu được cho là ít biến động giá hơn cổ phiếu.',
    level: 'N1',
    tags: ['finance', 'investment', 'cfa'],
  },
  {
    id: 'fin-007',
    kanji: '利回り',
    hiragana: 'りまわり',
    meaning: 'lợi suất',
    example: 'この債券の利回りは３％です。',
    exampleMeaning: 'Lợi suất của trái phiếu này là 3%.',
    level: 'N2',
    tags: ['finance', 'investment', 'cfa'],
  },
  {
    id: 'fin-008',
    kanji: '分散投資',
    hiragana: 'ぶんさんとうし',
    meaning: 'đầu tư phân tán, đa dạng hóa',
    example: '分散投資によってリスクを下げることができます。',
    exampleMeaning: 'Có thể giảm rủi ro bằng cách đa dạng hóa đầu tư.',
    level: 'N1',
    tags: ['finance', 'risk-management', 'cfa'],
  },
  {
    id: 'fin-009',
    kanji: 'リスク管理',
    hiragana: 'りすくかんり',
    meaning: 'quản lý rủi ro',
    example: '金融機関ではリスク管理が最も重要です。',
    exampleMeaning: 'Trong tổ chức tài chính, quản lý rủi ro là quan trọng nhất.',
    level: 'N2',
    tags: ['finance', 'risk-management', 'cfa'],
  },
  {
    id: 'fin-010',
    kanji: '財務諸表',
    hiragana: 'ざいむしょひょう',
    meaning: 'báo cáo tài chính',
    example: '投資家は企業の財務諸表を詳しく分析します。',
    exampleMeaning: 'Nhà đầu tư phân tích kỹ báo cáo tài chính của doanh nghiệp.',
    level: 'N1',
    tags: ['finance', 'accounting', 'cfa'],
  },
];

// -----------------------------
// Bộ câu hỏi test N5 (trắc nghiệm)
// Dùng để làm bài kiểm tra tổng hợp
// cho các bài B0–B8 đã học.
// -----------------------------

export type N5TestQuestionType =
  | 'vocab-meaning' // chọn nghĩa tiếng Việt cho từ tiếng Nhật
  | 'vocab-reading' // chọn cách đọc hiragana cho kanji
  | 'grammar-particle' // chọn trợ từ / cấu trúc đúng
  | 'grammar-sentence' // chọn câu đúng với nghĩa
  | 'sentence-order'; // sắp xếp trật tự từ

export interface N5TestQuestion {
  id: string;
  type: N5TestQuestionType;
  // Phạm vi kiến thức chính của câu hỏi
  // (để sau này có thể lọc theo lesson nếu muốn)
  // Gộp các cụm bài cho đơn giản: B0-3, B4-5, B6-8, B9, B10-15, B21-25, hoặc N5-mix.
  lessonScope: 'B0-3' | 'B4-5' | 'B6-8' | 'B9' | 'B10-15' | 'B21-25' | 'N5-mix';
  promptVi: string;
  // Thêm promptJp khi đề bài hiển thị bằng tiếng Nhật
  promptJp?: string;
  options: string[];
  correctIndex: number;
  explanationVi?: string;
}

// Bộ câu hỏi mẫu giống đề thi N5 (phần từ vựng + ngữ pháp cơ bản).
// Có thể dùng trực tiếp cho mock test, hoặc chia nhỏ thành nhiều đề.
export const n5MockTestQuestions: N5TestQuestion[] = [
  // --- Phần 1: Từ vựng – chọn nghĩa (B1, B6, B8, v.v.) ---
  {
    id: 'n5-q1',
    type: 'vocab-meaning',
    lessonScope: 'N5-mix',
    promptVi: 'Chọn nghĩa đúng cho từ: 学校',
    options: ['trường học', 'giáo viên', 'học sinh'],
    correctIndex: 0,
    explanationVi: '学校（がっこう）＝ trường học.',
  },
  {
    id: 'n5-q2',
    type: 'vocab-meaning',
    lessonScope: 'N5-mix',
    promptVi: 'Chọn nghĩa đúng cho từ: 友達',
    options: ['bạn bè', 'gia đình', 'công việc'],
    correctIndex: 0,
  },
  {
    id: 'n5-q3',
    type: 'vocab-meaning',
    lessonScope: 'B6-8',
    promptVi: 'Chọn nghĩa đúng cho tính từ: 高い',
    options: ['rẻ', 'cao, đắt', 'bận'],
    correctIndex: 1,
  },
  {
    id: 'n5-q4',
    type: 'vocab-meaning',
    lessonScope: 'B6-8',
    promptVi: 'Chọn nghĩa đúng cho tính từ: おいしい',
    options: ['vui', 'ngon', 'mệt'],
    correctIndex: 1,
  },

  // --- Phần 2: Cách đọc – hiragana (giống phần もじ・ごい đề N5, B0) ---
  {
    id: 'n5-q5',
    type: 'vocab-reading',
    lessonScope: 'B0-3',
    promptVi: 'Chọn cách đọc hiragana đúng cho kanji: 先生',
    options: ['せんせい', 'がくせい', 'しごと'],
    correctIndex: 0,
  },
  {
    id: 'n5-q6',
    type: 'vocab-reading',
    lessonScope: 'B0-3',
    promptVi: 'Chọn cách đọc hiragana đúng cho kanji: 車',
    options: ['みず', 'くるま', 'いえ'],
    correctIndex: 1,
  },

  // --- Phần 3: Ngữ pháp – trợ từ (B3–B7: へ・で・を・に・から・が) ---
  {
    id: 'n5-q7',
    type: 'grammar-particle',
    lessonScope: 'B4-5',
    promptVi: 'Chọn trợ từ đúng: 「日曜日（　　）京都へ行きます。」',
    options: ['を', 'で', 'に'],
    correctIndex: 2,
    explanationVi: 'Ngày/giờ dùng に: 日曜日に京都へ行きます。',
  },
  {
    id: 'n5-q8',
    type: 'grammar-particle',
    lessonScope: 'B4-5',
    promptVi: 'Chọn trợ từ đúng: 「駅（　　）友達と会います。」',
    options: ['で', 'へ', 'を'],
    correctIndex: 0,
    explanationVi: 'Hành động xảy ra “ở đâu” dùng で: 駅で友達と会います。',
  },
  {
    id: 'n5-q9',
    type: 'grammar-particle',
    lessonScope: 'B6-8',
    promptVi: 'Chọn trợ từ đúng: 「わたしは友達（　　）本をあげます。」',
    options: ['に', 'から', 'を'],
    correctIndex: 0,
  },
  {
    id: 'n5-q10',
    type: 'grammar-particle',
    lessonScope: 'B6-8',
    promptVi: 'Chọn trợ từ đúng: 「わたしは先生（　　）日本語をならいます。」',
    options: ['に', 'から', 'で'],
    correctIndex: 1,
  },

  // --- Phần 4: Câu đúng với nghĩa (B4: giờ, B8: tính từ) ---
  {
    id: 'n5-q11',
    type: 'grammar-sentence',
    lessonScope: 'B4-5',
    promptVi: 'Câu nào đúng với nghĩa: “Bây giờ là 7 giờ rưỡi.”',
    options: ['今は七時半です。', '今は七時半か。', '今は七時三十分ですか。'],
    correctIndex: 0,
  },
  {
    id: 'n5-q12',
    type: 'grammar-sentence',
    lessonScope: 'B6-8',
    promptVi: 'Câu nào đúng với nghĩa: “Món ăn Nhật ngon nhưng đắt.”',
    options: [
      '日本の食べ物はおいしいです。',
      '日本の食べ物はおいしいですが、高いです。',
      '日本の食べ物は高いですが、おいしくないです。',
    ],
    correctIndex: 1,
  },

  // --- Phần 5: Sắp xếp câu (sentence-order) ---
  {
    id: 'n5-q13',
    type: 'sentence-order',
    lessonScope: 'B6-8',
    promptVi: 'Sắp xếp thành câu đúng: “Ngày mai tôi đi Tokyo bằng tàu điện.”',
    options: ['あした', 'でんしゃで', 'とうきょうへ', 'いきます。'],
    correctIndex: 0, // index ở đây không dùng, front-end sẽ chấm theo trật tự, nhưng vẫn cần 1 giá trị
    explanationVi:
      'Đáp án chuẩn: 「あした でんしゃで とうきょうへ いきます。」 (thời gian → phương tiện → nơi đến → động từ).',
  },
  {
    id: 'n5-q14',
    type: 'sentence-order',
    lessonScope: 'B6-8',
    promptVi: 'Sắp xếp thành câu đúng: “Núi Phú Sĩ là núi cao.”',
    options: ['富士山は', '高い', '山です。'],
    correctIndex: 0,
    explanationVi: 'Đáp án: 「富士山は 高い 山です。」',
  },

  // --- Bài 9: N が 好き／わかります／あります ・ から／どうして ・ phó từ mức độ ---
  {
    id: 'n5-q15',
    type: 'vocab-meaning',
    lessonScope: 'B9',
    promptVi: 'Chọn nghĩa đúng cho từ: 約束',
    options: ['thời gian', 'cuộc hẹn, lời hứa', 'việc bận'],
    correctIndex: 1,
    explanationVi: '約束（やくそく）＝ cuộc hẹn, lời hứa.',
  },
  {
    id: 'n5-q16',
    type: 'vocab-meaning',
    lessonScope: 'B9',
    promptVi: 'Chọn nghĩa đúng cho phó từ: 全然',
    options: ['nhiều', 'ít', 'hoàn toàn không'],
    correctIndex: 2,
    explanationVi: '全然（ぜんぜん）thường đi với phủ định: 全然わかりません。',
  },
  {
    id: 'n5-q17',
    type: 'grammar-particle',
    lessonScope: 'B9',
    promptVi: 'Chọn trợ từ đúng (Bài 9): 「わたしはイタリア料理（　　）好きです。」',
    options: ['を', 'が', 'は'],
    correctIndex: 1,
    explanationVi: 'Sở thích/đối tượng với 好き・嫌い・わかります・あります dùng が: N が 好きです。',
  },
  {
    id: 'n5-q18',
    type: 'grammar-particle',
    lessonScope: 'B9',
    promptVi: 'Chọn từ đúng để nối lý do (Bài 9): 「時間がありません（　　）、新聞を読みません。」',
    options: ['から', 'で', 'に'],
    correctIndex: 0,
    explanationVi: 'Câu₁ から、Câu₂ = Vì … nên …',
  },
  {
    id: 'n5-q19',
    type: 'grammar-sentence',
    lessonScope: 'B9',
    promptVi: 'Câu nào đúng với nghĩa: “Tôi hiểu tiếng Nhật một chút.”',
    options: [
      'わたしは日本語がよくわかります。',
      'わたしは日本語が少しわかります。',
      'わたしは日本語が全然わかりません。',
    ],
    correctIndex: 1,
    explanationVi: '少し = một chút. よく = tốt/rõ. 全然 = hoàn toàn không (thường đi với phủ định).',
  },
  {
    id: 'n5-q20',
    type: 'grammar-sentence',
    lessonScope: 'B9',
    promptVi: 'Trả lời “Tại sao?” bằng lý do: “Vì tôi có việc bận.”',
    options: [
      '用事がありますから。',
      '用事があります。',
      'どうして用事がありますか。',
    ],
    correctIndex: 0,
    explanationVi: 'Khi trả lời どうして cần thêm から ở cuối: ～から。',
  },
  {
    id: 'n5-q21',
    type: 'grammar-sentence',
    lessonScope: 'B9',
    promptVi: 'Câu nào dùng đúng phó từ mức độ (Bài 9)?',
    options: [
      'お金がたくさんありません。',
      'お金がたくさんあります。',
      'お金があまりあります。',
    ],
    correctIndex: 1,
    explanationVi: 'たくさん + khẳng định (あります). あまり・全然 thường đi với phủ định (ありません).',
  },
  {
    id: 'n5-q22',
    type: 'vocab-meaning',
    lessonScope: 'B9',
    promptVi: 'Chọn nghĩa đúng cho từ: 用事',
    options: ['thời gian', 'vé', 'việc bận, công chuyện'],
    correctIndex: 2,
  },
  // --- Bài 11–15: muốn có / muốn làm / thể て / xin phép & cấm đoán / nghề nghiệp & gia đình ---
  {
    id: 'n5-q23',
    type: 'vocab-meaning',
    lessonScope: 'B10-15',
    promptVi: 'Chọn nghĩa đúng cho tính từ: 欲しい',
    options: ['vất vả', 'muốn có', 'buồn'],
    correctIndex: 1,
    explanationVi: '欲しい（ほしい）= muốn có (mong muốn sở hữu).',
  },
  {
    id: 'n5-q24',
    type: 'grammar-sentence',
    lessonScope: 'B10-15',
    promptVi: 'Câu nào đúng với nghĩa: “Tôi muốn ăn tempura.”',
    options: [
      'わたしはてんぷらを食べます。',
      'わたしはてんぷらを食べたいです。',
      'わたしはてんぷらがほしいです。',
    ],
    correctIndex: 1,
    explanationVi: 'Muốn “làm” dùng Vます たいです → 食べたいです。',
  },
  {
    id: 'n5-q25',
    type: 'grammar-particle',
    lessonScope: 'B10-15',
    promptVi: 'Chọn câu xin phép đúng: “Tôi hút thuốc ở đây được không?”',
    options: [
      'ここでたばこを吸ってもいいですか。',
      'ここでたばこを吸ってはいけません。',
      'ここでたばこを吸いますか。',
    ],
    correctIndex: 0,
    explanationVi: 'Xin phép dùng 「Vて も いいですか。」.',
  },
  {
    id: 'n5-q26',
    type: 'grammar-sentence',
    lessonScope: 'B10-15',
    promptVi: 'Câu nào diễn đạt đúng ý “Không được hút thuốc ở đây.”',
    options: [
      'ここでたばこを吸ってもいいです。',
      'ここでたばこを吸ってはいけません。',
      'ここでたばこを吸います。',
    ],
    correctIndex: 1,
    explanationVi: 'Cấm đoán dùng 「Vて は いけません。」.',
  },
  {
    id: 'n5-q27',
    type: 'grammar-sentence',
    lessonScope: 'B10-15',
    promptVi: 'Câu nào đúng với nghĩa: “Anh Miller đang làm việc ở ngân hàng.”',
    options: [
      'ミラーさんは銀行で働きます。',
      'ミラーさんは銀行で働いています。',
      'ミラーさんは銀行ではたらきました。',
    ],
    correctIndex: 1,
    explanationVi: 'Nghề nghiệp hiện tại dùng Vています: 働いています。',
  },
  {
    id: 'n5-q28',
    type: 'grammar-sentence',
    lessonScope: 'B10-15',
    promptVi: 'Câu nào giới thiệu đúng về gia đình: “Bố mẹ tôi sống ở Osaka.”',
    options: [
      '両親は大阪に住んでいます。',
      '両親は大阪へ行きます。',
      '両親は大阪で働きます。',
    ],
    correctIndex: 0,
    explanationVi: '住んでいます = đang sống (trạng thái kéo dài).',
  },

  // ========== B21-25: Mock tốt nghiệp N5 (Bài 21–25) – Đề khó ==========
  {
    id: 'n5-b21-q1',
    type: 'vocab-meaning',
    lessonScope: 'B21-25',
    promptVi: 'Chọn nghĩa đúng cho từ: 物価',
    options: ['giao thông', 'giá cả, mức giá', 'sân bay'],
    correctIndex: 1,
    explanationVi: '物価（ぶっか）＝ giá cả, mức giá.',
  },
  {
    id: 'n5-b21-q2',
    type: 'vocab-meaning',
    lessonScope: 'B21-25',
    promptVi: 'Chọn nghĩa đúng cho từ: 会議',
    options: ['cuộc họp', 'ý kiến', 'tin tức'],
    correctIndex: 0,
  },
  {
    id: 'n5-b21-q3',
    type: 'vocab-reading',
    lessonScope: 'B21-25',
    promptVi: 'Chọn cách đọc hiragana đúng cho kanji: 交通',
    options: ['こうつう', 'くうこう', 'ぶっか'],
    correctIndex: 0,
    explanationVi: '交通（こうつう）＝ giao thông.',
  },
  {
    id: 'n5-b21-q4',
    type: 'vocab-reading',
    lessonScope: 'B21-25',
    promptVi: 'Chọn cách đọc hiragana đúng cho kanji: 不便',
    options: ['ふべん', 'べんり', 'すごい'],
    correctIndex: 0,
  },
  {
    id: 'n5-b21-q5',
    type: 'grammar-sentence',
    lessonScope: 'B21-25',
    promptVi: 'Câu nào đúng với nghĩa: “Tôi nghĩ ngày mai trời sẽ mưa.”',
    options: [
      'あした雨が降りますと思います。',
      'あした雨が降ると思います。',
      'あした雨が降ると思っています。',
    ],
    correctIndex: 1,
    explanationVi: 'Trước と dùng thể thông thường: 降る.',
  },
  {
    id: 'n5-b21-q6',
    type: 'grammar-sentence',
    lessonScope: 'B21-25',
    promptVi: 'Câu nào đúng: “Thủ tướng nói là tháng sau sẽ đi Mỹ.”',
    options: [
      '首相は来月アメリカへ行くと言いました。',
      '首相は来月アメリカへ行きますと言いました。',
      '首相は来月アメリカへ行くといいます。',
    ],
    correctIndex: 0,
  },
  {
    id: 'n5-b21-q7',
    type: 'grammar-particle',
    lessonScope: 'B21-25',
    promptVi: 'Chọn đáp án đúng: 「新しい空港（　　）どう思いますか。」',
    options: ['について', 'についての', 'を'],
    correctIndex: 0,
    explanationVi: 'Hỏi ý kiến về N: ～についてどう思いますか.',
  },
  {
    id: 'n5-b21-q8',
    type: 'grammar-sentence',
    lessonScope: 'B21-25',
    promptVi: 'Câu nào dùng đúng でしょう？（xác nhận với người nghe）',
    options: [
      'あしたパーティーに行くでしょう。',
      'あしたパーティーに行くでしょう？',
      'あしたパーティーに行きますでしょう？',
    ],
    correctIndex: 1,
  },
  {
    id: 'n5-b21-q9',
    type: 'vocab-meaning',
    lessonScope: 'B21-25',
    promptVi: 'Chọn nghĩa đúng cho từ: 家賃',
    options: ['tiền thuê nhà', 'phòng kiểu Nhật', 'chăn, đệm'],
    correctIndex: 0,
  },
  {
    id: 'n5-b21-q10',
    type: 'grammar-sentence',
    lessonScope: 'B21-25',
    promptVi: 'Câu nào đúng: “Đây là cái bánh mà anh Miller đã làm.”',
    options: [
      'これはミラーさんは作ったケーキです。',
      'これはミラーさんが作ったケーキです。',
      'これはミラーさんを作ったケーキです。',
    ],
    correctIndex: 1,
    explanationVi: 'Trong mệnh đề phụ bổ nghĩa danh từ, chủ ngữ dùng が.',
  },
  {
    id: 'n5-b21-q11',
    type: 'grammar-sentence',
    lessonScope: 'B21-25',
    promptVi: 'Câu nào đúng: “Tôi không có thời gian ăn sáng.”',
    options: [
      'わたしは朝ごはんを食べます時間がありません。',
      'わたしは朝ごはんを食べる時間がありません。',
      'わたしは朝ごはんを食べた時間がありません。',
    ],
    correctIndex: 1,
  },
  {
    id: 'n5-b21-q12',
    type: 'grammar-sentence',
    lessonScope: 'B21-25',
    promptVi: 'Câu nào đúng: “Tôi có hẹn đi xem phim với bạn.”',
    options: [
      'わたしは友達と映画を見ます約束があります。',
      'わたしは友達と映画を見る約束があります。',
      'わたしは友達と映画を見た約束があります。',
    ],
    correctIndex: 1,
  },
  {
    id: 'n5-b21-q13',
    type: 'grammar-sentence',
    lessonScope: 'B21-25',
    promptVi: 'Khi mượn sách ở thư viện thì cần có thẻ. Chọn câu đúng.',
    options: [
      '図書館で本を借りますとき、カードが要ります。',
      '図書館で本を借りるとき、カードが要ります。',
      '図書館で本を借りたとき、カードが要ります。',
    ],
    correctIndex: 1,
  },
  {
    id: 'n5-b21-q14',
    type: 'grammar-sentence',
    lessonScope: 'B21-25',
    promptVi: 'Câu nào đúng: “Khi 10 giờ thì chúng ta đi nhé.”',
    options: [
      '10時になりますら、出かけましょう。',
      '10時になったら、出かけましょう。',
      '10時になった、出かけましょう。',
    ],
    correctIndex: 1,
  },
  {
    id: 'n5-b21-q15',
    type: 'grammar-sentence',
    lessonScope: 'B21-25',
    promptVi: 'Câu nào đúng: “Tôi đi dạo ở công viên.”',
    options: ['公園に散歩します。', '公園を散歩します。', '公園で散歩します。'],
    correctIndex: 1,
    explanationVi: 'N(địa điểm) を V(chuyển động): nơi đi qua dùng を.',
  },
  {
    id: 'n5-b21-q16',
    type: 'grammar-sentence',
    lessonScope: 'B21-25',
    promptVi: 'Câu nào đúng: “Tôi cho chị Kimura mượn sách.”',
    options: [
      'わたしは木村さんに本を貸してもらいました。',
      'わたしは木村さんに本を貸してあげました。',
      'わたしは木村さんに本を貸してくれました。',
    ],
    correctIndex: 1,
  },
  {
    id: 'n5-b21-q17',
    type: 'grammar-sentence',
    lessonScope: 'B21-25',
    promptVi: 'Câu nào đúng: “Tôi được anh Yamada cho biết số điện thoại thư viện.”',
    options: [
      'わたしは山田さんに図書館の電話番号を教えてあげました。',
      'わたしは山田さんに図書館の電話番号を教えてもらいました。',
      '山田さんはわたしに図書館の電話番号を教えてもらいました。',
    ],
    correctIndex: 1,
  },
  {
    id: 'n5-b21-q18',
    type: 'grammar-sentence',
    lessonScope: 'B21-25',
    promptVi: 'Câu nào đúng: “Mẹ gửi cho tôi áo len.”',
    options: [
      '母はセーターを送ってあげました。',
      '母はセーターを送ってもらいました。',
      '母はセーターを送ってくれました。',
    ],
    correctIndex: 2,
  },
  {
    id: 'n5-b21-q19',
    type: 'grammar-sentence',
    lessonScope: 'B21-25',
    promptVi: 'Câu nào đúng: “Cho dù trời mưa tôi cũng giặt.”',
    options: [
      '雨が降ったら、洗濯します。',
      '雨が降っても、洗濯します。',
      '雨が降ると、洗濯します。',
    ],
    correctIndex: 1,
  },
  {
    id: 'n5-b21-q20',
    type: 'grammar-sentence',
    lessonScope: 'B21-25',
    promptVi: 'Câu nào đúng: “Nếu có 100 triệu yên thì tôi muốn đi du lịch nhiều nước.”',
    options: [
      'いくら1億円あったら、いろいろな国を旅行したいです。',
      'もし1億円あったら、いろいろな国を旅行したいです。',
      '1億円あると、いろいろな国を旅行したいです。',
    ],
    correctIndex: 1,
  },
  {
    id: 'n5-b21-q21',
    type: 'grammar-sentence',
    lessonScope: 'B21-25',
    promptVi: 'Câu nào đúng: “Dù nghĩ thế nào đi nữa thì tôi cũng không hiểu.”',
    options: [
      'もし考えても、わかりません。',
      'いくら考えても、わかりません。',
      '考えたら、わかりません。',
    ],
    correctIndex: 1,
  },
  {
    id: 'n5-b21-q22',
    type: 'grammar-sentence',
    lessonScope: 'B21-25',
    promptVi: 'Câu nào đúng: “Trước khi bạn đến, tôi dọn phòng.”',
    options: [
      '友達は来るまえに、部屋を掃除します。',
      '友達が来るまえに、部屋を掃除します。',
      '友達に来るまえに、部屋を掃除します。',
    ],
    correctIndex: 1,
    explanationVi: 'Chủ ngữ trong mệnh đề phụ (～まえに) dùng が.',
  },
  {
    id: 'n5-b21-q23',
    type: 'sentence-order',
    lessonScope: 'B21-25',
    promptVi: 'Sắp xếp thành câu đúng: “Khi vợ bị ốm thì tôi nghỉ làm.”',
    options: ['妻が', '病気のとき、', '会社を', '休みます。'],
    correctIndex: 0,
    explanationVi: '妻が病気のとき、会社を休みます。',
  },
  {
    id: 'n5-b21-q24',
    type: 'sentence-order',
    lessonScope: 'B21-25',
    promptVi: 'Sắp xếp thành câu đúng: “Ấn nút này thì vé sẽ ra.”',
    options: ['このボタンを', '押すと、', '切符が', '出ます。'],
    correctIndex: 0,
  },
  {
    id: 'n5-b21-q25',
    type: 'vocab-meaning',
    lessonScope: 'B21-25',
    promptVi: 'Chọn nghĩa đúng cho từ: 駐車禁止',
    options: ['cấm đi vào', 'cấm đỗ xe', 'cấm rẽ phải'],
    correctIndex: 1,
  },
  {
    id: 'n5-b21-q26',
    type: 'vocab-meaning',
    lessonScope: 'B21-25',
    promptVi: 'Chọn nghĩa đúng cho từ: 届けます',
    options: ['gửi đến, chuyển đến', 'cho mượn', 'gọi'],
    correctIndex: 0,
  },
  {
    id: 'n5-b21-q27',
    type: 'vocab-reading',
    lessonScope: 'B21-25',
    promptVi: 'Chọn cách đọc hiragana đúng cho kanji: 約束',
    options: ['やくそく', 'じかん', 'びょうき'],
    correctIndex: 0,
  },
  {
    id: 'n5-b21-q28',
    type: 'grammar-particle',
    lessonScope: 'B21-25',
    promptVi: 'Chọn trợ từ đúng: 「交差点（　　）右へ曲がります。」',
    options: ['に', 'で', 'を'],
    correctIndex: 2,
    explanationVi: 'N(địa điểm) を V(chuyển động): nơi đi qua dùng を.',
  },
];

// -----------------------------
// Pool từ vựng N5 lấy trực tiếp từ các bài lesson1–15
// Dùng để sinh thêm câu hỏi từ vựng random cho mock test.
// -----------------------------

export interface N5VocabFromLessons {
  id: string;
  lesson: number;
  japanese: string;
  vietnamese: string;
}

function mapLessonWords(
  lessonNo: number,
  words: { japanese: string; vietnamese: string }[]
): N5VocabFromLessons[] {
  return words
    .filter((w) => w.japanese && w.vietnamese)
    .map((w, idx) => ({
      id: `L${lessonNo}-${idx}`,
      lesson: lessonNo,
      japanese: w.japanese,
      vietnamese: w.vietnamese,
    }));
}

export const N5_VOCAB_POOL: N5VocabFromLessons[] = [
  ...mapLessonWords(1, lesson1.words),
  ...mapLessonWords(2, lesson2.words),
  ...mapLessonWords(3, lesson3.words),
  ...mapLessonWords(4, lesson4.words),
  ...mapLessonWords(5, lesson5.words),
  ...mapLessonWords(6, lesson6.words),
  ...mapLessonWords(7, lesson7.words),
  ...mapLessonWords(8, lesson8.words),
  ...mapLessonWords(9, lesson9.words),
  ...mapLessonWords(10, lesson10.words),
  ...mapLessonWords(11, lesson11.words),
  ...mapLessonWords(12, lesson12.words),
  ...mapLessonWords(13, lesson13.words),
  ...mapLessonWords(14, lesson14.words),
  ...mapLessonWords(15, lesson15.words),
  ...mapLessonWords(21, lesson21.words),
  ...mapLessonWords(22, lesson22.words),
  ...mapLessonWords(23, lesson23.words),
  ...mapLessonWords(24, lesson24.words),
  ...mapLessonWords(25, lesson25.words),
];
