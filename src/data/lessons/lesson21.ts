/**
 * Bài 21 (N5): Minna no Nihongo I
 * Chủ điểm: と思います（Tôi nghĩ rằng～）, と言います（nói～）, でしょう？（chắc… phải không?）.
 */
import type { StaticLessonData } from './lessonTypes';

export const lesson21: StaticLessonData = {
  title: 'Bài 21: と思います・と言います・でしょう？',
  description:
    'Bài 21 giới thiệu cách nói ý kiến và phán đoán (thể thông thường ＋ と思います), trích dẫn lời nói (と言います), và xác nhận với người nghe (でしょう？).',
  grammarSummary:
    'Thể thông thường と 思います・Câu と言います・でしょう？・～についてどう思いますか・わたしもそう思います',
  words: [
    { japanese: 'すごい', kana: 'すごい', romaji: 'sugoi', vietnamese: 'ghê quá, giỏi quá (ngạc nhiên, thán phục)', category: 'adjective' },
    { japanese: '首相', kana: 'しゅしょう', romaji: 'shushou', vietnamese: 'thủ tướng', category: 'noun' },
    { japanese: '大統領', kana: 'だいとうりょう', romaji: 'daitouryou', vietnamese: 'tổng thống', category: 'noun' },
    { japanese: '政治', kana: 'せいじ', romaji: 'seiji', vietnamese: 'chính trị', category: 'noun' },
    { japanese: 'ニュース', kana: 'ニュース', romaji: 'nyuusu', vietnamese: 'tin tức, bản tin', category: 'noun' },
    { japanese: 'スピーチ', kana: 'スピーチ', romaji: 'supiichi', vietnamese: 'bài diễn thuyết, phát biểu（～をします）', category: 'noun' },
    { japanese: '試合', kana: 'しあい', romaji: 'shiai', vietnamese: 'trận đấu', category: 'noun' },
    { japanese: 'アルバイト', kana: 'アルバイト', romaji: 'arubaito', vietnamese: 'công việc làm thêm（～をします）', category: 'noun' },
    { japanese: '意見', kana: 'いけん', romaji: 'iken', vietnamese: 'ý kiến', category: 'noun' },
    { japanese: '[お]話', kana: '[お]はなし', romaji: '[o]hanashi', vietnamese: 'câu chuyện, bài nói chuyện（～をします）', category: 'noun' },
    { japanese: 'ユーモア', kana: 'ユーモア', romaji: 'yuumoa', vietnamese: 'hài hước', category: 'noun' },
    { japanese: 'むだ', kana: 'むだ', romaji: 'muda', vietnamese: 'sự lãng phí', category: 'noun' },
    { japanese: 'デザイン', kana: 'デザイン', romaji: 'dezain', vietnamese: 'thiết kế', category: 'noun' },
    { japanese: '交通', kana: 'こうつう', romaji: 'koutsuu', vietnamese: 'giao thông, đi lại', category: 'noun' },
    { japanese: 'ラッシュ', kana: 'ラッシュ', romaji: 'rasshu', vietnamese: 'giờ cao điểm', category: 'noun' },
    { japanese: '物価', kana: 'ぶっか', romaji: 'bukka', vietnamese: 'giá cả, mức giá', category: 'noun' },
    { japanese: '会議', kana: 'かいぎ', romaji: 'kaigi', vietnamese: 'cuộc họp', category: 'noun' },
    { japanese: '空港', kana: 'くうこう', romaji: 'kuukou', vietnamese: 'sân bay', category: 'noun' },
    { japanese: 'ファクス', kana: 'ファクス', romaji: 'fakusu', vietnamese: 'fax', category: 'noun' },
    { japanese: '便利', kana: 'べんり', romaji: 'benri', vietnamese: 'tiện lợi', category: 'adjective' },
    { japanese: '不便', kana: 'ふべん', romaji: 'fuben', vietnamese: 'bất tiện', category: 'adjective' },
    { japanese: '言います', kana: 'いいます', romaji: 'iimasu', vietnamese: 'nói', category: 'verb' },
    { japanese: '思います', kana: 'おもいます', romaji: 'omoimasu', vietnamese: 'nghĩ', category: 'verb' },
  ],
  sentences: [
    {
      japanese: 'あした雨が降ると思います。',
      romaji: 'Ashita ame ga furu to omoimasu.',
      vietnamese: 'Tôi nghĩ ngày mai trời sẽ mưa.',
    },
    {
      japanese: '首相は来月アメリカへ行くと言いました。',
      romaji: 'Shushou wa raigetsu Amerika e iku to iimashita.',
      vietnamese: 'Thủ tướng nói là tháng sau sẽ đi Mỹ.',
    },
    {
      japanese: '日本は物価が高いと思います。',
      romaji: 'Nihon wa bukka ga takai to omoimasu.',
      vietnamese: 'Tôi nghĩ giá cả ở Nhật đắt đỏ.',
    },
    {
      japanese: '新しい空港についてどう思いますか。',
      romaji: 'Atarashii kuukou ni tsuite dou omoimasu ka.',
      vietnamese: 'Anh/chị nghĩ thế nào về sân bay mới?',
    },
    {
      japanese: 'きれいですが、ちょっと交通が不便だと思います。',
      romaji: 'Kirei desu ga, chotto koutsuu ga fuben da to omoimasu.',
      vietnamese: 'Tôi nghĩ là tuy đẹp nhưng đi lại hơi bất tiện.',
    },
    {
      japanese: 'あしたパーティーに行くでしょう？',
      romaji: 'Ashita paatii ni iku deshou?',
      vietnamese: 'Ngày mai chắc anh/chị sẽ đi dự tiệc, phải không?',
    },
    {
      japanese: '寝るまえに、「お休みなさい」と言います。',
      romaji: 'Neru mae ni, "Oyasuminasai" to iimasu.',
      vietnamese: 'Trước khi ngủ chúng ta nói "Oyasuminasai".',
    },
  ],
  dialogue: [
    {
      speaker: 'A',
      japanese: '仕事と家族、どちらが大切だと思いますか。',
      romaji: 'Shigoto to kazoku, dochira ga taisetsu da to omoimasu ka.',
      vietnamese: 'Công việc và gia đình, anh/chị nghĩ cái nào quan trọng hơn?',
    },
    {
      speaker: 'B',
      japanese: 'わたしはどちらも大切だと思います。',
      romaji: 'Watashi wa dochira mo taisetsu da to omoimasu.',
      vietnamese: 'Tôi nghĩ cái nào cũng quan trọng cả.',
    },
    {
      speaker: 'A',
      japanese: '日本についてどう思いますか。',
      romaji: 'Nihon ni tsuite dou omoimasu ka.',
      vietnamese: 'Anh/chị nghĩ thế nào về Nhật Bản?',
    },
    {
      speaker: 'B',
      japanese: '物価が高いと思います。',
      romaji: 'Bukka ga takai to omoimasu.',
      vietnamese: 'Tôi nghĩ giá cả đắt đỏ.',
    },
    {
      speaker: 'A',
      japanese: 'ファクスは便利ですね。',
      romaji: 'Fakusu wa benri desu ne.',
      vietnamese: 'Fax tiện lợi nhỉ.',
    },
    {
      speaker: 'B',
      japanese: 'わたしもそう思います。',
      romaji: 'Watashi mo sou omoimasu.',
      vietnamese: 'Tôi cũng nghĩ thế.',
    },
  ],
  grammarPoints: [
    {
      title: '1. Thể thông thường と 思います（Tôi nghĩ rằng～）',
      body: 'Dùng trợ từ 「と」 để biểu thị nội dung của 「おもいます」. Phần trước 「と」 là thể thông thường (plain form). Dùng để biểu thị phán đoán, suy xét hoặc ý kiến.',
      examples: [
        'あした雨が降ると思います。（Tôi nghĩ ngày mai trời sẽ mưa。）',
        '日本は物価が高いと思います。（Tôi nghĩ giá cả ở Nhật đắt đỏ。）',
        'Khi phủ định: たぶん知らないと思います。（Tôi nghĩ chắc anh ấy không biết。）',
      ],
    },
    {
      title: '2. ～についてどう思いますか',
      body: 'Khi muốn hỏi ý kiến về một điều gì đó: dùng 「～についてどう思いますか」. Không cần 「と」 sau 「どう」。',
      examples: [
        '新しい空港についてどう思いますか。（Anh/chị nghĩ thế nào về sân bay mới？）',
        'きれいですが、ちょっと交通が不便だと思います。（Tôi nghĩ là tuy đẹp nhưng đi lại hơi bất tiện。）',
      ],
    },
    {
      title: '3. Câu thể thông thường と言います（nói～）',
      body: 'Dùng 「と」 để biểu thị nội dung của 「いいます」. Trích dẫn trực tiếp: để nguyên trong 「 」. Trích dẫn gián tiếp: dùng thể thông thường trước 「と」.',
      examples: [
        '寝るまえに、「お休みなさい」と言います。（Trước khi ngủ nói "Oyasuminasai"。）',
        'ミラーさんは「来週東京へ出張します」と言いました。（Anh Miller đã nói "Tuần sau sẽ đi công tác Tokyo」。）',
        '首相は来月アメリカへ行くと言いました。（Thủ tướng nói là tháng sau sẽ đi Mỹ。）',
      ],
    },
    {
      title: '4. でしょう？（chắc… phải không?）',
      body: 'Động từ/tính từ thể thông thường ＋ でしょう？ Dùng với ngữ điệu lên để xác nhận sự đồng ý của người nghe, khi người nói tin rằng người nghe đã hiểu và đồng ý.',
      examples: [
        'あしたパーティーに行くでしょう？ → ええ、行きます。',
        '北海道は寒かったでしょう？ → いいえ、そんなに寒くなかったです。',
      ],
    },
    {
      title: '5. Đồng ý / không đồng ý',
      body: 'わたしもそう思います。（Tôi cũng nghĩ thế。）／ わたしはそう思いません。（Tôi không nghĩ thế。）',
      examples: [
        'A: ファクスは便利ですね。 B: わたしもそう思います。',
        'C: わたしはそう思いません。',
      ],
    },
  ],
};

