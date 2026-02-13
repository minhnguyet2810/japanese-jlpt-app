import type { StaticLessonData } from './lessonTypes';

export const lesson17: StaticLessonData = {
  title: 'Bài 17: Thể ない（～ないでください／～なければなりません）',
  description:
    'Bài 17 học thể ない để diễn đạt cấm đoán, nghĩa vụ và miễn nghĩa vụ. Chủ đề từ vựng xoay quanh sức khỏe, cơ thể, bệnh và hội thoại tại phòng khám.',
  grammarSummary:
    'Vないでください・Vなければなりません・Vなくてもいいです',
  words: [
    { japanese: '覚えます', kana: 'おぼえます', romaji: 'oboemasu', vietnamese: 'nhớ', category: 'verb' },
    { japanese: '忘れます', kana: 'わすれます', romaji: 'wasuremasu', vietnamese: 'quên', category: 'verb' },
    { japanese: 'なくします', kana: 'なくします', romaji: 'nakushimasu', vietnamese: 'mất, đánh mất', category: 'verb' },
    { japanese: '出します［レポートを～］', kana: 'だします［レポートを～］', romaji: 'dashimasu [repooto o ~]', vietnamese: 'nộp [báo cáo/bài]', category: 'verb' },
    { japanese: '払います', kana: 'はらいます', romaji: 'haraimasu', vietnamese: 'trả tiền', category: 'verb' },
    { japanese: '返します', kana: 'かえします', romaji: 'kaeshimasu', vietnamese: 'trả lại', category: 'verb' },
    { japanese: '出かけます', kana: 'でかけます', romaji: 'dekakemasu', vietnamese: 'ra ngoài', category: 'verb' },
    { japanese: '脱ぎます', kana: 'ぬぎます', romaji: 'nugimasu', vietnamese: 'cởi (quần áo, giày)', category: 'verb' },
    { japanese: '持って行きます', kana: 'もっていきます', romaji: 'motte ikimasu', vietnamese: 'mang đi, mang theo', category: 'verb' },
    { japanese: '持って来ます', kana: 'もってきます', romaji: 'motte kimasu', vietnamese: 'mang đến', category: 'verb' },
    { japanese: '心配します', kana: 'しんぱいします', romaji: 'shinpai shimasu', vietnamese: 'lo lắng', category: 'verb' },
    { japanese: '残業します', kana: 'ざんぎょうします', romaji: 'zangyou shimasu', vietnamese: 'làm thêm giờ', category: 'verb' },
    { japanese: '出張します', kana: 'しゅっちょうします', romaji: 'shucchou shimasu', vietnamese: 'đi công tác', category: 'verb' },
    { japanese: '飲みます［薬を～］', kana: 'のみます［くすりを～］', romaji: 'nomimasu [kusuri o ~]', vietnamese: 'uống [thuốc]', category: 'verb' },
    { japanese: '入ります［おふろに～］', kana: 'はいります［おふろに～］', romaji: 'hairimasu [ofuro ni ~]', vietnamese: 'tắm bồn', category: 'verb' },

    { japanese: '大切［な］', kana: 'たいせつ［な］', romaji: 'taisetsu [na]', vietnamese: 'quan trọng, quý giá', category: 'adjective' },
    { japanese: '大丈夫［な］', kana: 'だいじょうぶ［な］', romaji: 'daijoubu [na]', vietnamese: 'không sao, ổn', category: 'adjective' },
    { japanese: '危ない', kana: 'あぶない', romaji: 'abunai', vietnamese: 'nguy hiểm', category: 'adjective' },

    { japanese: '問題', kana: 'もんだい', romaji: 'mondai', vietnamese: 'vấn đề', category: 'noun' },
    { japanese: '答え', kana: 'こたえ', romaji: 'kotae', vietnamese: 'câu trả lời', category: 'noun' },
    { japanese: '禁煙', kana: 'きんえん', romaji: 'kin-en', vietnamese: 'cấm hút thuốc', category: 'noun' },
    { japanese: '健康保険証', kana: 'けんこうほけんしょう', romaji: 'kenkou hokenshou', vietnamese: 'thẻ bảo hiểm y tế', category: 'noun' },
    { japanese: '風邪', kana: 'かぜ', romaji: 'kaze', vietnamese: 'cảm, cúm', category: 'noun' },
    { japanese: '熱', kana: 'ねつ', romaji: 'netsu', vietnamese: 'sốt', category: 'noun' },
    { japanese: '病気', kana: 'びょうき', romaji: 'byouki', vietnamese: 'ốm, bệnh', category: 'noun' },
    { japanese: '薬', kana: 'くすり', romaji: 'kusuri', vietnamese: 'thuốc', category: 'noun' },

    { japanese: '頭が痛い', kana: 'あたまがいたい', romaji: 'atama ga itai', vietnamese: 'đau đầu', category: 'symptom' },
    { japanese: 'お腹が痛い', kana: 'おなかがいたい', romaji: 'onaka ga itai', vietnamese: 'đau bụng', category: 'symptom' },
    { japanese: '歯が痛い', kana: 'はがいたい', romaji: 'ha ga itai', vietnamese: 'đau răng', category: 'symptom' },
    { japanese: '熱がある', kana: 'ねつがある', romaji: 'netsu ga aru', vietnamese: 'bị sốt', category: 'symptom' },
    { japanese: '咳が出る', kana: 'せきがでる', romaji: 'seki ga deru', vietnamese: 'ho', category: 'symptom' },
    { japanese: '鼻水が出る', kana: 'はなみずがでる', romaji: 'hanamizu ga deru', vietnamese: 'sổ mũi', category: 'symptom' },
    { japanese: 'めまいがする', kana: 'めまいがする', romaji: 'memai ga suru', vietnamese: 'chóng mặt', category: 'symptom' },

    { japanese: 'どうしましたか。', kana: 'どうしましたか。', romaji: 'Dou shimashita ka.', vietnamese: 'Có vấn đề gì vậy?', category: 'expression' },
    { japanese: 'お大事に。', kana: 'おだいじに。', romaji: 'Odaiji ni.', vietnamese: 'Chúc mau khỏe.', category: 'expression' },
  ],
  sentences: [
    {
      japanese: 'ここで写真を撮らないでください。',
      romaji: 'Koko de shashin o toranaide kudasai.',
      vietnamese: 'Xin đừng chụp ảnh ở đây.',
    },
    {
      japanese: '薬を飲まなければなりません。',
      romaji: 'Kusuri o nomanakereba narimasen.',
      vietnamese: 'Tôi phải uống thuốc.',
    },
    {
      japanese: '明日は来なくてもいいです。',
      romaji: 'Ashita wa konakute mo ii desu.',
      vietnamese: 'Ngày mai không đến cũng được.',
    },
    {
      japanese: '心配しないでください。',
      romaji: 'Shinpai shinaide kudasai.',
      vietnamese: 'Xin đừng lo.',
    },
    {
      japanese: '保険証を持って来なければなりません。',
      romaji: 'Hokenshou o motte konakereba narimasen.',
      vietnamese: 'Bạn phải mang theo thẻ bảo hiểm.',
    },
  ],
  dialogue: [
    {
      speaker: 'Bác sĩ',
      japanese: 'どうしましたか。',
      romaji: 'Dou shimashita ka.',
      vietnamese: 'Ông bị làm sao?',
    },
    {
      speaker: 'Matsumoto',
      japanese: '一週間ぐらい前から、のどが痛いです。',
      romaji: 'Isshuukan gurai mae kara, nodo ga itai desu.',
      vietnamese: 'Khoảng một tuần nay tôi bị đau họng.',
    },
    {
      speaker: 'Bác sĩ',
      japanese: 'そうですか。口を開けてください。',
      romaji: 'Sou desu ka. Kuchi o akete kudasai.',
      vietnamese: 'Vậy à. Ông há miệng ra giúp tôi.',
    },
    {
      speaker: 'Bác sĩ',
      japanese: '風邪ですね。今日はお風呂に入らないでください。',
      romaji: 'Kaze desu ne. Kyou wa ofuro ni hairanaide kudasai.',
      vietnamese: 'Ông bị cảm. Hôm nay xin đừng tắm bồn.',
    },
    {
      speaker: 'Bác sĩ',
      japanese: '薬を飲んで、早く寝なければなりません。',
      romaji: 'Kusuri o nonde, hayaku nenakereba narimasen.',
      vietnamese: 'Ông phải uống thuốc và ngủ sớm.',
    },
    {
      speaker: 'Matsumoto',
      japanese: 'はい。わかりました。',
      romaji: 'Hai. Wakarimashita.',
      vietnamese: 'Vâng. Tôi hiểu rồi.',
    },
    {
      speaker: 'Bác sĩ',
      japanese: 'お大事に。',
      romaji: 'Odaiji ni.',
      vietnamese: 'Chúc ông mau khỏe.',
    },
  ],
  grammarPoints: [
    {
      title: '1. Vないでください – Xin đừng ~',
      body: 'Dùng khi yêu cầu người nghe không làm một hành động nào đó.',
      examples: [
        'ここでたばこを吸わないでください。',
        '心配しないでください。',
      ],
    },
    {
      title: '2. Vなければなりません – Phải ~',
      body: 'Diễn tả nghĩa vụ, việc bắt buộc phải làm.',
      examples: [
        '薬を飲まなければなりません。',
        '明日、レポートを出さなければなりません。',
      ],
    },
    {
      title: '3. Vなくてもいいです – Không ~ cũng được',
      body: 'Diễn tả không cần thiết phải làm hành động đó.',
      examples: [
        '明日は来なくてもいいです。',
        '今日は残業しなくてもいいです。',
      ],
    },
  ],
};

