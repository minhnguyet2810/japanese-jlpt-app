/**
 * Bài 19 (N5): Minna no Nihongo I
 * Chủ điểm: thể た, kinh nghiệm, liệt kê hành động, thay đổi trạng thái.
 */
import type { StaticLessonData } from './lessonTypes';

export const lesson19: StaticLessonData = {
  title: 'Bài 19: Thể た・Vたことがあります・VたりVたりします',
  description:
    'Bài 19 giới thiệu thể た của động từ, cách nói kinh nghiệm từng làm, liệt kê nhiều hoạt động không theo thứ tự và cách diễn tả sự thay đổi trạng thái.',
  grammarSummary:
    'Vて→Vた・Vたことがあります・VたりVたりします・いAく/なA・N に なります・そうですね',
  words: [
    { japanese: '登ります［山に～］', kana: 'のぼります［やまに～］', romaji: 'noborimasu [yama ni ~]', vietnamese: 'leo [núi]', category: 'verb' },
    { japanese: '泊まります［ホテルに～］', kana: 'とまります［ホテルに～］', romaji: 'tomarimasu [hoteru ni ~]', vietnamese: 'trọ [khách sạn]', category: 'verb' },
    { japanese: '掃除します', kana: 'そうじします', romaji: 'souji shimasu', vietnamese: 'dọn vệ sinh', category: 'verb' },
    { japanese: '洗濯します', kana: 'せんたくします', romaji: 'sentaku shimasu', vietnamese: 'giặt', category: 'verb' },
    { japanese: '練習します', kana: 'れんしゅうします', romaji: 'renshuu shimasu', vietnamese: 'luyện tập, thực hành', category: 'verb' },
    { japanese: 'なります', kana: 'なります', romaji: 'narimasu', vietnamese: 'trở thành, trở nên', category: 'verb' },

    { japanese: '眠い', kana: 'ねむい', romaji: 'nemui', vietnamese: 'buồn ngủ', category: 'adjective' },
    { japanese: '強い', kana: 'つよい', romaji: 'tsuyoi', vietnamese: 'mạnh', category: 'adjective' },
    { japanese: '弱い', kana: 'よわい', romaji: 'yowai', vietnamese: 'yếu', category: 'adjective' },
    { japanese: '調子がいい', kana: 'ちょうしがいい', romaji: 'choushi ga ii', vietnamese: 'trong tình trạng tốt', category: 'adjective' },
    { japanese: '調子が悪い', kana: 'ちょうしがわるい', romaji: 'choushi ga warui', vietnamese: 'trong tình trạng xấu', category: 'adjective' },

    { japanese: '調子', kana: 'ちょうし', romaji: 'choushi', vietnamese: 'tình trạng, trạng thái', category: 'noun' },
    { japanese: 'ゴルフ', kana: 'ゴルフ', romaji: 'gorufu', vietnamese: 'gôn (chơi gôn)', category: 'noun' },
    { japanese: '相撲', kana: 'すもう', romaji: 'sumou', vietnamese: 'vật Sumo', category: 'noun' },
    { japanese: 'パチンコ', kana: 'パチンコ', romaji: 'pachinko', vietnamese: 'trò chơi pachinko', category: 'noun' },
    { japanese: 'お茶', kana: 'おちゃ', romaji: 'ocha', vietnamese: 'trà đạo/trà', category: 'noun' },
    { japanese: '日', kana: 'ひ', romaji: 'hi', vietnamese: 'ngày', category: 'noun' },
    { japanese: '一度', kana: 'いちど', romaji: 'ichido', vietnamese: 'một lần', category: 'noun' },
    { japanese: '一度も', kana: 'いちども', romaji: 'ichido mo', vietnamese: 'chưa lần nào', category: 'noun' },
    { japanese: 'だんだん', kana: 'だんだん', romaji: 'dandan', vietnamese: 'dần dần', category: 'noun' },
    { japanese: 'もうすぐ', kana: 'もうすぐ', romaji: 'mousugu', vietnamese: 'sắp', category: 'noun' },

    { japanese: '乾杯', kana: 'かんぱい', romaji: 'kanpai', vietnamese: 'nâng cốc/cạn chén', category: 'expression' },
    { japanese: '実は', kana: 'じつは', romaji: 'jitsu wa', vietnamese: 'thật ra là/sự thật là', category: 'expression' },
    { japanese: 'ダイエット', kana: 'ダイエット', romaji: 'daietto', vietnamese: 'việc ăn kiêng/chế độ giảm cân', category: 'expression' },
    { japanese: '何回も', kana: 'なんかいも', romaji: 'nankai mo', vietnamese: 'nhiều lần', category: 'expression' },
    { japanese: 'しかし', kana: 'しかし', romaji: 'shikashi', vietnamese: 'nhưng, tuy nhiên', category: 'expression' },
    { japanese: '無理［な］', kana: 'むり［な］', romaji: 'muri [na]', vietnamese: 'không thể, quá sức', category: 'expression' },
    { japanese: '体にいい', kana: 'からだにいい', romaji: 'karada ni ii', vietnamese: 'tốt cho sức khỏe', category: 'expression' },
    { japanese: 'ケーキ', kana: 'ケーキ', romaji: 'keeki', vietnamese: 'bánh ngọt', category: 'expression' },
    { japanese: 'おかげさまで', kana: 'おかげさまで', romaji: 'okagesama de', vietnamese: 'cảm ơn, nhờ ơn anh/chị', category: 'expression' },
    { japanese: 'そうですね', kana: 'そうですね', romaji: 'sou desu ne', vietnamese: 'vâng, đúng thế nhỉ', category: 'expression' },
  ],
  sentences: [
    {
      japanese: 'わたしは相撲を見たことがあります。',
      romaji: 'Watashi wa sumou o mita koto ga arimasu.',
      vietnamese: 'Tôi đã từng xem vật Sumo.',
    },
    {
      japanese: '休みの日はゴルフをしたり、映画を見たりします。',
      romaji: 'Yasumi no hi wa gorufu o shitari, eiga o mitari shimasu.',
      vietnamese: 'Ngày nghỉ tôi chơi gôn, đi xem phim v.v.',
    },
    {
      japanese: 'だんだん暖かくなります。',
      romaji: 'Dandan atatakaku narimasu.',
      vietnamese: 'Trời dần dần ấm lên.',
    },
    {
      japanese: '日本語が上手になりたいです。',
      romaji: 'Nihongo ga jouzu ni naritai desu.',
      vietnamese: 'Tôi muốn tiếng Nhật trở nên giỏi hơn.',
    },
    {
      japanese: 'おかげさまで、調子がいいです。',
      romaji: 'Okagesama de, choushi ga ii desu.',
      vietnamese: 'Cảm ơn, nhờ vậy tình trạng của tôi tốt.',
    },
  ],
  dialogue: [
    {
      speaker: 'Mọi người',
      japanese: '乾杯！',
      romaji: 'Kanpai!',
      vietnamese: 'Cạn chén!',
    },
    {
      speaker: 'Matsumoto',
      japanese: 'マリアさん、あまり食べませんね。',
      romaji: 'Maria-san, amari tabemasen ne.',
      vietnamese: 'Chị Maria không ăn mấy nhỉ.',
    },
    {
      speaker: 'Maria',
      japanese: 'ええ。実は、ダイエットしているんです。',
      romaji: 'Ee. Jitsu wa, daietto shite irun desu.',
      vietnamese: 'Vâng. Thật ra tôi đang ăn kiêng.',
    },
    {
      speaker: 'Matsumoto',
      japanese: '何回もダイエットしましたが、だめでした。',
      romaji: 'Nankai mo daietto shimashita ga, dame deshita.',
      vietnamese: 'Tôi cũng đã ăn kiêng nhiều lần nhưng không được.',
    },
    {
      speaker: 'Tadashi',
      japanese: 'しかし、無理なダイエットは体によくないですよ。',
      romaji: 'Shikashi, muri na daietto wa karada ni yokunai desu yo.',
      vietnamese: 'Nhưng chế độ giảm cân quá mức không tốt cho cơ thể đâu.',
    },
    {
      speaker: 'Matsumoto',
      japanese: 'マリアさん、このケーキおいしいですよ。',
      romaji: 'Maria-san, kono keeki oishii desu yo.',
      vietnamese: 'Chị Maria, bánh này ngon lắm.',
    },
    {
      speaker: 'Maria',
      japanese: 'そうですか。じゃ、あしたからまたダイエットします。',
      romaji: 'Sou desu ka. Ja, ashita kara mata daietto shimasu.',
      vietnamese: 'Thế à. Vậy thì từ ngày mai tôi lại ăn kiêng tiếp.',
    },
  ],
  grammarPoints: [
    {
      title: '1. Thể た của động từ',
      body: 'Đổi từ thể て sang thể た tương ứng: 〜て→〜た, 〜で→〜だ. Đây là nền tảng cho mẫu kinh nghiệm và liệt kê hành động.',
      examples: [
        '書いて → 書いた',
        '飲んで → 飲んだ',
        'して → した',
      ],
    },
    {
      title: '2. Vたことがあります – Đã từng ~',
      body: 'Dùng để nói kinh nghiệm đã từng làm một việc trong quá khứ.',
      examples: [
        '馬に乗ったことがあります。',
        '北海道へ行ったことがあります。',
      ],
    },
    {
      title: '3. Vたり、Vたりします – Làm ~, làm ~',
      body: 'Liệt kê vài hành động tiêu biểu (không nêu đầy đủ tất cả). Động từ trong mẫu dùng thể た + り.',
      examples: [
        '日曜日はテニスをしたり、映画を見たりします。',
        '休みの日は本を読んだり、音楽を聞いたりします。',
      ],
    },
    {
      title: '4. いAくなります／なA・N に なります',
      body: 'Diễn tả sự thay đổi trạng thái: trở nên ~.',
      examples: [
        '寒くなりました。→ Trời trở lạnh.',
        '元気になりました。→ Khỏe lên.',
        '25歳になりました。→ Sang tuổi 25.',
      ],
    },
    {
      title: '5. そうですね',
      body: 'Dùng để bày tỏ đồng tình/tiếp nhận ý kiến người đối thoại.',
      examples: [
        'A: 今日は寒いですね。B: そうですね。',
        'A: この映画は面白いですね。B: そうですね。',
      ],
    },
  ],
};

