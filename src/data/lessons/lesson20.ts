/**
 * Bài 20 (N5): Minna no Nihongo I
 * Chủ điểm: kiểu lịch sự/kiểu thông thường (plain form) trong hội thoại.
 */
import type { StaticLessonData } from './lessonTypes';

export const lesson20: StaticLessonData = {
  title: 'Bài 20: Kiểu thông thường（普通形）・hội thoại thân mật',
  description:
    'Bài 20 giúp chuyển từ kiểu lịch sự sang kiểu thông thường trong hội thoại: cách hỏi đáp thân mật, lược trợ từ, dùng けど và rút gọn ている → てる.',
  grammarSummary:
    'Kiểu lịch sự/kiểu thông thường・câu hỏi dạng thường・lược trợ từ・〜てる・けど',
  words: [
    { japanese: '要ります［ビザが～］', kana: 'いります［ビザが～］', romaji: 'irimasu [biza ga ~]', vietnamese: 'cần [thị thực/visa]', category: 'verb' },
    { japanese: '調べます', kana: 'しらべます', romaji: 'shirabemasu', vietnamese: 'tìm hiểu, điều tra, xem', category: 'verb' },
    { japanese: '直します', kana: 'なおします', romaji: 'naoshimasu', vietnamese: 'sửa, chữa', category: 'verb' },
    { japanese: '修理します', kana: 'しゅうりします', romaji: 'shuuri shimasu', vietnamese: 'sửa chữa, tu sửa', category: 'verb' },
    { japanese: '電話します', kana: 'でんわします', romaji: 'denwa shimasu', vietnamese: 'gọi điện thoại', category: 'verb' },

    { japanese: '僕', kana: 'ぼく', romaji: 'boku', vietnamese: 'tớ (cách xưng thân mật của nam)', category: 'pronoun' },
    { japanese: '君', kana: 'きみ', romaji: 'kimi', vietnamese: 'cậu, bạn (thân mật)', category: 'pronoun' },
    { japanese: '～君', kana: '～くん', romaji: '~kun', vietnamese: 'anh/cậu ~ (hậu tố thân mật)', category: 'pronoun' },
    { japanese: 'うん', kana: 'うん', romaji: 'un', vietnamese: 'ừ (thân mật của はい)', category: 'pronoun' },
    { japanese: 'ううん', kana: 'ううん', romaji: 'uun', vietnamese: 'không (thân mật của いいえ)', category: 'pronoun' },

    { japanese: 'サラリーマン', kana: 'サラリーマン', romaji: 'sarariiman', vietnamese: 'người làm việc cho công ty', category: 'noun' },
    { japanese: 'ことば', kana: 'ことば', romaji: 'kotoba', vietnamese: 'từ, tiếng', category: 'noun' },
    { japanese: '物価', kana: 'ぶっか', romaji: 'bukka', vietnamese: 'giá cả, mức giá', category: 'noun' },
    { japanese: '着物', kana: 'きもの', romaji: 'kimono', vietnamese: 'kimono (trang phục truyền thống Nhật)', category: 'noun' },
    { japanese: 'ビザ', kana: 'ビザ', romaji: 'biza', vietnamese: 'thị thực, visa', category: 'noun' },
    { japanese: '初め', kana: 'はじめ', romaji: 'hajime', vietnamese: 'ban đầu, đầu tiên', category: 'noun' },
    { japanese: '終わり', kana: 'おわり', romaji: 'owari', vietnamese: 'kết thúc', category: 'noun' },

    { japanese: 'こっち', kana: 'こっち', romaji: 'kocchi', vietnamese: 'phía này, chỗ này', category: 'expression' },
    { japanese: 'そっち', kana: 'そっち', romaji: 'socchi', vietnamese: 'phía đó, chỗ đó', category: 'expression' },
    { japanese: 'あっち', kana: 'あっち', romaji: 'acchi', vietnamese: 'phía kia, chỗ kia', category: 'expression' },
    { japanese: 'どっち', kana: 'どっち', romaji: 'docchi', vietnamese: 'cái nào, phía nào', category: 'expression' },
    { japanese: 'この間', kana: 'このあいだ', romaji: 'kono aida', vietnamese: 'vừa rồi, hôm nọ', category: 'expression' },
    { japanese: 'みんなで', kana: 'みんなで', romaji: 'minna de', vietnamese: 'mọi người cùng', category: 'expression' },
    { japanese: '～けど', kana: '～けど', romaji: '~kedo', vietnamese: '~, nhưng (kiểu thân mật của が)', category: 'expression' },
  ],
  sentences: [
    {
      japanese: 'サントスさんはパーティーに来ない。',
      romaji: 'Santosu-san wa paatii ni konai.',
      vietnamese: 'Anh Santos không đến dự tiệc.',
    },
    {
      japanese: '日本は物価が高い。',
      romaji: 'Nihon wa bukka ga takai.',
      vietnamese: 'Ở Nhật Bản giá cả đắt đỏ.',
    },
    {
      japanese: '沖縄の海、きれいだね。',
      romaji: 'Okinawa no umi, kirei da ne.',
      vietnamese: 'Biển ở Okinawa đẹp nhỉ.',
    },
    {
      japanese: 'きょう、ぼくの誕生日。',
      romaji: 'Kyou, boku no tanjoubi.',
      vietnamese: 'Hôm nay là sinh nhật tôi.',
    },
    {
      japanese: '辞書、持ってる？',
      romaji: 'Jisho, motteru?',
      vietnamese: 'Cậu có từ điển không?',
    },
  ],
  dialogue: [
    {
      speaker: 'Kobayashi',
      japanese: '夏休み、国へ帰るの？',
      romaji: 'Natsuyasumi, kuni e kaeru no?',
      vietnamese: 'Nghỉ hè cậu có về nước không?',
    },
    {
      speaker: 'Thawaphon',
      japanese: 'ううん。帰らない。君は？',
      romaji: 'Uun. Kaeranai. Kimi wa?',
      vietnamese: 'Không. Tớ không về. Còn cậu?',
    },
    {
      speaker: 'Kobayashi',
      japanese: 'どうしようかな。富士山に登りたいけど。',
      romaji: 'Dou shiyou kana. Fujisan ni noboritai kedo.',
      vietnamese: 'Tớ đang phân vân đây. Muốn leo núi Phú Sĩ nhưng...',
    },
    {
      speaker: 'Thawaphon',
      japanese: 'まだ登ったことがないの？',
      romaji: 'Mada nobotta koto ga nai no?',
      vietnamese: 'Cậu chưa leo bao giờ à?',
    },
    {
      speaker: 'Kobayashi',
      japanese: 'うん。一緒に行かない？',
      romaji: 'Un. Issho ni ikanai?',
      vietnamese: 'Ừ. Đi cùng tớ không?',
    },
    {
      speaker: 'Thawaphon',
      japanese: 'いいね。じゃ、調べて、あとで電話するよ。',
      romaji: 'Ii ne. Ja, shirabete, ato de denwa suru yo.',
      vietnamese: 'Hay đó. Vậy để tớ tìm hiểu rồi gọi điện sau nhé.',
    },
  ],
  grammarPoints: [
    {
      title: '1. Kiểu lịch sự và kiểu thông thường',
      body: 'Kiểu lịch sự dùng です/ます; kiểu thông thường bỏ です/ます và dùng dạng ngắn.',
      examples: [
        'あした 東京へ 行きます。→ あした 東京へ 行く。',
        '相撲が 好きです。→ 相撲が 好きだ。',
      ],
    },
    {
      title: '2. Phân biệt ngữ cảnh dùng kiểu thường',
      body: 'Dùng với bạn bè thân, đồng nghiệp thân, người trong gia đình; tránh dùng với người lớn tuổi/lần đầu gặp.',
      examples: [
        '親しい友だちとは普通形で話します。',
        '店員さんには丁寧形で話します。',
      ],
    },
    {
      title: '3. Hội thoại kiểu thông thường',
      body: 'Câu hỏi thường bỏ か; danh từ/na-adj thường dùng だ ở câu trần thuật. Nhiều trợ từ có thể lược nếu ngữ cảnh rõ.',
      examples: [
        'コーヒー飲む？',
        '今晩暇？',
        'ごはん食べる？',
      ],
    },
    {
      title: '4. ている → てる (rút gọn hội thoại)',
      body: 'Trong hội thoại thân mật, 〜ている thường rút còn 〜てる.',
      examples: [
        '持っている？ → 持ってる？',
        '食べている。→ 食べてる。',
      ],
    },
    {
      title: '5. けど',
      body: 'けど có nghĩa giống が trong văn nói, thường dùng để nối ý nhẹ nhàng hơn.',
      examples: [
        '辛いけど、おいしい。',
        'チケットがあるけど、いっしょに行かない？',
      ],
    },
  ],
};

