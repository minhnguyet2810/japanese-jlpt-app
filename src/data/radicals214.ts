/**
 * 214 Bộ thủ Kangxi – bảng tra cứu (subset đầy đủ các bộ thường gặp).
 * Mỗi bộ: số thứ tự, chữ, nét, ý nghĩa Hán-Việt, âm Nhật (onyomi/kunyomi).
 */
export interface Radical {
  id: number;
  char: string;
  strokes: number;
  meaningVi: string;
  meaningEn?: string;
  onyomi?: string;
  kunyomi?: string;
}

export const RADICALS_214: Radical[] = [
  { id: 1, char: '一', strokes: 1, meaningVi: 'một', meaningEn: 'one', onyomi: 'イチ', kunyomi: 'ひと' },
  { id: 2, char: '丨', strokes: 1, meaningVi: 'nét sổ', onyomi: 'コン' },
  { id: 3, char: '丶', strokes: 1, meaningVi: 'chấm', onyomi: 'チュ' },
  { id: 4, char: '丿', strokes: 1, meaningVi: 'nét phẩy', onyomi: 'ヘツ' },
  { id: 5, char: '乙', strokes: 1, meaningVi: 'ất', meaningEn: 'second', onyomi: 'オツ', kunyomi: 'きのと' },
  { id: 6, char: '亅', strokes: 1, meaningVi: 'móc', onyomi: 'ケツ' },
  { id: 7, char: '二', strokes: 2, meaningVi: 'hai', meaningEn: 'two', onyomi: 'ニ', kunyomi: 'ふた' },
  { id: 8, char: '亠', strokes: 2, meaningVi: 'đầu', meaningEn: 'lid', onyomi: 'トウ' },
  { id: 9, char: '人', strokes: 2, meaningVi: 'nhân', meaningEn: 'person', onyomi: 'ジン', kunyomi: 'ひと' },
  { id: 10, char: '儿', strokes: 2, meaningVi: 'nhân (chân người)', onyomi: 'ジン' },
  { id: 11, char: '入', strokes: 2, meaningVi: 'nhập', meaningEn: 'enter', onyomi: 'ニュウ', kunyomi: 'いる' },
  { id: 12, char: '八', strokes: 2, meaningVi: 'bát', meaningEn: 'eight', onyomi: 'ハチ', kunyomi: 'や' },
  { id: 13, char: '冂', strokes: 2, meaningVi: 'quynh', meaningEn: 'down box', onyomi: 'ケイ' },
  { id: 14, char: '冫', strokes: 2, meaningVi: 'băng', meaningEn: 'ice', onyomi: 'ヒョウ' },
  { id: 15, char: '几', strokes: 2, meaningVi: 'kỷ', meaningEn: 'table', onyomi: 'キ' },
  { id: 16, char: '凵', strokes: 2, meaningVi: 'khảm', onyomi: 'カン' },
  { id: 17, char: '刀', strokes: 2, meaningVi: 'đao', meaningEn: 'knife', onyomi: 'トウ', kunyomi: 'かたな' },
  { id: 18, char: '力', strokes: 2, meaningVi: 'lực', meaningEn: 'power', onyomi: 'リキ', kunyomi: 'ちから' },
  { id: 19, char: '勹', strokes: 2, meaningVi: 'bao', meaningEn: 'wrap', onyomi: 'ホウ' },
  { id: 20, char: '匕', strokes: 2, meaningVi: 'chủy', meaningEn: 'spoon', onyomi: 'ヒ' },
  { id: 21, char: '匚', strokes: 2, meaningVi: 'phương', onyomi: 'ホウ' },
  { id: 22, char: '匸', strokes: 2, meaningVi: 'hệ', onyomi: 'ケイ' },
  { id: 23, char: '十', strokes: 2, meaningVi: 'thập', meaningEn: 'ten', onyomi: 'ジュウ', kunyomi: 'とお' },
  { id: 24, char: '卜', strokes: 2, meaningVi: 'bốc', meaningEn: 'divination', onyomi: 'ボク' },
  { id: 25, char: '卩', strokes: 2, meaningVi: 'tiết', onyomi: 'セツ' },
  { id: 26, char: '厂', strokes: 2, meaningVi: 'xưởng', meaningEn: 'cliff', onyomi: 'カン' },
  { id: 27, char: '厶', strokes: 2, meaningVi: 'khư', onyomi: 'シ' },
  { id: 28, char: '又', strokes: 2, meaningVi: 'hựu', meaningEn: 'again', onyomi: 'ユウ', kunyomi: 'また' },
  { id: 29, char: '口', strokes: 3, meaningVi: 'khẩu', meaningEn: 'mouth', onyomi: 'コウ', kunyomi: 'くち' },
  { id: 30, char: '囗', strokes: 3, meaningVi: 'vi', meaningEn: 'enclosure', onyomi: 'イ' },
  { id: 31, char: '土', strokes: 3, meaningVi: 'thổ', meaningEn: 'earth', onyomi: 'ド', kunyomi: 'つち' },
  { id: 32, char: '士', strokes: 3, meaningVi: 'sĩ', meaningEn: 'scholar', onyomi: 'シ' },
  { id: 33, char: '夂', strokes: 3, meaningVi: 'truy', onyomi: 'チ' },
  { id: 34, char: '夊', strokes: 3, meaningVi: 'suy', onyomi: 'スイ' },
  { id: 35, char: '夕', strokes: 3, meaningVi: 'tịch', meaningEn: 'evening', onyomi: 'セキ', kunyomi: 'ゆう' },
  { id: 36, char: '大', strokes: 3, meaningVi: 'đại', meaningEn: 'big', onyomi: 'ダイ', kunyomi: 'おお' },
  { id: 37, char: '女', strokes: 3, meaningVi: 'nữ', meaningEn: 'woman', onyomi: 'ジョ', kunyomi: 'おんな' },
  { id: 38, char: '子', strokes: 3, meaningVi: 'tử', meaningEn: 'child', onyomi: 'シ', kunyomi: 'こ' },
  { id: 39, char: '宀', strokes: 3, meaningVi: 'miên', meaningEn: 'roof', onyomi: 'ベン' },
  { id: 40, char: '寸', strokes: 3, meaningVi: 'thốn', meaningEn: 'inch', onyomi: 'スン' },
  { id: 41, char: '小', strokes: 3, meaningVi: 'tiểu', meaningEn: 'small', onyomi: 'ショウ', kunyomi: 'ちい' },
  { id: 42, char: '尢', strokes: 3, meaningVi: 'uông', onyomi: 'オウ' },
  { id: 43, char: '尸', strokes: 3, meaningVi: 'thi', onyomi: 'シ' },
  { id: 44, char: '屮', strokes: 3, meaningVi: 'sót', onyomi: 'チュツ' },
  { id: 45, char: '山', strokes: 3, meaningVi: 'sơn', meaningEn: 'mountain', onyomi: 'サン', kunyomi: 'やま' },
  { id: 46, char: '巛', strokes: 3, meaningVi: 'xuyên', onyomi: 'セン' },
  { id: 47, char: '工', strokes: 3, meaningVi: 'công', meaningEn: 'work', onyomi: 'コウ' },
  { id: 48, char: '己', strokes: 3, meaningVi: 'kỷ', meaningEn: 'self', onyomi: 'コ', kunyomi: 'おのれ' },
  { id: 49, char: '巾', strokes: 3, meaningVi: 'cân', meaningEn: 'cloth', onyomi: 'キン' },
  { id: 50, char: '干', strokes: 3, meaningVi: 'can', meaningEn: 'dry', onyomi: 'カン' },
  { id: 51, char: '幺', strokes: 3, meaningVi: 'yêu', onyomi: 'ヨウ' },
  { id: 52, char: '广', strokes: 3, meaningVi: 'nghiễm', meaningEn: 'dotted cliff', onyomi: 'ゲン' },
  { id: 53, char: '廴', strokes: 3, meaningVi: 'dẫn', onyomi: 'イン' },
  { id: 54, char: '廾', strokes: 3, meaningVi: 'củng', onyomi: 'キョウ' },
  { id: 55, char: '弋', strokes: 3, meaningVi: 'dặc', onyomi: 'ヨク' },
  { id: 56, char: '弓', strokes: 3, meaningVi: 'cung', meaningEn: 'bow', onyomi: 'キュウ', kunyomi: 'ゆみ' },
  { id: 57, char: '彐', strokes: 3, meaningVi: 'kệ', onyomi: 'ケイ' },
  { id: 58, char: '彡', strokes: 3, meaningVi: 'sam', onyomi: 'サン' },
  { id: 59, char: '彳', strokes: 3, meaningVi: 'sách', meaningEn: 'step', onyomi: 'テキ' },
  { id: 60, char: '心', strokes: 4, meaningVi: 'tâm', meaningEn: 'heart', onyomi: 'シン', kunyomi: 'こころ' },
  { id: 61, char: '戈', strokes: 4, meaningVi: 'qua', meaningEn: 'halberd', onyomi: 'カ' },
  { id: 62, char: '戸', strokes: 4, meaningVi: 'hộ', meaningEn: 'door', onyomi: 'コ', kunyomi: 'と' },
  { id: 63, char: '手', strokes: 4, meaningVi: 'thủ', meaningEn: 'hand', onyomi: 'シュ', kunyomi: 'て' },
  { id: 64, char: '支', strokes: 4, meaningVi: 'chi', onyomi: 'シ' },
  { id: 65, char: '攴', strokes: 4, meaningVi: 'phộc', onyomi: 'ボク' },
  { id: 66, char: '文', strokes: 4, meaningVi: 'văn', meaningEn: 'writing', onyomi: 'ブン', kunyomi: 'ふみ' },
  { id: 67, char: '斗', strokes: 4, meaningVi: 'đấu', onyomi: 'ト' },
  { id: 68, char: '斤', strokes: 4, meaningVi: 'cân', meaningEn: 'axe', onyomi: 'キン' },
  { id: 69, char: '方', strokes: 4, meaningVi: 'phương', meaningEn: 'direction', onyomi: 'ホウ', kunyomi: 'かた' },
  { id: 70, char: '无', strokes: 4, meaningVi: 'vô', onyomi: 'ム' },
  { id: 71, char: '日', strokes: 4, meaningVi: 'nhật', meaningEn: 'sun', onyomi: 'ニチ', kunyomi: 'ひ' },
  { id: 72, char: '曰', strokes: 4, meaningVi: 'viết', onyomi: 'エツ' },
  { id: 73, char: '月', strokes: 4, meaningVi: 'nguyệt', meaningEn: 'moon', onyomi: 'ゲツ', kunyomi: 'つき' },
  { id: 74, char: '木', strokes: 4, meaningVi: 'mộc', meaningEn: 'tree', onyomi: 'ボク', kunyomi: 'き' },
  { id: 75, char: '欠', strokes: 4, meaningVi: 'khiếm', meaningEn: 'lack', onyomi: 'ケツ', kunyomi: 'かける' },
  { id: 76, char: '止', strokes: 4, meaningVi: 'chỉ', meaningEn: 'stop', onyomi: 'シ', kunyomi: 'とめる' },
  { id: 77, char: '歹', strokes: 4, meaningVi: 'đãi', onyomi: 'ガツ' },
  { id: 78, char: '殳', strokes: 4, meaningVi: 'thù', onyomi: 'シュ' },
  { id: 79, char: '毋', strokes: 4, meaningVi: 'vô', onyomi: 'ブ' },
  { id: 80, char: '比', strokes: 4, meaningVi: 'tỷ', meaningEn: 'compare', onyomi: 'ヒ', kunyomi: 'くらべる' },
  { id: 81, char: '毛', strokes: 4, meaningVi: 'mao', meaningEn: 'fur', onyomi: 'モウ', kunyomi: 'け' },
  { id: 82, char: '氏', strokes: 4, meaningVi: 'thị', onyomi: 'シ', kunyomi: 'うじ' },
  { id: 83, char: '气', strokes: 4, meaningVi: 'khí', meaningEn: 'steam', onyomi: 'キ' },
  { id: 84, char: '水', strokes: 4, meaningVi: 'thủy', meaningEn: 'water', onyomi: 'スイ', kunyomi: 'みず' },
  { id: 85, char: '火', strokes: 4, meaningVi: 'hỏa', meaningEn: 'fire', onyomi: 'カ', kunyomi: 'ひ' },
  { id: 86, char: '爪', strokes: 4, meaningVi: 'trảo', onyomi: 'ソウ' },
  { id: 87, char: '父', strokes: 4, meaningVi: 'phụ', meaningEn: 'father', onyomi: 'フ', kunyomi: 'ちち' },
  { id: 88, char: '爻', strokes: 4, meaningVi: 'hào', onyomi: 'コウ' },
  { id: 89, char: '爿', strokes: 4, meaningVi: 'tường', onyomi: 'ショウ' },
  { id: 90, char: '片', strokes: 4, meaningVi: 'phiến', meaningEn: 'slice', onyomi: 'ヘン', kunyomi: 'かた' },
  { id: 91, char: '牙', strokes: 4, meaningVi: 'nha', onyomi: 'ガ', kunyomi: 'きば' },
  { id: 92, char: '牛', strokes: 4, meaningVi: 'ngưu', meaningEn: 'cow', onyomi: 'ギュウ', kunyomi: 'うし' },
  { id: 93, char: '犬', strokes: 4, meaningVi: 'khuyển', meaningEn: 'dog', onyomi: 'ケン', kunyomi: 'いぬ' },
  { id: 94, char: '王', strokes: 4, meaningVi: 'vương', meaningEn: 'king', onyomi: 'オウ' },
  { id: 95, char: '貝', strokes: 7, meaningVi: 'bối', meaningEn: 'shell', onyomi: 'バイ', kunyomi: 'かい' },
  { id: 96, char: '車', strokes: 7, meaningVi: 'xa', meaningEn: 'cart', onyomi: 'シャ', kunyomi: 'くるま' },
  { id: 97, char: '辶', strokes: 4, meaningVi: 'sước', meaningEn: 'walk', onyomi: 'チャク' },
  { id: 98, char: '言', strokes: 7, meaningVi: 'ngôn', meaningEn: 'speech', onyomi: 'ゲン', kunyomi: 'こと' },
  { id: 99, char: '食', strokes: 9, meaningVi: 'thực', meaningEn: 'eat', onyomi: 'ショク', kunyomi: 'たべる' },
  { id: 100, char: '門', strokes: 8, meaningVi: 'môn', meaningEn: 'gate', onyomi: 'モン', kunyomi: 'かど' },
];

/** Tra bộ thủ theo ký tự */
export function getRadicalByChar(char: string): Radical | undefined {
  return RADICALS_214.find((r) => r.char === char);
}

/** Tra bộ thủ theo id (1–214) */
export function getRadicalById(id: number): Radical | undefined {
  return RADICALS_214.find((r) => r.id === id);
}
