export interface Lesson3Word {
  japanese: string;
  kana: string;
  romaji: string;
  vietnamese: string;
  category: 'placePronoun' | 'place' | 'floor' | 'other';
}

export interface Lesson3Sentence {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface Lesson3Data {
  title: string;
  description: string;
  grammarSummary: string;
  words: Lesson3Word[];
  sentences: Lesson3Sentence[];
}

export const lesson3: Lesson3Data = {
  title: 'Bài 3: Ở đâu? (ここ・そこ・あそこ)',
  description:
    'Hỏi và trả lời vị trí (&quot;ở đâu?&quot;) trong lớp học, công ty, cửa hàng bách hoá bằng ここ／そこ／あそこ và どこ／どちら.',
  grammarSummary:
    'Mẫu chính: ここ・そこ・あそこ・どこ / こちら・そちら・あちら・どちら và Danh từ は Danh từ（địa điểm）です.',
  words: [
    // Đại từ chỉ nơi
    {
      japanese: 'ここ',
      kana: 'ここ',
      romaji: 'koko',
      vietnamese: 'chỗ này, đây (gần người nói)',
      category: 'placePronoun',
    },
    {
      japanese: 'そこ',
      kana: 'そこ',
      romaji: 'soko',
      vietnamese: 'chỗ đó (gần người nghe)',
      category: 'placePronoun',
    },
    {
      japanese: 'あそこ',
      kana: 'あそこ',
      romaji: 'asoko',
      vietnamese: 'chỗ kia, chỗ đằng kia (xa cả hai)',
      category: 'placePronoun',
    },
    {
      japanese: 'どこ',
      kana: 'どこ',
      romaji: 'doko',
      vietnamese: 'ở đâu',
      category: 'placePronoun',
    },
    {
      japanese: 'こちら',
      kana: 'こちら',
      romaji: 'kochira',
      vietnamese: 'phía này, chỗ này (lịch sự)',
      category: 'placePronoun',
    },
    {
      japanese: 'そちら',
      kana: 'そちら',
      romaji: 'sochira',
      vietnamese: 'phía đó, chỗ đó (lịch sự)',
      category: 'placePronoun',
    },
    {
      japanese: 'あちら',
      kana: 'あちら',
      romaji: 'achira',
      vietnamese: 'phía kia, chỗ kia (lịch sự)',
      category: 'placePronoun',
    },
    {
      japanese: 'どちら',
      kana: 'どちら',
      romaji: 'dochira',
      vietnamese: 'phía nào, chỗ nào (lịch sự)',
      category: 'placePronoun',
    },

    // Những nơi trong trường học / công ty
    {
      japanese: 'きょうしつ',
      kana: 'きょうしつ',
      romaji: 'kyōshitsu',
      vietnamese: 'lớp học, phòng học',
      category: 'place',
    },
    {
      japanese: 'しょくどう',
      kana: 'しょくどう',
      romaji: 'shokudō',
      vietnamese: 'nhà ăn, căn-tin',
      category: 'place',
    },
    {
      japanese: 'じむしょ',
      kana: 'じむしょ',
      romaji: 'jimusho',
      vietnamese: 'văn phòng',
      category: 'place',
    },
    {
      japanese: 'かいぎしつ',
      kana: 'かいぎしつ',
      romaji: 'kaigishitsu',
      vietnamese: 'phòng họp',
      category: 'place',
    },
    {
      japanese: 'うけつけ',
      kana: 'うけつけ',
      romaji: 'uketsuke',
      vietnamese: 'quầy tiếp tân',
      category: 'place',
    },
    {
      japanese: 'ロビー',
      kana: 'ロビー',
      romaji: 'robī',
      vietnamese: 'sảnh, lobby',
      category: 'place',
    },
    {
      japanese: 'トイレ（おてあらい）',
      kana: 'トイレ／おてあらい',
      romaji: 'toire / o-tearai',
      vietnamese: 'nhà vệ sinh, phòng vệ sinh',
      category: 'place',
    },
    {
      japanese: 'かいだん',
      kana: 'かいだん',
      romaji: 'kaidan',
      vietnamese: 'cầu thang',
      category: 'place',
    },
    {
      japanese: 'エレベーター',
      kana: 'エレベーター',
      romaji: 'erebētā',
      vietnamese: 'thang máy',
      category: 'place',
    },
    {
      japanese: 'エスカレーター',
      kana: 'エスカレーター',
      romaji: 'esukarētā',
      vietnamese: 'thang cuốn',
      category: 'place',
    },
    {
      japanese: 'うち',
      kana: 'うち',
      romaji: 'uchi',
      vietnamese: 'nhà (của tôi)',
      category: 'place',
    },
    {
      japanese: 'かいしゃ',
      kana: 'かいしゃ',
      romaji: 'kaisha',
      vietnamese: 'công ty',
      category: 'place',
    },

    // Một số từ khác
    {
      japanese: 'でんわ',
      kana: 'でんわ',
      romaji: 'denwa',
      vietnamese: 'điện thoại',
      category: 'other',
    },
    {
      japanese: 'くつ',
      kana: 'くつ',
      romaji: 'kutsu',
      vietnamese: 'giày',
      category: 'other',
    },
    {
      japanese: 'ネクタイ',
      kana: 'ネクタイ',
      romaji: 'nekutai',
      vietnamese: 'cà vạt',
      category: 'other',
    },
    {
      japanese: 'ワイン',
      kana: 'ワイン',
      romaji: 'wain',
      vietnamese: 'rượu vang',
      category: 'other',
    },
    {
      japanese: 'たばこ',
      kana: 'たばこ',
      romaji: 'tabako',
      vietnamese: 'thuốc lá',
      category: 'other',
    },
    {
      japanese: 'うりば',
      kana: 'うりば',
      romaji: 'uriba',
      vietnamese: 'quầy bán (trong bách hoá)',
      category: 'place',
    },

    // Một số khu ở cửa hàng bách hoá (từ & thông tin tham khảo)
    {
      japanese: '子ども服うりば',
      kana: 'こどもふくうりば',
      romaji: 'kodomofuku uriba',
      vietnamese: 'quầy quần áo trẻ em',
      category: 'place',
    },
    {
      japanese: 'おもちゃうりば',
      kana: 'おもちゃうりば',
      romaji: 'omocha uriba',
      vietnamese: 'quầy đồ chơi',
      category: 'place',
    },
    {
      japanese: '本・文房具うりば',
      kana: 'ほん・ぶんぼうぐうりば',
      romaji: 'hon / bunbōgu uriba',
      vietnamese: 'quầy sách, văn phòng phẩm',
      category: 'place',
    },
    {
      japanese: '家具うりば',
      kana: 'かぐうりば',
      romaji: 'kagu uriba',
      vietnamese: 'quầy đồ nội thất',
      category: 'place',
    },
    {
      japanese: '食器うりば',
      kana: 'しょっきうりば',
      romaji: 'shokki uriba',
      vietnamese: 'quầy bát đĩa, đồ dùng bàn ăn',
      category: 'place',
    },
    {
      japanese: '電気製品うりば',
      kana: 'でんきせいひんうりば',
      romaji: 'denki seihin uriba',
      vietnamese: 'quầy đồ điện, điện gia dụng',
      category: 'place',
    },
    {
      japanese: '紳士服うりば',
      kana: 'しんしふくうりば',
      romaji: 'shinshifuku uriba',
      vietnamese: 'quầy quần áo nam',
      category: 'place',
    },
    {
      japanese: '婦人服うりば',
      kana: 'ふじんふくうりば',
      romaji: 'fujinfuku uriba',
      vietnamese: 'quầy quần áo nữ',
      category: 'place',
    },
    {
      japanese: '食料品うりば',
      kana: 'しょくりょうひんうりば',
      romaji: 'shokuryōhin uriba',
      vietnamese: 'quầy lương thực, thực phẩm',
      category: 'place',
    },

    // Tầng, tiền
    {
      japanese: 'ちか',
      kana: 'ちか',
      romaji: 'chika',
      vietnamese: 'tầng hầm, dưới mặt đất',
      category: 'floor',
    },
    {
      japanese: '～かい（～がい）',
      kana: '～かい／～がい',
      romaji: '～kai / ～gai',
      vietnamese: 'tầng thứ ~',
      category: 'floor',
    },
    {
      japanese: 'なんがい',
      kana: 'なんがい',
      romaji: 'nangai',
      vietnamese: 'tầng mấy?',
      category: 'floor',
    },
    {
      japanese: 'えん',
      kana: 'えん',
      romaji: 'en',
      vietnamese: 'yên (đơn vị tiền Nhật)',
      category: 'other',
    },
    {
      japanese: 'いくら',
      kana: 'いくら',
      romaji: 'ikura',
      vietnamese: 'bao nhiêu tiền',
      category: 'other',
    },
  ],
  sentences: [
    {
      japanese: 'ここは教室です。',
      romaji: 'Koko wa kyōshitsu desu.',
      vietnamese: 'Đây là lớp học.',
    },
    {
      japanese: 'トイレはあそこです。',
      romaji: 'Toire wa asoko desu.',
      vietnamese: 'Nhà vệ sinh ở đằng kia.',
    },
    {
      japanese: 'エレベーターはどこですか。',
      romaji: 'Erebētā wa doko desu ka.',
      vietnamese: 'Thang máy ở đâu?',
    },
    {
      japanese: '事務所は３階です。',
      romaji: 'Jimusho wa san-kai desu.',
      vietnamese: 'Văn phòng ở tầng 3.',
    },
    {
      japanese: 'ここはデパートの靴うりばです。',
      romaji: 'Koko wa depāto no kutsu uriba desu.',
      vietnamese: 'Đây là quầy giày của cửa hàng bách hoá.',
    },
    {
      japanese: 'ワインうりばは地下一階です。',
      romaji: 'Wain uriba wa chika ikkai desu.',
      vietnamese: 'Quầy rượu vang ở tầng hầm thứ nhất.',
    },
  ],
};

