export interface KanaCard {
  hiragana: string;
  katakana: string;
  romaji: string;
  exampleJa: string;
  exampleVi: string;
}

export interface Lesson0Data {
  title: string;
  description: string;
  cards: KanaCard[];
}

export const lesson0: Lesson0Data = {
  title: 'Bài 0: Bảng chữ cái tiếng Nhật',
  description:
    'Làm quen hiragana và katakana thông qua flashcard. Nghe phát âm, xem ví dụ đơn giản trước khi vào ngữ pháp.',
  cards: [
    {
      hiragana: 'あ',
      katakana: 'ア',
      romaji: 'a',
      exampleJa: 'あさ',
      exampleVi: 'asa – buổi sáng',
    },
    {
      hiragana: 'い',
      katakana: 'イ',
      romaji: 'i',
      exampleJa: 'いえ',
      exampleVi: 'ie – ngôi nhà',
    },
    {
      hiragana: 'う',
      katakana: 'ウ',
      romaji: 'u',
      exampleJa: 'うみ',
      exampleVi: 'umi – biển',
    },
    {
      hiragana: 'え',
      katakana: 'エ',
      romaji: 'e',
      exampleJa: 'えき',
      exampleVi: 'eki – nhà ga',
    },
    {
      hiragana: 'お',
      katakana: 'オ',
      romaji: 'o',
      exampleJa: 'おちゃ',
      exampleVi: 'ocha – trà',
    },
    {
      hiragana: 'か',
      katakana: 'カ',
      romaji: 'ka',
      exampleJa: 'かさ',
      exampleVi: 'kasa – cái ô',
    },
    {
      hiragana: 'き',
      katakana: 'キ',
      romaji: 'ki',
      exampleJa: 'き',
      exampleVi: 'ki – cây',
    },
    {
      hiragana: 'く',
      katakana: 'ク',
      romaji: 'ku',
      exampleJa: 'くに',
      exampleVi: 'kuni – đất nước',
    },
    {
      hiragana: 'け',
      katakana: 'ケ',
      romaji: 'ke',
      exampleJa: 'いけ',
      exampleVi: 'ike – ao, hồ nhỏ',
    },
    {
      hiragana: 'こ',
      katakana: 'コ',
      romaji: 'ko',
      exampleJa: 'こども',
      exampleVi: 'kodomo – trẻ em',
    },
    // さ行
    {
      hiragana: 'さ',
      katakana: 'サ',
      romaji: 'sa',
      exampleJa: 'さかな',
      exampleVi: 'sakana – con cá',
    },
    {
      hiragana: 'し',
      katakana: 'シ',
      romaji: 'shi',
      exampleJa: 'しごと',
      exampleVi: 'shigoto – công việc',
    },
    {
      hiragana: 'す',
      katakana: 'ス',
      romaji: 'su',
      exampleJa: 'すし',
      exampleVi: 'sushi – sushi',
    },
    {
      hiragana: 'せ',
      katakana: 'セ',
      romaji: 'se',
      exampleJa: 'せんせい',
      exampleVi: 'sensei – giáo viên',
    },
    {
      hiragana: 'そ',
      katakana: 'ソ',
      romaji: 'so',
      exampleJa: 'そら',
      exampleVi: 'sora – bầu trời',
    },
    // た行
    {
      hiragana: 'た',
      katakana: 'タ',
      romaji: 'ta',
      exampleJa: 'たべる',
      exampleVi: 'taberu – ăn',
    },
    {
      hiragana: 'ち',
      katakana: 'チ',
      romaji: 'chi',
      exampleJa: 'ちず',
      exampleVi: 'chizu – bản đồ',
    },
    {
      hiragana: 'つ',
      katakana: 'ツ',
      romaji: 'tsu',
      exampleJa: 'つき',
      exampleVi: 'tsuki – mặt trăng',
    },
    {
      hiragana: 'て',
      katakana: 'テ',
      romaji: 'te',
      exampleJa: 'て',
      exampleVi: 'te – bàn tay',
    },
    {
      hiragana: 'と',
      katakana: 'ト',
      romaji: 'to',
      exampleJa: 'とけい',
      exampleVi: 'tokei – đồng hồ',
    },
    // な行
    {
      hiragana: 'な',
      katakana: 'ナ',
      romaji: 'na',
      exampleJa: 'なまえ',
      exampleVi: 'namae – tên',
    },
    {
      hiragana: 'に',
      katakana: 'ニ',
      romaji: 'ni',
      exampleJa: 'にほん',
      exampleVi: 'Nihon – Nhật Bản',
    },
    {
      hiragana: 'ぬ',
      katakana: 'ヌ',
      romaji: 'nu',
      exampleJa: 'いぬ',
      exampleVi: 'inu – con chó',
    },
    {
      hiragana: 'ね',
      katakana: 'ネ',
      romaji: 'ne',
      exampleJa: 'ねこ',
      exampleVi: 'neko – con mèo',
    },
    {
      hiragana: 'の',
      katakana: 'ノ',
      romaji: 'no',
      exampleJa: 'の',
      exampleVi: 'no – trợ từ sở hữu',
    },
    // は行
    {
      hiragana: 'は',
      katakana: 'ハ',
      romaji: 'ha',
      exampleJa: 'はな',
      exampleVi: 'hana – bông hoa',
    },
    {
      hiragana: 'ひ',
      katakana: 'ヒ',
      romaji: 'hi',
      exampleJa: 'ひる',
      exampleVi: 'hiru – buổi trưa',
    },
    {
      hiragana: 'ふ',
      katakana: 'フ',
      romaji: 'fu',
      exampleJa: 'ふゆ',
      exampleVi: 'fuyu – mùa đông',
    },
    {
      hiragana: 'へ',
      katakana: 'ヘ',
      romaji: 'he',
      exampleJa: 'へや',
      exampleVi: 'heya – căn phòng',
    },
    {
      hiragana: 'ほ',
      katakana: 'ホ',
      romaji: 'ho',
      exampleJa: 'ほし',
      exampleVi: 'hoshi – ngôi sao',
    },
    // ま行
    {
      hiragana: 'ま',
      katakana: 'マ',
      romaji: 'ma',
      exampleJa: 'まち',
      exampleVi: 'machi – thành phố, khu phố',
    },
    {
      hiragana: 'み',
      katakana: 'ミ',
      romaji: 'mi',
      exampleJa: 'みず',
      exampleVi: 'mizu – nước',
    },
    {
      hiragana: 'む',
      katakana: 'ム',
      romaji: 'mu',
      exampleJa: 'むら',
      exampleVi: 'mura – ngôi làng',
    },
    {
      hiragana: 'め',
      katakana: 'メ',
      romaji: 'me',
      exampleJa: 'め',
      exampleVi: 'me – đôi mắt',
    },
    {
      hiragana: 'も',
      katakana: 'モ',
      romaji: 'mo',
      exampleJa: 'もんだい',
      exampleVi: 'mondai – câu hỏi, vấn đề',
    },
    // や行
    {
      hiragana: 'や',
      katakana: 'ヤ',
      romaji: 'ya',
      exampleJa: 'やま',
      exampleVi: 'yama – ngọn núi',
    },
    {
      hiragana: 'ゆ',
      katakana: 'ユ',
      romaji: 'yu',
      exampleJa: 'ゆき',
      exampleVi: 'yuki – tuyết',
    },
    {
      hiragana: 'よ',
      katakana: 'ヨ',
      romaji: 'yo',
      exampleJa: 'よる',
      exampleVi: 'yoru – buổi tối',
    },
    // ら行
    {
      hiragana: 'ら',
      katakana: 'ラ',
      romaji: 'ra',
      exampleJa: 'らく',
      exampleVi: 'raku – thoải mái, dễ chịu',
    },
    {
      hiragana: 'り',
      katakana: 'リ',
      romaji: 'ri',
      exampleJa: 'りんご',
      exampleVi: 'ringo – quả táo',
    },
    {
      hiragana: 'る',
      katakana: 'ル',
      romaji: 'ru',
      exampleJa: 'へやにいる',
      exampleVi: 'iru – ở trong (phòng)',
    },
    {
      hiragana: 'れ',
      katakana: 'レ',
      romaji: 're',
      exampleJa: 'れきし',
      exampleVi: 'rekishi – lịch sử',
    },
    {
      hiragana: 'ろ',
      katakana: 'ロ',
      romaji: 'ro',
      exampleJa: 'ろうか',
      exampleVi: 'rouka – hành lang',
    },
    // わ行 + ん
    {
      hiragana: 'わ',
      katakana: 'ワ',
      romaji: 'wa',
      exampleJa: 'わたし',
      exampleVi: 'watashi – tôi',
    },
    {
      hiragana: 'を',
      katakana: 'ヲ',
      romaji: 'o (wo)',
      exampleJa: 'ほんをよむ',
      exampleVi: 'hon o yomu – đọc sách',
    },
    {
      hiragana: 'ん',
      katakana: 'ン',
      romaji: 'n',
      exampleJa: 'ほん',
      exampleVi: 'hon – quyển sách',
    },
  ],
};

