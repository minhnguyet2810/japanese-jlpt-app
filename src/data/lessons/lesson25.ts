/**
 * Bài 25 (N5): Minna no Nihongo I
 * Chủ điểm: Vても～（Cho dù～）, もし～たら, いくら～ても, Danh từ が trong mệnh đề phụ.
 */
import type { StaticLessonData } from './lessonTypes';

export const lesson25: StaticLessonData = {
  title: 'Bài 25: Vても～・もし～たら・いくら～ても・Nが trong mệnh đề phụ',
  description:
    'Bài 25 giới thiệu điều kiện trái với kỳ vọng (Vても～), điều kiện giả định (もし～たら), nhấn mạnh mức độ (いくら～ても), và chủ ngữ が trong mệnh đề phụ (～から、～たら、～とき…).',
  grammarSummary:
    'V/いA/なA/N ても、～・もし～たら・いくら～ても・Danh từ が trong mệnh đề phụ',
  words: [
    { japanese: '考えます', kana: 'かんがえます', romaji: 'kangaemasu', vietnamese: 'suy nghĩ', category: 'verb' },
    { japanese: '洗濯します', kana: 'せんたくします', romaji: 'sentaku shimasu', vietnamese: 'giặt', category: 'verb' },
    { japanese: '働きます', kana: 'はたらきます', romaji: 'hatarakimasu', vietnamese: 'làm việc', category: 'verb' },
    { japanese: '使います', kana: 'つかいます', romaji: 'tsukaimasu', vietnamese: 'dùng', category: 'verb' },
    { japanese: '旅行します', kana: 'りょこうします', romaji: 'ryokou shimasu', vietnamese: 'du lịch', category: 'verb' },
    { japanese: '買います', kana: 'かいます', romaji: 'kaimasu', vietnamese: 'mua', category: 'verb' },
    { japanese: '来ます', kana: 'きます', romaji: 'kimasu', vietnamese: 'đến', category: 'verb' },
    { japanese: '掃除します', kana: 'そうじします', romaji: 'souji shimasu', vietnamese: 'dọn dẹp', category: 'verb' },
    { japanese: '休みます', kana: 'やすみます', romaji: 'yasumimasu', vietnamese: 'nghỉ', category: 'verb' },

    { japanese: '億', kana: 'おく', romaji: 'oku', vietnamese: 'ức (100 triệu)', category: 'noun' },
    { japanese: '円', kana: 'えん', romaji: 'en', vietnamese: 'yên', category: 'noun' },
    { japanese: '国', kana: 'くに', romaji: 'kuni', vietnamese: 'nước, quốc gia', category: 'noun' },
    { japanese: '約束', kana: 'やくそく', romaji: 'yakusoku', vietnamese: 'hẹn', category: 'noun' },
    { japanese: '時間', kana: 'じかん', romaji: 'jikan', vietnamese: 'thời gian, giờ', category: 'noun' },
    { japanese: '妻', kana: 'つま', romaji: 'tsuma', vietnamese: 'vợ', category: 'noun' },
    { japanese: '病気', kana: 'びょうき', romaji: 'byouki', vietnamese: 'ốm, bệnh', category: 'noun' },
    { japanese: '友達', kana: 'ともだち', romaji: 'tomodachi', vietnamese: 'bạn', category: 'noun' },
    { japanese: '部屋', kana: 'へや', romaji: 'heya', vietnamese: 'phòng', category: 'noun' },
    { japanese: '会社', kana: 'かいしゃ', romaji: 'kaisha', vietnamese: 'công ty', category: 'noun' },
    { japanese: '日曜日', kana: 'にちようび', romaji: 'nichiyoubi', vietnamese: 'chủ nhật', category: 'noun' },
    { japanese: 'パソコン', kana: 'パソコン', romaji: 'pasokon', vietnamese: 'máy tính cá nhân', category: 'noun' },
    { japanese: 'グループ旅行', kana: 'グループりょこう', romaji: 'gurupu ryokou', vietnamese: 'du lịch theo đoàn', category: 'noun' },
    { japanese: '嫌い', kana: 'きらい', romaji: 'kirai', vietnamese: 'ghét', category: 'adjective' },
    { japanese: '便利', kana: 'べんり', romaji: 'benri', vietnamese: 'tiện lợi', category: 'adjective' },
    { japanese: '安い', kana: 'やすい', romaji: 'yasui', vietnamese: 'rẻ', category: 'adjective' },
    { japanese: '高い', kana: 'たかい', romaji: 'takai', vietnamese: 'đắt', category: 'adjective' },
  ],
  sentences: [
    {
      japanese: '雨が降っても、洗濯します。',
      romaji: 'Ame ga futtemo, sentaku shimasu.',
      vietnamese: 'Cho dù trời mưa tôi cũng giặt quần áo.',
    },
    {
      japanese: 'いくら考えても、わかりません。',
      romaji: 'Ikura kangaetemo, wakarimasen.',
      vietnamese: 'Dù có nghĩ thế nào đi nữa thì tôi cũng không hiểu được.',
    },
    {
      japanese: 'いくら高くても、買います。',
      romaji: 'Ikura takakute mo, kaimasu.',
      vietnamese: 'Cho dù có đắt bao nhiêu đi nữa thì tôi cũng mua.',
    },
    {
      japanese: 'もし1億円あったら、いろいろな国を旅行したいです。',
      romaji: 'Moshi ichioku en attara, iroiro na kuni o ryokou shitai desu.',
      vietnamese: 'Nếu có 100 triệu yên thì tôi muốn đi du lịch khắp các nước.',
    },
    {
      japanese: '友達が来るまえに、部屋を掃除します。',
      romaji: 'Tomodachi ga kuru mae ni, heya o souji shimasu.',
      vietnamese: 'Trước khi bạn đến chơi, tôi dọn phòng.',
    },
    {
      japanese: '妻が病気のとき、会社を休みます。',
      romaji: 'Tsuma ga byouki no toki, kaisha o yasumimasu.',
      vietnamese: 'Khi vợ bị ốm, tôi nghỉ làm.',
    },
    {
      japanese: '友達が約束の時間に来なかったら、どうしますか。',
      romaji: 'Tomodachi ga yakusoku no jikan ni konakattara, dou shimasu ka.',
      vietnamese: 'Nếu bạn không đến đúng giờ hẹn thì anh/chị sẽ làm gì?',
    },
  ],
  dialogue: [
    {
      speaker: 'A',
      japanese: 'もしお金がたくさんあったら、何をしますか。',
      romaji: 'Moshi okane ga takusan attara, nani o shimasu ka.',
      vietnamese: 'Nếu có nhiều tiền thì anh/chị sẽ làm gì?',
    },
    {
      speaker: 'B',
      japanese: 'いろいろな国を旅行したいです。',
      romaji: 'Iroiro na kuni o ryokou shitai desu.',
      vietnamese: 'Tôi muốn đi du lịch nhiều nước.',
    },
    {
      speaker: 'A',
      japanese: '友達が約束の時間に来なかったら、どうしますか。',
      romaji: 'Tomodachi ga yakusoku no jikan ni konakattara, dou shimasu ka.',
      vietnamese: 'Nếu bạn không đến đúng giờ hẹn thì anh/chị sẽ làm gì?',
    },
    {
      speaker: 'B',
      japanese: '電話をかけます。',
      romaji: 'Denwa o kakemasu.',
      vietnamese: 'Tôi sẽ gọi điện.',
    },
  ],
  grammarPoints: [
    {
      title: '1. V/いA/なA/N ても、～（Cho dù～）',
      body: 'Biểu thị điều kiện trái với kỳ vọng: dù có … thì vẫn …. Vて＋も、いA～くて＋も、なA＋でも、N＋でも.',
      examples: [
        '雨が降っても、洗濯します。',
        '安くても、わたしはグループ旅行が嫌いです。',
        '便利でも、パソコンを使いません。',
        '日曜日でも、働きます。',
      ],
    },
    {
      title: '2. もし～たら',
      body: 'もし nhấn mạnh ý giả định khi dùng với ～たら. Dùng khi nói ý kiến trong điều kiện giả định.',
      examples: [
        'もし1億円あったら、いろいろな国を旅行したいです。',
      ],
    },
    {
      title: '3. いくら～ても',
      body: 'いくら nhấn mạnh mức độ: dù … bao nhiêu đi nữa thì vẫn …. Đi với ～ても/～でも.',
      examples: [
        'いくら考えても、わかりません。',
        'いくら高くても、買います。',
      ],
    },
    {
      title: '4. Danh từ が trong mệnh đề phụ',
      body: 'Trong mệnh đề phụ (～から、～たら、～ても、～とき、～と、～まえに…), chủ ngữ thường đi với が.',
      examples: [
        '友達が来るまえに、部屋を掃除します。（Bài 18）',
        '妻が病気のとき、会社を休みます。（Bài 23）',
        '友達が約束の時間に来なかったら、どうしますか。',
      ],
    },
  ],
};

