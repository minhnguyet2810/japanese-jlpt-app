/**
 * Bài 12: Tính từ & so sánh (Minna no Nihongo I – Bản dịch, tr.94–99)
 * Quá khứ N/な-adj/い-adj ・ N1は N2より ・ N1と N2と どちらが ・ N [の 中]で 何/どこ/だれ/いつ が いちばん
 */

export type Lesson12WordCategory =
  | 'adjI'
  | 'adjNa'
  | 'noun'
  | 'season'
  | 'weather'
  | 'place'
  | 'food'
  | 'expression'
  | 'phrase'
  | 'landmark';

export interface Lesson12Word {
  japanese: string;
  kana: string;
  romaji: string;
  vietnamese: string;
  category: Lesson12WordCategory;
}

export interface Lesson12Sentence {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface Lesson12DialogueTurn {
  speaker: string;
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface Lesson12GrammarPoint {
  title: string;
  body: string;
  examples: string[];
  note?: string;
}

export interface Lesson12Data {
  title: string;
  description: string;
  grammarSummary: string;
  words: Lesson12Word[];
  sentences: Lesson12Sentence[];
  dialogue: Lesson12DialogueTurn[];
  grammarPoints: Lesson12GrammarPoint[];
}

export const lesson12: Lesson12Data = {
  title: 'Bài 12: Tính từ & so sánh（より・どちら・いちばん）',
  description:
    'Quá khứ câu danh từ & tính từ な (でした／じゃありませんでした). Quá khứ tính từ い (かったです／くなかったです). So sánh: N1は N2より Adj. Hỏi lựa chọn hai: N1と N2と どちらが Adj／～のほうが Adj. So sánh nhất: N [の 中]で 何／どこ／だれ／いつ が いちばん Adj. Trợ từ が sau từ nghi vấn khi là chủ ngữ.',
  grammarSummary:
    'N／な-adj でした・じゃありませんでした ・ い-adj かったです・くなかったです ・ N1は N2より Adj ・ N1と N2と どちらが Adj／～のほうが Adj ・ N [の 中]で 何/どこ/だれ/いつ が いちばん Adj ・ が với chủ ngữ nghi vấn',

  words: [
    // Tính từ đuôi な (tr.94)
    { japanese: '簡単［な］', kana: 'かんたん［な］', romaji: 'kantan(na)', vietnamese: 'đơn giản, dễ', category: 'adjNa' },

    // Tính từ đuôi い (tr.94)
    { japanese: '近い', kana: 'ちかい', romaji: 'chikai', vietnamese: 'gần', category: 'adjI' },
    { japanese: '遠い', kana: 'とおい', romaji: 'tooi', vietnamese: 'xa', category: 'adjI' },
    { japanese: '速い・早い', kana: 'はやい', romaji: 'hayai', vietnamese: 'nhanh, sớm', category: 'adjI' },
    { japanese: '遅い', kana: 'おそい', romaji: 'osoi', vietnamese: 'chậm, muộn', category: 'adjI' },
    { japanese: '多い', kana: 'おおい', romaji: 'ōi', vietnamese: 'nhiều [người 人が～]', category: 'adjI' },
    { japanese: '少ない', kana: 'すくない', romaji: 'sukunai', vietnamese: 'ít [người 人が～]', category: 'adjI' },
    { japanese: '暖かい・温かい', kana: 'あたたかい', romaji: 'atatakai', vietnamese: 'ấm', category: 'adjI' },
    { japanese: '涼しい', kana: 'すずしい', romaji: 'suzushii', vietnamese: 'mát', category: 'adjI' },
    { japanese: '甘い', kana: 'あまい', romaji: 'amai', vietnamese: 'ngọt', category: 'adjI' },
    { japanese: '辛い', kana: 'からい', romaji: 'karai', vietnamese: 'cay', category: 'adjI' },
    { japanese: '重い', kana: 'おもい', romaji: 'omoi', vietnamese: 'nặng', category: 'adjI' },
    { japanese: '軽い', kana: 'かるい', romaji: 'karui', vietnamese: 'nhẹ', category: 'adjI' },
    { japanese: 'いい', kana: 'いい', romaji: 'ii', vietnamese: 'thích, chọn, dùng [cà-phê コーヒーが～]', category: 'adjI' },

    // Mùa & thời tiết (tr.94)
    { japanese: '季節', kana: 'きせつ', romaji: 'kisetsu', vietnamese: 'mùa', category: 'season' },
    { japanese: '春', kana: 'はる', romaji: 'haru', vietnamese: 'mùa xuân', category: 'season' },
    { japanese: '夏', kana: 'なつ', romaji: 'natsu', vietnamese: 'mùa hè', category: 'season' },
    { japanese: '秋', kana: 'あき', romaji: 'aki', vietnamese: 'mùa thu', category: 'season' },
    { japanese: '冬', kana: 'ふゆ', romaji: 'fuyu', vietnamese: 'mùa đông', category: 'season' },
    { japanese: '天気', kana: 'てんき', romaji: 'tenki', vietnamese: 'thời tiết', category: 'weather' },
    { japanese: '雨', kana: 'あめ', romaji: 'ame', vietnamese: 'mưa', category: 'weather' },
    { japanese: '雪', kana: 'ゆき', romaji: 'yuki', vietnamese: 'tuyết', category: 'weather' },
    { japanese: '曇り', kana: 'くもり', romaji: 'kumori', vietnamese: 'có mây', category: 'weather' },

    // Địa điểm (tr.94)
    { japanese: 'ホテル', kana: 'ホテル', romaji: 'hoteru', vietnamese: 'khách sạn', category: 'place' },
    { japanese: '空港', kana: 'くうこう', romaji: 'kūkō', vietnamese: 'sân bay', category: 'place' },
    { japanese: '海', kana: 'うみ', romaji: 'umi', vietnamese: 'biển, đại dương', category: 'place' },
    { japanese: '世界', kana: 'せかい', romaji: 'sekai', vietnamese: 'thế giới', category: 'place' },

    // Danh từ: tiệc, lễ hội, thi, món ăn (tr.95)
    { japanese: 'パーティー', kana: 'パーティー', romaji: 'pātī', vietnamese: 'tiệc（～をします: tổ chức tiệc）', category: 'noun' },
    { japanese: '［お］まつり', kana: '［お］まつり', romaji: '(o-)matsuri', vietnamese: 'lễ hội', category: 'noun' },
    { japanese: '試験', kana: 'しけん', romaji: 'shiken', vietnamese: 'kỳ thi, bài thi', category: 'noun' },
    { japanese: 'すきやき', kana: 'すきやき', romaji: 'sukiyaki', vietnamese: 'Sukiyaki (món thịt bò nấu rau)', category: 'food' },
    { japanese: 'さしみ', kana: 'さしみ', romaji: 'sashimi', vietnamese: 'Sashimi (gỏi cá sống)', category: 'food' },
    { japanese: '［お］すし', kana: '［お］すし', romaji: '(o-)sushi', vietnamese: 'Sushi', category: 'food' },
    { japanese: 'てんぷら', kana: 'てんぷら', romaji: 'tenpura', vietnamese: 'Tempura (hải sản, rau chiên bột)', category: 'food' },
    { japanese: 'いけばな', kana: 'いけばな', romaji: 'ikebana', vietnamese: 'nghệ thuật cắm hoa（～をします: cắm hoa）', category: 'noun' },
    { japanese: 'もみじ', kana: 'もみじ', romaji: 'momiji', vietnamese: 'lá đỏ', category: 'noun' },

    // Từ so sánh & trạng từ (tr.95)
    { japanese: 'どちら', kana: 'どちら', romaji: 'dochira', vietnamese: 'cái nào (lựa chọn giữa hai)', category: 'expression' },
    { japanese: 'どちらも', kana: 'どちらも', romaji: 'dochira mo', vietnamese: 'cả hai', category: 'expression' },
    { japanese: 'ずっと', kana: 'ずっと', romaji: 'zutto', vietnamese: '(hơn) hẳn', category: 'expression' },
    { japanese: 'はじめて', kana: 'はじめて', romaji: 'hajimete', vietnamese: 'lần đầu tiên', category: 'expression' },

    // Hội thoại (tr.95)
    { japanese: 'ただいま', kana: 'ただいま', romaji: 'tadaima', vietnamese: 'Tôi đã về đây.', category: 'phrase' },
    { japanese: 'お帰りなさい', kana: 'おかえりなさい', romaji: 'okaerinasai', vietnamese: 'Anh/chị đã về đấy à. (chào người vừa về nhà)', category: 'phrase' },
    { japanese: 'すごいですね', kana: 'すごいですね', romaji: 'sugoi desu ne', vietnamese: 'Ghê quá nhỉ. / Hay quá nhỉ.', category: 'phrase' },
    { japanese: 'でも', kana: 'でも', romaji: 'demo', vietnamese: 'nhưng', category: 'phrase' },
    { japanese: '疲れました', kana: 'つかれました', romaji: 'tsukaremashita', vietnamese: 'Tôi mệt rồi.', category: 'phrase' },

    // Địa danh & tên riêng (tr.95, 97)
    { japanese: '祇園祭', kana: 'ぎおんまつり', romaji: 'Gion Matsuri', vietnamese: 'Lễ hội Gion (nổi tiếng nhất Kyoto)', category: 'landmark' },
    { japanese: 'ホンコン', kana: 'ホンコン', romaji: 'Honkon', vietnamese: 'Hồng Kông', category: 'place' },
    { japanese: 'シンガポール', kana: 'シンガポール', romaji: 'Shingapōru', vietnamese: 'Singapore', category: 'place' },
    { japanese: 'まいにち屋', kana: 'まいにちや', romaji: 'Mainichi-ya', vietnamese: 'tên siêu thị (giả tưởng)', category: 'place' },
    { japanese: 'ABCストア', kana: 'ABCストア', romaji: 'ABC Sutōa', vietnamese: 'tên siêu thị (giả tưởng)', category: 'place' },
    { japanese: 'ジャパン', kana: 'ジャパン', romaji: 'Japan', vietnamese: 'tên siêu thị (giả tưởng)', category: 'place' },
    { japanese: '金閣寺', kana: 'きんかくじ', romaji: 'Kinkaku-ji', vietnamese: 'Chùa Vàng (Kyoto)', category: 'landmark' },
    { japanese: '姫路城', kana: 'ひめじじょう', romaji: 'Himeji-jō', vietnamese: 'Lâu đài Himeji', category: 'landmark' },
    { japanese: '富士山', kana: 'ふじさん', romaji: 'Fuji-san', vietnamese: 'Núi Phú Sĩ', category: 'landmark' },
    { japanese: '東照宮', kana: 'とうしょうぐう', romaji: 'Tōshōgū', vietnamese: 'Đông Chiếu Cung (Nikkō)', category: 'landmark' },
    { japanese: '皇居', kana: 'こうきょ', romaji: 'Kōkyo', vietnamese: 'Hoàng cung (Tokyo)', category: 'landmark' },
  ],

  sentences: [
    // Mẫu câu (tr.96)
    { japanese: 'きのうは雨でした。', romaji: 'Kinō wa ame deshita.', vietnamese: 'Hôm qua trời mưa.' },
    { japanese: 'きのうは寒かったです。', romaji: 'Kinō wa samukatta desu.', vietnamese: 'Hôm qua trời lạnh.' },
    { japanese: '北海道は九州より大きいです。', romaji: 'Hokkaidō wa Kyūshū yori ōkii desu.', vietnamese: 'Hokkaido lớn hơn Kyushu.' },
    { japanese: '1年で夏がいちばん好きです。', romaji: 'Ichinen de natsu ga ichiban suki desu.', vietnamese: 'Trong một năm, tôi thích nhất mùa hè.' },
    // Ví dụ (tr.96)
    { japanese: '京都は静かですか。…いいえ、静かじゃありません。', romaji: 'Kyōto wa shizuka desu ka. …Iie, shizuka ja arimasen.', vietnamese: 'Kyoto có yên tĩnh không? …Không, không yên tĩnh.' },
    { japanese: '旅行は楽しかったですか。…はい、とても楽しかったです。', romaji: 'Ryokō wa tanoshikatta desu ka. …Hai, totemo tanoshikatta desu.', vietnamese: 'Chuyến du lịch có vui không? …Vâng, rất vui.' },
    { japanese: '天気はよかったですか。…いいえ、あまりよくなかったです。', romaji: 'Tenki wa yokatta desu ka. …Iie, amari yokunakatta desu.', vietnamese: 'Thời tiết có đẹp không? …Không, không đẹp lắm.' },
    { japanese: 'きのうのパーティーはどうでしたか。…とてもにぎやかでした。たくさんの人に会いました。', romaji: 'Kinō no pātī wa dō deshita ka. …Totemo nigiyaka deshita. Takusan no hito ni aimashita.', vietnamese: 'Bữa tiệc hôm qua thế nào? …Rất vui nhộn. Tôi đã gặp nhiều người.' },
    { japanese: '東京はニューヨークより人が多いですか。…はい、ずっと多いです。', romaji: 'Tōkyō wa Nyū Yōku yori hito ga ōi desu ka. …Hai, zutto ōi desu.', vietnamese: 'Tokyo có đông người hơn New York không? …Có, đông hơn nhiều.' },
    { japanese: '空港までバスと電車とどちらが速いですか。…電車のほうが速いです。', romaji: 'Kūkō made basu to densha to dochira ga hayai desu ka. …Densha no hō ga hayai desu.', vietnamese: 'Đến sân bay thì xe buýt và tàu điện, cái nào nhanh hơn? …Tàu điện nhanh hơn.' },
    { japanese: '海と山とどちらが好きですか。…どちらも好きです。', romaji: 'Umi to yama to dochira ga suki desu ka. …Dochira mo suki desu.', vietnamese: 'Biển và núi, anh/chị thích nơi nào hơn? …Tôi thích cả hai.' },
    { japanese: '日本料理［の中］で何がいちばんおいしいですか。…てんぷらがいちばんおいしいです。', romaji: 'Nihon ryōri [no naka] de nani ga ichiban oishii desu ka. …Tenpura ga ichiban oishii desu.', vietnamese: 'Trong các món ăn Nhật Bản, món nào ngon nhất? …Món Tempura ngon nhất.' },
    { japanese: 'ヨーロッパでどこがいちばんよかったですか。…スイスがいちばんよかったです。', romaji: 'Yōroppa de doko ga ichiban yokatta desu ka. …Suisu ga ichiban yokatta desu.', vietnamese: 'Trong những địa điểm ở châu Âu, chỗ nào anh/chị thích nhất? …Tôi thích nhất Thụy Sĩ.' },
    { japanese: '家族でだれがいちばん背が高いですか。…弟がいちばん背が高いです。', romaji: 'Kazoku de dare ga ichiban se ga takai desu ka. …Otōto ga ichiban se ga takai desu.', vietnamese: 'Trong gia đình anh/chị, ai cao nhất? …Em trai tôi cao nhất.' },
    { japanese: '1年でいつがいちばん寒いですか。…2月がいちばん寒いです。', romaji: 'Ichinen de itsu ga ichiban samui desu ka. …Nigatsu ga ichiban samui desu.', vietnamese: 'Trong một năm, thời điểm nào lạnh nhất? …Tháng 2 lạnh nhất.' },
    { japanese: 'きのうの試験は簡単じゃありませんでした。', romaji: 'Kinō no shiken wa kantan ja arimasen deshita.', vietnamese: 'Bài thi hôm qua không dễ.' },
    { japanese: 'きのうのパーティーはあまり楽しくなかったです。', romaji: 'Kinō no pātī wa amari tanoshikunakatta desu.', vietnamese: 'Bữa tiệc hôm qua không vui lắm.' },
    { japanese: 'この車はあの車より大きいです。', romaji: 'Kono kuruma wa ano kuruma yori ōkii desu.', vietnamese: 'Xe ô-tô này lớn hơn xe ô-tô kia.' },
    { japanese: 'サッカーと野球とどちらがおもしろいですか。…サッカーのほうがおもしろいです。', romaji: 'Sakkā to yakyū to dochira ga omoshiroi desu ka. …Sakkā no hō ga omoshiroi desu.', vietnamese: 'Bóng đá và bóng chày, môn nào thú vị hơn? …Bóng đá thú vị hơn.' },
  ],

  dialogue: [
    // Hội thoại: Miller – Người quản lý (tr.95–96). Miller vừa về nhà.
    { speaker: 'Miller', japanese: 'ただいま。', romaji: 'Tadaima.', vietnamese: 'Chào bác, tôi đã về rồi đây.' },
    { speaker: 'Người quản lý', japanese: 'お帰りなさい。', romaji: 'Okaerinasai.', vietnamese: 'Ồ, anh đã về.' },
    { speaker: 'Miller', japanese: 'これは京都のお土産です。', romaji: 'Kore wa Kyōto no omiyage desu.', vietnamese: 'Đây là quà Kyoto.' },
    { speaker: 'Người quản lý', japanese: 'ありがとうございます。', romaji: 'Arigatō gozaimasu.', vietnamese: 'Cám ơn anh.' },
    { speaker: 'Miller', japanese: '祇園祭はどうでしたか。', romaji: 'Gion Matsuri wa dō deshita ka.', vietnamese: 'Lễ hội Gion thế nào?' },
    { speaker: 'Người quản lý', japanese: 'とてもおもしろかったです。', romaji: 'Totemo omoshirokatta desu.', vietnamese: 'Rất thú vị ạ.' },
    { speaker: 'Miller', japanese: '外国人も多かったですね。', romaji: 'Gaikokujin mo ōkatta desu ne.', vietnamese: 'Người nước ngoài cũng đông lắm.' },
    { speaker: 'Người quản lý', japanese: '祇園祭は京都のまつりでいちばん有名です。', romaji: 'Gion Matsuri wa Kyōto no matsuri de ichiban yūmei desu.', vietnamese: 'Lễ hội Gion nổi tiếng nhất trong các lễ hội ở Kyoto.' },
    { speaker: 'Miller', japanese: 'そうですか。', romaji: 'Sō desu ka.', vietnamese: 'Thế ạ.' },
    { speaker: 'Người quản lý', japanese: '写真を撮りましたか。', romaji: 'Shashin o torimashita ka.', vietnamese: 'Anh có chụp ảnh không?' },
    { speaker: 'Miller', japanese: 'はい、100枚ぐらい撮りました。', romaji: 'Hai, hyakumai gurai torimashita.', vietnamese: 'Có, tôi chụp khoảng 100 tấm.' },
    { speaker: 'Người quản lý', japanese: 'すごいですね。', romaji: 'Sugoi desu ne.', vietnamese: 'Nhiều quá nhỉ.' },
    { speaker: 'Miller', japanese: 'はい。でも、ちょっと疲れました。', romaji: 'Hai. Demo, chotto tsukaremashita.', vietnamese: 'Vâng. Nhưng hơi mệt ạ.' },
  ],

  grammarPoints: [
    {
      title: '1. Thời quá khứ của câu danh từ và tính từ đuôi な',
      body: 'Khẳng định: N／な-adj + でした. Phủ định: N／な-adj + じゃありませんでした（では ありませんでした）. Ví dụ: きのうは雨でした。きのうの試験は簡単じゃありませんでした。',
      examples: [
        'きのうは雨でした。→ Hôm qua trời mưa.',
        'きのうの試験は簡単じゃありませんでした。→ Bài thi hôm qua không dễ.',
      ],
      note: 'Hiện tại: です／じゃありません. Quá khứ: でした／じゃありませんでした.',
    },
    {
      title: '2. Thời quá khứ của tính từ đuôi い',
      body: 'Khẳng định: bỏ い + かったです（例: あつい → あつかったです）. Phủ định: く + なかったです（あつくないです → あつくなかったです）. あまり + くなかったです = không … lắm.',
      examples: [
        'きのうは暑かったです。→ Hôm qua trời nóng.',
        'きのうのパーティーはあまり楽しくなかったです。→ Bữa tiệc hôm qua không vui lắm.',
      ],
      note: undefined,
    },
    {
      title: '3. So sánh hơn: N1は N2より Tính từ です',
      body: 'Lấy N2 làm chuẩn để nói N1 có tính chất/trạng thái hơn. Nghĩa: “N1 … hơn N2”.',
      examples: [
        'この車はあの車より大きいです。→ Xe này lớn hơn xe kia.',
        '北海道は九州より大きいです。→ Hokkaido lớn hơn Kyushu.',
        '東京はニューヨークより人が多いです。→ Tokyo đông người hơn New York.',
      ],
      note: undefined,
    },
    {
      title: '4. Hỏi lựa chọn giữa hai: N1と N2と どちらが Adj ですか／…のほうが Adj です',
      body: 'Hỏi người nghe chọn giữa N1 và N2. Từ nghi vấn luôn là どちら (không phụ thuộc đối tượng). Trả lời: N1のほうが／N2のほうが + Adj です. どちらも = cả hai.',
      examples: [
        'サッカーと野球とどちらがおもしろいですか。…サッカーのほうがおもしろいです。',
        '空港までバスと電車とどちらが速いですか。…電車のほうが速いです。',
        '海と山とどちらが好きですか。…どちらも好きです。',
      ],
      note: undefined,
    },
    {
      title: '5. So sánh nhất: N [の 中]で 何／どこ／だれ／いつ が いちばん Adj ですか',
      body: 'Hỏi đối tượng (vật, địa điểm, người, thời điểm) có mức độ tính từ cao nhất trong phạm vi N. Trả lời: …N が いちばん Adj です. Từ nghi vấn: 何（vật）, どこ（địa điểm）, だれ（người）, いつ（thời điểm）.',
      examples: [
        '日本料理［の中］で何がいちばんおいしいですか。…てんぷらがいちばんおいしいです。',
        'ヨーロッパでどこがいちばんよかったですか。…スイスがいちばんよかったです。',
        '家族でだれがいちばん背が高いですか。…弟がいちばん背が高いです。',
        '1年でいつがいちばん寒いですか。…2月がいちばん寒いです。',
      ],
      note: undefined,
    },
    {
      title: '6. Trợ từ が khi từ nghi vấn là chủ ngữ',
      body: 'Khi từ nghi vấn (何、どこ、だれ、いつ) là chủ ngữ của câu thì đặt が ngay sau nó. Giống Bài 10 với あります／います; trong câu tính từ khi hỏi về chủ ngữ cũng dùng が.',
      examples: [
        '何がありますか。だれがいますか。（Bài 10）',
        '日本料理で何がいちばんおいしいですか。→ てんぷらが…',
        '家族でだれがいちばん背が高いですか。→ 弟が…',
      ],
      note: undefined,
    },
  ],
};

// ——— Mini game: nhiều câu + giải thích tiếng Việt ———

/** Quiz item có thêm giải thích khi chọn đáp án */
export interface Lesson12VocabQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export interface Lesson12GrammarQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export const lesson12VocabQuizItems: Lesson12VocabQuizItem[] = [
  { id: 1, vi: 'nhẹ', options: ['かるい', 'おもい', 'ちかい'], correctIndex: 0, explanationVi: '「軽い」(karui) = nhẹ. 「重い」(omoi) = nặng.' },
  { id: 2, vi: 'gần', options: ['ちかい', 'とおい', 'はやい'], correctIndex: 0, explanationVi: '「近い」(chikai) = gần. 「遠い」(tooi) = xa.' },
  { id: 3, vi: 'mùa xuân', options: ['はる', 'なつ', 'ふゆ'], correctIndex: 0, explanationVi: '春(haru)=xuân, 夏(natsu)=hè, 秋(aki)=thu, 冬(fuyu)=đông.' },
  { id: 4, vi: 'thời tiết', options: ['てんき', 'あめ', 'ゆき'], correctIndex: 0, explanationVi: '天気(tenki)=thời tiết. 雨(ame)=mưa, 雪(yuki)=tuyết.' },
  { id: 5, vi: 'cái nào (chọn giữa hai)', options: ['どちら', 'ずっと', 'はじめて'], correctIndex: 0, explanationVi: '「どちら」dùng khi hỏi lựa chọn giữa hai thứ.' },
  { id: 6, vi: 'đơn giản, dễ', options: ['かんたん［な］', 'おおい', 'すくない'], correctIndex: 0, explanationVi: '簡単(な) = tính từ đuôi な, nghĩa là đơn giản, dễ.' },
  { id: 7, vi: 'Tôi đã về đây.', options: ['ただいま', 'おかえりなさい', 'すごいですね'], correctIndex: 0, explanationVi: '「ただいま」nói khi vừa về đến nhà. Người nhà đáp: 「お帰りなさい」.' },
  { id: 8, vi: '(hơn) hẳn', options: ['ずっと', 'どちらも', 'でも'], correctIndex: 0, explanationVi: '「ずっと」nhấn mạnh sự chênh lệch: Tokyo ずっと 多い = đông hơn hẳn.' },
  { id: 9, vi: 'Lễ hội Gion', options: ['祇園祭', '富士山', '金閣寺'], correctIndex: 0, explanationVi: '祇園祭(Gion Matsuri) = lễ hội nổi tiếng nhất ở Kyoto.' },
  { id: 10, vi: 'mát', options: ['すずしい', 'あたたかい', 'あつい'], correctIndex: 0, explanationVi: '涼しい(suzushii)=mát. 暖かい(atatakai)=ấm.' },
];

export const lesson12GrammarQuizItems: Lesson12GrammarQuizItem[] = [
  {
    id: 1,
    vi: 'Hôm qua trời mưa.',
    options: ['きのうは雨でした。', 'きのうは雨です。', 'きのうは雨じゃありません。'],
    correctIndex: 0,
    explanationVi: 'Quá khứ của câu danh từ: N + でした. 「雨でした」= đã là mưa (hôm qua).',
  },
  {
    id: 2,
    vi: 'Bài thi hôm qua không dễ.',
    options: [
      'きのうの試験は簡単じゃありませんでした。',
      'きのうの試験は簡単じゃありません。',
      'きのうの試験は簡単でした。',
    ],
    correctIndex: 0,
    explanationVi: 'Quá khứ phủ định của な-adj: 簡単じゃありませんでした.',
  },
  {
    id: 3,
    vi: 'Hôm qua trời nóng.',
    options: ['きのうは暑かったです。', 'きのうは暑いです。', 'きのうは暑くないです。'],
    correctIndex: 0,
    explanationVi: 'Quá khứ của tính từ い: 暑い → 暑かったです.',
  },
  {
    id: 4,
    vi: 'Xe này lớn hơn xe kia.',
    options: [
      'この車はあの車より大きいです。',
      'この車はあの車が大きいです。',
      'この車とあの車とどちらが大きいです。',
    ],
    correctIndex: 0,
    explanationVi: 'So sánh hơn: N1は N2より Adj です. より = hơn.',
  },
  {
    id: 5,
    vi: 'Bóng đá và bóng chày, môn nào thú vị hơn?',
    options: [
      'サッカーと野球とどちらがおもしろいですか。',
      'サッカーは野球よりおもしろいですか。',
      'サッカーがおもしろいです。',
    ],
    correctIndex: 0,
    explanationVi: 'Hỏi lựa chọn hai: N1と N2と どちらが Adj ですか.',
  },
  {
    id: 6,
    vi: 'Trong các món Nhật, món nào ngon nhất?',
    options: [
      '日本料理で何がいちばんおいしいですか。',
      '日本料理は何がおいしいですか。',
      '何が日本料理でおいしいですか。',
    ],
    correctIndex: 0,
    explanationVi: 'So sánh nhất: N で 何が いちばん Adj ですか. Chủ ngữ nghi vấn đi với が.',
  },
  {
    id: 7,
    vi: 'Tàu điện nhanh hơn. (trả lời “xe buýt hay tàu nhanh hơn?”)',
    options: ['電車のほうが速いです。', '電車より速いです。', '電車が速いでした。'],
    correctIndex: 0,
    explanationVi: 'Trả lời “cái nào hơn”: N のほうが Adj です.',
  },
  {
    id: 8,
    vi: 'Bữa tiệc hôm qua không vui lắm.',
    options: [
      'きのうのパーティーはあまり楽しくなかったです。',
      'きのうのパーティーは楽しくなかったです。',
      'きのうのパーティーはあまり楽しいです。',
    ],
    correctIndex: 0,
    explanationVi: 'Quá khứ phủ định い-adj: 楽しい → 楽しくなかったです. あまり = không … lắm.',
  },
  {
    id: 9,
    vi: 'Tôi thích cả hai. (biển và núi)',
    options: ['どちらも好きです。', 'どちらが好きです。', 'ずっと好きです。'],
    correctIndex: 0,
    explanationVi: 'どちらも = cả hai (cả hai đều).',
  },
  {
    id: 10,
    vi: 'Tháng 2 lạnh nhất. (trong một năm)',
    options: ['2月がいちばん寒いです。', '2月は寒いです。', '2月が寒かったです。'],
    correctIndex: 0,
    explanationVi: 'Trả lời “cái gì nhất”: N が いちばん Adj です. が vì chủ ngữ là đáp án.',
  },
];

export const lesson12BuilderItems = [
  { id: 1, vi: 'Hôm qua trời mưa.', hint: 'N は N でした。', tokens: ['きのうは', '雨', 'でした。'] },
  { id: 2, vi: 'Hokkaido lớn hơn Kyushu.', hint: 'N1は N2より い-adj です。', tokens: ['北海道は', '九州より', '大きいです。'] },
  { id: 3, vi: 'Trong các món Nhật, món nào ngon nhất?', hint: 'N で 何が いちばん Adj ですか。', tokens: ['日本料理で', '何が', 'いちばん', 'おいしいですか。'] },
  { id: 4, vi: 'Tàu điện nhanh hơn.', hint: 'N のほうが Adj です。', tokens: ['電車の', 'ほうが', '速いです。'] },
  { id: 5, vi: 'Bóng đá và bóng chày, môn nào thú vị hơn?', hint: 'N1と N2と どちらが Adj ですか。', tokens: ['サッカーと', '野球と', 'どちらが', 'おもしろいですか。'] },
] as const;

export const lesson12DialogueQuizItems = [
  { questionVi: 'Miller tặng gì cho người quản lý?', options: ['Quà Kyoto.', 'Quà Tokyo.', 'Ảnh lễ hội.'], correctIndex: 0, explanationVi: 'Miller nói: これは京都のお土産です。= Đây là quà Kyoto.' },
  { questionVi: 'Lễ hội Gion thế nào?', options: ['Rất thú vị.', 'Không vui lắm.', 'Rất đông.'], correctIndex: 0, explanationVi: 'Người quản lý đáp: とてもおもしろかったです。= Rất thú vị.' },
  { questionVi: 'Lễ hội Gion nổi tiếng thế nào ở Kyoto?', options: ['Nổi tiếng nhất trong các lễ hội.', 'Nổi tiếng thứ hai.', 'Không nổi tiếng.'], correctIndex: 0, explanationVi: '祇園祭は京都のまつりでいちばん有名です。= Nổi tiếng nhất trong các lễ hội ở Kyoto.' },
  { questionVi: 'Miller chụp khoảng bao nhiêu tấm ảnh?', options: ['Khoảng 100 tấm.', 'Khoảng 50 tấm.', 'Khoảng 200 tấm.'], correctIndex: 0, explanationVi: '100枚ぐらい撮りました。= Chụp khoảng 100 tấm.' },
  { questionVi: 'Miller cảm thấy thế nào sau khi đi lễ hội?', options: ['Hơi mệt.', 'Rất vui.', 'Buồn.'], correctIndex: 0, explanationVi: 'ちょっと疲れました。= Hơi mệt rồi.' },
  { questionVi: 'Câu nào dùng khi vừa về đến nhà?', options: ['ただいま。', 'お帰りなさい。', 'すごいですね。'], correctIndex: 0, explanationVi: '「ただいま」= Tôi đã về đây. Người ở nhà đáp 「お帰りなさい」.' },
] as const;
