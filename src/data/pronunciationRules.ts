/**
 * Quy tắc Phát âm: Trường âm (長音) & Âm ngắt (促音).
 * Dùng cho module Chuyên sâu Phát âm + bài tập Minna 1-15.
 */

// —— Trường âm (Chouon) ——

export interface ChouonColumnRule {
  column: string;
  kana: string;
  addKana: string;
  example: string;
  exampleRomaji: string;
  exampleMeaning: string;
}

/** Quy tắc kéo dài theo từng cột: A + あ, I/E + い, U/O + う */
export const CHOON_COLUMN_RULES: ChouonColumnRule[] = [
  {
    column: 'Cột A (あ)',
    kana: 'あ か さ た な は ま や ら わ が ざ だ ば ぱ',
    addKana: 'あ',
    example: 'おかあさん',
    exampleRomaji: 'okāsan',
    exampleMeaning: 'mẹ (kéo dài âm か → かあ)',
  },
  {
    column: 'Cột I (い)',
    kana: 'い き し ち に ひ み り ぎ じ ぢ び ぴ',
    addKana: 'い',
    example: 'おにいさん',
    exampleRomaji: 'onīsan',
    exampleMeaning: 'anh trai (き→きい)',
  },
  {
    column: 'Cột E (え)',
    kana: 'え け せ て ね へ め れ げ ぜ で べ ぺ',
    addKana: 'い (trong hiragana thường viết い)',
    example: 'せんせい',
    exampleRomaji: 'sensei',
    exampleMeaning: 'giáo viên (せ→せい)',
  },
  {
    column: 'Cột U (う)',
    kana: 'う く す つ ぬ ふ む ゆ る ぐ ず づ ぶ ぷ',
    addKana: 'う',
    example: 'くうき',
    exampleRomaji: 'kūki',
    exampleMeaning: 'không khí (く→くう)',
  },
  {
    column: 'Cột O (お)',
    kana: 'お こ そ と の ほ も よ ろ を ご ぞ ど ぼ ぽ',
    addKana: 'う (trong hiragana thường viết う)',
    example: 'こうこう',
    exampleRomaji: 'kōkō',
    exampleMeaning: 'trường cấp 3 (こ→こう)',
  },
];

/** Trường hợp ngoại lệ kinh điển: viết khác quy tắc cột */
export interface ChouonException {
  japanese: string;
  romajiMacron: string;
  romajiHepburn: string;
  meaning: string;
  note: string;
}

export const CHOON_EXCEPTIONS: ChouonException[] = [
  { japanese: 'ええ', romajiMacron: 'ē', romajiHepburn: 'ee', meaning: 'vâng, đúng rồi', note: 'Cột E nhưng viết ええ (không phải えい)' },
  { japanese: 'おおきい', romajiMacron: 'ōkii', romajiHepburn: 'ookii', meaning: 'to, lớn', note: 'Cột O nhưng viết おお (không phải おう)' },
  { japanese: 'とおい', romajiMacron: 'tōi', romajiHepburn: 'tooi', meaning: 'xa', note: 'お kéo dài bằng お' },
  { japanese: 'おおい', romajiMacron: 'ōi', romajiHepburn: 'ooi', meaning: 'nhiều', note: 'おお' },
  { japanese: 'こおり', romajiMacron: 'kōri', romajiHepburn: 'koori', meaning: 'đá (nước đá)', note: 'こお' },
];

/** Cặp từ dễ nhầm nếu đọc sai trường âm */
export interface ChouonComparisonPair {
  short: { japanese: string; romaji: string; meaning: string };
  long: { japanese: string; romaji: string; meaning: string };
  tip: string;
}

export const CHOON_COMPARISON_PAIRS: ChouonComparisonPair[] = [
  {
    short: { japanese: 'おばさん', romaji: 'obasan', meaning: 'cô, dì (trung niên)' },
    long: { japanese: 'おばあさん', romaji: 'obāsan', meaning: 'bà' },
    tip: 'Đọc sai trường âm sẽ nhầm nghĩa hoàn toàn.',
  },
  {
    short: { japanese: 'おじさん', romaji: 'ojisan', meaning: 'chú, bác (nam)' },
    long: { japanese: 'おじいさん', romaji: 'ojīsan', meaning: 'ông' },
    tip: 'じい = kéo dài âm じ.',
  },
  {
    short: { japanese: 'ここ', romaji: 'koko', meaning: 'đây' },
    long: { japanese: 'こうこう', romaji: 'kōkō', meaning: 'trường cấp 3' },
    tip: 'こう = こ + う (một âm kéo dài).',
  },
  {
    short: { japanese: 'ゆき', romaji: 'yuki', meaning: 'tuyết' },
    long: { japanese: 'ゆうき', romaji: 'yūki', meaning: 'dũng khí' },
    tip: 'ゆう = ゆ + う.',
  },
  {
    short: { japanese: 'え', romaji: 'e', meaning: 'bức tranh' },
    long: { japanese: 'ええ', romaji: 'ē', meaning: 'vâng' },
    tip: 'Ngoại lệ: ええ không viết えい.',
  },
];

