/**
 * Bài 18 (N5): Minna no Nihongo I
 * Chủ điểm: thể nguyên dạng + khả năng + sở thích + trước khi + なかなか + ぜひ
 */
import type { StaticLessonData } from './lessonTypes';

export const lesson18: StaticLessonData = {
  title: 'Bài 18: Thể nguyên dạng（辞書形）・ことができます・Vる前に',
  description:
    'Bài 18 tập trung vào thể nguyên dạng của động từ (thể từ điển), mẫu khả năng 〜ことができます, mẫu sở thích 〜ことです và mẫu thời gian 〜前に.',
  grammarSummary:
    'Động từ thể nguyên dạng・Vることができます・わたしの趣味はVることです・Vる前に・なかなか・ぜひ',
  words: [
    { japanese: 'できます', kana: 'できます', romaji: 'dekimasu', vietnamese: 'có thể', category: 'verb' },
    { japanese: '洗います', kana: 'あらいます', romaji: 'araimasu', vietnamese: 'rửa', category: 'verb' },
    { japanese: '弾きます', kana: 'ひきます', romaji: 'hikimasu', vietnamese: 'chơi (nhạc cụ)', category: 'verb' },
    { japanese: '歌います', kana: 'うたいます', romaji: 'utaimasu', vietnamese: 'hát', category: 'verb' },
    { japanese: '集めます', kana: 'あつめます', romaji: 'atsumemasu', vietnamese: 'sưu tầm, thu thập', category: 'verb' },
    { japanese: '捨てます', kana: 'すてます', romaji: 'sutemasu', vietnamese: 'vứt, bỏ', category: 'verb' },
    { japanese: '換えます', kana: 'かえます', romaji: 'kaemasu', vietnamese: 'đổi', category: 'verb' },
    { japanese: '運転します', kana: 'うんてんします', romaji: 'unten shimasu', vietnamese: 'lái (xe)', category: 'verb' },
    { japanese: '予約します', kana: 'よやくします', romaji: 'yoyaku shimasu', vietnamese: 'đặt chỗ, đặt trước', category: 'verb' },
    { japanese: '見学します', kana: 'けんがくします', romaji: 'kengaku shimasu', vietnamese: 'tham quan (học tập)', category: 'verb' },

    { japanese: 'ピアノ', kana: 'ピアノ', romaji: 'piano', vietnamese: 'đàn piano', category: 'noun' },
    { japanese: 'メートル', kana: 'メートル', romaji: 'meetoru', vietnamese: 'mét', category: 'noun' },
    { japanese: '国際～', kana: 'こくさい～', romaji: 'kokusai ~', vietnamese: '~ quốc tế', category: 'noun' },
    { japanese: '現金', kana: 'げんきん', romaji: 'genkin', vietnamese: 'tiền mặt', category: 'noun' },
    { japanese: '趣味', kana: 'しゅみ', romaji: 'shumi', vietnamese: 'sở thích, thú vui', category: 'noun' },
    { japanese: '日記', kana: 'にっき', romaji: 'nikki', vietnamese: 'nhật ký', category: 'noun' },
    { japanese: 'お祈り', kana: 'おいのり', romaji: 'oinori', vietnamese: 'việc cầu nguyện', category: 'noun' },
    { japanese: '課長', kana: 'かちょう', romaji: 'kachou', vietnamese: 'tổ trưởng', category: 'noun' },
    { japanese: '部長', kana: 'ぶちょう', romaji: 'buchou', vietnamese: 'trưởng phòng', category: 'noun' },
    { japanese: '社長', kana: 'しゃちょう', romaji: 'shachou', vietnamese: 'giám đốc', category: 'noun' },

    { japanese: '動物', kana: 'どうぶつ', romaji: 'doubutsu', vietnamese: 'động vật', category: 'expression' },
    { japanese: '馬', kana: 'うま', romaji: 'uma', vietnamese: 'ngựa', category: 'expression' },
    { japanese: 'へえ', kana: 'へえ', romaji: 'hee', vietnamese: 'thế à, thật à', category: 'expression' },
    { japanese: 'なかなか', kana: 'なかなか', romaji: 'nakanaka', vietnamese: 'khó mà ~, mãi mà (đi với phủ định)', category: 'expression' },
    { japanese: '牧場', kana: 'ぼくじょう', romaji: 'bokujou', vietnamese: 'trang trại chăn nuôi', category: 'expression' },
    { japanese: 'ほんとうですか', kana: 'ほんとうですか', romaji: 'hontou desu ka', vietnamese: 'thật không ạ?', category: 'expression' },
    { japanese: 'ぜひ', kana: 'ぜひ', romaji: 'zehi', vietnamese: 'nhất định, rất mong', category: 'expression' },
  ],
  sentences: [
    {
      japanese: 'ミラーさんは漢字を読むことができます。',
      romaji: 'Miraa-san wa kanji o yomu koto ga dekimasu.',
      vietnamese: 'Anh Miller có thể đọc chữ Hán.',
    },
    {
      japanese: 'わたしの趣味は古い切手を集めることです。',
      romaji: 'Watashi no shumi wa furui kitte o atsumeru koto desu.',
      vietnamese: 'Sở thích của tôi là sưu tầm tem cũ.',
    },
    {
      japanese: '寝る前に、日記を書きます。',
      romaji: 'Neru mae ni, nikki o kakimasu.',
      vietnamese: 'Trước khi đi ngủ, tôi viết nhật ký.',
    },
    {
      japanese: '食事の前に、手を洗います。',
      romaji: 'Shokuji no mae ni, te o araimasu.',
      vietnamese: 'Trước bữa ăn, tôi rửa tay.',
    },
    {
      japanese: '日本ではなかなか馬を見ることができません。',
      romaji: 'Nihon de wa nakanaka uma o miru koto ga dekimasen.',
      vietnamese: 'Ở Nhật khó mà có cơ hội thấy ngựa.',
    },
    {
      japanese: 'ぜひ北海道へ行きたいです。',
      romaji: 'Zehi Hokkaidou e ikitai desu.',
      vietnamese: 'Tôi rất muốn đi Hokkaido.',
    },
  ],
  dialogue: [
    {
      speaker: 'Yamada',
      japanese: 'サントスさんの趣味は何ですか。',
      romaji: 'Santosu-san no shumi wa nan desu ka.',
      vietnamese: 'Sở thích của anh Santos là gì?',
    },
    {
      speaker: 'Santos',
      japanese: '写真です。',
      romaji: 'Shashin desu.',
      vietnamese: 'Là chụp ảnh.',
    },
    {
      speaker: 'Yamada',
      japanese: '何を撮りますか。',
      romaji: 'Nani o torimasu ka.',
      vietnamese: 'Anh chụp gì vậy?',
    },
    {
      speaker: 'Santos',
      japanese: '動物です。特に馬が好きです。',
      romaji: 'Doubutsu desu. Tokuni uma ga suki desu.',
      vietnamese: 'Động vật. Đặc biệt tôi rất thích ngựa.',
    },
    {
      speaker: 'Yamada',
      japanese: '日本ではなかなか馬を見ることができませんね。',
      romaji: 'Nihon de wa nakanaka uma o miru koto ga dekimasen ne.',
      vietnamese: 'Ở Nhật khó mà có cơ hội xem ngựa nhỉ.',
    },
    {
      speaker: 'Santos',
      japanese: 'ええ。北海道の牧場へ行きたいです。',
      romaji: 'Ee. Hokkaidou no bokujou e ikitai desu.',
      vietnamese: 'Vâng. Tôi muốn đi trang trại ở Hokkaido.',
    },
    {
      speaker: 'Yamada',
      japanese: 'ぜひ行ってください。',
      romaji: 'Zehi itte kudasai.',
      vietnamese: 'Nhất định anh nên đi.',
    },
  ],
  grammarPoints: [
    {
      title: '1. Thể nguyên dạng của động từ (辞書形)',
      body: 'Đây là dạng cơ bản trong từ điển. Nhóm I đổi âm cuối, nhóm II bỏ ます thêm る, nhóm III: します→する, きます→くる.',
      examples: [
        '読みます → 読む',
        '食べます → 食べる',
        'します → する',
      ],
    },
    {
      title: '2. N / Vること が できます',
      body: 'Diễn tả khả năng “có thể ~”. Với động từ, đổi về thể nguyên dạng rồi thêm ことができます.',
      examples: [
        'ミラーさんは日本語ができます。',
        'ミラーさんは漢字を読むことができます。',
      ],
    },
    {
      title: '3. わたしの趣味は N / Vること です',
      body: 'Dùng để nói sở thích bằng danh từ hoặc cụm “động từ thể nguyên dạng + こと”.',
      examples: [
        'わたしの趣味は音楽です。',
        'わたしの趣味は音楽を聞くことです。',
      ],
    },
    {
      title: '4. Vる前に / Nの前に',
      body: 'Diễn tả “trước khi ~”. Nếu đứng trước まえに là danh từ thì thêm の; nếu là lượng từ thời gian thì không cần の.',
      examples: [
        '寝る前に、本を読みます。',
        '食事の前に、手を洗います。',
        '田中さんは一時間まえに、出かけました。',
      ],
    },
    {
      title: '5. なかなか / ぜひ',
      body: 'なかなか đi với phủ định để nói “khó mà ~”; ぜひ nhấn mạnh mong muốn/đề nghị “nhất định, rất mong”.',
      examples: [
        '日本ではなかなか馬を見ることができません。',
        'ぜひ遊びに来てください。',
      ],
    },
  ],
};

