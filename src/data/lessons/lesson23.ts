/**
 * Bài 23 (N5): Minna no Nihongo I
 * Chủ điểm: とき（Khi～）, Vたら～（Sau khi / Khi～）, N(địa điểm)をV(chuyển động), Nが Adj/V.
 */
import type { StaticLessonData } from './lessonTypes';

export const lesson23: StaticLessonData = {
  title: 'Bài 23: とき・Vたら～・N(địa điểm)をV・Nが Adj/V',
  description:
    'Bài 23 giới thiệu とき (khi), Vたら (sau khi / khi), cách dùng を với động từ chuyển động (đi qua, đi bộ...), và Nが với tính từ/động từ.',
  grammarSummary:
    'V/いA/なA/N とき・Vたら、～・N(địa điểm)をV(chuyển động)・Nが Adj/V・このNをVと、～',
  words: [
    { japanese: '聞きます［せんせいに～］', kana: 'ききます［せんせいに～］', romaji: 'kikimasu [sensei ni ~]', vietnamese: 'hỏi [giáo viên]', category: 'verb' },
    { japanese: '回します', kana: 'まわします', romaji: 'mawashimasu', vietnamese: 'vặn (núm)', category: 'verb' },
    { japanese: '引きます', kana: 'ひきます', romaji: 'hikimasu', vietnamese: 'kéo', category: 'verb' },
    { japanese: '変えます', kana: 'かえます', romaji: 'kaemasu', vietnamese: 'đổi', category: 'verb' },
    { japanese: '触ります［ドアに～］', kana: 'さわります［ドアに～］', romaji: 'sawarimasu [doa ni ~]', vietnamese: 'sờ, chạm vào [cửa]', category: 'verb' },
    { japanese: '出ます［お釣りが～］', kana: 'でます［おつりが～］', romaji: 'demasu [otsuri ga ~]', vietnamese: 'ra, đi ra [tiền thừa ~]', category: 'verb' },
    { japanese: '動きます［時計が～］', kana: 'うごきます［とけいが～］', romaji: 'ugokimasu [tokei ga ~]', vietnamese: 'chuyển động, chạy [đồng hồ ~]', category: 'verb' },
    { japanese: '歩きます［道を～］', kana: 'あるきます［みちを～］', romaji: 'arukimasu [michi o ~]', vietnamese: 'đi bộ [trên đường]', category: 'verb' },
    { japanese: '渡ります［橋を～］', kana: 'わたります［はしを～］', romaji: 'watarimasu [hashi o ~]', vietnamese: 'qua, đi qua [cầu]', category: 'verb' },
    { japanese: '気をつけます［車に～］', kana: 'きをつけます［くるまに～］', romaji: 'ki o tsukemasu [kuruma ni ~]', vietnamese: 'chú ý, cẩn thận [với ô-tô]', category: 'verb' },
    { japanese: '引っ越しします', kana: 'ひっこしします', romaji: 'hikkoshi shimasu', vietnamese: 'chuyển nhà', category: 'verb' },
    { japanese: '散歩します', kana: 'さんぽします', romaji: 'sanpo shimasu', vietnamese: 'đi dạo', category: 'verb' },
    { japanese: '曲がります', kana: 'まがります', romaji: 'magarimasu', vietnamese: 'rẽ (đi)', category: 'verb' },
    { japanese: '押します', kana: 'おします', romaji: 'oshimasu', vietnamese: 'ấn', category: 'verb' },

    { japanese: '電気屋', kana: 'でんきや', romaji: 'denkiya', vietnamese: 'cửa hàng đồ điện', category: 'noun' },
    { japanese: '〜屋', kana: '〜や', romaji: '~ya', vietnamese: 'cửa hàng ～', category: 'noun' },
    { japanese: 'サイズ', kana: 'サイズ', romaji: 'saizu', vietnamese: 'cỡ, kích thước', category: 'noun' },
    { japanese: '音', kana: 'おと', romaji: 'oto', vietnamese: 'âm thanh', category: 'noun' },
    { japanese: '機械', kana: 'きかい', romaji: 'kikai', vietnamese: 'máy, máy móc', category: 'noun' },
    { japanese: 'つまみ', kana: 'つまみ', romaji: 'tsumami', vietnamese: 'núm vặn', category: 'noun' },
    { japanese: '故障', kana: 'こしょう', romaji: 'koshou', vietnamese: 'hỏng（～します: bị hỏng）', category: 'noun' },
    { japanese: '道', kana: 'みち', romaji: 'michi', vietnamese: 'đường', category: 'noun' },
    { japanese: '交差点', kana: 'こうさてん', romaji: 'kousaten', vietnamese: 'ngã tư', category: 'noun' },
    { japanese: '信号', kana: 'しんごう', romaji: 'shingou', vietnamese: 'đèn tín hiệu', category: 'noun' },
    { japanese: '角', kana: 'かど', romaji: 'kado', vietnamese: 'góc', category: 'noun' },
    { japanese: '橋', kana: 'はし', romaji: 'hashi', vietnamese: 'cầu', category: 'noun' },
    { japanese: '駐車場', kana: 'ちゅうしゃじょう', romaji: 'chuushajou', vietnamese: 'bãi đỗ xe', category: 'noun' },
    { japanese: '止まれ', kana: 'とまれ', romaji: 'tomare', vietnamese: 'dừng lại (biển báo)', category: 'noun' },
    { japanese: '進入禁止', kana: 'しんにゅうきんし', romaji: 'shinnyuu kinshi', vietnamese: 'cấm đi vào', category: 'noun' },
    { japanese: '一方通行', kana: 'いっぽうつうこう', romaji: 'ippou tsuukou', vietnamese: 'đường một chiều', category: 'noun' },
    { japanese: '駐車禁止', kana: 'ちゅうしゃきんし', romaji: 'chuusha kinshi', vietnamese: 'cấm đỗ xe', category: 'noun' },
    { japanese: '右折禁止', kana: 'うせつきんし', romaji: 'usetsu kinshi', vietnamese: 'cấm rẽ phải', category: 'noun' },
  ],
  sentences: [
    {
      japanese: '図書館で本を借りるとき、カードが要ります。',
      romaji: 'Toshokan de hon o kariru toki, kaado ga irimasu.',
      vietnamese: 'Khi mượn sách ở thư viện thì cần có thẻ.',
    },
    {
      japanese: '使い方がわからないとき、わたしに聞いてください。',
      romaji: 'Tsukaikata ga wakaranai toki, watashi ni kiite kudasai.',
      vietnamese: 'Nếu anh/chị không biết cách dùng thì hãy hỏi tôi.',
    },
    {
      japanese: '妻が病気のとき、会社を休みます。',
      romaji: 'Tsuma ga byouki no toki, kaisha o yasumimasu.',
      vietnamese: 'Khi vợ bị ốm thì tôi nghỉ làm.',
    },
    {
      japanese: '10時になったら、出かけましょう。',
      romaji: 'Juuji ni nattara, dekakemashou.',
      vietnamese: 'Khi 10 giờ thì chúng ta đi nhé.',
    },
    {
      japanese: 'うちへ帰ったら、すぐシャワーを浴びます。',
      romaji: 'Uchi e kaettara, sugu shawaa o abimasu.',
      vietnamese: 'Sau khi về nhà tôi sẽ tắm ngay.',
    },
    {
      japanese: '公園を散歩します。',
      romaji: 'Kouen o sanpo shimasu.',
      vietnamese: 'Tôi đi dạo ở công viên.',
    },
    {
      japanese: '交差点を右へ曲がります。',
      romaji: 'Kousaten o migi e magarimasu.',
      vietnamese: 'Tôi rẽ phải ở ngã tư.',
    },
    {
      japanese: 'このボタンを押すと、切符が出ます。',
      romaji: 'Kono botan o osu to, kippu ga demasu.',
      vietnamese: 'Ấn nút này thì vé sẽ ra.',
    },
  ],
  dialogue: [
    {
      speaker: 'A',
      japanese: 'この機械、動きません。',
      romaji: 'Kono kikai, ugokimasen.',
      vietnamese: 'Cái máy này không chạy.',
    },
    {
      speaker: 'B',
      japanese: '使い方がわからないとき、わたしに聞いてください。',
      romaji: 'Tsukaikata ga wakaranai toki, watashi ni kiite kudasai.',
      vietnamese: 'Nếu không biết cách dùng thì hãy hỏi tôi.',
    },
    {
      speaker: 'A',
      japanese: '交差点を渡るとき、気をつけてください。',
      romaji: 'Kousaten o wataru toki, ki o tsukete kudasai.',
      vietnamese: 'Khi qua ngã tư hãy cẩn thận.',
    },
  ],
  grammarPoints: [
    {
      title: '1. とき（Khi～）',
      body: 'V thể thông thường / Vない、いA、なA＋な、N＋の ＋ とき. Nối hai mệnh đề, chỉ thời điểm xảy ra trạng thái/hành động ở mệnh đề sau. Thời của tính từ/danh từ bổ nghĩa cho とき không phụ thuộc thời câu chính.',
      examples: [
        '図書館で本を借りるとき、カードが要ります。',
        '体の調子が悪いとき、「元気茶」を飲みます。',
        '暇なとき、うちへ遊びに来ませんか。',
        '妻が病気のとき、会社を休みます。',
      ],
    },
    {
      title: '2. Vたら、～（Sau khi / Khi～）',
      body: 'Động từ thể た ＋ ら. Chỉ hành động hoặc tình huống xảy ra sau khi sự việc trước chắc chắn xảy ra.',
      examples: [
        '10時になったら、出かけましょう。',
        'うちへ帰ったら、すぐシャワーを浴びます。',
      ],
    },
    {
      title: '3. N(địa điểm) を V(chuyển động)',
      body: 'Trợ từ を chỉ nơi đi qua. Động từ: 散歩します、渡ります、あるきます、曲がります…',
      examples: [
        '公園を散歩します。（Tôi đi dạo ở công viên。）',
        '道を渡ります。（Tôi qua đường。）',
        '交差点を右へ曲がります。（Tôi rẽ phải ở ngã tư。）',
      ],
    },
    {
      title: '4. N が Adj/V・このNをVと、～',
      body: 'N が dùng chỉ chủ thể hiện tượng hoặc trạng thái. このNをVと、～ = Ấn/làm N thì ～.',
      examples: [
        '音が小さいです。（Âm thanh nhỏ。）',
        'このボタンを押すと、切符が出ます。',
      ],
    },
  ],
};