export interface ExtraKana {
  label: string;
  hiragana: string;
  katakana: string;
  romaji: string;
}

export const voicedKana: ExtraKana[] = [
  { label: 'が行', hiragana: 'が・ぎ・ぐ・げ・ご', katakana: 'ガ・ギ・グ・ゲ・ゴ', romaji: 'ga gi gu ge go' },
  { label: 'ざ行', hiragana: 'ざ・じ・ず・ぜ・ぞ', katakana: 'ザ・ジ・ズ・ゼ・ゾ', romaji: 'za ji zu ze zo' },
  { label: 'だ行', hiragana: 'だ・ぢ・づ・で・ど', katakana: 'ダ・ヂ・ヅ・デ・ド', romaji: 'da ji zu de do' },
  { label: 'ば行', hiragana: 'ば・び・ぶ・べ・ぼ', katakana: 'バ・ビ・ブ・ベ・ボ', romaji: 'ba bi bu be bo' },
  { label: 'ぱ行', hiragana: 'ぱ・ぴ・ぷ・ぺ・ぽ', katakana: 'パ・ピ・プ・ペ・ポ', romaji: 'pa pi pu pe po' },
];

export const comboKana: ExtraKana[] = [
  { label: 'きゃ行', hiragana: 'きゃ・きゅ・きょ', katakana: 'キャ・キュ・キョ', romaji: 'kya kyu kyo' },
  { label: 'しゃ行', hiragana: 'しゃ・しゅ・しょ', katakana: 'シャ・シュ・ショ', romaji: 'sha shu sho' },
  { label: 'ちゃ行', hiragana: 'ちゃ・ちゅ・ちょ', katakana: 'チャ・チュ・チョ', romaji: 'cha chu cho' },
  { label: 'にゃ行', hiragana: 'にゃ・にゅ・にょ', katakana: 'ニャ・ニュ・ニョ', romaji: 'nya nyu nyo' },
  { label: 'りゃ行', hiragana: 'りゃ・りゅ・りょ', katakana: 'リャ・リュ・リョ', romaji: 'rya ryu ryo' },
];


