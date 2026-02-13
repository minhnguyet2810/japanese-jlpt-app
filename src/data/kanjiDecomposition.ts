/**
 * Phân rã Kanji (bộ thủ cấu thành) + liên kết Hán (Phồn thể / Giản thể).
 * Tập trung Kanji Minna no Nihongo I – Bài 13, 14, 15.
 */
export interface KanjiDecomposition {
  kanji: string;
  meaningVi: string;
  onyomi?: string;
  kunyomi?: string;
  /** Các bộ thủ cấu thành (ký tự) */
  radicals: string[];
  /** Ý nghĩa từng bộ (theo thứ tự radicals) */
  radicalMeanings?: string[];
  /** Chữ Hán Phồn thể (Traditional Chinese) */
  traditional?: string;
  /** Chữ Hán Giản thể (Simplified Chinese) */
  simplified?: string;
  /** Bài Minna (13, 14, 15) */
  lesson?: number;
}

export const KANJI_DECOMPOSITIONS: KanjiDecomposition[] = [
  { kanji: '字', meaningVi: 'chữ, tự', onyomi: 'ジ', kunyomi: 'あざ', radicals: ['宀', '子'], radicalMeanings: ['mái nhà', 'đứa trẻ'], traditional: '字', simplified: '字', lesson: 13 },
  { kanji: '入', meaningVi: 'vào', onyomi: 'ニュウ', kunyomi: 'いる', radicals: ['入'], radicalMeanings: ['nhập'], traditional: '入', simplified: '入', lesson: 13 },
  { kanji: '出', meaningVi: 'ra', onyomi: 'シュツ', kunyomi: 'でる', radicals: ['山', '山'], radicalMeanings: ['núi', 'núi'], traditional: '出', simplified: '出', lesson: 13 },
  { kanji: '買', meaningVi: 'mua', onyomi: 'バイ', kunyomi: 'かう', radicals: ['罒', '貝'], radicalMeanings: ['lưới', 'vỏ sò (tiền)'], traditional: '買', simplified: '买', lesson: 13 },
  { kanji: '物', meaningVi: 'vật', onyomi: 'ブツ', kunyomi: 'もの', radicals: ['牛', '勿'], radicalMeanings: ['trâu', 'đừng'], traditional: '物', simplified: '物', lesson: 13 },
  { kanji: '食', meaningVi: 'ăn, thực phẩm', onyomi: 'ショク', kunyomi: 'たべる', radicals: ['人', '良'], radicalMeanings: ['người', 'tốt'], traditional: '食', simplified: '食', lesson: 13 },
  { kanji: '事', meaningVi: 'việc', onyomi: 'ジ', kunyomi: 'こと', radicals: ['一', '口', '彐'], radicalMeanings: ['một', 'miệng', 'tay'], traditional: '事', simplified: '事', lesson: 13 },
  { kanji: '散', meaningVi: 'tản, rải', onyomi: 'サン', kunyomi: 'ちる', radicals: ['廿', '月', '攴'], radicalMeanings: ['hai mươi', 'trăng', 'đánh'], traditional: '散', simplified: '散', lesson: 13 },
  { kanji: '歩', meaningVi: 'bước', onyomi: 'ホ', kunyomi: 'あるく', radicals: ['止', '少'], radicalMeanings: ['dừng', 'ít'], traditional: '歩', simplified: '步', lesson: 13 },
  { kanji: '広', meaningVi: 'rộng', onyomi: 'コウ', kunyomi: 'ひろい', radicals: ['广', '黄'], radicalMeanings: ['mái', 'vàng'], traditional: '廣', simplified: '广', lesson: 13 },
  { kanji: '狭', meaningVi: 'hẹp', onyomi: 'キョウ', kunyomi: 'せまい', radicals: ['犭', '夹'], radicalMeanings: ['chó', 'kẹp'], traditional: '狹', simplified: '狭', lesson: 13 },
  { kanji: '疲', meaningVi: 'mệt', onyomi: 'ヒ', kunyomi: 'つかれる', radicals: ['疒', '皮'], radicalMeanings: ['bệnh', 'da'], traditional: '疲', simplified: '疲', lesson: 13 },
  { kanji: '結', meaningVi: 'kết', onyomi: 'ケツ', kunyomi: 'むすぶ', radicals: ['糸', '吉'], radicalMeanings: ['sợi', 'tốt'], traditional: '結', simplified: '结', lesson: 13 },
  { kanji: '婚', meaningVi: 'hôn (kết hôn)', onyomi: 'コン', radicals: ['女', '昏'], radicalMeanings: ['nữ', 'tối'], traditional: '婚', simplified: '婚', lesson: 13 },
  { kanji: '泳', meaningVi: 'bơi', onyomi: 'エイ', kunyomi: 'およぐ', radicals: ['氵', '永'], radicalMeanings: ['nước', 'vĩnh viễn'], traditional: '泳', simplified: '泳', lesson: 13 },
  { kanji: '遊', meaningVi: 'chơi', onyomi: 'ユウ', kunyomi: 'あそぶ', radicals: ['辶', '方', '子'], radicalMeanings: ['đi', 'vuông', 'con'], traditional: '遊', simplified: '游', lesson: 13 },
  { kanji: '欲', meaningVi: 'muốn', onyomi: 'ヨク', kunyomi: 'ほしい', radicals: ['谷', '欠'], radicalMeanings: ['thung lũng', 'thiếu'], traditional: '欲', simplified: '欲', lesson: 13 },
  { kanji: '送', meaningVi: 'tiễn, gửi', onyomi: 'ソウ', kunyomi: 'おくる', radicals: ['辶', '关'], radicalMeanings: ['đi', 'đóng'], traditional: '送', simplified: '送', lesson: 14 },
  { kanji: '届', meaningVi: 'tới, gửi đến', onyomi: 'カイ', kunyomi: 'とどける', radicals: ['尸', '由'], radicalMeanings: ['thây', 'do'], traditional: '屆', simplified: '届', lesson: 14 },
  { kanji: '住', meaningVi: 'ở', onyomi: 'ジュウ', kunyomi: 'すむ', radicals: ['亻', '主'], radicalMeanings: ['người', 'chủ'], traditional: '住', simplified: '住', lesson: 14 },
  { kanji: '使', meaningVi: 'sử dụng', onyomi: 'シ', kunyomi: 'つかう', radicals: ['亻', '吏'], radicalMeanings: ['người', 'quan'], traditional: '使', simplified: '使', lesson: 14 },
  { kanji: '借', meaningVi: 'mượn', onyomi: 'シャク', kunyomi: 'かりる', radicals: ['亻', '昔'], radicalMeanings: ['người', 'xưa'], traditional: '借', simplified: '借', lesson: 14 },
  { kanji: '貸', meaningVi: 'cho mượn', onyomi: 'タイ', kunyomi: 'かす', radicals: ['化', '貝'], radicalMeanings: ['biến', 'vỏ sò'], traditional: '貸', simplified: '贷', lesson: 14 },
  { kanji: '休', meaningVi: 'nghỉ', onyomi: 'キュウ', kunyomi: 'やすむ', radicals: ['亻', '木'], radicalMeanings: ['người', 'cây'], traditional: '休', simplified: '休', lesson: 15 },
  { kanji: '映', meaningVi: 'chiếu', onyomi: 'エイ', kunyomi: 'うつる', radicals: ['日', '央'], radicalMeanings: ['mặt trời', 'giữa'], traditional: '映', simplified: '映', lesson: 15 },
  { kanji: '画', meaningVi: 'tranh, vẽ', onyomi: 'ガ', kunyomi: 'えがく', radicals: ['田', '一', '凵'], radicalMeanings: ['ruộng', 'một', 'hộp'], traditional: '畫', simplified: '画', lesson: 15 },
];

const _minna1315 = KANJI_DECOMPOSITIONS.filter(
  (k) => k.lesson === 13 || k.lesson === 14 || k.lesson === 15
);
const _byKanji = new Map<string, KanjiDecomposition>();
_minna1315.forEach((k) => { if (!_byKanji.has(k.kanji)) _byKanji.set(k.kanji, k); });
export const KANJI_MINNA_13_15: KanjiDecomposition[] = Array.from(_byKanji.values());

export function getDecomposition(kanji: string): KanjiDecomposition | undefined {
  return KANJI_DECOMPOSITIONS.find((k) => k.kanji === kanji);
}
