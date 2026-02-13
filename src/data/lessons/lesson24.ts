/**
 * Bài 24 (N5): Minna no Nihongo I
 * Chủ điểm: Vてあげます・Vてもらいます・Vてくれます（cho/nhận sự giúp đỡ）.
 */
import type { StaticLessonData } from './lessonTypes';

export const lesson24: StaticLessonData = {
  title: 'Bài 24: Vてあげます・Vてもらいます・Vてくれます',
  description:
    'Bài 24 giới thiệu cách nói "làm gì cho ai" (てあげます), "được ai làm cho" (てもらいます), "ai làm cho mình" (てくれます). Dùng để biểu thị cho/nhận hành vi có lợi.',
  grammarSummary:
    'Vてあげます・Vてもらいます・Vてくれます・N(người)がV（cho）',
  words: [
    { japanese: '貸します', kana: 'かします', romaji: 'kashimasu', vietnamese: 'cho mượn', category: 'verb' },
    { japanese: '教えます', kana: 'おしえます', romaji: 'oshiemasu', vietnamese: 'dạy, chỉ cho biết', category: 'verb' },
    { japanese: '送ります', kana: 'おくります', romaji: 'okurimasu', vietnamese: 'gửi', category: 'verb' },
    { japanese: '届けます', kana: 'とどけます', romaji: 'todokemasu', vietnamese: 'gửi đến, chuyển đến', category: 'verb' },
    { japanese: '呼びます', kana: 'よびます', romaji: 'yobimasu', vietnamese: 'gọi', category: 'verb' },
    { japanese: '手伝います', kana: 'てつだいます', romaji: 'tetsudaimasu', vietnamese: 'giúp đỡ', category: 'verb' },
    { japanese: 'あげます', kana: 'あげます', romaji: 'agemasu', vietnamese: 'cho, tặng (từ mình ra)', category: 'verb' },
    { japanese: 'もらいます', kana: 'もらいます', romaji: 'moraimasu', vietnamese: 'nhận (từ người khác)', category: 'verb' },
    { japanese: 'くれます', kana: 'くれます', romaji: 'kuremasu', vietnamese: 'cho (từ người khác về mình)', category: 'verb' },

    { japanese: 'ネクタイ', kana: 'ネクタイ', romaji: 'nekutai', vietnamese: 'cà vạt', category: 'noun' },
    { japanese: '電話番号', kana: 'でんわばんごう', romaji: 'denwa bangou', vietnamese: 'số điện thoại', category: 'noun' },
    { japanese: 'すてき', kana: 'すてき', romaji: 'suteki', vietnamese: 'đẹp, tuyệt', category: 'adjective' },
  ],
  sentences: [
    {
      japanese: 'わたしは木村さんに本を貸してあげました。',
      romaji: 'Watashi wa Kimura-san ni hon o kashite agemashita.',
      vietnamese: 'Tôi cho chị Kimura mượn sách.',
    },
    {
      japanese: 'わたしは山田さんに図書館の電話番号を教えてもらいました。',
      romaji: 'Watashi wa Yamada-san ni toshokan no denwa bangou o oshiete moraimashita.',
      vietnamese: 'Tôi (đã) được anh Yamada cho biết số điện thoại thư viện.',
    },
    {
      japanese: '母は［わたしに］セーターを送ってくれました。',
      romaji: 'Haha wa [watashi ni] seetaa o okutte kuremashita.',
      vietnamese: 'Mẹ gửi [cho tôi] một cái áo len.',
    },
    {
      japanese: 'すてきなネクタイですね。…ええ、佐藤さんがくれました。',
      romaji: 'Suteki na nekutai desu ne. …Ee, Satou-san ga kuremashita.',
      vietnamese: 'Cà vạt đẹp nhỉ. …Vâng, chị Sato tặng tôi đấy ạ.',
    },
    {
      japanese: 'タクシーを呼びましょうか。',
      romaji: 'Takushii o yobimashou ka.',
      vietnamese: 'Tôi gọi taxi cho anh/chị nhé.',
    },
    {
      japanese: '手伝いましょうか。',
      romaji: 'Tetsudaimashou ka.',
      vietnamese: 'Tôi giúp anh/chị nhé.',
    },
  ],
  dialogue: [
    {
      speaker: 'A',
      japanese: 'その荷物、重そうですね。手伝いましょうか。',
      romaji: 'Sono nimotsu, omosou desu ne. Tetsudaimashou ka.',
      vietnamese: 'Hành lý đó trông nặng nhỉ. Tôi giúp anh/chị nhé.',
    },
    {
      speaker: 'B',
      japanese: 'すみません。お願いします。',
      romaji: 'Sumimasen. Onegai shimasu.',
      vietnamese: 'Xin lỗi. Nhờ anh/chị.',
    },
    {
      speaker: 'A',
      japanese: '駅まで案内してあげましょうか。',
      romaji: 'Eki made annai shite agemashou ka.',
      vietnamese: 'Tôi dẫn anh/chị đến ga nhé.',
    },
    {
      speaker: 'B',
      japanese: 'ありがとうございます。',
      romaji: 'Arigatou gozaimasu.',
      vietnamese: 'Cảm ơn anh/chị.',
    },
  ],
  grammarPoints: [
    {
      title: '1. Vてあげます',
      body: 'Người nói (hoặc người trong nhóm) làm việc có lợi cho người khác với thiện chí. Cấu trúc: (Aは) Bに ～てあげます. Lưu ý: Khi chủ ngữ là mình, tránh dùng với người không thân hoặc cấp trên vì dễ gây cảm giác khoe khoang. Muốn đề nghị lịch sự thì dùng Vますましょうか.',
      examples: [
        'わたしは木村さんに本を貸してあげました。',
        'タクシーを呼びましょうか。（Bài 14 - đề nghị lịch sự）',
        '手伝いましょうか。',
      ],
    },
    {
      title: '2. Vてもらいます',
      body: 'Biểu thị sự biết ơn của bên nhận hành vi có lợi. (Aは) Bに ～てもらいます = A được B làm cho.',
      examples: [
        'わたしは山田さんに図書館の電話番号を教えてもらいました。',
      ],
    },
    {
      title: '3. Vてくれます',
      body: 'Người khác làm việc có lợi cho mình (hoặc người trong nhóm mình). Nhấn mạnh người làm ơn. わたしに thường được lược bỏ khi người nhận là người nói.',
      examples: [
        '母は［わたしに］セーターを送ってくれました。',
      ],
    },
    {
      title: '4. N(người) が V（cho）',
      body: 'Khi thêm thông tin mới về danh từ (ai đã cho/tặng), chủ ngữ hành động dùng が.',
      examples: [
        'すてきなネクタイですね。…ええ、佐藤さんがくれました。',
      ],
    },
  ],
};