export interface Lesson17VocabQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export interface Lesson17GrammarQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export const lesson17VocabQuizItems: Lesson17VocabQuizItem[] = [
  { id: 1, vi: 'quên', options: ['忘れます', '覚えます', 'なくします'], correctIndex: 0 },
  { id: 2, vi: 'thẻ bảo hiểm y tế', options: ['健康保険証', '禁煙', '問題'], correctIndex: 0 },
  { id: 3, vi: 'đau đầu', options: ['頭が痛い', '歯が痛い', '熱がある'], correctIndex: 0 },
  { id: 4, vi: 'đi công tác', options: ['出張します', '残業します', '出かけます'], correctIndex: 0 },
  { id: 5, vi: 'chúc mau khỏe', options: ['お大事に。', 'どうしましたか。', '大丈夫です。'], correctIndex: 0 },
];

export const lesson17GrammarQuizItems: Lesson17GrammarQuizItem[] = [
  {
    id: 1,
    vi: 'Xin đừng chụp ảnh ở đây.',
    options: [
      'ここで写真を撮らないでください。',
      'ここで写真を撮らなければなりません。',
      'ここで写真を撮らなくてもいいです。',
    ],
    correctIndex: 0,
  },
  {
    id: 2,
    vi: 'Tôi phải uống thuốc.',
    options: [
      '薬を飲まなければなりません。',
      '薬を飲まないでください。',
      '薬を飲まなくてもいいです。',
    ],
    correctIndex: 0,
    explanationVi: 'Nghĩa vụ/bắt buộc dùng mẫu Vなければなりません.',
  },
  {
    id: 3,
    vi: 'Ngày mai không đến cũng được.',
    options: [
      '明日は来なくてもいいです。',
      '明日は来ないでください。',
      '明日は来なければなりません。',
    ],
    correctIndex: 0,
  },
  {
    id: 4,
    vi: 'Xin đừng lo.',
    options: [
      '心配しないでください。',
      '心配しなければなりません。',
      '心配しなくてもいいですか。',
    ],
    correctIndex: 0,
  },
  {
    id: 5,
    vi: 'Bạn phải mang theo thẻ bảo hiểm.',
    options: [
      '保険証を持って来なければなりません。',
      '保険証を持って来ないでください。',
      '保険証を持って来なくてもいいです。',
    ],
    correctIndex: 0,
  },
];

