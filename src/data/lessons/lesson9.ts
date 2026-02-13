/**
 * Bài 9: Sở thích & lý do (Minna no Nihongo I – Bản dịch, trang 76–81)
 * N が わかります／あります ・ N が 好き／嫌い／上手／下手 ・ どんな N ・ よく/たくさん/すこし/あまり/ぜんぜん ・ から／どうして
 */

export interface Lesson9Word {
  japanese: string;
  kana: string;
  romaji: string;
  vietnamese: string;
  category: 'verb' | 'naAdj' | 'noun' | 'adverb' | 'expression' | 'phrase' | 'family';
}

export interface Lesson9Sentence {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface DialogueTurn {
  speaker: string;
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface Lesson9Data {
  title: string;
  description: string;
  grammarSummary: string;
  words: Lesson9Word[];
  sentences: Lesson9Sentence[];
  dialogue: DialogueTurn[];
}

export const lesson9: Lesson9Data = {
  title: 'Bài 9: Sở thích & lý do（好き・わかります・から）',
  description:
    'Động từ わかります・あります với trợ từ が. Tính từ đuôi な: 好き・嫌い・上手・下手. どんな N. Phó từ mức độ よく・たくさん・少し・あまり・全然. Nối lý do から. Hỏi lý do どうして. Hội thoại mời đi nghe nhạc.',
  grammarSummary:
    'N が わかります／あります ・ N が 好きです／嫌いです／上手です／下手です ・ どんな N ・ よく/たくさん/すこし/あまり/ぜんぜん ・ Câu₁ から、Câu₂ ・ どうして',

  words: [
    // Động từ
    { japanese: 'わかります', kana: 'わかります', romaji: 'wakarimasu', vietnamese: 'hiểu, nắm được', category: 'verb' },
    { japanese: 'あります', kana: 'あります', romaji: 'arimasu', vietnamese: 'có (sở hữu)', category: 'verb' },

    // Tính từ đuôi な [な]
    { japanese: '好き', kana: 'すき', romaji: 'suki', vietnamese: 'thích', category: 'naAdj' },
    { japanese: '嫌い', kana: 'きらい', romaji: 'kirai', vietnamese: 'ghét, không thích', category: 'naAdj' },
    { japanese: '上手', kana: 'じょうず', romaji: 'jōzu', vietnamese: 'giỏi, khéo', category: 'naAdj' },
    { japanese: '下手', kana: 'へた', romaji: 'heta', vietnamese: 'kém', category: 'naAdj' },

    // Danh từ – hoạt động / sở thích
    { japanese: '料理', kana: 'りょうり', romaji: 'ryōri', vietnamese: 'món ăn, việc nấu ăn', category: 'noun' },
    { japanese: '飲み物', kana: 'のみもの', romaji: 'nomimono', vietnamese: 'đồ uống', category: 'noun' },
    { japanese: 'スポーツ', kana: 'スポーツ', romaji: 'supōtsu', vietnamese: 'thể thao（～をします）', category: 'noun' },
    { japanese: '野球', kana: 'やきゅう', romaji: 'yakyū', vietnamese: 'bóng chày（～をします）', category: 'noun' },
    { japanese: 'ダンス', kana: 'ダンス', romaji: 'dansu', vietnamese: 'nhảy, khiêu vũ（～をします）', category: 'noun' },
    { japanese: '音楽', kana: 'おんがく', romaji: 'ongaku', vietnamese: 'âm nhạc', category: 'noun' },
    { japanese: '歌', kana: 'うた', romaji: 'uta', vietnamese: 'bài hát', category: 'noun' },
    { japanese: 'クラシック', kana: 'クラシック', romaji: 'kurashikku', vietnamese: 'nhạc cổ điển', category: 'noun' },
    { japanese: 'ジャズ', kana: 'ジャズ', romaji: 'jazu', vietnamese: 'nhạc jazz', category: 'noun' },
    { japanese: 'コンサート', kana: 'コンサート', romaji: 'konsāto', vietnamese: 'buổi hòa nhạc', category: 'noun' },
    { japanese: 'カラオケ', kana: 'カラオケ', romaji: 'karaoke', vietnamese: 'karaoke', category: 'noun' },
    { japanese: '歌舞伎', kana: 'かぶき', romaji: 'kabuki', vietnamese: 'Kabuki（ca kịch truyền thống Nhật）', category: 'noun' },
    { japanese: '絵', kana: 'え', romaji: 'e', vietnamese: 'tranh, hội họa', category: 'noun' },
    { japanese: '字', kana: 'じ', romaji: 'ji', vietnamese: 'chữ', category: 'noun' },
    { japanese: '漢字', kana: 'かんじ', romaji: 'kanji', vietnamese: 'chữ Hán', category: 'noun' },
    { japanese: 'ひらがな', kana: 'ひらがな', romaji: 'hiragana', vietnamese: 'chữ Hiragana', category: 'noun' },
    { japanese: 'かたかな', kana: 'かたかな', romaji: 'katakana', vietnamese: 'chữ Katakana', category: 'noun' },
    { japanese: 'ローマ字', kana: 'ローマじ', romaji: 'rōmaji', vietnamese: 'chữ La Mã', category: 'noun' },
    { japanese: '細かいお金', kana: 'こまかいおかね', romaji: 'komakai okane', vietnamese: 'tiền lẻ', category: 'noun' },
    { japanese: 'チケット', kana: 'チケット', romaji: 'chiketto', vietnamese: 'vé（xem hòa nhạc, xem phim）', category: 'noun' },
    { japanese: '時間', kana: 'じかん', romaji: 'jikan', vietnamese: 'thời gian', category: 'noun' },
    { japanese: '用事', kana: 'ようじ', romaji: 'yōji', vietnamese: 'việc bận, công chuyện', category: 'noun' },
    { japanese: '約束', kana: 'やくそく', romaji: 'yakusoku', vietnamese: 'cuộc hẹn, lời hứa', category: 'noun' },

    // Gia đình（khi nói về người khác / mình）
    { japanese: 'ご主人', kana: 'ごしゅじん', romaji: 'goshujin', vietnamese: 'chồng（nói về chồng người khác）', category: 'family' },
    { japanese: '夫／主人', kana: 'おっと／しゅじん', romaji: 'otto / shujin', vietnamese: 'chồng（nói về chồng mình）', category: 'family' },
    { japanese: '奥さん', kana: 'おくさん', romaji: 'okusan', vietnamese: 'vợ（nói về vợ người khác）', category: 'family' },
    { japanese: '妻／家内', kana: 'つま／かない', romaji: 'tsuma / kanai', vietnamese: 'vợ（nói về vợ mình）', category: 'family' },
    { japanese: '子供', kana: 'こども', romaji: 'kodomo', vietnamese: 'con cái', category: 'family' },

    // Phó từ mức độ
    { japanese: 'よく', kana: 'よく', romaji: 'yoku', vietnamese: 'tốt, rõ（chỉ mức độ）', category: 'adverb' },
    { japanese: 'だいたい', kana: 'だいたい', romaji: 'daitai', vietnamese: 'đại khái, đại thể', category: 'adverb' },
    { japanese: 'たくさん', kana: 'たくさん', romaji: 'takusan', vietnamese: 'nhiều', category: 'adverb' },
    { japanese: '少し', kana: 'すこし', romaji: 'sukoshi', vietnamese: 'ít, một ít', category: 'adverb' },
    { japanese: '全然', kana: 'ぜんぜん', romaji: 'zenzen', vietnamese: 'hoàn toàn không', category: 'adverb' },
    { japanese: '早く', kana: 'はやく', romaji: 'hayaku', vietnamese: 'sớm, nhanh', category: 'adverb' },

    // Biểu hiện
    { japanese: '～から', kana: 'から', romaji: 'kara', vietnamese: 'vì ～', category: 'expression' },
    { japanese: 'どうして', kana: 'どうして', romaji: 'dōshite', vietnamese: 'tại sao', category: 'expression' },
    { japanese: '残念です［ね］', kana: 'ざんねんですね', romaji: 'zannen desu ne', vietnamese: 'Thật đáng tiếc nhỉ.', category: 'expression' },
    { japanese: 'すみません。', kana: 'すみません', romaji: 'sumimasen', vietnamese: 'Xin lỗi.', category: 'expression' },

    // Cụm hội thoại（会話）
    { japanese: 'もしもし', kana: 'もしもし', romaji: 'moshimoshi', vietnamese: 'a-lô', category: 'phrase' },
    { japanese: 'ああ', kana: 'ああ', romaji: 'ā', vietnamese: 'a（đã gặp đúng người trên điện thoại）', category: 'phrase' },
    { japanese: 'いっしょにいかがですか。', kana: 'いっしょにいかがですか', romaji: 'issho ni ikaga desu ka', vietnamese: 'Anh/Chị cùng ～ với chúng tôi có được không?', category: 'phrase' },
    { japanese: '［～は］ちょっと・・・', kana: 'ちょっと', romaji: '[~wa] chotto...', vietnamese: '［～ thì］có lẽ không được rồi.（từ chối khéo）', category: 'phrase' },
    { japanese: 'だめですか。', kana: 'だめですか', romaji: 'dame desu ka', vietnamese: 'Không được à?', category: 'phrase' },
    { japanese: 'また今度お願いします。', kana: 'またこんどおねがいします', romaji: 'mata kondo onegai shimasu', vietnamese: 'Hẹn anh/chị lần sau vậy.（từ chối khéo）', category: 'phrase' },
  ],

  sentences: [
    { japanese: 'わたしはイタリア料理が好きです。', romaji: 'Watashi wa Itaria ryōri ga suki desu.', vietnamese: 'Tôi thích món ăn Ý.' },
    { japanese: 'わたしは日本語がわかります。', romaji: 'Watashi wa Nihongo ga wakarimasu.', vietnamese: 'Tôi hiểu tiếng Nhật.' },
    { japanese: 'わたしは車があります。', romaji: 'Watashi wa kuruma ga arimasu.', vietnamese: 'Tôi có xe hơi.' },
    { japanese: 'どんなスポーツが好きですか。…サッカーが好きです。', romaji: 'Donna supōtsu ga suki desu ka. …Sakkā ga suki desu.', vietnamese: 'Anh/Chị thích môn thể thao nào? …Tôi thích bóng đá.' },
    { japanese: '英語がよくわかります。', romaji: 'Eigo ga yoku wakarimasu.', vietnamese: 'Tôi hiểu tiếng Anh tốt.' },
    { japanese: '英語が少しわかります。', romaji: 'Eigo ga sukoshi wakarimasu.', vietnamese: 'Tôi hiểu tiếng Anh một chút.' },
    { japanese: '英語があまりわかりません。', romaji: 'Eigo ga amari wakarimasen.', vietnamese: 'Tôi không hiểu tiếng Anh lắm.' },
    { japanese: 'お金がたくさんあります。', romaji: 'Okane ga takusan arimasu.', vietnamese: 'Tôi có nhiều tiền.' },
    { japanese: 'お金が全然ありません。', romaji: 'Okane ga zenzen arimasen.', vietnamese: 'Tôi không có đồng nào cả.' },
    { japanese: '時間がありませんから、新聞を読みません。', romaji: 'Jikan ga arimasen kara, shinbun o yomimasen.', vietnamese: 'Vì không có thời gian nên tôi không đọc báo.' },
    { japanese: 'どうして朝新聞を読みませんか。…時間がありませんから。', romaji: 'Dōshite asa shinbun o yomimasen ka. …Jikan ga arimasen kara.', vietnamese: 'Tại sao anh/chị không đọc báo buổi sáng? …Vì tôi không có thời gian.' },
    { japanese: 'きょうは早く帰ります。…どうしてですか。…子どもの誕生日ですから。', romaji: 'Kyō wa hayaku kaerimasu. …Dōshite desu ka. …Kodomo no tanjōbi desu kara.', vietnamese: 'Hôm nay tôi về sớm. …Tại sao vậy? …Vì hôm nay là sinh nhật con tôi.' },
  ],

  dialogue: [
    { speaker: 'Miller', japanese: 'もしもし、キムラさんですか。', romaji: 'Moshimoshi, Kimura-san desu ka.', vietnamese: 'A-lô, anh Kimura phải không ạ?' },
    { speaker: 'Kimura', japanese: 'ああ、ミラーさんですね。', romaji: 'Ā, Mirā-san desu ne.', vietnamese: 'Vâng, anh Miller đúng không ạ.' },
    { speaker: 'Miller', japanese: '来週の土曜日、小沢征爾のコンサートがあります。いっしょにいかがですか。', romaji: 'Raishū no doyōbi, Ozawa Seiji no konsāto ga arimasu. Issho ni ikaga desu ka.', vietnamese: 'Thứ Bảy tuần sau có buổi hòa nhạc của Ozawa Seiji. Anh cùng đi với chúng tôi có được không?' },
    { speaker: 'Kimura', japanese: 'すみません。土曜日はちょっと・・・。', romaji: 'Sumimasen. Doyōbi wa chotto....', vietnamese: 'Xin lỗi anh. Thứ Bảy thì có lẽ không được rồi.' },
    { speaker: 'Miller', japanese: 'だめですか。', romaji: 'Dame desu ka.', vietnamese: 'Không được à?' },
    { speaker: 'Kimura', japanese: 'ええ、約束がありますから。また今度お願いします。', romaji: 'Ee, yakusoku ga arimasu kara. Mata kondo onegai shimasu.', vietnamese: 'Vâng, vì tôi có hẹn rồi ạ. Hẹn anh lần sau vậy.' },
  ],
};

// Mini game: từ vựng
export const lesson9VocabQuizItems = [
  { id: 1, vi: 'thích', options: ['好き', '嫌い', '上手'], correctIndex: 0 },
  { id: 2, vi: 'hiểu, nắm được', options: ['わかります', 'あります', '上手です'], correctIndex: 0 },
  { id: 3, vi: 'tại sao', options: ['どうして', 'から', 'いつ'], correctIndex: 0 },
  { id: 4, vi: 'nhiều', options: ['たくさん', '少し', '全然'], correctIndex: 0 },
  { id: 5, vi: 'cuộc hẹn, lời hứa', options: ['約束', '用事', '時間'], correctIndex: 0 },
  { id: 6, vi: 'tiền lẻ', options: ['細かいお金', 'チケット', '時間'], correctIndex: 0 },
] as const;

// Mini game: ngữ pháp – N が 好き／わかります／から
export const lesson9GrammarQuizItems = [
  { id: 1, vi: 'Tôi thích món ăn Ý.', options: ['わたしはイタリア料理が好きです。', 'わたしはイタリア料理を好きです。', 'わたしはイタリア料理は好きです。'], correctIndex: 0 },
  { id: 2, vi: 'Tôi hiểu tiếng Nhật một chút.', options: ['わたしは日本語が少しわかります。', 'わたしは日本語をわかります。', 'わたしは日本語がわかりますません。'], correctIndex: 0 },
  { id: 3, vi: 'Vì không có thời gian nên tôi không đọc báo.', options: ['時間がありませんから、新聞を読みません。', '時間がありません、新聞を読みません。', '時間がないから、新聞を読みません。'], correctIndex: 0 },
  { id: 4, vi: 'Tại sao anh không đọc báo buổi sáng?', options: ['どうして朝新聞を読みませんか。', 'なぜ朝新聞を読みませんか。', 'いつ朝新聞を読みますか。'], correctIndex: 0 },
] as const;

// Mini game: ghép câu
export const lesson9BuilderItems = [
  { id: 1, vi: 'Tôi thích bóng đá.', hint: 'N が 好きです。', tokens: ['わたしは', 'サッカーが', '好きです。'] },
  { id: 2, vi: 'Tôi không có tiền lẻ.', hint: 'N が ありません。', tokens: ['わたしは', '細かいお金が', 'ありません。'] },
  { id: 3, vi: 'Vì có việc bận nên tôi về sớm.', hint: '～から、～。', tokens: ['用事が', 'ありますから、', '早く帰ります。'] },
  { id: 4, vi: 'Anh/chị thích môn thể thao nào?', hint: 'どんな N が 好きですか。', tokens: ['どんな', 'スポーツが', '好きですか。'] },
] as const;

// Mini game: hội thoại
export const lesson9DialogueQuizItems = [
  { questionVi: 'Miller mời Kimura đi đâu?', options: ['Xem phim', 'Buổi hòa nhạc Ozawa Seiji', 'Karaoke'], correctIndex: 1 },
  { questionVi: 'Kimura có đi không? Tại sao?', options: ['Có đi', 'Không, vì có hẹn rồi', 'Chưa quyết định'], correctIndex: 1 },
  { questionVi: 'Kimura nói gì để từ chối khéo?', options: ['だめです。', 'また今度お願いします。', '行きません。'], correctIndex: 1 },
] as const;