export interface Lesson24VocabQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export interface Lesson24GrammarQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export const lesson24VocabQuizItems: Lesson24VocabQuizItem[] = [
  { id: 1, vi: 'cho mượn', options: ['貸します', '教えます', '送ります'], correctIndex: 0 },
  { id: 2, vi: 'cho (từ người khác về mình)', options: ['くれます', 'あげます', 'もらいます'], correctIndex: 0 },
  { id: 3, vi: 'nhận (từ người khác)', options: ['もらいます', 'あげます', 'くれます'], correctIndex: 0 },
  { id: 4, vi: 'giúp đỡ', options: ['手伝います', '呼びます', '届けます'], correctIndex: 0 },
  { id: 5, vi: 'số điện thoại', options: ['電話番号', 'ネクタイ', 'セーター'], correctIndex: 0 },
];

export const lesson24GrammarQuizItems: Lesson24GrammarQuizItem[] = [
  {
    id: 1,
    vi: 'Tôi cho chị Kimura mượn sách.',
    options: [
      'わたしは木村さんに本を貸してあげました。',
      'わたしは木村さんに本を貸してもらいました。',
      'わたしは木村さんに本を貸してくれました。',
    ],
    correctIndex: 0,
    explanationVi: 'Làm cho người khác: Vてあげます.',
  },
  {
    id: 2,
    vi: 'Tôi được anh Yamada cho biết số điện thoại thư viện.',
    options: [
      'わたしは山田さんに図書館の電話番号を教えてもらいました。',
      'わたしは山田さんに図書館の電話番号を教えてあげました。',
      '山田さんはわたしに図書館の電話番号を教えてもらいました。',
    ],
    correctIndex: 0,
  },
  {
    id: 3,
    vi: 'Mẹ gửi cho tôi áo len.',
    options: [
      '母はセーターを送ってくれました。',
      '母はセーターを送ってあげました。',
      '母はセーターを送ってもらいました。',
    ],
    correctIndex: 0,
    explanationVi: 'Người khác làm cho mình: Vてくれます.',
  },
  {
    id: 4,
    vi: 'Tôi gọi taxi cho anh/chị nhé.（Đề nghị lịch sự）',
    options: [
      'タクシーを呼びましょうか。',
      'タクシーを呼んであげましょうか。',
      'タクシーを呼んでもらいましょうか。',
    ],
    correctIndex: 0,
  },
  {
    id: 5,
    vi: 'Chị Sato tặng tôi (đấy).',
    options: ['佐藤さんがくれました。', '佐藤さんがもらいました。', '佐藤さんがあげました。'], correctIndex: 0 },
];