export interface Lesson23VocabQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export interface Lesson23GrammarQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export const lesson23VocabQuizItems: Lesson23VocabQuizItem[] = [
  { id: 1, vi: 'đi bộ [trên đường]', options: ['歩きます', '渡ります', '曲がります'], correctIndex: 0 },
  { id: 2, vi: 'ngã tư', options: ['交差点', '信号', '角'], correctIndex: 0 },
  { id: 3, vi: 'chú ý, cẩn thận', options: ['気をつけます', '触ります', '聞きます'], correctIndex: 0 },
  { id: 4, vi: 'cấm đỗ xe', options: ['駐車禁止', '進入禁止', '右折禁止'], correctIndex: 0 },
  { id: 5, vi: 'chuyển nhà', options: ['引っ越しします', '変えます', '出ます'], correctIndex: 0 },
];

export const lesson23GrammarQuizItems: Lesson23GrammarQuizItem[] = [
  {
    id: 1,
    vi: 'Khi mượn sách ở thư viện thì cần có thẻ.',
    options: [
      '図書館で本を借りるとき、カードが要ります。',
      '図書館で本を借りますとき、カードが要ります。',
      '図書館で本を借りたとき、カードが要ります。',
    ],
    correctIndex: 0,
    explanationVi: 'とき trước nó dùng thể thông thường: 借りる（không 借ります）。',
  },
  {
    id: 2,
    vi: 'Khi 10 giờ thì chúng ta đi nhé.',
    options: [
      '10時になったら、出かけましょう。',
      '10時になりますら、出かけましょう。',
      '10時になった、出かけましょう。',
    ],
    correctIndex: 0,
  },
  {
    id: 3,
    vi: 'Tôi đi dạo ở công viên.',
    options: [
      '公園を散歩します。',
      '公園に散歩します。',
      '公園で散歩します。',
    ],
    correctIndex: 0,
    explanationVi: 'N(địa điểm) を V(chuyển động): nơi đi qua dùng を.',
  },
  {
    id: 4,
    vi: 'Khi vợ bị ốm thì tôi nghỉ làm.',
    options: [
      '妻が病気のとき、会社を休みます。',
      '妻は病気のとき、会社を休みます。',
      '妻が病気とき、会社を休みます。',
    ],
    correctIndex: 0,
  },
  {
    id: 5,
    vi: 'Ấn nút này thì vé sẽ ra.',
    options: [
      'このボタンを押すと、切符が出ます。',
      'このボタンを押しますと、切符が出ます。',
      'このボタンが押すと、切符が出ます。',
    ],
    correctIndex: 0,
  },
];