export interface Lesson19VocabQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export interface Lesson19GrammarQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export const lesson19VocabQuizItems: Lesson19VocabQuizItem[] = [
  { id: 1, vi: 'đã từng (kinh nghiệm)', options: ['〜たことがあります', '〜たり〜たりします', '〜ようになります'], correctIndex: 0 },
  { id: 2, vi: 'trong tình trạng tốt', options: ['調子がいい', '調子が悪い', '無理'], correctIndex: 0 },
  { id: 3, vi: 'nâng cốc/cạn chén', options: ['乾杯', '実は', 'おかげさまで'], correctIndex: 0 },
  { id: 4, vi: 'dần dần', options: ['だんだん', 'もうすぐ', '一度も'], correctIndex: 0 },
  { id: 5, vi: 'ăn kiêng', options: ['ダイエット', 'ゴルフ', '相撲'], correctIndex: 0 },
];

export const lesson19GrammarQuizItems: Lesson19GrammarQuizItem[] = [
  {
    id: 1,
    vi: 'Tôi đã từng xem vật Sumo.',
    options: [
      'わたしは相撲を見たことがあります。',
      'わたしは相撲を見たりします。',
      'わたしは相撲を見てなります。',
    ],
    correctIndex: 0,
    explanationVi: 'Kinh nghiệm dùng mẫu Vたことがあります.',
  },
  {
    id: 2,
    vi: 'Ngày nghỉ tôi chơi gôn, xem phim v.v.',
    options: [
      '休みの日はゴルフをしたり、映画を見たりします。',
      '休みの日はゴルフをしたことがあります。',
      '休みの日はゴルフをしてなります。',
    ],
    correctIndex: 0,
  },
  {
    id: 3,
    vi: 'Trời dần dần ấm lên.',
    options: [
      'だんだん暖かくなります。',
      'だんだん暖かいたりします。',
      'だんだん暖かいことがあります。',
    ],
    correctIndex: 0,
  },
  {
    id: 4,
    vi: 'Tôi khỏe lên rồi.',
    options: [
      '元気になりました。',
      '元気たりしました。',
      '元気がことがあります。',
    ],
    correctIndex: 0,
  },
  {
    id: 5,
    vi: 'Vâng, đúng thế nhỉ.',
    options: ['そうですね。', 'おかげさまで。', '実は。'],
    correctIndex: 0,
  },
];
