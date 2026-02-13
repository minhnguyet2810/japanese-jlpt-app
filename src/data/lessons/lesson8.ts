/**
 * Bài 8: Tính từ & mô tả (Minna no Nihongo I – Bản dịch)
 * Nội dung bám sát sách: từ vựng, ngữ pháp, hội thoại, màu & vị, tên riêng.
 */

export type Lesson8AdjType = 'na' | 'i';

export interface Lesson8Word {
  japanese: string;
  kana: string;
  romaji: string;
  vietnamese: string;
  category: 'naAdj' | 'iAdj' | 'noun' | 'expression' | 'phrase' | 'proper';
  adjType?: Lesson8AdjType; // chỉ có khi category là naAdj hoặc iAdj
}

export interface Lesson8Sentence {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface ColorRow {
  nounJp: string;
  nounKana: string;
  adjJp: string | null;
  adjKana: string | null;
  vietnamese: string;
}

export interface TasteRow {
  japanese: string;
  kana: string;
  romaji: string;
  vietnamese: string;
}

export interface DialogueTurn {
  speaker: string;
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface Lesson8Data {
  title: string;
  description: string;
  grammarSummary: string;
  words: Lesson8Word[];
  sentences: Lesson8Sentence[];
  colors: ColorRow[];
  tastes: TasteRow[];
  dialogue: DialogueTurn[];
}

// —— Từ vựng chính Bài 8 (trang 70–71) ——
export const lesson8: Lesson8Data = {
  title: 'Bài 8: Tính từ & mô tả (い・な 形容詞)',
  description:
    'Tính từ đuôi い và đuôi な: khẳng định, phủ định, bổ nghĩa danh từ. Phó từ mức độ とても・あまり. Hỏi ấn tượng どうですか、どんな N ですか. Nối câu với が. Hỏi xác định どれ.',
  grammarSummary:
    'N は い/な 形容詞 です ・ とても/あまり ・ N は どうですか ・ N は どんな N ですか ・ Câu1 が、Câu2 ・ どれ',

  words: [
    // —— な-adjectives [な] (trang 70) ——
    { japanese: 'ハンサム', kana: 'ハンサム', romaji: 'hansamu', vietnamese: 'đẹp trai', category: 'naAdj', adjType: 'na' },
    { japanese: 'きれい', kana: 'きれい', romaji: 'kirei', vietnamese: 'đẹp, sạch', category: 'naAdj', adjType: 'na' },
    { japanese: '静か', kana: 'しずか', romaji: 'shizuka', vietnamese: 'yên tĩnh', category: 'naAdj', adjType: 'na' },
    { japanese: 'にぎやか', kana: 'にぎやか', romaji: 'nigiyaka', vietnamese: 'náo nhiệt', category: 'naAdj', adjType: 'na' },
    { japanese: '有名', kana: 'ゆうめい', romaji: 'yūmei', vietnamese: 'nổi tiếng', category: 'naAdj', adjType: 'na' },
    { japanese: '親切', kana: 'しんせつ', romaji: 'shinsetsu', vietnamese: 'tốt bụng, thân thiện', category: 'naAdj', adjType: 'na' },
    { japanese: '元気', kana: 'げんき', romaji: 'genki', vietnamese: 'khỏe', category: 'naAdj', adjType: 'na' },
    { japanese: '暇', kana: 'ひま', romaji: 'hima', vietnamese: 'rảnh rỗi', category: 'naAdj', adjType: 'na' },
    { japanese: '便利', kana: 'べんり', romaji: 'benri', vietnamese: 'tiện lợi', category: 'naAdj', adjType: 'na' },
    { japanese: 'すてき', kana: 'すてき', romaji: 'suteki', vietnamese: 'đẹp, hay', category: 'naAdj', adjType: 'na' },

    // —— い-adjectives (trang 70) ——
    { japanese: '大きい', kana: 'おおきい', romaji: 'ōkii', vietnamese: 'lớn, to', category: 'iAdj', adjType: 'i' },
    { japanese: '小さい', kana: 'ちいさい', romaji: 'chīsai', vietnamese: 'bé, nhỏ', category: 'iAdj', adjType: 'i' },
    { japanese: '新しい', kana: 'あたらしい', romaji: 'atarashii', vietnamese: 'mới', category: 'iAdj', adjType: 'i' },
    { japanese: '古い', kana: 'ふるい', romaji: 'furui', vietnamese: 'cũ', category: 'iAdj', adjType: 'i' },
    { japanese: 'いい', kana: 'いい', romaji: 'ii', vietnamese: 'tốt', category: 'iAdj', adjType: 'i' },
    { japanese: '悪い', kana: 'わるい', romaji: 'warui', vietnamese: 'xấu', category: 'iAdj', adjType: 'i' },
    { japanese: '暑い', kana: 'あつい', romaji: 'atsui', vietnamese: 'nóng', category: 'iAdj', adjType: 'i' },
    { japanese: '寒い', kana: 'さむい', romaji: 'samui', vietnamese: 'lạnh, rét (thời tiết)', category: 'iAdj', adjType: 'i' },
    { japanese: '冷たい', kana: 'つめたい', romaji: 'tsumetai', vietnamese: 'lạnh, buốt (cảm giác)', category: 'iAdj', adjType: 'i' },
    { japanese: '難しい', kana: 'むずかしい', romaji: 'muzukashii', vietnamese: 'khó', category: 'iAdj', adjType: 'i' },
    { japanese: '易しい', kana: 'やさしい', romaji: 'yasashii', vietnamese: 'dễ', category: 'iAdj', adjType: 'i' },
    { japanese: '高い', kana: 'たかい', romaji: 'takai', vietnamese: 'đắt, cao', category: 'iAdj', adjType: 'i' },
    { japanese: '安い', kana: 'やすい', romaji: 'yasui', vietnamese: 'rẻ', category: 'iAdj', adjType: 'i' },
    { japanese: '低い', kana: 'ひくい', romaji: 'hikui', vietnamese: 'thấp', category: 'iAdj', adjType: 'i' },
    { japanese: 'おもしろい', kana: 'おもしろい', romaji: 'omoshiroi', vietnamese: 'thú vị, hay', category: 'iAdj', adjType: 'i' },
    { japanese: 'おいしい', kana: 'おいしい', romaji: 'oishii', vietnamese: 'ngon', category: 'iAdj', adjType: 'i' },
    { japanese: '忙しい', kana: 'いそがしい', romaji: 'isogashii', vietnamese: 'bận', category: 'iAdj', adjType: 'i' },
    { japanese: '楽しい', kana: 'たのしい', romaji: 'tanoshii', vietnamese: 'vui', category: 'iAdj', adjType: 'i' },
    { japanese: '白い', kana: 'しろい', romaji: 'shiroi', vietnamese: 'trắng', category: 'iAdj', adjType: 'i' },
    { japanese: '黒い', kana: 'くろい', romaji: 'kuroi', vietnamese: 'đen', category: 'iAdj', adjType: 'i' },
    { japanese: '赤い', kana: 'あかい', romaji: 'akai', vietnamese: 'đỏ', category: 'iAdj', adjType: 'i' },
    { japanese: '青い', kana: 'あおい', romaji: 'aoi', vietnamese: 'xanh da trời', category: 'iAdj', adjType: 'i' },
    { japanese: '桜', kana: 'さくら', romaji: 'sakura', vietnamese: 'anh đào (hoa, cây)', category: 'noun' },
    { japanese: '山', kana: 'やま', romaji: 'yama', vietnamese: 'núi', category: 'noun' },

    // —— Danh từ & từ liên quan (trang 71) ——
    { japanese: '町', kana: 'まち', romaji: 'machi', vietnamese: 'thị trấn, thị xã, thành phố', category: 'noun' },
    { japanese: '食べ物', kana: 'たべもの', romaji: 'tabemono', vietnamese: 'đồ ăn', category: 'noun' },
    { japanese: '車', kana: 'くるま', romaji: 'kuruma', vietnamese: 'xe ô-tô', category: 'noun' },
    { japanese: '所', kana: 'ところ', romaji: 'tokoro', vietnamese: 'nơi, chỗ', category: 'noun' },
    { japanese: '寮', kana: 'りょう', romaji: 'ryō', vietnamese: 'kí túc xá', category: 'noun' },
    { japanese: '勉強', kana: 'べんきょう', romaji: 'benkyō', vietnamese: 'học', category: 'noun' },
    { japanese: '生活', kana: 'せいかつ', romaji: 'seikatsu', vietnamese: 'cuộc sống, sinh hoạt', category: 'noun' },
    { japanese: 'お仕事', kana: 'おしごと', romaji: 'o-shigoto', vietnamese: 'công việc（～をします：làm việc）', category: 'noun' },
    { japanese: 'どう', kana: 'どう', romaji: 'dō', vietnamese: 'thế nào', category: 'expression' },
    { japanese: 'どんな〜', kana: 'どんな', romaji: 'donna', vietnamese: '～ như thế nào', category: 'expression' },
    { japanese: 'どれ', kana: 'どれ', romaji: 'dore', vietnamese: 'cái nào', category: 'expression' },
    { japanese: 'とても', kana: 'とても', romaji: 'totemo', vietnamese: 'rất, lắm', category: 'expression' },
    { japanese: 'あまり', kana: 'あまり', romaji: 'amari', vietnamese: 'không ～ lắm', category: 'expression' },
    { japanese: 'そして', kana: 'そして', romaji: 'soshite', vietnamese: 'và, thêm nữa（nối hai câu）', category: 'expression' },
    { japanese: '〜が、〜', kana: 'が', romaji: 'ga', vietnamese: '～, nhưng ～', category: 'expression' },

    // —— Cụm dùng trong hội thoại (trang 71) ——
    { japanese: 'お元気ですか。', kana: 'おげんきですか', romaji: 'O-genki desu ka.', vietnamese: 'Anh/Chị có khỏe không?', category: 'phrase' },
    { japanese: 'そうですね。', kana: 'そうですね', romaji: 'Sō desu ne.', vietnamese: 'Thế à. / Để tôi xem.（đang suy nghĩ câu trả lời）', category: 'phrase' },
    { japanese: '日本の生活に慣れましたか。', kana: 'にほんのせいかつになれましたか', romaji: 'Nihon no seikatsu ni naremashita ka.', vietnamese: 'Anh/Chị đã quen với cuộc sống ở Nhật chưa?', category: 'phrase' },
    { japanese: '［～、］もう一杯いかがですか。', kana: 'もういっぱいいかがですか', romaji: '[~,] Mō ippai ikaga desu ka.', vietnamese: 'Anh/Chị dùng thêm một chén [～] nữa được không ạ?', category: 'phrase' },
    { japanese: 'いいえ、けっこうです。', kana: 'いいえけっこうです', romaji: 'Iie, kekkō desu.', vietnamese: 'Không, đủ rồi ạ.', category: 'phrase' },
    { japanese: 'もう〜です［ね］。', kana: 'もう〜ですね', romaji: 'Mō ~ desu [ne].', vietnamese: 'Đã ～ rồi nhỉ. / Đã ～ rồi, đúng không ạ?', category: 'phrase' },
    { japanese: 'そろそろ失礼します。', kana: 'そろそろしつれいします', romaji: 'Sorosoro shitsurei shimasu.', vietnamese: 'Sắp đến lúc tôi phải xin phép rồi. / Đã đến lúc tôi phải về.', category: 'phrase' },
    { japanese: 'またいらっしゃってください。', kana: 'またいらっしゃってください', romaji: 'Mata irasshatte kudasai.', vietnamese: 'Lần sau anh/chị lại đến chơi nhé.', category: 'phrase' },

    // —— Tên riêng & thông tin tham khảo (trang 71) ——
    { japanese: '富士山', kana: 'ふじさん', romaji: 'Fujisan', vietnamese: 'Núi Phú Sĩ（ngọn núi cao nhất Nhật Bản）', category: 'proper' },
    { japanese: '琵琶湖', kana: 'びわこ', romaji: 'Biwako', vietnamese: 'Hồ Biwa', category: 'proper' },
    { japanese: 'シャンハイ', kana: 'シャンハイ', romaji: 'Shanhai', vietnamese: 'Thượng Hải（上海）', category: 'proper' },
    { japanese: '「七人の侍」', kana: 'しちにんのさむらい', romaji: 'Shichinin no Samurai', vietnamese: '“Bảy chàng võ sĩ Samurai”（tên phim kinh điển của đạo diễn Kurosawa Akira）', category: 'proper' },
    { japanese: '金閣寺', kana: 'きんかくじ', romaji: 'Kinkakuji', vietnamese: 'Chùa Kinkaku-ji（Chùa Vàng）', category: 'proper' },
  ],

  sentences: [
    { japanese: '桜はきれいです。', romaji: 'Sakura wa kirei desu.', vietnamese: 'Hoa anh đào đẹp.' },
    { japanese: '富士山は高いです。', romaji: 'Fujisan wa takai desu.', vietnamese: 'Núi Phú Sĩ cao.' },
    { japanese: '桜はきれいな花です。', romaji: 'Sakura wa kirei na hana desu.', vietnamese: 'Hoa anh đào là loài hoa đẹp.' },
    { japanese: '富士山は高い山です。', romaji: 'Fujisan wa takai yama desu.', vietnamese: 'Núi Phú Sĩ là núi cao.' },
    { japanese: '大阪はにぎやかですか。…はい、にぎやかです。', romaji: 'Ōsaka wa nigiyaka desu ka. …Hai, nigiyaka desu.', vietnamese: 'Osaka có náo nhiệt không? …Có, có náo nhiệt.' },
    { japanese: '琵琶湖の水はきれいですか。…いいえ、きれいじゃありません。', romaji: 'Biwako no mizu wa kirei desu ka. …Iie, kirei ja arimasen.', vietnamese: 'Nước Hồ Biwa có sạch không? …Không, không sạch.' },
    { japanese: 'ペキンはとても寒いです。', romaji: 'Pekin wa totemo samui desu.', vietnamese: 'Bắc Kinh rất lạnh.' },
    { japanese: 'これはとても有名な映画です。', romaji: 'Kore wa totemo yūmei na eiga desu.', vietnamese: 'Đây là bộ phim rất nổi tiếng.' },
    { japanese: 'シャンハイはあまり寒くないです。', romaji: 'Shanhai wa amari samukunai desu.', vietnamese: 'Thượng Hải không lạnh lắm.' },
    { japanese: 'さくら大学はあまり有名じゃないです。', romaji: 'Sakura daigaku wa amari yūmei ja nai desu.', vietnamese: 'Trường Đại học Sakura không phải là trường nổi tiếng lắm.' },
    { japanese: '日本の生活はどうですか。…楽しいです。', romaji: 'Nihon no seikatsu wa dō desu ka. …Tanoshii desu.', vietnamese: 'Cuộc sống của anh/chị ở Nhật thế nào? …Vui.' },
    { japanese: '奈良はどんな町ですか。…古い町です。', romaji: 'Nara wa donna machi desu ka. …Furui machi desu.', vietnamese: 'Nara là thành phố như thế nào? …Là thành phố cổ.' },
    { japanese: '日本の食べ物はおいしいですが、高いです。', romaji: 'Nihon no tabemono wa oishii desu ga, takai desu.', vietnamese: 'Món ăn Nhật ngon nhưng đắt.' },
    { japanese: 'ミラーさんの傘はどれですか。…あの青い傘です。', romaji: 'Mirā-san no kasa wa dore desu ka. …Ano aoi kasa desu.', vietnamese: 'Cái ô của anh Miller là cái nào? …Là cái ô màu xanh da trời kia.' },
    { japanese: 'この本はおもしろくないです。', romaji: 'Kono hon wa omoshirokunai desu.', vietnamese: 'Quyển sách này không hay.' },
    { japanese: 'ペキンは寒いですか。…はい、寒いです。', romaji: 'Pekin wa samui desu ka. …Hai, samui desu.', vietnamese: 'Bắc Kinh có lạnh không? …Có, có lạnh.' },
    { japanese: 'ワット先生は親切な先生です。', romaji: 'Watto-sensei wa shinsetsu na sensei desu.', vietnamese: 'Thầy Watt là thầy giáo tốt bụng.' },
  ],

  // —— III. Từ và thông tin tham khảo: 色・味（trang 73）——
  colors: [
    { nounJp: '白', nounKana: 'しろ', adjJp: '白い', adjKana: 'しろい', vietnamese: 'trắng' },
    { nounJp: '黒', nounKana: 'くろ', adjJp: '黒い', adjKana: 'くろい', vietnamese: 'đen' },
    { nounJp: '赤', nounKana: 'あか', adjJp: '赤い', adjKana: 'あかい', vietnamese: 'đỏ' },
    { nounJp: '青', nounKana: 'あお', adjJp: '青い', adjKana: 'あおい', vietnamese: 'xanh da trời' },
    { nounJp: '緑', nounKana: 'みどり', adjJp: null, adjKana: null, vietnamese: 'xanh lá cây' },
    { nounJp: '紫', nounKana: 'むらさき', adjJp: null, adjKana: null, vietnamese: 'tím' },
    { nounJp: '黄', nounKana: 'きいろ', adjJp: '黄色い', adjKana: 'きいろい', vietnamese: 'vàng' },
    { nounJp: '茶', nounKana: 'ちゃいろ', adjJp: '茶色い', adjKana: 'ちゃいろい', vietnamese: 'nâu' },
    { nounJp: 'ピンク', nounKana: 'ピンク', adjJp: null, adjKana: null, vietnamese: 'hồng' },
    { nounJp: 'オレンジ', nounKana: 'オレンジ', adjJp: null, adjKana: null, vietnamese: 'da cam' },
    { nounJp: 'グレー', nounKana: 'グレー', adjJp: null, adjKana: null, vietnamese: 'xám' },
    { nounJp: 'ベージュ', nounKana: 'ベージュ', adjJp: null, adjKana: null, vietnamese: 'be' },
  ],

  tastes: [
    { japanese: '甘い', kana: 'あまい', romaji: 'amai', vietnamese: 'ngọt' },
    { japanese: '辛い', kana: 'からい', romaji: 'karai', vietnamese: 'cay' },
    { japanese: '苦い', kana: 'にがい', romaji: 'nigai', vietnamese: 'đắng' },
    { japanese: '塩辛い', kana: 'しおからい', romaji: 'shiokarai', vietnamese: 'mặn' },
    { japanese: '酸っぱい', kana: 'すっぱい', romaji: 'suppai', vietnamese: 'chua' },
    { japanese: '濃い', kana: 'こい', romaji: 'koi', vietnamese: 'đậm' },
    { japanese: '薄い', kana: 'うすい', romaji: 'usui', vietnamese: 'nhạt' },
  ],

  // —— Hội thoại: Đã đến lúc tôi phải về（trang 72）——
  dialogue: [
    { speaker: 'Yamada Ichiro', japanese: 'マリアさん、日本の生活に慣れましたか。', romaji: 'Maria-san, Nihon no seikatsu ni naremashita ka.', vietnamese: 'Chị Maria đã quen với cuộc sống ở Nhật chưa?' },
    { speaker: 'Maria Santos', japanese: 'はい、もう慣れました。毎日楽しいです。', romaji: 'Hai, mō naremashita. Mainichi tanoshii desu.', vietnamese: 'Rồi anh ạ. Hàng ngày tôi thấy rất vui.' },
    { speaker: 'Yamada Ichiro', japanese: 'そうですか。サントスさん、お仕事はどうですか。', romaji: 'Sō desu ka. Santosu-san, o-shigoto wa dō desu ka.', vietnamese: 'Thế à. Anh Santos, công việc của anh thế nào?' },
    { speaker: 'Hose Santos', japanese: 'はい、忙しいですが、おもしろいです。', romaji: 'Hai, isogashii desu ga, omoshiroi desu.', vietnamese: 'Vâng, bận rộn nhưng thú vị.' },
    { speaker: 'Yamada Tomoko', japanese: 'マリアさん、もう一杯コーヒーいかがですか。', romaji: 'Maria-san, mō ippai kōhī ikaga desu ka.', vietnamese: 'Chị dùng thêm một ly cà-phê nữa nhé.' },
    { speaker: 'Maria Santos', japanese: 'いいえ、けっこうです。', romaji: 'Iie, kekkō desu.', vietnamese: 'Không, tôi đủ rồi ạ.' },
    { speaker: 'Hose Santos', japanese: 'あ、もう8時ですね。そろそろ失礼します。', romaji: 'A, mō hachiji desu ne. Sorosoro shitsurei shimasu.', vietnamese: 'Ồ, đã 8 giờ rồi nhỉ. Đã đến lúc tôi phải về.' },
    { speaker: 'Yamada Ichiro', japanese: 'そうですか。', romaji: 'Sō desu ka.', vietnamese: 'Thế à.' },
    { speaker: 'Maria Santos', japanese: '今日は本当にありがとうございました。', romaji: 'Kyō wa hontō ni arigatō gozaimashita.', vietnamese: 'Hôm nay rất cám ơn anh chị.' },
    { speaker: 'Yamada Tomoko', japanese: 'いいえ、どういたしまして。またいらっしゃってください。', romaji: 'Iie, dō itashimashite. Mata irasshatte kudasai.', vietnamese: 'Không có gì đâu. Anh chị lại đến chơi nữa nhé.' },
  ],
};

// —— Mini game: từ vựng (nghĩa Việt → từ Nhật) ——
export const lesson8VocabQuizItems = [
  { id: 1, vi: 'nổi tiếng', options: ['有名', '元気', '便利'], correctIndex: 0 },
  { id: 2, vi: 'yên tĩnh', options: ['にぎやか', '静か', 'すてき'], correctIndex: 1 },
  { id: 3, vi: 'khó', options: ['易しい', '難しい', '忙しい'], correctIndex: 1 },
  { id: 4, vi: 'rẻ', options: ['高い', '安い', '低い'], correctIndex: 1 },
  { id: 5, vi: 'ngon', options: ['おいしい', 'おもしろい', '楽しい'], correctIndex: 0 },
  { id: 6, vi: 'thành phố', options: ['町', '所', '寮'], correctIndex: 0 },
] as const;

// —— Mini game: ngữ pháp – chọn câu đúng (Việt → Nhật) ——
export const lesson8GrammarQuizItems = [
  { id: 1, vi: 'Bắc Kinh rất lạnh.', options: ['ペキンはとても寒いです。', 'ペキンはあまり寒くないです。', 'ペキンは寒いですか。'], correctIndex: 0 },
  { id: 2, vi: 'Cuộc sống ở Nhật thế nào?', options: ['日本の生活はどうですか。', '日本の生活は楽しいです。', '日本の生活はどんなですか。'], correctIndex: 0 },
  { id: 3, vi: 'Nara là thành phố như thế nào?', options: ['奈良はどんな町ですか。', '奈良は古い町です。', '奈良は町です。'], correctIndex: 0 },
  { id: 4, vi: 'Món ăn Nhật ngon nhưng đắt.', options: ['日本の食べ物はおいしいです。', '日本の食べ物はおいしいですが、高いです。', '日本の食べ物は高いです。'], correctIndex: 1 },
  { id: 5, vi: 'Cái ô của anh Miller là cái nào?', options: ['ミラーさんの傘はどれですか。', 'あの青い傘です。', 'ミラーさんの傘は青いです。'], correctIndex: 0 },
] as const;

// —— Mini game: とても / あまり ——
export const lesson8TotemoAmariItems = [
  { id: 1, vi: 'Thượng Hải không lạnh lắm.', options: ['シャンハイはあまり寒くないです。', 'シャンハイはとても寒いです。', 'シャンハイは寒いです。'], correctIndex: 0 },
  { id: 2, vi: 'Đây là bộ phim rất nổi tiếng.', options: ['これはあまり有名じゃないです。', 'これはとても有名な映画です。', 'これは有名です。'], correctIndex: 1 },
] as const;

// —— Mini game: ghép câu (tính từ / どう / どんな / どれ) ——
export const lesson8BuilderItems = [
  { id: 1, vi: 'Hoa anh đào đẹp.', hint: 'N は な-adj です。', tokens: ['桜は', 'きれいです。'] },
  { id: 2, vi: 'Núi Phú Sĩ cao.', hint: 'N は い-adj です。', tokens: ['富士山は', '高いです。'] },
  { id: 3, vi: 'Cuộc sống ở Nhật thế nào?', hint: 'N は どうですか。', tokens: ['日本の生活は', 'どうですか。'] },
  { id: 4, vi: 'Nara là thành phố như thế nào?', hint: 'N1 は どんな N2 ですか。', tokens: ['奈良は', 'どんな', '町ですか。'] },
] as const;

// —— Mini game: hiểu hội thoại ——
export const lesson8DialogueQuizItems = [
  { questionVi: 'Maria đã quen với cuộc sống ở Nhật chưa?', options: ['Chưa quen', 'Đã quen, hàng ngày rất vui', 'Chỉ mới một chút'], correctIndex: 1 },
  { questionVi: 'Công việc của anh Santos thế nào?', options: ['Rảnh và nhàm chán', 'Bận rộn nhưng thú vị', 'Rất dễ'], correctIndex: 1 },
  { questionVi: 'Maria có dùng thêm cà-phê không?', options: ['Có', 'Không, đủ rồi', 'Chưa quyết định'], correctIndex: 1 },
  { questionVi: 'Họ về lúc nào?', options: ['7 giờ', '8 giờ', '9 giờ'], correctIndex: 1 },
] as const;
