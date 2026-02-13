/**
 * Bài 22 (N5): Minna no Nihongo I
 * Chủ điểm: Bổ nghĩa cho danh từ bằng mệnh đề phụ（Mệnh đề が）, Vる＋時間/約束/用事.
 */
import type { StaticLessonData } from './lessonTypes';

export const lesson22: StaticLessonData = {
  title: 'Bài 22: Bổ nghĩa danh từ（Mệnh đề phụ）・Vる＋時間/約束/用事',
  description:
    'Bài 22 giới thiệu cách bổ nghĩa cho danh từ bằng mệnh đề (thể thông thường đứng trước danh từ), chủ ngữ trong mệnh đề phụ dùng が, và cách dùng Vる＋時間/約束/用事.',
  grammarSummary:
    'Mệnh đề phụ bổ nghĩa danh từ・Danh từ が trong mệnh đề phụ・Vる＋時間/約束/用事',
  words: [
    { japanese: '着ます［シャツを～］', kana: 'きます［シャツを～］', romaji: 'kimasu [shatsu o ~]', vietnamese: 'mặc [áo sơ-mi, v.v.]', category: 'verb' },
    { japanese: '履きます［くつを～］', kana: 'はきます［くつを～］', romaji: 'hakimasu [kutsu o ~]', vietnamese: 'đi, mặc [giày, quần âu, v.v.]', category: 'verb' },
    { japanese: 'かぶります［ぼうしを～］', kana: 'かぶります［ぼうしを～］', romaji: 'kaburimasu [boushi o ~]', vietnamese: 'đội [mũ, v.v.]', category: 'verb' },
    { japanese: 'かけます［めがねを～］', kana: 'かけます［めがねを～］', romaji: 'kakemasu [megane o ~]', vietnamese: 'đeo [kính]', category: 'verb' },
    { japanese: '生まれます', kana: 'うまれます', romaji: 'umaremasu', vietnamese: 'sinh ra', category: 'verb' },

    { japanese: 'コート', kana: 'コート', romaji: 'kooto', vietnamese: 'áo khoác', category: 'noun' },
    { japanese: 'スーツ', kana: 'スーツ', romaji: 'suutsu', vietnamese: 'com-lê', category: 'noun' },
    { japanese: 'セーター', kana: 'セーター', romaji: 'seetaa', vietnamese: 'áo len', category: 'noun' },
    { japanese: '帽子', kana: 'ぼうし', romaji: 'boushi', vietnamese: 'mũ', category: 'noun' },
    { japanese: '眼鏡', kana: 'めがね', romaji: 'megane', vietnamese: 'kính', category: 'noun' },
    { japanese: 'スカート', kana: 'スカート', romaji: 'sukaato', vietnamese: 'váy', category: 'noun' },
    { japanese: 'ブラウス', kana: 'ブラウス', romaji: 'burausu', vietnamese: 'áo blouse', category: 'noun' },
    { japanese: 'ワイシャツ', kana: 'ワイシャツ', romaji: 'waishatsu', vietnamese: 'áo sơ-mi (trắng)', category: 'noun' },
    { japanese: 'マフラー', kana: 'マフラー', romaji: 'mafuraa', vietnamese: 'khăn quàng', category: 'noun' },
    { japanese: '手袋', kana: 'てぶくろ', romaji: 'tebukuro', vietnamese: 'găng tay', category: 'noun' },
    { japanese: '下着', kana: 'したぎ', romaji: 'shitagi', vietnamese: 'quần áo lót', category: 'noun' },
    { japanese: 'くつした', kana: 'くつした', romaji: 'kutsushita', vietnamese: 'tất', category: 'noun' },
    { japanese: 'ネクタイ', kana: 'ネクタイ', romaji: 'nekutai', vietnamese: 'cà vạt', category: 'noun' },
    { japanese: 'ベルト', kana: 'ベルト', romaji: 'beruto', vietnamese: 'thắt lưng', category: 'noun' },
    { japanese: '運動靴', kana: 'うんどうぐつ', romaji: 'undoukutsu', vietnamese: 'giày thể thao', category: 'noun' },
    { japanese: '着物', kana: 'きもの', romaji: 'kimono', vietnamese: 'kimono', category: 'noun' },

    { japanese: '家賃', kana: 'やちん', romaji: 'yachin', vietnamese: 'tiền thuê nhà', category: 'noun' },
    { japanese: 'ダイニングキッチン', kana: 'ダイニングキッチン', romaji: 'dainingu kichin', vietnamese: 'bếp kèm phòng ăn', category: 'noun' },
    { japanese: '和室', kana: 'わしつ', romaji: 'washitsu', vietnamese: 'phòng kiểu Nhật', category: 'noun' },
    { japanese: '押し入れ', kana: 'おしいれ', romaji: 'oshiire', vietnamese: 'chỗ để chăn gối (phòng kiểu Nhật)', category: 'noun' },
    { japanese: '布団', kana: 'ふとん', romaji: 'futon', vietnamese: 'chăn, đệm', category: 'noun' },
    { japanese: 'アパート', kana: 'アパート', romaji: 'apaato', vietnamese: 'nhà chung cư', category: 'noun' },
    { japanese: 'こちら', kana: 'こちら', romaji: 'kochira', vietnamese: 'cái này (cách nói lịch sự của これ)', category: 'expression' },
    { japanese: 'うーん', kana: 'うーん', romaji: 'uun', vietnamese: 'Ừ～ / Để tôi xem / Thế nào nhỉ', category: 'expression' },
    { japanese: 'よく', kana: 'よく', romaji: 'yoku', vietnamese: 'thường, hay', category: 'adverb' },
    { japanese: 'おめでとうございます。', kana: 'おめでとうございます。', romaji: 'omedetou gozaimasu', vietnamese: 'Chúc mừng（sinh nhật, cưới, năm mới…）', category: 'expression' },
  ],
  sentences: [
    {
      japanese: 'これはミラーさんが作ったケーキです。',
      romaji: 'Kore wa Miraa-san ga tsukutta keeki desu.',
      vietnamese: 'Đây là cái bánh ngọt mà anh Miller đã làm.',
    },
    {
      japanese: 'わたしはカリナさんがかいた絵が好きです。',
      romaji: 'Watashi wa Karina-san ga kaita e ga suki desu.',
      vietnamese: 'Tôi thích bức tranh mà chị Karina đã vẽ.',
    },
    {
      japanese: '彼が生まれた所を知っていますか。',
      romaji: 'Kare ga umareta tokoro o shitte imasu ka.',
      vietnamese: 'Anh/chị có biết nơi mà anh ấy sinh ra không?',
    },
    {
      japanese: 'わたしは朝ごはんを食べる時間がありません。',
      romaji: 'Watashi wa asagohan o taberu jikan ga arimasen.',
      vietnamese: 'Tôi không có thời gian để ăn sáng.',
    },
    {
      japanese: 'わたしは友達と映画を見る約束があります。',
      romaji: 'Watashi wa tomodachi to eiga o miru yakusoku ga arimasu.',
      vietnamese: 'Tôi có hẹn đi xem phim với bạn.',
    },
    {
      japanese: 'きょうは市役所へ行く用事があります。',
      romaji: 'Kyou wa shiyakusho e iku youji ga arimasu.',
      vietnamese: 'Hôm nay tôi có việc phải đi đến Văn phòng hành chính thành phố.',
    },
    {
      japanese: 'わたしが先週見た映画はおもしろかったです。',
      romaji: 'Watashi ga senshuu mita eiga wa omoshirokatta desu.',
      vietnamese: 'Bộ phim mà tôi đã xem tuần trước rất hay.',
    },
  ],
  dialogue: [
    {
      speaker: 'Trung tâm bất động sản',
      japanese: 'アパートを探していますか。どんなアパートがいいですか。',
      romaji: 'Apaato o sagashite imasu ka. Donna apaato ga ii desu ka.',
      vietnamese: 'Anh/chị đang tìm căn hộ à? Anh/chị muốn căn hộ như thế nào?',
    },
    {
      speaker: 'Wang',
      japanese: '駅から近いアパートがいいです。',
      romaji: 'Eki kara chikai apaato ga ii desu.',
      vietnamese: 'Tôi muốn căn hộ gần ga.',
    },
    {
      speaker: 'Trung tâm bất động sản',
      japanese: 'こちらはどうですか。家賃は一か月8万円です。',
      romaji: 'Kochira wa dou desu ka. Yachin wa ikkagetsu hachiman en desu.',
      vietnamese: 'Cái này thế nào ạ? Tiền thuê một tháng là 8 vạn yên.',
    },
    {
      speaker: 'Wang',
      japanese: 'うーん。駅から歩いて何分ですか。',
      romaji: 'Uun. Eki kara aruite nanpun desu ka.',
      vietnamese: 'Ừ～. Từ ga đi bộ mất bao nhiêu phút ạ?',
    },
    {
      speaker: 'Trung tâm bất động sản',
      japanese: '歩いて3分です。ダイニングキッチンと和室が一つあります。',
      romaji: 'Aruite sanpun desu. Dainingu kichin to washitsu ga hitotsu arimasu.',
      vietnamese: 'Đi bộ 3 phút. Có một bếp kèm phòng ăn và một phòng kiểu Nhật.',
    },
  ],
  grammarPoints: [
    {
      title: '1. Bổ nghĩa cho danh từ bằng mệnh đề phụ',
      body: 'Mệnh đề đứng trước danh từ phải ở thể thông thường (plain form). Tính từ đuôi な: thay だ → な. Danh từ + だ → の. Trong mệnh đề phụ bổ nghĩa cho danh từ, chủ ngữ đi với が.',
      examples: [
        '行く人（người đi）/ 行った人（người đã đi）/ 行かなかった人（người đã không đi）',
        '京都へ行く人（người đi Kyoto）/ 親切で、きれいな人（người tốt bụng và đẹp）',
      ],
    },
    {
      title: '2. Danh từ が trong mệnh đề phụ',
      body: 'Khi chuyển câu thành mệnh đề bổ nghĩa cho một danh từ, danh từ đó trong câu gốc có trợ từ を/に/で… thì trong mệnh đề phụ chủ ngữ (người làm hành động) dùng が.',
      examples: [
        'ミラーさんはケーキを作りました。→ これはミラーさんが作ったケーキです。',
        'わたしは先週映画を見ました。→ わたしが先週見た映画（bộ phim tôi đã xem tuần trước）',
        'ワンさんは病院で働いています。→ ワンさんが働いている病院（bệnh viện anh Wang làm）',
      ],
    },
    {
      title: '3. Động từ thể nguyên dạng ＋ 時間/約束/用事',
      body: 'Khi biểu thị thời gian làm việc gì: Vる đứng trước 時間. Tương tự dùng Vる trước 約束（hẹn）, 用事（việc phải làm）.',
      examples: [
        '朝ごはんを食べる時間がありません。（Tôi không có thời gian ăn sáng。）',
        '友達と映画を見る約束があります。（Tôi có hẹn xem phim với bạn。）',
        '市役所へ行く用事があります。（Tôi có việc phải đi Văn phòng hành chính。）',
      ],
    },
  ],
};

