import type { StaticLessonData } from './lessonTypes';

export const lesson16: StaticLessonData = {
  title: 'Bài 16: Cách đi, mô tả người & thể て nối câu',
  description:
    'Bài 16 tập trung vào thể て để nối mệnh đề, tính từ nối với 〜くて/〜で, hỏi cách làm với どうやって và mô tả người/vật bằng mẫu N1はN2が Adj.',
  grammarSummary:
    'Vて、Vて・いAくて〜・なA/ Nで〜・N1はN2がAdj・どうやって・どのN',
  words: [
    { japanese: '乗ります［電車に～］', kana: 'のります［でんしゃに～］', romaji: 'norimasu [densha ni ~]', vietnamese: 'đi lên, đi [tàu]', category: 'verb' },
    { japanese: '降ります［電車を～］', kana: 'おります［でんしゃを～］', romaji: 'orimasu [densha o ~]', vietnamese: 'xuống [tàu]', category: 'verb' },
    { japanese: '乗り換えます', kana: 'のりかえます', romaji: 'norikaemasu', vietnamese: 'chuyển, đổi [tàu/bus]', category: 'verb' },
    { japanese: '浴びます［シャワーを～］', kana: 'あびます［シャワーを～］', romaji: 'abimasu [shawaa o ~]', vietnamese: 'tắm [vòi sen]', category: 'verb' },
    { japanese: '入れます', kana: 'いれます', romaji: 'iremasu', vietnamese: 'cho vào, bỏ vào', category: 'verb' },
    { japanese: '出します', kana: 'だします', romaji: 'dashimasu', vietnamese: 'lấy ra, rút (tiền)', category: 'verb' },
    { japanese: '入ります［大学に～］', kana: 'はいります［だいがくに～］', romaji: 'hairimasu [daigaku ni ~]', vietnamese: 'vào, nhập học [đại học]', category: 'verb' },
    { japanese: '出ます［大学を～］', kana: 'でます［だいがくを～］', romaji: 'demasu [daigaku o ~]', vietnamese: 'ra, tốt nghiệp [đại học]', category: 'verb' },
    { japanese: '辞めます［会社を～］', kana: 'やめます［かいしゃを～］', romaji: 'yamemasu [kaisha o ~]', vietnamese: 'bỏ, thôi [việc công ty]', category: 'verb' },
    { japanese: '押します', kana: 'おします', romaji: 'oshimasu', vietnamese: 'bấm, ấn [nút]', category: 'verb' },

    { japanese: '若い', kana: 'わかい', romaji: 'wakai', vietnamese: 'trẻ', category: 'adjective' },
    { japanese: '長い', kana: 'ながい', romaji: 'nagai', vietnamese: 'dài', category: 'adjective' },
    { japanese: '短い', kana: 'みじかい', romaji: 'mijikai', vietnamese: 'ngắn', category: 'adjective' },
    { japanese: '明るい', kana: 'あかるい', romaji: 'akarui', vietnamese: 'sáng', category: 'adjective' },
    { japanese: '暗い', kana: 'くらい', romaji: 'kurai', vietnamese: 'tối', category: 'adjective' },
    { japanese: '背が高い', kana: 'せがたかい', romaji: 'se ga takai', vietnamese: 'cao (dùng cho người)', category: 'adjective' },
    { japanese: '頭がいい', kana: 'あたまがいい', romaji: 'atama ga ii', vietnamese: 'thông minh', category: 'adjective' },

    { japanese: '体', kana: 'からだ', romaji: 'karada', vietnamese: 'cơ thể', category: 'body' },
    { japanese: '頭', kana: 'あたま', romaji: 'atama', vietnamese: 'đầu', category: 'body' },
    { japanese: '髪', kana: 'かみ', romaji: 'kami', vietnamese: 'tóc', category: 'body' },
    { japanese: '顔', kana: 'かお', romaji: 'kao', vietnamese: 'mặt', category: 'body' },
    { japanese: '目', kana: 'め', romaji: 'me', vietnamese: 'mắt', category: 'body' },
    { japanese: '耳', kana: 'みみ', romaji: 'mimi', vietnamese: 'tai', category: 'body' },
    { japanese: '口', kana: 'くち', romaji: 'kuchi', vietnamese: 'miệng', category: 'body' },
    { japanese: '歯', kana: 'は', romaji: 'ha', vietnamese: 'răng', category: 'body' },
    { japanese: 'お腹', kana: 'おなか', romaji: 'onaka', vietnamese: 'bụng', category: 'body' },
    { japanese: '足', kana: 'あし', romaji: 'ashi', vietnamese: 'chân', category: 'body' },

    { japanese: 'どうやって', kana: 'どうやって', romaji: 'dou yatte', vietnamese: 'làm thế nào, bằng cách nào', category: 'expression' },
    { japanese: 'どの～', kana: 'どの～', romaji: 'dono ~', vietnamese: '~ nào (trong nhóm 3 trở lên)', category: 'expression' },
    { japanese: 'まず', kana: 'まず', romaji: 'mazu', vietnamese: 'trước hết', category: 'expression' },
    { japanese: '次に', kana: 'つぎに', romaji: 'tsugi ni', vietnamese: 'tiếp theo', category: 'expression' },
    { japanese: '確認', kana: 'かくにん', romaji: 'kakunin', vietnamese: 'xác nhận, kiểm tra', category: 'expression' },
  ],
  sentences: [
    {
      japanese: '毎朝ジョギングをして、シャワーを浴びて、会社へ行きます。',
      romaji: 'Maiasa jogingu o shite, shawaa o abite, kaisha e ikimasu.',
      vietnamese: 'Mỗi sáng tôi chạy bộ, tắm vòi sen rồi đi đến công ty.',
    },
    {
      japanese: 'この部屋は狭くて、きれいです。',
      romaji: 'Kono heya wa semakute, kirei desu.',
      vietnamese: 'Căn phòng này hẹp nhưng sạch đẹp.',
    },
    {
      japanese: 'ミラーさんは若くて、元気です。',
      romaji: 'Miraa-san wa wakakute, genki desu.',
      vietnamese: 'Anh Miller trẻ và khỏe.',
    },
    {
      japanese: 'アンさんは髪が長いです。',
      romaji: 'An-san wa kami ga nagai desu.',
      vietnamese: 'Bạn An tóc dài.',
    },
    {
      japanese: '京都駅までどうやって行きますか。',
      romaji: 'Kyouto-eki made dou yatte ikimasu ka.',
      vietnamese: 'Bạn đi đến ga Kyoto bằng cách nào?',
    },
    {
      japanese: '地下鉄で行きます。',
      romaji: 'Chikatetsu de ikimasu.',
      vietnamese: 'Tôi đi bằng tàu điện ngầm.',
    },
  ],
  dialogue: [
    {
      speaker: 'Maria',
      japanese: 'すみません。お引き出しのやり方を教えてください。',
      romaji: 'Sumimasen. Ohikidashi no yarikata o oshiete kudasai.',
      vietnamese: 'Xin lỗi, làm ơn chỉ cho tôi cách rút tiền.',
    },
    {
      speaker: 'Nhân viên',
      japanese: 'まず、キャッシュカードを入れて、暗証番号を押してください。',
      romaji: 'Mazu, kyasshu kaado o irete, anshou bangou o oshite kudasai.',
      vietnamese: 'Trước hết, cho thẻ ATM vào và bấm mã số bí mật.',
    },
    {
      speaker: 'Maria',
      japanese: 'はい。',
      romaji: 'Hai.',
      vietnamese: 'Vâng.',
    },
    {
      speaker: 'Nhân viên',
      japanese: '次に、金額を入れて、確認ボタンを押してください。',
      romaji: 'Tsugi ni, kingaku o irete, kakunin botan o oshite kudasai.',
      vietnamese: 'Tiếp theo, nhập số tiền rồi bấm nút xác nhận.',
    },
    {
      speaker: 'Maria',
      japanese: '五万円です。',
      romaji: 'Go-man en desu.',
      vietnamese: 'Là 50,000 yên.',
    },
    {
      speaker: 'Nhân viên',
      japanese: 'はい。終わったら、カードとお金を取ってください。',
      romaji: 'Hai. Owattara, kaado to okane o totte kudasai.',
      vietnamese: 'Vâng. Xong thì lấy thẻ và tiền ra nhé.',
    },
  ],
  grammarPoints: [
    {
      title: '1. Vて、Vて ～',
      body: 'Dùng thể て để nối nhiều hành động theo thứ tự xảy ra.',
      examples: [
        '朝ごはんを食べて、学校へ行きます。',
        '家へ帰って、宿題をします。',
      ],
    },
    {
      title: '2. いAくて / なAで / Nで',
      body: 'Nối hai tính chất hoặc danh từ trong cùng một câu mô tả.',
      examples: [
        'この町は静かで、きれいです。',
        'ミラーさんは若くて、親切です。',
      ],
    },
    {
      title: '3. N1は N2が Adj',
      body: 'Dùng để nêu đặc điểm nổi bật của người/vật (tóc, mắt, chiều cao...).',
      examples: [
        'アンさんは髪が長いです。',
        'サントスさんは背が高いです。',
      ],
    },
    {
      title: '4. どうやって / どの～',
      body: 'どうやって hỏi cách làm; どの～ hỏi chọn một đối tượng trong nhóm từ ba trở lên.',
      examples: [
        '大阪までどうやって行きますか。',
        'どのかばんがあなたのですか。',
      ],
    },
  ],
};