export interface Lesson25VocabQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export interface Lesson25GrammarQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export const lesson25VocabQuizItems: Lesson25VocabQuizItem[] = [
  { id: 1, vi: 'ức (100 triệu)', options: ['億', '円', '国'], correctIndex: 0 },
  { id: 2, vi: 'cho dù (trong いくら～ても)', options: ['いくら', 'もし', '約束'], correctIndex: 0 },
  { id: 3, vi: 'nếu (giả định)', options: ['もし', 'いくら', '時間'], correctIndex: 0 },
  { id: 4, vi: 'vợ', options: ['妻', '友達', '部屋'], correctIndex: 0 },
  { id: 5, vi: 'cho dù trời mưa', options: ['雨が降っても', '雨が降ったら', '雨が降ると'], correctIndex: 0 },
];

export const lesson25GrammarQuizItems: Lesson25GrammarQuizItem[] = [
  {
    id: 1,
    vi: 'Cho dù trời mưa tôi cũng giặt.',
    options: [
      '雨が降っても、洗濯します。',
      '雨が降ったら、洗濯します。',
      '雨が降ると、洗濯します。',
    ],
    correctIndex: 0,
    explanationVi: 'Điều kiện trái kỳ vọng: Vて＋も.',
  },
  {
    id: 2,
    vi: 'Nếu có 100 triệu yên thì tôi muốn đi du lịch nhiều nước.',
    options: [
      'もし1億円あったら、いろいろな国を旅行したいです。',
      'いくら1億円あったら、いろいろな国を旅行したいです。',
      '1億円あったら、いろいろな国を旅行したいです。',
    ],
    correctIndex: 0,
  },
  {
    id: 3,
    vi: 'Dù nghĩ thế nào đi nữa thì tôi cũng không hiểu.',
    options: [
      'いくら考えても、わかりません。',
      'もし考えても、わかりません。',
      '考えたら、わかりません。',
    ],
    correctIndex: 0,
  },
  {
    id: 4,
    vi: 'Trước khi bạn đến, tôi dọn phòng.',
    options: [
      '友達が来るまえに、部屋を掃除します。',
      '友達は来るまえに、部屋を掃除します。',
      '友達に来るまえに、部屋を掃除します。',
    ],
    correctIndex: 0,
    explanationVi: 'Chủ ngữ trong mệnh đề phụ (～まえに) dùng が.',
  },
  {
    id: 5,
    vi: 'Nếu bạn không đến đúng giờ hẹn thì anh/chị sẽ làm gì?',
    options: [
      '友達が約束の時間に来なかったら、どうしますか。',
      '友達は約束の時間に来なかったら、どうしますか。',
      '友達に約束の時間に来なかったら、どうしますか。',
    ],
    correctIndex: 0,
  },
];