export interface Lesson22VocabQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export interface Lesson22GrammarQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export const lesson22VocabQuizItems: Lesson22VocabQuizItem[] = [
  { id: 1, vi: 'mặc [áo]', options: ['着ます', '履きます', 'かぶります'], correctIndex: 0 },
  { id: 2, vi: 'đội [mũ]', options: ['かぶります', 'かけます', '着ます'], correctIndex: 0 },
  { id: 3, vi: 'đeo [kính]', options: ['かけます', '着ます', '履きます'], correctIndex: 0 },
  { id: 4, vi: 'tiền thuê nhà', options: ['家賃', '布団', '和室'], correctIndex: 0 },
  { id: 5, vi: 'Chúc mừng（sinh nhật, cưới…）', options: ['おめでとうございます。', 'うーん', 'よく'], correctIndex: 0 },
];

export const lesson22GrammarQuizItems: Lesson22GrammarQuizItem[] = [
  {
    id: 1,
    vi: 'Đây là cái bánh mà anh Miller đã làm.',
    options: [
      'これはミラーさんが作ったケーキです。',
      'これはミラーさんは作ったケーキです。',
      'これはミラーさんを作ったケーキです。',
    ],
    correctIndex: 0,
    explanationVi: 'Trong mệnh đề phụ bổ nghĩa cho danh từ, chủ ngữ dùng が.',
  },
  {
    id: 2,
    vi: 'Tôi không có thời gian để ăn sáng.',
    options: [
      'わたしは朝ごはんを食べる時間がありません。',
      'わたしは朝ごはんを食べます時間がありません。',
      'わたしは朝ごはんを食べた時間がありません。',
    ],
    correctIndex: 0,
    explanationVi: 'Vる ＋ 時間: động từ thể từ điển đứng trước 時間.',
  },
  {
    id: 3,
    vi: 'Tôi có hẹn đi xem phim với bạn.',
    options: [
      'わたしは友達と映画を見る約束があります。',
      'わたしは友達と映画を見ます約束があります。',
      'わたしは友達と映画を見た約束があります。',
    ],
    correctIndex: 0,
  },
  {
    id: 4,
    vi: 'Bộ phim mà tôi đã xem tuần trước（cụm danh từ）',
    options: [
      'わたしが先週見た映画',
      'わたしは先週見た映画',
      'わたしを先週見た映画',
    ],
    correctIndex: 0,
    explanationVi: 'Trong mệnh đề bổ nghĩa cho 映画, chủ ngữ わたし đi với が.',
  },
  {
    id: 5,
    vi: 'Anh/chị có biết nơi anh ấy sinh ra không?',
    options: [
      '彼が生まれた所を知っていますか。',
      '彼は生まれた所を知っていますか。',
      '彼に生まれた所を知っていますか。',
    ],
    correctIndex: 0,
  },
];