// —— Âm ngắt (Sokuon) ——

/** Giải thích bản chất っ */
export const SOKUON_EXPLANATION = {
  title: 'Bản chất của っ (sokuon)',
  points: [
    'Chữ っ nhỏ không được phát âm thành âm; nó là một khoảng lặng (pause) có độ dài bằng 1 phách (mora).',
    'Trước khi bật âm tiếp theo, bạn giữ im một nhịp, rồi mới phát âm phụ âm đứng sau っ mạnh và rõ.',
    'Trong romaji thường viết bằng cách nhân đôi phụ âm: きって → kitte, がっこう → gakkō.',
  ],
};

/** Nhóm phụ âm thường đi kèm âm ngắt */
export interface SokuonConsonantGroup {
  consonant: string;
  example: string;
  romaji: string;
  meaning: string;
}

export const SOKUON_CONSONANT_GROUPS: SokuonConsonantGroup[] = [
  { consonant: 'K', example: 'がっこう', romaji: 'gakkō', meaning: 'trường học' },
  { consonant: 'S', example: 'けっこん', romaji: 'kekkon', meaning: 'kết hôn' },
  { consonant: 'T', example: 'きって', romaji: 'kitte', meaning: 'tem' },
  { consonant: 'P', example: 'いっぱい', romaji: 'ippai', meaning: 'đầy' },
];

/** Cặp từ phân biệt có/không âm ngắt */
export interface SokuonComparisonPair {
  noSokuon: { japanese: string; romaji: string; meaning: string };
  withSokuon: { japanese: string; romaji: string; meaning: string };
}

export const SOKUON_COMPARISON_PAIRS: SokuonComparisonPair[] = [
  { noSokuon: { japanese: 'もと', romaji: 'moto', meaning: 'vốn dĩ, gốc' }, withSokuon: { japanese: 'もっと', romaji: 'motto', meaning: 'hơn nữa' } },
  { noSokuon: { japanese: 'まて', romaji: 'mate', meaning: 'đợi (mệnh lệnh)' }, withSokuon: { japanese: 'まって', romaji: 'matte', meaning: 'đợi (lịch sự)' } },
  { noSokuon: { japanese: 'さか', romaji: 'saka', meaning: 'đồi' }, withSokuon: { japanese: 'さっか', romaji: 'sakka', meaning: 'tác giả' } },
  { noSokuon: { japanese: 'いと', romaji: 'ito', meaning: 'sợi chỉ' }, withSokuon: { japanese: 'いっと', romaji: 'itto', meaning: 'một lần (ít khi dùng)' } },
  { noSokuon: { japanese: 'かた', romaji: 'kata', meaning: 'cách, người' }, withSokuon: { japanese: 'かった', romaji: 'katta', meaning: 'đã mua' } },
];

// —— Romaji chuẩn (hiển thị cả macron và Hepburn mở rộng) ——

export interface RomajiVariantExample {
  japanese: string;
  macron: string;
  hepburn: string;
  note: string;
}

export const ROMAJI_VARIANTS: RomajiVariantExample[] = [
  { japanese: 'こうこう', macron: 'kōkō', hepburn: 'koukou', note: 'Trường âm O: ō hoặc ou' },
  { japanese: 'おばあさん', macron: 'obāsan', hepburn: 'obaasan', note: 'Trường âm A: ā hoặc aa' },
  { japanese: 'がっこう', macron: 'gakkō', hepburn: 'gakkou', note: 'Âm ngắt: kk; trường âm: ō/ou' },
  { japanese: 'きって', macron: 'kitte', hepburn: 'kitte', note: 'Âm ngắt: tt' },
  { japanese: 'コーヒー', macron: 'kōhī', hepburn: 'kouhii', note: 'Katakana ー = kéo dài; ī = ii' },
];

