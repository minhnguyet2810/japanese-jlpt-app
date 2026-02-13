export interface Lesson2Word {
  japanese: string;
  kana: string;
  romaji: string;
  vietnamese: string;
  category: 'demonstrative' | 'object' | 'place';
}

export interface Lesson2Sentence {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface Lesson2PatternExample {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface Lesson2Data {
  title: string;
  description: string;
  grammarSummary: string;
  words: Lesson2Word[];
  sentences: Lesson2Sentence[];
}

export const lesson2: Lesson2Data = {
  title: 'Bài 2: Đây là cái gì? (これ・それ・あれ)',
  description:
    'Làm quen cách hỏi và giới thiệu đồ vật xung quanh bằng これ／それ／あれ và この／その／あの.',
  grammarSummary:
    'Mẫu câu chính: これは N です。／それは N ですか。／この N は～です。 Dùng これ・それ・あれ cho “cái này / cái đó / cái kia”, và この・その・あの đứng trước danh từ.',
  words: [
    // Demonstratives
    {
      japanese: 'これ',
      kana: 'これ',
      romaji: 'kore',
      vietnamese: 'cái này (gần người nói)',
      category: 'demonstrative',
    },
    {
      japanese: 'それ',
      kana: 'それ',
      romaji: 'sore',
      vietnamese: 'cái đó (gần người nghe)',
      category: 'demonstrative',
    },
    {
      japanese: 'あれ',
      kana: 'あれ',
      romaji: 'are',
      vietnamese: 'cái kia (xa cả hai)',
      category: 'demonstrative',
    },
    {
      japanese: 'この',
      kana: 'この',
      romaji: 'kono',
      vietnamese: 'này (đứng trước danh từ)',
      category: 'demonstrative',
    },
    {
      japanese: 'その',
      kana: 'その',
      romaji: 'sono',
      vietnamese: 'đó (đứng trước danh từ)',
      category: 'demonstrative',
    },
    {
      japanese: 'あの',
      kana: 'あの',
      romaji: 'ano',
      vietnamese: 'kia (đứng trước danh từ)',
      category: 'demonstrative',
    },

    // Objects
    {
      japanese: '本',
      kana: 'ほん',
      romaji: 'hon',
      vietnamese: 'sách',
      category: 'object',
    },
    {
      japanese: 'じしょ',
      kana: 'じしょ',
      romaji: 'jisho',
      vietnamese: 'từ điển',
      category: 'object',
    },
    {
      japanese: 'ざっし',
      kana: 'ざっし',
      romaji: 'zasshi',
      vietnamese: 'tạp chí',
      category: 'object',
    },
    {
      japanese: 'しんぶん',
      kana: 'しんぶん',
      romaji: 'shinbun',
      vietnamese: 'báo',
      category: 'object',
    },
    {
      japanese: 'ノート',
      kana: 'ノート',
      romaji: 'nōto',
      vietnamese: 'vở',
      category: 'object',
    },
    {
      japanese: 'てちょう',
      kana: 'てちょう',
      romaji: 'techō',
      vietnamese: 'sổ tay',
      category: 'object',
    },
    {
      japanese: 'めいし',
      kana: 'めいし',
      romaji: 'meishi',
      vietnamese: 'danh thiếp',
      category: 'object',
    },
    {
      japanese: 'カード',
      kana: 'カード',
      romaji: 'kādo',
      vietnamese: 'thẻ, card (thẻ thanh toán, thẻ thành viên...)',
      category: 'object',
    },
    {
      japanese: 'テレホンカード',
      kana: 'テレホンカード',
      romaji: 'terehon kādo',
      vietnamese: 'thẻ điện thoại',
      category: 'object',
    },
    {
      japanese: 'ペン',
      kana: 'ペン',
      romaji: 'pen',
      vietnamese: 'bút mực / bút bi',
      category: 'object',
    },
    {
      japanese: 'えんぴつ',
      kana: 'えんぴつ',
      romaji: 'enpitsu',
      vietnamese: 'bút chì',
      category: 'object',
    },
    {
      japanese: 'ボールペン',
      kana: 'ボールペン',
      romaji: 'bōrupen',
      vietnamese: 'bút bi',
      category: 'object',
    },
    {
      japanese: 'シャープペンシル',
      kana: 'シャープペンシル',
      romaji: 'shāpu penshiru',
      vietnamese: 'bút chì kim, bút chì bấm',
      category: 'object',
    },
    {
      japanese: 'かばん',
      kana: 'かばん',
      romaji: 'kaban',
      vietnamese: 'cặp, túi xách',
      category: 'object',
    },
    {
      japanese: 'かぎ',
      kana: 'かぎ',
      romaji: 'kagi',
      vietnamese: 'chìa khoá',
      category: 'object',
    },
    {
      japanese: 'とけい',
      kana: 'とけい',
      romaji: 'tokei',
      vietnamese: 'đồng hồ',
      category: 'object',
    },
    {
      japanese: 'かさ',
      kana: 'かさ',
      romaji: 'kasa',
      vietnamese: 'ô, dù',
      category: 'object',
    },
    {
      japanese: 'けいたいでんわ',
      kana: 'けいたいでんわ',
      romaji: 'keitai denwa',
      vietnamese: 'điện thoại di động',
      category: 'object',
    },
    {
      japanese: 'パソコン',
      kana: 'パソコン',
      romaji: 'pasokon',
      vietnamese: 'máy tính cá nhân',
      category: 'object',
    },
    {
      japanese: '［カセット］テープ',
      kana: 'カセットテープ',
      romaji: 'kasetto tēpu',
      vietnamese: 'băng cát-xét',
      category: 'object',
    },
    {
      japanese: 'テープレコーダー',
      kana: 'テープレコーダー',
      romaji: 'tēpu rekōdā',
      vietnamese: 'máy ghi âm (máy thu băng)',
      category: 'object',
    },
    {
      japanese: 'テレビ',
      kana: 'テレビ',
      romaji: 'terebi',
      vietnamese: 'tivi',
      category: 'object',
    },
    {
      japanese: 'ラジオ',
      kana: 'ラジオ',
      romaji: 'rajio',
      vietnamese: 'radio',
      category: 'object',
    },
    {
      japanese: 'カメラ',
      kana: 'カメラ',
      romaji: 'kamera',
      vietnamese: 'máy ảnh',
      category: 'object',
    },
    {
      japanese: 'コンピューター',
      kana: 'コンピューター',
      romaji: 'konpyūtā',
      vietnamese: 'máy vi tính',
      category: 'object',
    },
    {
      japanese: 'じどうしゃ',
      kana: 'じどうしゃ',
      romaji: 'jidōsha',
      vietnamese: 'ô tô, xe hơi',
      category: 'object',
    },

    // Places (để dùng với あそこ／ここ – nếu sau này mở rộng)
    {
      japanese: '学校',
      kana: 'がっこう',
      romaji: 'gakkō',
      vietnamese: 'trường học',
      category: 'place',
    },
    {
      japanese: '会社',
      kana: 'かいしゃ',
      romaji: 'kaisha',
      vietnamese: 'công ty',
      category: 'place',
    },
  ],
  sentences: [
    {
      japanese: 'これは本です。',
      romaji: 'Kore wa hon desu.',
      vietnamese: 'Đây là cuốn sách.',
    },
    {
      japanese: 'それはノートですか。',
      romaji: 'Sore wa nōto desu ka.',
      vietnamese: 'Đó là quyển vở à?',
    },
    {
      japanese: 'はい、そうです。',
      romaji: 'Hai, sō desu.',
      vietnamese: 'Vâng, đúng vậy.',
    },
    {
      japanese: 'いいえ、ちがいます。これはペンです。',
      romaji: 'Īe, chigaimasu. Kore wa pen desu.',
      vietnamese: 'Không, không phải. Đây là cây bút.',
    },
    {
      japanese: 'この本は日本語の本です。',
      romaji: 'Kono hon wa Nihongo no hon desu.',
      vietnamese: 'Cuốn sách này là sách tiếng Nhật.',
    },
    {
      japanese: 'そのかばんはナムさんのかばんです。',
      romaji: 'Sono kaban wa Namu-san no kaban desu.',
      vietnamese: 'Cái cặp đó là cặp của anh Nam.',
    },
    {
      japanese: 'あのパソコンは高いです。',
      romaji: 'Ano pasokon wa takai desu.',
      vietnamese: 'Cái máy tính kia đắt.',
    },
  ],
};

// そうです／そうじゃありません
export const soDesuExamples: Lesson2PatternExample[] = [
  {
    japanese: 'これはスマホですか。',
    romaji: 'Kore wa sumaho desu ka.',
    vietnamese: 'Đây là điện thoại thông minh phải không?',
  },
  {
    japanese: 'はい、そうです。',
    romaji: 'Hai, sō desu.',
    vietnamese: 'Vâng, đúng vậy.',
  },
  {
    japanese: 'いいえ、そうじゃありません。これはカメラです。',
    romaji: 'Īe, sō ja arimasen. Kore wa kamera desu.',
    vietnamese: 'Không, không phải. Đây là máy ảnh.',
  },
];

// Câu lựa chọn ～か～か
export const choiceExamples: Lesson2PatternExample[] = [
  {
    japanese: 'これは本ですか、ノートですか。',
    romaji: 'Kore wa hon desu ka, nōto desu ka.',
    vietnamese: 'Đây là sách hay là vở?',
  },
  {
    japanese: 'それは辞書ですか、雑誌ですか。',
    romaji: 'Sore wa jisho desu ka, zasshi desu ka.',
    vietnamese: 'Đó là từ điển hay là tạp chí?',
  },
  {
    japanese: 'あれはカメラですか、コンピューターですか。',
    romaji: 'Are wa kamera desu ka, konpyūtā desu ka.',
    vietnamese: 'Cái kia là máy ảnh hay máy vi tính?',
  },
];

// Danh từ の Danh từ (sở hữu / thuộc về)
export const noNoExamples: Lesson2PatternExample[] = [
  {
    japanese: 'これはナムさんのノートです。',
    romaji: 'Kore wa Namu-san no nōto desu.',
    vietnamese: 'Đây là quyển vở của anh Nam.',
  },
  {
    japanese: 'それはさくら会社のパソコンです。',
    romaji: 'Sore wa Sakura-kaisha no pasokon desu.',
    vietnamese: 'Đó là máy tính của công ty Sakura.',
  },
  {
    japanese: 'あのかぎはわたしのかぎじゃありません。',
    romaji: 'Ano kagi wa watashi no kagi ja arimasen.',
    vietnamese: 'Chìa khoá kia không phải là chìa khoá của tôi.',
  },
];


