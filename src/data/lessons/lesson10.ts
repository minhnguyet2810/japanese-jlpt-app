/**
 * Bài 10: Ở trong nhà & vị trí (Minna no Nihongo I – Bản dịch, trang 82–87)
 * います／あります ・ N が います／あります ・ N は N の うえ／した／まえ…です ・ や～など ・ だんめ
 */

export type Lesson10WordCategory =
  | 'verb'
  | 'adj'
  | 'noun'
  | 'place'
  | 'position'
  | 'expression'
  | 'room'
  | 'phrase';

export interface Lesson10Word {
  japanese: string;
  kana: string;
  romaji: string;
  vietnamese: string;
  category: Lesson10WordCategory;
}

export interface Lesson10Sentence {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface Lesson10DialogueTurn {
  speaker: string;
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface GrammarPoint {
  title: string;
  body: string;
  examples: string[];
  note?: string;
}

export interface Lesson10Data {
  title: string;
  description: string;
  grammarSummary: string;
  words: Lesson10Word[];
  sentences: Lesson10Sentence[];
  dialogue: Lesson10DialogueTurn[];
  grammarPoints: GrammarPoint[];
}

export const lesson10: Lesson10Data = {
  title: 'Bài 10: Ở trong nhà & vị trí（います・あります）',
  description:
    'Động từ います／あります để nói “có, ở” (người, vật). Mẫu câu N が います／あります, N は N の うえ／した／まえ…です. Từ chỉ nơi chốn và vị trí trong nhà. Liệt kê bằng や～など. Số tầng ～だんめ.',
  grammarSummary:
    'N が います／あります ・ N は N の うえ／した／まえ／うしろ／みぎ／ひだり／なか／そと／となり／ちかく／あいだ です ・ N や N など ・ ～だんめ',

  words: [
    // Động từ / tính từ
    { japanese: 'います', kana: 'います', romaji: 'imasu', vietnamese: 'có, ở (tồn tại – dùng cho người & động vật)', category: 'verb' },
    { japanese: 'あります', kana: 'あります', romaji: 'arimasu', vietnamese: 'có, ở (tồn tại – dùng cho đồ vật, cây cối)', category: 'verb' },
    { japanese: 'いろいろ［な］', kana: 'いろいろ［な］', romaji: 'iroiro(na)', vietnamese: 'nhiều, đa dạng', category: 'adj' },

    // Người
    { japanese: '男の人', kana: 'おとこのひと', romaji: 'otoko no hito', vietnamese: 'người đàn ông', category: 'noun' },
    { japanese: '女の人', kana: 'おんなのひと', romaji: 'onna no hito', vietnamese: 'người đàn bà', category: 'noun' },
    { japanese: '男の子', kana: 'おとこのこ', romaji: 'otoko no ko', vietnamese: 'cậu con trai', category: 'noun' },
    { japanese: '女の子', kana: 'おんなのこ', romaji: 'onna no ko', vietnamese: 'cô con gái', category: 'noun' },

    // Con vật / cây cối / đồ vật
    { japanese: '犬', kana: 'いぬ', romaji: 'inu', vietnamese: 'chó', category: 'noun' },
    { japanese: '猫', kana: 'ねこ', romaji: 'neko', vietnamese: 'mèo', category: 'noun' },
    { japanese: '木', kana: 'き', romaji: 'ki', vietnamese: 'cây, gỗ', category: 'noun' },
    { japanese: '物', kana: 'もの', romaji: 'mono', vietnamese: 'đồ vật', category: 'noun' },
    { japanese: 'フィルム', kana: 'フィルム', romaji: 'firumu', vietnamese: 'film', category: 'noun' },
    { japanese: '電池', kana: 'でんち', romaji: 'denchi', vietnamese: 'pin', category: 'noun' },
    { japanese: '箱', kana: 'はこ', romaji: 'hako', vietnamese: 'hộp', category: 'noun' },
    { japanese: 'スイッチ', kana: 'スイッチ', romaji: 'suicchi', vietnamese: 'công tắc', category: 'noun' },
    { japanese: '冷蔵庫', kana: 'れいぞうこ', romaji: 'reizōko', vietnamese: 'tủ lạnh', category: 'noun' },
    { japanese: 'テーブル', kana: 'テーブル', romaji: 'tēburu', vietnamese: 'bàn', category: 'noun' },
    { japanese: 'ベッド', kana: 'ベッド', romaji: 'beddo', vietnamese: 'giường', category: 'noun' },
    { japanese: '棚', kana: 'たな', romaji: 'tana', vietnamese: 'giá sách, kệ', category: 'noun' },
    { japanese: 'ドア', kana: 'ドア', romaji: 'doa', vietnamese: 'cửa ra vào, cửa', category: 'noun' },
    { japanese: '窓', kana: 'まど', romaji: 'mado', vietnamese: 'cửa sổ', category: 'noun' },

    // Nơi chốn ngoài trời / cửa hàng
    { japanese: 'ポスト', kana: 'ポスト', romaji: 'posuto', vietnamese: 'hộp thư, hòm thư', category: 'place' },
    { japanese: 'ビル', kana: 'ビル', romaji: 'biru', vietnamese: 'toà nhà', category: 'place' },
    { japanese: '公園', kana: 'こうえん', romaji: 'kōen', vietnamese: 'công viên', category: 'place' },
    { japanese: '喫茶店', kana: 'きっさてん', romaji: 'kissaten', vietnamese: 'quán giải khát, quán cà-phê', category: 'place' },
    { japanese: '本屋', kana: 'ほんや', romaji: 'honya', vietnamese: 'hiệu sách', category: 'place' },
    { japanese: '～屋', kana: '～や', romaji: '~ya', vietnamese: 'hiệu ~, cửa hàng ~', category: 'place' },
    { japanese: '乗り場', kana: 'のりば', romaji: 'noriba', vietnamese: 'bến xe, điểm lên xuống xe', category: 'place' },
    { japanese: '県', kana: 'けん', romaji: 'ken', vietnamese: 'tỉnh', category: 'place' },

    // Vị trí (trong / ngoài / gần xa)
    { japanese: '上', kana: 'うえ', romaji: 'ue', vietnamese: 'trên', category: 'position' },
    { japanese: '下', kana: 'した', romaji: 'shita', vietnamese: 'dưới', category: 'position' },
    { japanese: '前', kana: 'まえ', romaji: 'mae', vietnamese: 'trước', category: 'position' },
    { japanese: '後ろ', kana: 'うしろ', romaji: 'ushiro', vietnamese: 'sau', category: 'position' },
    { japanese: '右', kana: 'みぎ', romaji: 'migi', vietnamese: 'phải', category: 'position' },
    { japanese: '左', kana: 'ひだり', romaji: 'hidari', vietnamese: 'trái', category: 'position' },
    { japanese: '中', kana: 'なか', romaji: 'naka', vietnamese: 'trong, giữa', category: 'position' },
    { japanese: '外', kana: 'そと', romaji: 'soto', vietnamese: 'ngoài', category: 'position' },
    { japanese: '隣', kana: 'となり', romaji: 'tonari', vietnamese: 'bên cạnh, sát bên', category: 'position' },
    { japanese: '近く', kana: 'ちかく', romaji: 'chikaku', vietnamese: 'gần', category: 'position' },
    { japanese: '間', kana: 'あいだ', romaji: 'aida', vietnamese: 'giữa (hai thứ)', category: 'position' },

    // Biểu hiện khác
    { japanese: 'や ～［など］', kana: 'や ～［など］', romaji: 'ya ~ [nado]', vietnamese: '~ và ~, v.v.', category: 'expression' },
    { japanese: 'いちばん ～', kana: 'いちばん ～', romaji: 'ichiban ~', vietnamese: '~ nhất (いちばん うえ vị trí cao nhất)', category: 'expression' },
    { japanese: '～段目', kana: '～だんめ', romaji: '~danme', vietnamese: 'tầng thứ ~ (dùng cho giá sách v.v.)', category: 'expression' },

    // III. Trong nhà（うちの中）
    { japanese: '玄関', kana: 'げんかん', romaji: 'genkan', vietnamese: 'cửa ra vào (genkan)', category: 'room' },
    { japanese: 'トイレ', kana: 'トイレ', romaji: 'toire', vietnamese: 'toa-lét, phòng vệ sinh', category: 'room' },
    { japanese: '風呂場', kana: 'ふろば', romaji: 'furoba', vietnamese: 'phòng tắm', category: 'room' },
    { japanese: '洗面所', kana: 'せんめんじょ', romaji: 'senmenjo', vietnamese: 'bồn rửa, phòng rửa mặt', category: 'room' },
    { japanese: '台所', kana: 'だいどころ', romaji: 'daidokoro', vietnamese: 'bếp', category: 'room' },
    { japanese: '食堂', kana: 'しょくどう', romaji: 'shokudō', vietnamese: 'nhà ăn, phòng ăn', category: 'room' },
    { japanese: '居間', kana: 'いま', romaji: 'ima', vietnamese: 'phòng khách, phòng sinh hoạt chung', category: 'room' },
    { japanese: '寝室', kana: 'しんしつ', romaji: 'shinshitsu', vietnamese: 'phòng ngủ', category: 'room' },
    { japanese: '廊下', kana: 'ろうか', romaji: 'rōka', vietnamese: 'hành lang', category: 'room' },
    { japanese: 'ベランダ', kana: 'ベランダ', romaji: 'beranda', vietnamese: 'ban-công', category: 'room' },

    // Từ hội thoại & ví dụ (Bài 10)
    { japanese: '［どうも］すみません', kana: 'すみません', romaji: '[dōmo] sumimasen', vietnamese: 'Cám ơn. / Xin lỗi.', category: 'phrase' },
    { japanese: 'チリソース', kana: 'チリソース', romaji: 'chiri sōsu', vietnamese: 'tương ớt', category: 'phrase' },
    { japanese: '奥', kana: 'おく', romaji: 'oku', vietnamese: 'bên trong cùng, phía sâu bên trong', category: 'phrase' },
    { japanese: 'スパイス・コーナー', kana: 'スパイス・コーナー', romaji: 'supaisu kōnā', vietnamese: 'góc gia vị', category: 'phrase' },
    { japanese: '東京ディズニーランド', kana: 'とうきょうディズニーランド', romaji: 'Tōkyō Dizunīrando', vietnamese: 'Công viên Tokyo Disneyland', category: 'phrase' },
    { japanese: '千葉県', kana: 'ちばけん', romaji: 'Chiba-ken', vietnamese: 'tỉnh Chiba', category: 'phrase' },
    { japanese: 'ユニヤ・ストア', kana: 'ユニヤ・ストア', romaji: 'Yuniya sutoa', vietnamese: 'tên siêu thị (giả tưởng)', category: 'phrase' },
  ],

  sentences: [
    // Mẫu câu (sách tr.84)
    { japanese: 'あそこに佐藤さんがいます。', romaji: 'Asoko ni Satō-san ga imasu.', vietnamese: 'Ở chỗ kia có chị Sato.' },
    { japanese: '机の上に写真があります。', romaji: 'Tsukue no ue ni shashin ga arimasu.', vietnamese: 'Ở trên bàn có bức ảnh.' },
    { japanese: '家族はニューヨークにいます。', romaji: 'Kazoku wa Nyū Yōku ni imasu.', vietnamese: 'Gia đình tôi ở New York.' },
    { japanese: '東京ディズニーランドは千葉県にあります。', romaji: 'Tōkyō Dizunīrando wa Chiba-ken ni arimasu.', vietnamese: 'Công viên Tokyo Disneyland ở tỉnh Chiba.' },
    // Ví dụ: なに／だれ
    { japanese: '地下に何がありますか。…レストランがあります。', romaji: 'Chika ni nani ga arimasu ka. …Resutoran ga arimasu.', vietnamese: 'Ở tầng hầm có gì? …Có nhà hàng.' },
    { japanese: '受付にだれがいますか。…木村さんがいます。', romaji: 'Uketsuke ni dare ga imasu ka. …Kimura-san ga imasu.', vietnamese: 'Ở quầy tiếp tân có ai? …Có chị Kimura.' },
    // N の うえ／した／となり
    { japanese: '郵便局は銀行の隣にあります。', romaji: 'Yūbinkyoku wa ginkō no tonari ni arimasu.', vietnamese: 'Bưu điện ở bên cạnh ngân hàng.' },
    { japanese: '駅の近くで友達に会いました。', romaji: 'Eki no chikaku de tomodachi ni aimashita.', vietnamese: 'Tôi đã gặp bạn ở gần ga.' },
    // や ～ など
    { japanese: '箱の中に手紙や写真があります。', romaji: 'Hako no naka ni tegami ya shashin ga arimasu.', vietnamese: 'Trong hộp có thư và ảnh (và thứ khác).' },
    { japanese: '箱の中に手紙や写真などがあります。', romaji: 'Hako no naka ni tegami ya shashin nado ga arimasu.', vietnamese: 'Trong hộp có thư, ảnh v.v.' },
    // ありませんか（lịch sự）
    { japanese: 'チリソースはありませんか。', romaji: 'Chiri sōsu wa arimasen ka.', vietnamese: 'Anh/chị có tương ớt không ạ? (cách hỏi lịch sự)' },
    // Bổ sung
    { japanese: '庭に犬がいます。', romaji: 'Niwa ni inu ga imasu.', vietnamese: 'Ở vườn có con chó.' },
    { japanese: '部屋に机といすがあります。', romaji: 'Heya ni tsukue to isu ga arimasu.', vietnamese: 'Trong phòng có bàn và ghế.' },
    { japanese: 'ミラーさんは事務所にいます。', romaji: 'Mirā-san wa jimusho ni imasu.', vietnamese: 'Anh Miller ở văn phòng.' },
  ],

  dialogue: [
    // Hội thoại 1: Miller hỏi tương ớt (tr.84)
    {
      speaker: 'Miller',
      japanese: 'すみません、チリソースはどこですか。',
      romaji: 'Sumimasen, chiri sōsu wa doko desu ka.',
      vietnamese: 'Xin lỗi, tương ớt ở đâu ạ?',
    },
    {
      speaker: 'Nhân viên',
      japanese: 'チリソースですか。スパイス・コーナーにあります。奥の右側です。',
      romaji: 'Chiri sōsu desu ka. Supaisu kōnā ni arimasu. Oku no migi gawa desu.',
      vietnamese: 'Tương ớt ạ? Ở góc gia vị. Bên trong, phía bên phải.',
    },
    {
      speaker: 'Miller',
      japanese: 'ありがとうございます。',
      romaji: 'Arigatō gozaimasu.',
      vietnamese: 'Cám ơn anh/chị.',
    },
    // Hội thoại 2: Hỏi đường siêu thị Yunyu-ya (tr.84)
    {
      speaker: 'Bà phụ nữ',
      japanese: 'すみません、ユニヤ・ストアはどこですか。',
      romaji: 'Sumimasen, Yuniya sutoa wa doko desu ka.',
      vietnamese: 'Xin lỗi, Siêu thị Yunyu-ya ở đâu ạ?',
    },
    {
      speaker: 'Người đi đường',
      japanese: 'ユニヤ・ストアですか。あの白いビルの中にあります。',
      romaji: 'Yuniya sutoa desu ka. Ano shiroi biru no naka ni arimasu.',
      vietnamese: 'Siêu thị Yunyu-ya ấy à? Ở trong toà nhà trắng kia.',
    },
  ],

  grammarPoints: [
    {
      title: '1. N が あります／います',
      body: 'Dùng để nói sự tồn tại. あります: đồ vật, cây cối (không tự di chuyển). います: người, động vật (có thể di chuyển). Chủ thể đi với trợ từ が.',
      examples: [
        'コンピューターがあります。桜があります。公園があります。',
        '男の人がいます。犬がいます。',
      ],
      note: undefined,
    },
    {
      title: '2. N（địa điểm）に N が あります／います',
      body: 'Nơi chốn + に + chủ thể + が + あります／います. Hỏi đồ vật: 何がありますか. Hỏi người: だれがいますか.',
      examples: [
        'わたしの部屋に机があります。',
        '事務所にミラーさんがいます。',
        '地下に何がありますか。…レストランがあります。',
        '受付にだれがいますか。…木村さんがいます。',
      ],
      note: undefined,
    },
    {
      title: '3. N は N（địa điểm）に あります／います',
      body: 'Nêu chủ đề (N は) rồi nói địa điểm (N に あります／います). Hỏi địa điểm: どこにありますか／いますか. Trả lời: ～県にあります。／～にいます。',
      examples: [
        '東京ディズニーランドは千葉県にあります。',
        'ミラーさんは事務所にいます。',
        '東京ディズニーランドはどこにありますか。…千葉県にあります。',
        'ミラーさんはどこにいますか。…事務所にいます。',
      ],
      note: 'Bài 3 đã học です cho địa điểm; ở đây dùng あります／います cho động từ tồn tại.',
    },
    {
      title: '4. N（vật/người/địa điểm）の N（vị trí）',
      body: 'Danh từ chỉ vị trí: うえ、した、まえ、うしろ、みぎ、ひだり、なか、そと、となり、ちかく、あいだ. Đặt sau N の: 机の上、銀行の隣. Khi chỉ nơi xảy ra hành động (không phải “ở đâu có gì”) thì dùng で: 駅の近くで友達に会いました。',
      examples: [
        '机の上に写真があります。',
        '郵便局は銀行の隣にあります。',
        '駅の近くで友達に会いました。',
      ],
      note: 'Chú ý: で dùng khi nói “ở đâu” mà là nơi diễn ra hành động (会います, 食べます…).',
    },
    {
      title: '5. N や N ［など］',
      body: 'や: liệt kê một vài ví dụ tiêu biểu (còn thứ khác). と: liệt kê hết tất cả. など ở cuối nhấn mạnh “và những thứ khác”.',
      examples: [
        '箱の中に手紙や写真があります。',
        '箱の中に手紙や写真などがあります。',
      ],
      note: undefined,
    },
    {
      title: '6. Từ/cụm ですか（xác nhận lại）',
      body: 'か đặt sau từ hoặc cụm để hỏi xác nhận: “～ à?”. Ví dụ nghe đối phương nói “Yunyu-ya” rồi trả lời: ユニヤ・ストアですか。あのビルの中です。',
      examples: [
        'すみません、ユニヤ・ストアはどこですか。',
        '…ユニヤ・ストアですか。あの白いビルの中にあります。',
      ],
      note: undefined,
    },
    {
      title: '7. ～は ありませんか',
      body: 'Cách hỏi lịch sự “anh/chị có … không?”. Dùng ありませんか thay cho ありますか khi muốn hỏi nhẹ nhàng, đặc biệt khi nghĩ có thể đáp “không”.',
      examples: [
        'チリソースはありませんか。',
        '…はい、あります。スパイス・コーナーにあります。',
      ],
      note: undefined,
    },
  ],
};

// Mini game: từ vựng Bài 10
export const lesson10VocabQuizItems = [
  { id: 1, vi: 'có, ở (người/động vật)', options: ['あります', 'います', 'や'], correctIndex: 1 },
  { id: 2, vi: 'trong, giữa', options: ['外', '中', '上'], correctIndex: 1 },
  { id: 3, vi: 'bên cạnh, sát bên', options: ['近く', 'となり', '間'], correctIndex: 1 },
  { id: 4, vi: 'công viên', options: ['公園', '喫茶店', '本屋'], correctIndex: 0 },
] as const;

// Mini game: ngữ pháp – N が います／あります, vị trí
export const lesson10GrammarQuizItems = [
  {
    id: 1,
    vi: 'Trong phòng có cái bàn.',
    options: [
      '部屋に机があります。',
      '部屋は机があります。',
      '机は部屋にいます。',
    ],
    correctIndex: 0,
  },
  {
    id: 2,
    vi: 'Trên bàn có bức ảnh.',
    options: [
      '写真は机の上です。',
      '机の上に写真があります。',
      '机の上で写真があります。',
    ],
    correctIndex: 1,
  },
  {
    id: 3,
    vi: 'Anh Miller ở văn phòng.',
    options: [
      'ミラーさんは事務所にいます。',
      'ミラーさんは事務所にあります。',
      '事務所はミラーさんにあります。',
    ],
    correctIndex: 0,
  },
] as const;

// Mini game: ghép câu – vị trí
export const lesson10BuilderItems = [
  {
    id: 1,
    vi: 'Trong hộp có film và pin.',
    hint: 'N の 中に N や N などがあります。',
    tokens: ['箱の中に', 'フィルムや', '電池などが', 'あります。'],
  },
  {
    id: 2,
    vi: 'Con mèo ở dưới bàn.',
    hint: 'N の 下に N が います。',
    tokens: ['机の下に', '猫が', 'います。'],
  },
  {
    id: 3,
    vi: 'Hiệu sách ở gần ga.',
    hint: 'N の 近くに N があります。',
    tokens: ['駅の近くに', '本屋が', 'あります。'],
  },
] as const;

// Mini game: hội thoại – hiểu câu hỏi “ở đâu?”
export const lesson10DialogueQuizItems = [
  {
    questionVi: 'Miller hỏi gì?',
    options: [
      'Anh ấy hỏi giá tương ớt.',
      'Anh ấy hỏi tương ớt ở đâu.',
      'Anh ấy hỏi có tương ớt hay không.',
    ],
    correctIndex: 1,
  },
  {
    questionVi: 'Tương ớt ở đâu?',
    options: ['Ở quầy gia vị.', 'Ở quầy rau.', 'Ở quầy thịt.'],
    correctIndex: 0,
  },
] as const;