export interface Lesson18VocabQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export interface Lesson18GrammarQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export const lesson18VocabQuizItems: Lesson18VocabQuizItem[] = [
  { id: 1, vi: 'sở thích', options: ['趣味', '日記', '社長'], correctIndex: 0 },
  { id: 2, vi: 'có thể', options: ['できます', '集めます', '見学します'], correctIndex: 0 },
  { id: 3, vi: 'nhất định', options: ['ぜひ', 'へえ', 'なかなか'], correctIndex: 0 },
  { id: 4, vi: 'trang trại chăn nuôi', options: ['牧場', '動物', '課長'], correctIndex: 0 },
  { id: 5, vi: 'tham quan (học tập)', options: ['見学します', '換えます', '予約します'], correctIndex: 0 },
];

export const lesson18GrammarQuizItems: Lesson18GrammarQuizItem[] = [
  {
    id: 1,
    vi: 'Anh Miller có thể đọc chữ Hán.',
    options: [
      'ミラーさんは漢字を読むことができます。',
      'ミラーさんは漢字を読むことです。',
      'ミラーさんは漢字を読むまえに。',
    ],
    correctIndex: 0,
    explanationVi: 'Khả năng với động từ dùng mẫu Vることができます.',
  },
  {
    id: 2,
    vi: 'Sở thích của tôi là sưu tầm tem cũ.',
    options: [
      'わたしの趣味は古い切手を集めることです。',
      'わたしの趣味は古い切手を集める前にです。',
      'わたしの趣味は古い切手を集めますことです。',
    ],
    correctIndex: 0,
  },
  {
    id: 3,
    vi: 'Trước khi đi ngủ, tôi viết nhật ký.',
    options: [
      '寝る前に、日記を書きます。',
      '寝るの前に、日記を書きます。',
      '寝ることが、日記を書きます。',
    ],
    correctIndex: 0,
  },
  {
    id: 4,
    vi: 'Ở Nhật khó mà có cơ hội thấy ngựa.',
    options: [
      '日本ではなかなか馬を見ることができません。',
      '日本ではぜひ馬を見ることができます。',
      '日本では馬を見る前にできません。',
    ],
    correctIndex: 0,
  },
  {
    id: 5,
    vi: 'Tôi rất muốn đi Hokkaido.',
    options: [
      'ぜひ北海道へ行きたいです。',
      '北海道へ行くことができます。',
      '北海道へ行く前にです。',
    ],
    correctIndex: 0,
  },
];