export interface Lesson20VocabQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export interface Lesson20GrammarQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export const lesson20VocabQuizItems: Lesson20VocabQuizItem[] = [
  { id: 1, vi: 'thị thực, visa', options: ['ビザ', '物価', 'ことば'], correctIndex: 0 },
  { id: 2, vi: 'phía này, chỗ này', options: ['こっち', 'そっち', 'あっち'], correctIndex: 0 },
  { id: 3, vi: 'tìm hiểu, điều tra', options: ['調べます', '直します', '電話します'], correctIndex: 0 },
  { id: 4, vi: '~, nhưng (văn nói)', options: ['〜けど', '〜から', '〜まで'], correctIndex: 0 },
  { id: 5, vi: 'tớ (xưng hô thân mật nam)', options: ['僕', '君', '〜君'], correctIndex: 0 },
];

export const lesson20GrammarQuizItems: Lesson20GrammarQuizItem[] = [
  {
    id: 1,
    vi: 'Nghỉ hè cậu có về nước không?',
    options: [
      '夏休み、国へ帰るの？',
      '夏休み、国へ帰りますか。',
      '夏休み、国へ帰るですか。',
    ],
    correctIndex: 0,
    explanationVi: 'Hội thoại kiểu thường: dùng の？ và bỏ ます/です.',
  },
  {
    id: 2,
    vi: 'Cậu có từ điển không?',
    options: [
      '辞書、持ってる？',
      '辞書を持っているか。',
      '辞書、持っています？',
    ],
    correctIndex: 0,
  },
  {
    id: 3,
    vi: 'Món cà-ri đó ngon nhưng cay.',
    options: [
      'そのカレー、おいしいけど、辛い。',
      'そのカレー、おいしいですけど、辛いです。',
      'そのカレー、おいしいから、辛い。',
    ],
    correctIndex: 0,
  },
  {
    id: 4,
    vi: 'Ở Nhật Bản giá cả đắt đỏ.',
    options: [
      '日本は物価が高い。',
      '日本は物価が高いです。',
      '日本で物価が高いだ。',
    ],
    correctIndex: 0,
  },
  {
    id: 5,
    vi: 'Không, tớ không có.',
    options: ['ううん、持ってない。', 'いいえ、持ってないです。', 'ううん、持ってません。'],
    correctIndex: 0,
  },
];