export interface Lesson21VocabQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export interface Lesson21GrammarQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export const lesson21VocabQuizItems: Lesson21VocabQuizItem[] = [
  { id: 1, vi: 'thủ tướng', options: ['首相', '大統領', '政治'], correctIndex: 0 },
  { id: 2, vi: 'ý kiến', options: ['意見', 'ニュース', 'スピーチ'], correctIndex: 0 },
  { id: 3, vi: 'tôi nghĩ (rằng)', options: ['思います', '言います', '行きます'], correctIndex: 0 },
  { id: 4, vi: 'giờ cao điểm', options: ['ラッシュ', '交通', 'デザイン'], correctIndex: 0 },
  { id: 5, vi: 'ghê quá, giỏi quá', options: ['すごい', '便利', '不便'], correctIndex: 0 },
];

export const lesson21GrammarQuizItems: Lesson21GrammarQuizItem[] = [
  {
    id: 1,
    vi: 'Tôi nghĩ ngày mai trời sẽ mưa.',
    options: [
      'あした雨が降ると思います。',
      'あした雨が降りますと思います。',
      'あした雨が降ると思っています。',
    ],
    correctIndex: 0,
    explanationVi: 'Trước と dùng thể thông thường: 降る（không dùng 降ります）。',
  },
  {
    id: 2,
    vi: 'Thủ tướng nói là tháng sau sẽ đi Mỹ.',
    options: [
      '首相は来月アメリカへ行くと言いました。',
      '首相は来月アメリカへ行きますと言いました。',
      '首相は来月アメリカへ行くといいます。',
    ],
    correctIndex: 0,
    explanationVi: 'Trích dẫn gián tiếp: thể thông thường ＋ と言いました。',
  },
  {
    id: 3,
    vi: 'Anh/chị nghĩ thế nào về sân bay mới?',
    options: [
      '新しい空港についてどう思いますか。',
      '新しい空港についてどうと思いますか。',
      '新しい空港をどう思いますか。',
    ],
    correctIndex: 0,
    explanationVi: 'Hỏi ý kiến: ～についてどう思いますか（không có と sau どう）。',
  },
  {
    id: 4,
    vi: 'Ngày mai chắc anh sẽ đi dự tiệc, phải không?',
    options: [
      'あしたパーティーに行くでしょう？',
      'あしたパーティーに行きますでしょう？',
      'あしたパーティーに行くでしょう。',
    ],
    correctIndex: 0,
    explanationVi: 'でしょう？ dùng thể thông thường 行く ＋ でしょう？ để xác nhận.',
  },
  {
    id: 5,
    vi: 'Tôi cũng nghĩ thế.（Đồng ý）',
    options: ['わたしもそう思います。', 'わたしはそう思います。', 'わたしも思います。'],
    correctIndex: 0,
  },
];