export interface Lesson16VocabQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export interface Lesson16GrammarQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export const lesson16VocabQuizItems: Lesson16VocabQuizItem[] = [
  { id: 1, vi: 'chuyển tàu', options: ['乗り換えます', '降ります', '押します'], correctIndex: 0 },
  { id: 2, vi: 'cao (dùng cho người)', options: ['背が高い', '若い', '暗い'], correctIndex: 0 },
  { id: 3, vi: 'đầu', options: ['頭', '顔', '足'], correctIndex: 0 },
  { id: 4, vi: 'làm thế nào', options: ['どうやって', 'どの～', 'まず'], correctIndex: 0 },
  { id: 5, vi: 'bấm, ấn', options: ['押します', '入れます', '出ます'], correctIndex: 0 },
];

export const lesson16GrammarQuizItems: Lesson16GrammarQuizItem[] = [
  {
    id: 1,
    vi: 'Mỗi sáng tôi chạy bộ, tắm vòi sen rồi đi làm.',
    options: [
      '毎朝ジョギングをして、シャワーを浴びて、会社へ行きます。',
      '毎朝ジョギングをします、シャワーを浴びます、会社へ行きます。',
      '毎朝ジョギングして、シャワー浴びる、会社へ行きます。',
    ],
    correctIndex: 0,
    explanationVi: 'Nối chuỗi hành động bằng thể て.',
  },
  {
    id: 2,
    vi: 'Căn phòng này hẹp nhưng sạch đẹp.',
    options: [
      'この部屋は狭くて、きれいです。',
      'この部屋は狭いで、きれいです。',
      'この部屋は狭く、きれいですか。',
    ],
    correctIndex: 0,
  },
  {
    id: 3,
    vi: 'Bạn đi đến ga Kyoto bằng cách nào?',
    options: [
      '京都駅までどうやって行きますか。',
      '京都駅までどの行きますか。',
      '京都駅まで何で行きます。',
    ],
    correctIndex: 0,
  },
  {
    id: 4,
    vi: 'Bạn An tóc dài.',
    options: [
      'アンさんは髪が長いです。',
      'アンさんは髪を長いです。',
      'アンさんは長い髪です。',
    ],
    correctIndex: 0,
    explanationVi: 'Mẫu N1はN2がAdj để mô tả đặc điểm.',
  },
  {
    id: 5,
    vi: 'Trước hết cho thẻ vào rồi nhập mã số bí mật.',
    options: [
      'まず、カードを入れて、暗証番号を押してください。',
      'まず、カードを入ります、暗証番号を押してください。',
      'まず、カードを入れて、暗証番号を押しますか。',
    ],
    correctIndex: 0,
  },
];

