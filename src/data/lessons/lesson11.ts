/**
 * Bài 11: Số lượng & thời gian (Minna no Nihongo I – Bản dịch, tr.88–93)
 * Đếm đồ vật ひとつ～とお ・ Lượng từ 人/台/枚/回/分/時間/日/週間/か月 ・ いくつ/なん+counter ・ どのくらい ・ ぐらい ・ だけ
 */

export type Lesson11WordCategory =
  | 'verb'
  | 'counter'
  | 'counterPeople'
  | 'counterUnit'
  | 'noun'
  | 'family'
  | 'time'
  | 'expression'
  | 'phrase'
  | 'food';

export interface Lesson11Word {
  japanese: string;
  kana: string;
  romaji: string;
  vietnamese: string;
  category: Lesson11WordCategory;
}

export interface Lesson11Sentence {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface Lesson11DialogueTurn {
  speaker: string;
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface Lesson11GrammarPoint {
  title: string;
  body: string;
  examples: string[];
  note?: string;
}

export interface Lesson11Data {
  title: string;
  description: string;
  grammarSummary: string;
  words: Lesson11Word[];
  sentences: Lesson11Sentence[];
  dialogue: Lesson11DialogueTurn[];
  grammarPoints: Lesson11GrammarPoint[];
}

export const lesson11: Lesson11Data = {
  title: 'Bài 11: Số lượng & khoảng thời gian（ひとつ・人・台・枚・どのくらい・ぐらい）',
  description:
    'Đếm đồ vật ひとつ～とお. Lượng từ: 人(ひとり/ふたり)、台、枚、回、分、時間、日、週間、か月. Hỏi số lượng いくつ／なん＋counter. Hỏi thời gian どのくらい. Khoảng ～ぐらい. Chỉ ～だけ. Tần suất: lượng từ (thời gian) に Động từ.',
  grammarSummary:
    'ひとつ～とお ・ 一人(ひとり)/二人(ふたり)/～人 ・ ～台/～枚/～回 ・ 一分/一時間/一日/一週間/一か月 ・ いくつ/なん＋counter ・ どのくらい ・ ～ぐらい ・ ～だけ ・ N（thời gian）に V',

  words: [
    // Động từ (tr.88)
    { japanese: 'います', kana: 'います', romaji: 'imasu', vietnamese: 'có [con] (こどもが～)', category: 'verb' },
    { japanese: 'います', kana: 'います', romaji: 'imasu', vietnamese: 'ở [Nhật] (日本に～)', category: 'verb' },
    { japanese: 'かかります', kana: 'かかります', romaji: 'kakarimasu', vietnamese: 'mất, tốn (thời gian, tiền)', category: 'verb' },
    { japanese: 'やすみます', kana: 'やすみます', romaji: 'yasumimasu', vietnamese: 'nghỉ [làm việc] (会社を～)', category: 'verb' },

    // Đếm đồ vật 1～10 (tr.88)
    { japanese: 'ひとつ', kana: 'ひとつ', romaji: 'hitotsu', vietnamese: '1つ: một cái', category: 'counter' },
    { japanese: 'ふたつ', kana: 'ふたつ', romaji: 'futatsu', vietnamese: '2つ: hai cái', category: 'counter' },
    { japanese: 'みっつ', kana: 'みっつ', romaji: 'mittsu', vietnamese: '3つ: ba cái', category: 'counter' },
    { japanese: 'よっつ', kana: 'よっつ', romaji: 'yottsu', vietnamese: '4つ: bốn cái', category: 'counter' },
    { japanese: 'いつつ', kana: 'いつつ', romaji: 'itsutsu', vietnamese: '5つ: năm cái', category: 'counter' },
    { japanese: 'むっつ', kana: 'むっつ', romaji: 'muttsu', vietnamese: '6つ: sáu cái', category: 'counter' },
    { japanese: 'ななつ', kana: 'ななつ', romaji: 'nanatsu', vietnamese: '7つ: bảy cái', category: 'counter' },
    { japanese: 'やっつ', kana: 'やっつ', romaji: 'yattsu', vietnamese: '8つ: tám cái', category: 'counter' },
    { japanese: 'ここのつ', kana: 'ここのつ', romaji: 'kokonotsu', vietnamese: '9つ: chín cái', category: 'counter' },
    { japanese: 'とお', kana: 'とお', romaji: 'tō', vietnamese: '10: mười cái', category: 'counter' },
    { japanese: 'いくつ', kana: 'いくつ', romaji: 'ikutsu', vietnamese: 'mấy cái, bao nhiêu cái', category: 'counter' },

    // Đếm người (tr.88)
    { japanese: 'ひとり', kana: 'ひとり', romaji: 'hitori', vietnamese: '1人: một người', category: 'counterPeople' },
    { japanese: 'ふたり', kana: 'ふたり', romaji: 'futari', vietnamese: '2人: hai người', category: 'counterPeople' },
    { japanese: '～にん', kana: '～にん', romaji: '~nin', vietnamese: '～人: ～ người (3人 trở lên)', category: 'counterPeople' },

    // Hậu tố đơn vị (tr.88, 92)
    { japanese: '～だい', kana: '～だい', romaji: '~dai', vietnamese: '～台: cái (máy móc, xe cộ)', category: 'counterUnit' },
    { japanese: '～まい', kana: '～まい', romaji: '~mai', vietnamese: '～枚: tờ, tấm (giấy, tem, áo...)', category: 'counterUnit' },
    { japanese: '～かい', kana: '～かい', romaji: '~kai', vietnamese: '～回: ～ lần', category: 'counterUnit' },
    { japanese: '～ぷん', kana: '～ぷん', romaji: '~pun', vietnamese: '～分: phút', category: 'counterUnit' },
    { japanese: '～じかん', kana: '～じかん', romaji: '~jikan', vietnamese: '～時間: tiếng', category: 'counterUnit' },
    { japanese: '～にち', kana: '～にち', romaji: '~nichi', vietnamese: '～日: ngày (いちにち = một ngày)', category: 'counterUnit' },
    { japanese: '～しゅうかん', kana: '～しゅうかん', romaji: '~shūkan', vietnamese: '～週間: tuần', category: 'counterUnit' },
    { japanese: '～かげつ', kana: '～かげつ', romaji: '~kagetsu', vietnamese: '～か月: tháng', category: 'counterUnit' },
    { japanese: '～ねん', kana: '～ねん', romaji: '~nen', vietnamese: '～年: năm', category: 'counterUnit' },

    // Danh từ (tr.88)
    { japanese: 'りんご', kana: 'りんご', romaji: 'ringo', vietnamese: 'táo', category: 'noun' },
    { japanese: 'みかん', kana: 'みかん', romaji: 'mikan', vietnamese: 'quýt', category: 'noun' },
    { japanese: 'サンドイッチ', kana: 'サンドイッチ', romaji: 'sandoicchi', vietnamese: 'bánh san-uých', category: 'noun' },
    { japanese: 'カレー［ライス］', kana: 'カレー［ライス］', romaji: 'karē [raisu]', vietnamese: 'món [cơm] ca-ri', category: 'noun' },
    { japanese: 'アイスクリーム', kana: 'アイスクリーム', romaji: 'aisu kurīmu', vietnamese: 'kem', category: 'noun' },
    { japanese: '切手', kana: 'きって', romaji: 'kitte', vietnamese: 'tem', category: 'noun' },
    { japanese: 'はがき', kana: 'はがき', romaji: 'hagaki', vietnamese: 'bưu thiếp', category: 'noun' },
    { japanese: '封筒', kana: 'ふうとう', romaji: 'fūtō', vietnamese: 'phong bì', category: 'noun' },
    { japanese: '速達', kana: 'そくたつ', romaji: 'sokutatsu', vietnamese: 'gửi nhanh', category: 'noun' },
    { japanese: '書留', kana: 'かきとめ', romaji: 'kakitome', vietnamese: 'gửi bảo đảm', category: 'noun' },
    { japanese: '航空便', kana: 'こうくうびん', romaji: 'kōkūbin', vietnamese: 'gửi đường hàng không', category: 'noun' },
    { japanese: '船便', kana: 'ふなびん', romaji: 'funabin', vietnamese: 'gửi đường biển', category: 'noun' },
    { japanese: '外国', kana: 'がいこく', romaji: 'gaikoku', vietnamese: 'nước ngoài', category: 'noun' },

    // Gia đình (tr.89) – tự xưng / gọi người khác
    { japanese: '両親', kana: 'りょうしん', romaji: 'ryōshin', vietnamese: 'bố mẹ', category: 'family' },
    { japanese: '兄弟', kana: 'きょうだい', romaji: 'kyōdai', vietnamese: 'anh chị em', category: 'family' },
    { japanese: '兄', kana: 'あに', romaji: 'ani', vietnamese: 'anh trai (tự xưng)', category: 'family' },
    { japanese: 'お兄さん', kana: 'おにいさん', romaji: 'onii-san', vietnamese: 'anh trai (gọi người khác)', category: 'family' },
    { japanese: '姉', kana: 'あね', romaji: 'ane', vietnamese: 'chị gái (tự xưng)', category: 'family' },
    { japanese: 'お姉さん', kana: 'おねえさん', romaji: 'onee-san', vietnamese: 'chị gái (gọi người khác)', category: 'family' },
    { japanese: '弟', kana: 'おとうと', romaji: 'otōto', vietnamese: 'em trai (tự xưng)', category: 'family' },
    { japanese: '弟さん', kana: 'おとうとさん', romaji: 'otōto-san', vietnamese: 'em trai (gọi người khác)', category: 'family' },
    { japanese: '妹', kana: 'いもうと', romaji: 'imōto', vietnamese: 'em gái (tự xưng)', category: 'family' },
    { japanese: '妹さん', kana: 'いもうとさん', romaji: 'imōto-san', vietnamese: 'em gái (gọi người khác)', category: 'family' },

    // Thời gian & lượng (tr.89)
    { japanese: '一時間', kana: 'いちじかん', romaji: 'ichijikan', vietnamese: 'một tiếng', category: 'time' },
    { japanese: '一週間', kana: 'いっしゅうかん', romaji: 'isshūkan', vietnamese: 'một tuần', category: 'time' },
    { japanese: '一か月', kana: 'いっかげつ', romaji: 'ikkagetsu', vietnamese: 'một tháng', category: 'time' },
    { japanese: '一年', kana: 'いちねん', romaji: 'ichinen', vietnamese: 'một năm', category: 'time' },
    { japanese: '～ぐらい', kana: '～ぐらい', romaji: '~gurai', vietnamese: 'khoảng ～', category: 'time' },
    { japanese: 'どのくらい', kana: 'どのくらい', romaji: 'dono kurai', vietnamese: 'bao lâu', category: 'time' },
    { japanese: '全部で', kana: 'ぜんぶで', romaji: 'zenbu de', vietnamese: 'tổng cộng', category: 'time' },
    { japanese: 'みんな', kana: 'みんな', romaji: 'minna', vietnamese: 'tất cả', category: 'expression' },
    { japanese: '～だけ', kana: '～だけ', romaji: '~dake', vietnamese: 'chỉ ～', category: 'expression' },

    // Câu chào & hội thoại (tr.89)
    { japanese: 'いらっしゃいませ', kana: 'いらっしゃいませ', romaji: 'irasshaimase', vietnamese: 'Xin mời vào. / Xin chào quý khách.', category: 'phrase' },
    { japanese: 'いい天気ですね', kana: 'いいてんきですね', romaji: 'ii tenki desu ne', vietnamese: 'Trời đẹp nhỉ.', category: 'phrase' },
    { japanese: 'お出かけですか', kana: 'おでかけですか', romaji: 'odekake desu ka', vietnamese: 'Anh/chị đi ra ngoài đấy à?', category: 'phrase' },
    { japanese: 'ちょっと～まで', kana: 'ちょっと～まで', romaji: 'chotto ~ made', vietnamese: 'Tôi đi ～ một chút.', category: 'phrase' },
    { japanese: '行っていらっしゃい', kana: 'いっていらっしゃい', romaji: 'itte irasshai', vietnamese: 'Anh/chị đi nhé.', category: 'phrase' },
    { japanese: '行ってまいります', kana: 'いってまいります', romaji: 'itte mairimasu', vietnamese: 'Tôi đi đây.', category: 'phrase' },
    { japanese: 'それから', kana: 'それから', romaji: 'sore kara', vietnamese: 'sau đó, tiếp nữa', category: 'phrase' },
    { japanese: 'オーストラリア', kana: 'オーストラリア', romaji: 'Ōsutoraria', vietnamese: 'Úc', category: 'phrase' },
  ],

  sentences: [
    // Mẫu câu (tr.90)
    { japanese: '会議室に机が7つあります。', romaji: 'Kaigishitsu ni tsukue ga nanatsu arimasu.', vietnamese: 'Ở phòng họp có 7 cái bàn.' },
    { japanese: 'わたしは日本に1年います。', romaji: 'Watashi wa Nihon ni ichinen imasu.', vietnamese: 'Tôi ở Nhật 1 năm.' },
    // Ví dụ 1–2 (tr.90)
    { japanese: 'りんごをいくつ買いましたか。…4つ買いました。', romaji: 'Ringo o ikutsu kaimashita ka. …Yottsu kaimashita.', vietnamese: 'Anh/chị đã mua mấy quả táo? …Tôi mua 4 quả.' },
    { japanese: '80円の切手を5枚とはがきを2枚ください。…全部で500円です。', romaji: 'Hachijū-en no kitte o gomai to hagaki o nimai kudasai. …Zenbu de gohyaku-en desu.', vietnamese: 'Cho tôi 5 con tem 80 yên và 2 cái bưu thiếp. …Tổng cộng là 500 yên.' },
    { japanese: '富士大学に外国人の先生がいますか。…はい、3人います。みんなアメリカ人です。', romaji: 'Fuji daigaku ni gaikokujin no sensei ga imasu ka. …Hai, sannin imasu. Minna Amerikajin desu.', vietnamese: 'Ở Đại học Fuji có giảng viên người nước ngoài không? …Có, 3 người. Tất cả đều là người Mỹ.' },
    { japanese: 'ご家族は何人ですか。…5人です。両親と姉と兄です。', romaji: 'Gokazoku wa nannin desu ka. …Gonin desu. Ryōshin to ane to ani desu.', vietnamese: 'Gia đình anh/chị có mấy người? …5 người. Bố mẹ, chị gái và anh trai.' },
    { japanese: '1週間に何回テニスをしますか。…2回します。', romaji: 'Isshūkan ni nankai tenisu o shimasu ka. …Nikai shimasu.', vietnamese: 'Một tuần anh/chị chơi quần vợt mấy lần? …Tôi chơi 2 lần.' },
    { japanese: '田中さんはどのくらいスペイン語を勉強しましたか。…3か月勉強しました。', romaji: 'Tanaka-san wa dono kurai Supeingo o benkyō shimashita ka. …Sankagetsu benkyō shimashita.', vietnamese: 'Anh/chị Tanaka đã học tiếng Tây Ban Nha được bao lâu? …Tôi đã học được 3 tháng.' },
    { japanese: '大阪から東京まで新幹線でどのくらいかかりますか。…2時間半かかります。', romaji: 'Ōsaka kara Tōkyō made Shinkansen de dono kurai kakarimasu ka. …Nijikanhan kakarimasu.', vietnamese: 'Từ Osaka đến Tokyo đi Shinkansen mất bao lâu? …Mất 2 tiếng rưỡi.' },
    // Thêm ví dụ ngữ pháp
    { japanese: 'みかんをいくつ買いましたか。…8つ買いました。', romaji: 'Mikan o ikutsu kaimashita ka. …Yattsu kaimashita.', vietnamese: 'Anh/chị đã mua mấy quả quýt? …Tôi đã mua 8 quả.' },
    { japanese: 'この会社に外国人が何人いますか。…5人います。', romaji: 'Kono kaisha ni gaikokujin ga nannin imasu ka. …Gonin imasu.', vietnamese: 'Ở công ty này có mấy người nước ngoài? …Có 5 người.' },
    { japanese: '毎晩何時間日本語を勉強しますか。…2時間勉強します。', romaji: 'Maiban nanjikan Nihongo o benkyō shimasu ka. …Nijikan benkyō shimasu.', vietnamese: 'Hàng tối anh/chị học tiếng Nhật mấy tiếng? …Tôi học 2 tiếng.' },
    { japanese: '学校に先生が30人ぐらいいます。', romaji: 'Gakkō ni sensei ga sanjū-nin gurai imasu.', vietnamese: 'Ở trường có khoảng 30 giáo viên.' },
    { japanese: '15分ぐらいかかります。', romaji: 'Jūgofun gurai kakarimasu.', vietnamese: 'Mất khoảng 15 phút.' },
    { japanese: '1か月に2回映画を見ます。', romaji: 'Ikkagetsu ni nikai eiga o mimasu.', vietnamese: 'Một tháng tôi xem phim 2 lần.' },
    { japanese: '休みは日曜日だけです。', romaji: 'Yasumi wa nichiyōbi dake desu.', vietnamese: 'Ngày nghỉ của tôi chỉ có chủ nhật thôi.' },
  ],

  dialogue: [
    // Hội thoại: Người quản lý – Wang (tr.90)
    { speaker: 'Người quản lý', japanese: 'いい天気ですね。お出かけですか。', romaji: 'Ii tenki desu ne. Odekake desu ka.', vietnamese: 'Hôm nay trời đẹp nhỉ. Anh đi ra ngoài đấy à?' },
    { speaker: 'Wang', japanese: 'はい、ちょっと郵便局まで。', romaji: 'Hai, chotto yūbinkyoku made.', vietnamese: 'Vâng, tôi ra bưu điện một chút.' },
    { speaker: 'Người quản lý', japanese: 'そうですか。行っていらっしゃい。', romaji: 'Sō desu ka. Itte irasshai.', vietnamese: 'Thế à. Anh đi nhé.' },
    { speaker: 'Wang', japanese: '行ってまいります。', romaji: 'Itte mairimasu.', vietnamese: 'Vâng ạ (tôi đi đây).' },
    // Hội thoại: Wang – Nhân viên bưu điện (tr.90)
    { speaker: 'Wang', japanese: 'すみません、これを速達でお願いします。', romaji: 'Sumimasen, kore o sokutatsu de onegai shimasu.', vietnamese: 'Cái này, cho tôi gửi bằng dịch vụ gửi nhanh.' },
    { speaker: 'Nhân viên', japanese: 'オーストラリアですね。370円です。', romaji: 'Ōsutoraria desu ne. Sanbyaku-nanajū-en desu.', vietnamese: 'Anh gửi đến Úc phải không ạ. Giá là 370 yên.' },
    { speaker: 'Wang', japanese: 'それから、この箱もお願いします。', romaji: 'Sore kara, kono hako mo onegai shimasu.', vietnamese: 'Cho tôi gửi cả hộp đồ này nữa ạ.' },
    { speaker: 'Nhân viên', japanese: '航空便ですか、船便ですか。', romaji: 'Kōkūbin desu ka, funabin desu ka.', vietnamese: 'Anh muốn gửi bằng đường hàng không hay đường biển ạ?' },
    { speaker: 'Wang', japanese: '船便はいくらですか。', romaji: 'Funabin wa ikura desu ka.', vietnamese: 'Đường biển là bao nhiêu tiền?' },
    { speaker: 'Nhân viên', japanese: '500円です。', romaji: 'Gohyaku-en desu.', vietnamese: '500 yên.' },
    { speaker: 'Wang', japanese: 'どのくらいかかりますか。', romaji: 'Dono kurai kakarimasu ka.', vietnamese: 'Mất khoảng bao lâu?' },
    { speaker: 'Nhân viên', japanese: '1か月ぐらいかかります。', romaji: 'Ikkagetsu gurai kakarimasu.', vietnamese: 'Khoảng 1 tháng.' },
    { speaker: 'Wang', japanese: 'じゃ、船便でお願いします。', romaji: 'Ja, funabin de onegai shimasu.', vietnamese: 'Vậy thì cho tôi gửi bằng đường biển.' },
  ],

  grammarPoints: [
    {
      title: '1. Đếm đồ vật: ひとつ、ふたつ……とお',
      body: 'Cách nói này dùng để đếm đồ vật. Từ 1 đến 10: ひとつ、ふたつ、みっつ、よっつ、いつつ、むっつ、ななつ、やっつ、ここのつ、とお. Từ 11 trở lên chỉ dùng số (11, 12...) không dùng ～つ.',
      examples: [
        'りんごを4つ買いました。→ Tôi (đã) mua 4 quả táo.',
        'みかんをいくつ買いましたか。…8つ買いました。',
      ],
      note: undefined,
    },
    {
      title: '2. Hậu tố chỉ đơn vị (lượng từ)',
      body: 'Khi đếm người hay vật, đặt hậu tố ngay sau số; hậu tố thay đổi theo đối tượng. 一人(ひとり)、二人(ふたり) – bất quy tắc; 4人(よにん). ～台: máy móc, xe cộ. ～枚: vật mỏng, phẳng (giấy, tem, áo, đĩa). ～回: lần. ～分: phút. ～時間: tiếng. 一日(いちにち): một ngày (không đọc ついたち – đó là ngày 1 tháng). ～週間: tuần. ～か月: tháng. ～年: năm.',
      examples: [
        '外国人の学生が2人います。',
        '1か月に2回映画を見ます。',
        '2時間半かかります。',
      ],
      note: 'Một ngày = いちにち. Ngày mùng 1 (tháng) = ついたち.',
    },
    {
      title: '3. Cách dùng lượng từ trong câu',
      body: 'Lượng từ thường đứng trước động từ mà nó bổ nghĩa. Ngoại lệ: lượng từ chỉ khoảng thời gian (1週間、2か月...) có thể đứng trước hoặc sau に (khi chỉ thời gian thực hiện).',
      examples: [
        'りんごを4つ買いました。',
        '国で2か月日本語を勉強しました。',
      ],
      note: undefined,
    },
    {
      title: '4. いくつ（hỏi số lượng đồ vật）',
      body: 'Với đồ vật đếm bằng ひとつ、ふたつ… thì dùng いくつ để hỏi “mấy cái, bao nhiêu cái”.',
      examples: [
        'みかんをいくつ買いましたか。…8つ買いました。',
      ],
      note: undefined,
    },
    {
      title: '5. なん＋hậu tố đơn vị（hỏi số lượng）',
      body: 'Với số có hậu tố đơn vị (人、台、枚、回、時間...) dùng なん để hỏi: 何人(なんにん)、何台、何枚、何回、何時間(なんじかん)...',
      examples: [
        'この会社に外国人が何人いますか。…5人います。',
        '毎晩何時間日本語を勉強しますか。…2時間勉強します。',
      ],
      note: undefined,
    },
    {
      title: '6. どのくらい（hỏi khoảng thời gian）',
      body: 'Dùng どのくらい để hỏi về khoảng thời gian (đã làm gì bao lâu, đi mất bao lâu...). Trả lời bằng lượng từ thời gian: 3年、2時間半、1か月ぐらい.',
      examples: [
        'どのくらい日本語を勉強しましたか。…3年勉強しました。',
        '大阪から東京までどのくらいかかりますか。…新幹線で2時間半かかります。',
      ],
      note: undefined,
    },
    {
      title: '7. ～ぐらい（khoảng ～）',
      body: 'ぐらい thêm sau lượng từ để biểu thị “khoảng, chừng”.',
      examples: [
        '学校に先生が30人ぐらいいます。',
        '15分ぐらいかかります。',
        '1か月ぐらいかかります。',
      ],
      note: undefined,
    },
    {
      title: '8. Lượng từ (thời gian) に Động từ（tần suất）',
      body: 'Biểu thị tần suất trong một khoảng thời gian: “trong 1 tháng … 2 lần”. に đặt sau lượng từ chỉ chu kì (1週間、1か月...).',
      examples: [
        '1か月に2回映画を見ます。→ Một tháng tôi xem phim 2 lần.',
      ],
      note: undefined,
    },
    {
      title: '9. ～だけ（chỉ ～）',
      body: 'だけ đặt sau lượng từ hoặc danh từ để biểu thị “chỉ có vậy”, “không hơn”.',
      examples: [
        'パワー電気に外国人の社員が1人だけいます。',
        '休みは日曜日だけです。',
      ],
      note: undefined,
    },
  ],
};

// Mini game: từ vựng Bài 11
export const lesson11VocabQuizItems = [
  { id: 1, vi: 'một cái (đồ vật)', options: ['ひとつ', 'ふたつ', 'ひとり'], correctIndex: 0 },
  { id: 2, vi: 'mất, tốn (thời gian)', options: ['かかります', 'やすみます', 'います'], correctIndex: 0 },
  { id: 3, vi: 'mấy cái, bao nhiêu cái', options: ['いくつ', 'どのくらい', 'ぜんぶで'], correctIndex: 0 },
  { id: 4, vi: 'một người', options: ['ひとり', 'ふたり', 'ひとつ'], correctIndex: 0 },
  { id: 5, vi: 'khoảng ～', options: ['～ぐらい', '～だけ', 'どのくらい'], correctIndex: 0 },
] as const;

// Mini game: ngữ pháp – lượng từ, いくつ/なん, どのくらい, ぐらい, だけ
export const lesson11GrammarQuizItems = [
  {
    id: 1,
    vi: 'Tôi đã mua 4 quả táo.',
    options: ['りんごを4つ買いました。', 'りんごを4人買いました。', 'りんごを4枚買いました。'],
    correctIndex: 0,
  },
  {
    id: 2,
    vi: 'Ở công ty này có mấy người nước ngoài?',
    options: [
      'この会社に外国人が何人いますか。',
      'この会社に外国人がいくついますか。',
      'この会社に外国人がどのくらいいますか。',
    ],
    correctIndex: 0,
  },
  {
    id: 3,
    vi: 'Mất khoảng 15 phút.',
    options: ['15分かかります。', '15分ぐらいかかります。', '15分だけかかります。'],
    correctIndex: 1,
  },
  {
    id: 4,
    vi: 'Một tháng tôi xem phim 2 lần.',
    options: [
      '1か月2回映画を見ます。',
      '1か月に2回映画を見ます。',
      '2回1か月映画を見ます。',
    ],
    correctIndex: 1,
  },
] as const;

// Mini game: ghép câu Bài 11
export const lesson11BuilderItems = [
  {
    id: 1,
    vi: 'Cho tôi 5 con tem và 2 bưu thiếp.',
    hint: 'N を ～枚 ください。',
    tokens: ['80円の', '切手を', '5枚と', 'はがきを', '2枚', 'ください。'],
  },
  {
    id: 2,
    vi: 'Có 2 sinh viên người nước ngoài.',
    hint: 'N が ～人 います。',
    tokens: ['外国人', 'の', '学生が', '2人', 'います。'],
  },
  {
    id: 3,
    vi: 'Từ Osaka đến Tokyo mất bao lâu?',
    hint: '～から ～まで どのくらい かかりますか。',
    tokens: ['大阪から', '東京まで', 'どのくらい', 'かかりますか。'],
  },
] as const;

// Mini game: hội thoại Bài 11
export const lesson11DialogueQuizItems = [
  {
    questionVi: 'Wang đi đâu?',
    options: ['Đi siêu thị.', 'Đi bưu điện.', 'Đi ngân hàng.'],
    correctIndex: 1,
  },
  {
    questionVi: 'Wang gửi hộp bằng cách nào?',
    options: ['Đường hàng không.', 'Đường biển.', 'Gửi nhanh.'],
    correctIndex: 1,
  },
  {
    questionVi: 'Gửi đường biển mất khoảng bao lâu?',
    options: ['Khoảng 1 tuần.', 'Khoảng 1 tháng.', 'Khoảng 2 tháng.'],
    correctIndex: 1,
  },
] as const;
