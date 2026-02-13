/**
 * Bài 14: Động từ thể て (Minna no Nihongo I – Bản dịch, quanh trang 106–115)
 *
 * Chủ đề:
 * - Động từ thao tác: つけます・けします・あけます・しめます・いそぎます・まちます・とめます・まがります・もちます・とります・てつだいます・よびます・はなします・みせます・おしえます・はじめます・ふります・コピーします…
 * - Cấu trúc: Vて ください / Vて います / Vましょうか / N が V (câu が câu, hiện tượng tự nhiên…)
 */

export type Lesson14WordCategory =
  | 'verb'
  | 'noun'
  | 'place'
  | 'expression'
  | 'phrase';

export interface Lesson14Word {
  japanese: string;
  kana: string;
  romaji: string;
  vietnamese: string;
  category: Lesson14WordCategory;
}

export interface Lesson14Sentence {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface Lesson14DialogueTurn {
  speaker: string;
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface Lesson14GrammarPoint {
  title: string;
  body: string;
  examples: string[];
  note?: string;
}

export interface Lesson14Data {
  title: string;
  description: string;
  grammarSummary: string;
  words: Lesson14Word[];
  sentences: Lesson14Sentence[];
  dialogue: Lesson14DialogueTurn[];
  grammarPoints: Lesson14GrammarPoint[];
}

export const lesson14: Lesson14Data = {
  title: 'Bài 14: Động từ thể て（Vてください・Vています・Vましょうか）',
  description:
    'Cách chia động từ sang thể て, dùng trong các mẫu câu Vてください (hãy ~), Vています (đang ~ / trạng thái), Vましょうか (tôi ~ nhé?), và mẫu câu N が V để miêu tả hiện tượng, trạng thái.',
  grammarSummary:
    'Nhóm I/II/III ・ Vてください（hãy ~） ・ Vています（đang／trạng thái） ・ Vましょうか（tôi ~ nhé） ・ N が V（câu が câu）',

  // I. Từ vựng – rút gọn nhưng bám sát sách
  words: [
    // Động từ thao tác
    { japanese: 'つけます', kana: 'つけます', romaji: 'tsukemasu', vietnamese: 'bật (điện, máy điều hòa)', category: 'verb' },
    { japanese: '消します', kana: 'けします', romaji: 'keshimasu', vietnamese: 'tắt (điện, máy điều hòa)', category: 'verb' },
    { japanese: '開けます', kana: 'あけます', romaji: 'akemasu', vietnamese: 'mở (cửa, cửa sổ)', category: 'verb' },
    { japanese: '閉めます', kana: 'しめます', romaji: 'shimemasu', vietnamese: 'đóng (cửa, cửa sổ)', category: 'verb' },
    { japanese: '急ぎます', kana: 'いそぎます', romaji: 'isogimasu', vietnamese: 'vội, gấp', category: 'verb' },
    { japanese: '待ちます', kana: 'まちます', romaji: 'machimasu', vietnamese: 'chờ, đợi', category: 'verb' },
    { japanese: '止めます', kana: 'とめます', romaji: 'tomemasu', vietnamese: 'dừng, đỗ (xe)', category: 'verb' },
    { japanese: '曲がります', kana: 'まがります', romaji: 'magarimasu', vietnamese: 'rẽ, quẹo [phải]', category: 'verb' },
    { japanese: '持ちます', kana: 'もちます', romaji: 'mochimasu', vietnamese: 'mang, cầm', category: 'verb' },
    { japanese: '取ります', kana: 'とります', romaji: 'torimasu', vietnamese: 'lấy', category: 'verb' },
    { japanese: '手伝います', kana: 'てつだいます', romaji: 'tetsudaimasu', vietnamese: 'giúp (làm việc)', category: 'verb' },
    { japanese: '呼びます', kana: 'よびます', romaji: 'yobimasu', vietnamese: 'gọi [tên, tắc-xi]', category: 'verb' },
    { japanese: '話します', kana: 'はなします', romaji: 'hanashimasu', vietnamese: 'nói, nói chuyện', category: 'verb' },
    { japanese: '見せます', kana: 'みせます', romaji: 'misemasu', vietnamese: 'cho xem, trình', category: 'verb' },
    { japanese: '教えます', kana: 'おしえます', romaji: 'oshiemasu', vietnamese: 'nói, cho biết [địa chỉ]', category: 'verb' },
    { japanese: '始めます', kana: 'はじめます', romaji: 'hajimemasu', vietnamese: 'bắt đầu', category: 'verb' },
    { japanese: '降ります［雨が～］', kana: 'ふります［あめが～］', romaji: 'furimasu [ame ga ~]', vietnamese: '(mưa) rơi', category: 'verb' },
    { japanese: 'コピーします', kana: 'コピーします', romaji: 'kopī shimasu', vietnamese: 'copy, sao chép', category: 'verb' },

    // Một số từ vựng quanh nhà ga (rút trích mục III trong sách)
    { japanese: '駅', kana: 'えき', romaji: 'eki', vietnamese: 'nhà ga', category: 'place' },
    { japanese: '切符売り場', kana: 'きっぷうりば', romaji: 'kippu uriba', vietnamese: 'chỗ bán vé', category: 'place' },
    { japanese: '改札口', kana: 'かいさつぐち', romaji: 'kaisatsuguchi', vietnamese: 'cửa soát vé', category: 'place' },
    { japanese: '出口', kana: 'でぐち', romaji: 'deguchi', vietnamese: 'cửa ra', category: 'place' },
    { japanese: '入口', kana: 'いりぐち', romaji: 'iriguchi', vietnamese: 'cửa vào', category: 'place' },
    { japanese: '東口', kana: 'ひがしぐち', romaji: 'higashiguchi', vietnamese: 'cửa Đông', category: 'place' },
    { japanese: '西口', kana: 'にしぐち', romaji: 'nishiguchi', vietnamese: 'cửa Tây', category: 'place' },
    { japanese: '北口', kana: 'きたぐち', romaji: 'kitaguchi', vietnamese: 'cửa Bắc', category: 'place' },
    { japanese: '南口', kana: 'みなみぐち', romaji: 'minamiguchi', vietnamese: 'cửa Nam', category: 'place' },
    { japanese: '中央口', kana: 'ちゅうおうぐち', romaji: 'chūōguchi', vietnamese: 'cửa Trung tâm', category: 'place' },

    // Biểu hiện phụ trợ
    { japanese: 'ゆっくり', kana: 'ゆっくり', romaji: 'yukkuri', vietnamese: 'chậm, thong thả, thoải mái', category: 'expression' },
    { japanese: 'すぐ', kana: 'すぐ', romaji: 'sugu', vietnamese: 'ngay, lập tức', category: 'expression' },
    { japanese: 'もう少し', kana: 'もうすこし', romaji: 'mō sukoshi', vietnamese: 'thêm một chút nữa thôi', category: 'expression' },
    { japanese: 'もう', kana: 'もう', romaji: 'mō', vietnamese: 'đã, nữa', category: 'expression' },
    { japanese: 'いいですよ', kana: 'いいですよ', romaji: 'ii desu yo', vietnamese: 'Được chứ./ Được ạ.', category: 'phrase' },
    { japanese: 'さあ', kana: 'さあ', romaji: 'sā', vietnamese: 'nào, thôi (dùng để thúc giục/khuyến khích)', category: 'phrase' },
    { japanese: 'あれ？', kana: 'あれ？', romaji: 'are?', vietnamese: 'Ơ! (ngạc nhiên khi phát hiện điều gì)', category: 'phrase' },
  ],

  // II. Phần dịch – mẫu câu & ví dụ (chọn các câu tiêu biểu)
  sentences: [
    // Mẫu câu: Vて ください
    {
      japanese: 'ちょっと待ってください。',
      romaji: 'Chotto matte kudasai.',
      vietnamese: 'Anh/Chị chờ một chút.',
    },
    {
      japanese: 'ここに住所と名前を書いてください。',
      romaji: 'Koko ni jūsho to namae o kaite kudasai.',
      vietnamese: 'Anh/Chị viết địa chỉ và tên vào đây.',
    },
    {
      japanese: 'このカタログを見せてください。',
      romaji: 'Kono katarogu o misete kudasai.',
      vietnamese: 'Cho tôi xem ca-ta-lô này.',
    },

    // Vています – hành động đang diễn ra
    {
      japanese: 'ミラーさんは今電話をかけています。',
      romaji: 'Mirā-san wa ima denwa o kakete imasu.',
      vietnamese: 'Bây giờ anh Miller đang gọi điện thoại.',
    },
    {
      japanese: '雨が降っています。',
      romaji: 'Ame ga futte imasu.',
      vietnamese: 'Trời đang mưa.',
    },

    // N が V – câu が câu, hiện tượng tự nhiên
    {
      japanese: '駅の前に人がたくさんいます。',
      romaji: 'Eki no mae ni hito ga takusan imasu.',
      vietnamese: 'Trước nhà ga có rất nhiều người.',
    },
  ],

  // Hội thoại: Cho tôi đến Umeda (rút gọn, dựa theo bản dịch)
  dialogue: [
    {
      speaker: 'Karina',
      japanese: '梅田までお願いします。',
      romaji: 'Umeda made onegai shimasu.',
      vietnamese: 'Cho tôi đến Umeda.',
    },
    {
      speaker: 'Tài xế',
      japanese: 'はい。',
      romaji: 'Hai.',
      vietnamese: 'Vâng.',
    },
    {
      speaker: 'Karina',
      japanese: 'すみません、信号を右へ曲がってください。',
      romaji: 'Sumimasen, shingō o migi e magatte kudasai.',
      vietnamese: 'Xin lỗi, anh rẽ phải ở chỗ đèn tín hiệu kia nhé.',
    },
    {
      speaker: 'Tài xế',
      japanese: 'はい。',
      romaji: 'Hai.',
      vietnamese: 'Vâng.',
    },
    {
      speaker: 'Karina',
      japanese: 'まっすぐ行ってください。',
      romaji: 'Massugu itte kudasai.',
      vietnamese: 'Anh đi thẳng nhé.',
    },
    {
      speaker: 'Tài xế',
      japanese: 'ここでいいですか。',
      romaji: 'Koko de ii desu ka.',
      vietnamese: 'Dừng ở đây được không ạ?',
    },
    {
      speaker: 'Karina',
      japanese: 'はい。これでお願いします。',
      romaji: 'Hai. Kore de onegai shimasu.',
      vietnamese: 'Vâng. Gửi anh số tiền này.',
    },
    {
      speaker: 'Tài xế',
      japanese: '１,８００円です。',
      romaji: 'Sen happyaku-en desu.',
      vietnamese: 'Hết 1.800 yên ạ.',
    },
    {
      speaker: 'Karina',
      japanese: 'じゃ、３,２００円ですね。はい。',
      romaji: 'Ja, sanzen nihyaku-en desu ne. Hai.',
      vietnamese: 'Vậy là 3.200 yên chứ gì ạ? Vâng, đây ạ.',
    },
  ],

  // IV. Giải thích ngữ pháp – tóm tắt sát nội dung sách
  grammarPoints: [
    {
      title: '1. Chia nhóm động từ & thể て',
      body:
        'Động từ tiếng Nhật chia thành 3 nhóm theo đuôi ます. Từ thể ます có thể đổi sang thể て bằng các quy tắc: ' +
        'nhóm I (～います・～きます・～ぎます・～みます・～にます・～びます・～ります・～します), nhóm II (～えます), nhóm III (します・きます).',
      examples: ['書きます → 書いて', '急ぎます → 急いで', '飲みます → 飲んで', '食べます → 食べて', 'します → して', '来ます → きて'],
    },
    {
      title: '2. Động từ thể て ください',
      body:
        'Mẫu câu dùng để nhờ vả, yêu cầu hoặc hướng dẫn lịch sự: “Hãy ~”. Thường dùng với người nghe ngang hàng hoặc trên mình nhưng ở mức lịch sự vừa phải.',
      examples: [
        'ちょっと待ってください。→ Anh/Chị chờ một chút.',
        'ここに住所と名前を書いてください。→ Anh/Chị viết địa chỉ và tên vào đây.',
        'このカタログを見せてください。→ Cho tôi xem ca-ta-lô này.',
      ],
    },
    {
      title: '3. Động từ thể て います（đang ~）',
      body:
        'Mẫu câu Vています biểu thị hành động đang diễn ra tại thời điểm nói. Thường đi với trạng từ thời gian như 今. ' +
        'Ví dụ: “Bây giờ anh Miller đang gọi điện thoại.”',
      examples: [
        'ミラーさんは今電話をかけています。→ Bây giờ anh Miller đang gọi điện thoại.',
        '雨が降っています。→ Trời đang mưa.',
      ],
    },
    {
      title: '4. Vて います（trạng thái / thói quen）',
      body:
        'Ngoài hành động đang diễn ra, Vています còn dùng để diễn tả trạng thái kéo dài hoặc hành vi lặp lại như thói quen (sẽ được nhấn mạnh hơn ở Bài 15).',
      examples: ['毎朝6時に起きています。→ Tôi ngày nào cũng dậy lúc 6 giờ.'],
      note: 'Ở Bài 14 chủ yếu giới thiệu “đang ~”, phần thói quen được nhấn mạnh thêm ở Bài 15.',
    },
    {
      title: '5. Vましょうか',
      body:
        'Dùng khi người nói đề nghị làm một việc cho người nghe: “Tôi ~ nhé?”. Nếu người nghe đồng ý thì trả lời bằng ええ、お願いします／ええ、お願いします。',
      examples: ['荷物を持ちましょうか。→ Tôi mang hành lý giúp anh/chị nhé.'],
    },
    {
      title: '6. Câu が câu – Danh từ が động từ',
      body:
        'Khi miêu tả hiện tượng tự nhiên, sự việc xảy ra xung quanh hoặc trạng thái mà chủ thể không phải “tôi”, dùng 「N が V」 làm chủ ngữ. ' +
        'Ví dụ: “Trời đang mưa” → 雨が降っています。',
      examples: [
        '雨が降っています。→ Trời đang mưa.',
        '駅の前に人がたくさんいます。→ Trước nhà ga có rất nhiều người.',
      ],
    },
  ],
};

// ——— Mini game cơ bản cho Bài 14 (có thể mở rộng sau) ———

export interface Lesson14VocabQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export interface Lesson14GrammarQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export const lesson14VocabQuizItems: Lesson14VocabQuizItem[] = [
  {
    id: 1,
    vi: 'bật (điện, máy điều hòa)',
    options: ['つけます', 'けします', 'しめます'],
    correctIndex: 0,
    explanationVi: 'つけます = bật; けします = tắt.',
  },
  {
    id: 2,
    vi: 'đóng (cửa, cửa sổ)',
    options: ['しめます', 'あけます', 'とめます'],
    correctIndex: 0,
    explanationVi: '閉めます(しめます) = đóng; 開けます(あけます) = mở.',
  },
  {
    id: 3,
    vi: 'chờ, đợi',
    options: ['まちます', 'いそぎます', 'はなします'],
    correctIndex: 0,
    explanationVi: '待ちます(まちます) = chờ, đợi.',
  },
  {
    id: 4,
    vi: 'nhà ga',
    options: ['えき', 'きっぷうりば', 'でぐち'],
    correctIndex: 0,
    explanationVi: '駅(えき) = nhà ga.',
  },
  {
    id: 5,
    vi: 'chỗ bán vé',
    options: ['きっぷうりば', 'かいさつぐち', 'いりぐち'],
    correctIndex: 0,
    explanationVi: '切符売り場(きっぷうりば) = chỗ bán vé.',
  },
];

export const lesson14GrammarQuizItems: Lesson14GrammarQuizItem[] = [
  {
    id: 1,
    vi: 'Anh/Chị chờ một chút.',
    options: ['ちょっと待ってください。', 'ちょっと待ちます。', 'ちょっと待っています。'],
    correctIndex: 0,
    explanationVi: 'Nhờ vả lịch sự: Vてください.',
  },
  {
    id: 2,
    vi: 'Bây giờ anh Miller đang gọi điện thoại.',
    options: ['ミラーさんは今電話をかけています。', 'ミラーさんは今電話をかけます。', 'ミラーさんは今電話をかけました。'],
    correctIndex: 0,
    explanationVi: 'Hành động đang diễn ra: Vています.',
  },
  {
    id: 3,
    vi: 'Tôi mang hành lý giúp anh/chị nhé?',
    options: ['荷物を持ちましょうか。', '荷物を持ってください。', '荷物を持っています。'],
    correctIndex: 0,
    explanationVi: 'Đề nghị giúp: Vましょうか.',
  },
  {
    id: 4,
    vi: 'Trời đang mưa.',
    options: ['雨が降っています。', '雨を降っています。', '雨が降ります。'],
    correctIndex: 0,
    explanationVi: 'Hiện tượng tự nhiên dùng 「雨が降っています」。',
  },
  {
    id: 5,
    vi: 'Trước nhà ga có rất nhiều người.',
    options: [
      '駅の前に人がたくさんいます。',
      '駅の前は人をたくさんいます。',
      '駅の前で人がたくさんいます。',
    ],
    correctIndex: 0,
    explanationVi: 'Câu が câu: N が います／あります.',
  },
];