// —— Bài tập Minna no Nihongo: từ có trường âm / âm ngắt (Bài 1–15) ——

export interface MinnaPronunciationWord {
  japanese: string;
  kana: string;
  romajiMacron: string;
  romajiHepburn: string;
  vietnamese: string;
  lesson: number;
  type: 'long' | 'sokuon' | 'both';
}

export const MINNA_PRONUNCIATION_WORDS: MinnaPronunciationWord[] = [
  // Bài 1–2
  { japanese: '先生', kana: 'せんせい', romajiMacron: 'sensei', romajiHepburn: 'sensei', vietnamese: 'giáo viên', lesson: 1, type: 'long' },
  // Bài 3–7
  { japanese: '大きい', kana: 'おおきい', romajiMacron: 'ōkii', romajiHepburn: 'ookii', vietnamese: 'to, lớn', lesson: 7, type: 'long' },
  { japanese: 'コーヒー', kana: 'コーヒー', romajiMacron: 'kōhī', romajiHepburn: 'kouhii', vietnamese: 'cà phê', lesson: 7, type: 'long' },
  { japanese: 'おばあさん', kana: 'おばあさん', romajiMacron: 'obāsan', romajiHepburn: 'obaasan', vietnamese: 'bà', lesson: 7, type: 'long' },
  { japanese: 'おじいさん', kana: 'おじいさん', romajiMacron: 'ojīsan', romajiHepburn: 'ojiisan', vietnamese: 'ông', lesson: 7, type: 'long' },
  // Bài 8–9
  { japanese: 'けっこう', kana: 'けっこう', romajiMacron: 'kekkō', romajiHepburn: 'kekkou', vietnamese: 'khá, đủ rồi', lesson: 8, type: 'both' },
  { japanese: 'もう一杯', kana: 'もういっぱい', romajiMacron: 'mō ippai', romajiHepburn: 'mou ippai', vietnamese: 'thêm một ly', lesson: 8, type: 'both' },
  { japanese: '行っていらっしゃい', kana: 'いっていらっしゃい', romajiMacron: 'itte irasshai', romajiHepburn: 'itte irasshai', vietnamese: 'Đi nhé (chào khi ai đi)', lesson: 9, type: 'sokuon' },
  { japanese: 'いっしょに', kana: 'いっしょに', romajiMacron: 'issho ni', romajiHepburn: 'issho ni', vietnamese: 'cùng', lesson: 9, type: 'sokuon' },
  // Bài 10–11
  { japanese: 'みっつ', kana: 'みっつ', romajiMacron: 'mittsu', romajiHepburn: 'mittsu', vietnamese: '3 cái', lesson: 11, type: 'sokuon' },
  { japanese: 'よっつ', kana: 'よっつ', romajiMacron: 'yottsu', romajiHepburn: 'yottsu', vietnamese: '4 cái', lesson: 11, type: 'sokuon' },
  { japanese: 'むっつ', kana: 'むっつ', romajiMacron: 'muttsu', romajiHepburn: 'muttsu', vietnamese: '6 cái', lesson: 11, type: 'sokuon' },
  { japanese: 'やっつ', kana: 'やっつ', romajiMacron: 'yattsu', romajiHepburn: 'yattsu', vietnamese: '8 cái', lesson: 11, type: 'sokuon' },
  { japanese: 'とお', kana: 'とお', romajiMacron: 'tō', romajiHepburn: 'too', vietnamese: '10 (đếm đồ vật)', lesson: 11, type: 'long' },
  { japanese: '一か月', kana: 'いっかげつ', romajiMacron: 'ikkagetsu', romajiHepburn: 'ikkagetsu', vietnamese: 'một tháng', lesson: 11, type: 'sokuon' },
  { japanese: '速達', kana: 'そくたつ', romajiMacron: 'sokutatsu', romajiHepburn: 'sokutatsu', vietnamese: 'gửi nhanh', lesson: 11, type: 'sokuon' },
  { japanese: '行ってまいります', kana: 'いってまいります', romajiMacron: 'itte mairimasu', romajiHepburn: 'itte mairimasu', vietnamese: 'Tôi đi đây (khiêm nhường)', lesson: 11, type: 'sokuon' },
  // Bài 12
  { japanese: 'ありがとうございます', kana: 'ありがとうございます', romajiMacron: 'arigatō gozaimasu', romajiHepburn: 'arigatou gozaimasu', vietnamese: 'cảm ơn (lịch sự)', lesson: 12, type: 'long' },
  { japanese: 'お土産', kana: 'おみやげ', romajiMacron: 'omiyage', romajiHepburn: 'omiyage', vietnamese: 'quà', lesson: 12, type: 'long' },
  { japanese: '祇園祭', kana: 'ぎおんまつり', romajiMacron: 'Gion Matsuri', romajiHepburn: 'Gion Matsuri', vietnamese: 'Lễ hội Gion', lesson: 12, type: 'long' },
  { japanese: '有名', kana: 'ゆうめい', romajiMacron: 'yūmei', romajiHepburn: 'yuumei', vietnamese: 'nổi tiếng', lesson: 12, type: 'long' },
  // Bài 13–15
  { japanese: '少々お待ちください', kana: 'しょうしょうおまちください', romajiMacron: 'shōshō omachi kudasai', romajiHepburn: 'shoushou omachi kudasai', vietnamese: 'Xin đợi một chút', lesson: 13, type: 'long' },
  { japanese: '牛どん', kana: 'ぎゅうどん', romajiMacron: 'gyūdon', romajiHepburn: 'gyuudon', vietnamese: 'cơm thịt bò', lesson: 13, type: 'long' },
  { japanese: 'てんぷら', kana: 'てんぷら', romajiMacron: 'tenpura', romajiHepburn: 'tenpura', vietnamese: 'tempura', lesson: 13, type: 'sokuon' },
  { japanese: '日本料理', kana: 'にほんりょうり', romajiMacron: 'Nihon ryōri', romajiHepburn: 'Nihon ryouri', vietnamese: 'món ăn Nhật', lesson: 13, type: 'long' },
  { japanese: '飛行機', kana: 'ひこうき', romajiMacron: 'hikōki', romajiHepburn: 'hikouki', vietnamese: 'máy bay', lesson: 14, type: 'long' },
  { japanese: '新幹線', kana: 'しんかんせん', romajiMacron: 'Shinkansen', romajiHepburn: 'Shinkansen', vietnamese: 'tàu Shinkansen', lesson: 14, type: 'sokuon' },
  { japanese: '小野さん', kana: 'おのさん', romajiMacron: 'Ono-san', romajiHepburn: 'Ono-san', vietnamese: 'anh/chị Ono', lesson: 14, type: 'long' },
  { japanese: '卒業', kana: 'そつぎょう', romajiMacron: 'sotsugyō', romajiHepburn: 'sotsugyou', vietnamese: 'tốt nghiệp', lesson: 15, type: 'sokuon' },
  { japanese: '結婚', kana: 'けっこん', romajiMacron: 'kekkon', romajiHepburn: 'kekkon', vietnamese: 'kết hôn', lesson: 15, type: 'sokuon' },
  { japanese: 'がっこう', kana: 'がっこう', romajiMacron: 'gakkō', romajiHepburn: 'gakkou', vietnamese: 'trường học', lesson: 15, type: 'both' },
  { japanese: '高校', kana: 'こうこう', romajiMacron: 'kōkō', romajiHepburn: 'koukou', vietnamese: 'trường cấp 3', lesson: 15, type: 'long' },
];

// —— Visual: beat pattern for waveform (mora count + long/sokuon) ——

export interface BeatPattern {
  label: string;
  japanese: string;
  romaji: string;
  beats: ('short' | 'long' | 'pause')[];
  description: string;
}

export const BEAT_PATTERNS: BeatPattern[] = [
  { label: 'Âm thường (4 phách)', japanese: 'おばさん', romaji: 'obasan', beats: ['short', 'short', 'short', 'short'], description: 'o-ba-sa-n' },
  { label: 'Trường âm (5 phách)', japanese: 'おばあさん', romaji: 'obāsan', beats: ['short', 'long', 'short', 'short'], description: 'o-baa-sa-n' },
  { label: 'Âm ngắt (4 phách)', japanese: 'きって', romaji: 'kitte', beats: ['short', 'pause', 'short', 'short'], description: 'ki-(pause)-t-te' },
  { label: 'Trường + ngắt', japanese: 'がっこう', romaji: 'gakkō', beats: ['short', 'pause', 'short', 'long'], description: 'ga-(pause)-k-kou' },
];
