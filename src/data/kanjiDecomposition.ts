/**
 * Phân rã Kanji (bộ thủ cấu thành) + liên kết Hán (Phồn thể / Giản thể).
 * Bao gồm Kanji Minna no Nihongo I (Bài 1–25).
 */
export interface KanjiDecomposition {
  kanji: string;
  meaningVi: string;
  onyomi?: string;
  kunyomi?: string;
  radicals: string[];
  radicalMeanings?: string[];
  traditional?: string;
  simplified?: string;
  lesson?: number;
}

export const KANJI_DECOMPOSITIONS: KanjiDecomposition[] = [
  // --- Bài 1-5 ---
  { kanji: '一', meaningVi: 'nhất (một)', onyomi: 'イチ', kunyomi: 'ひと', radicals: ['一'], radicalMeanings: ['một'], traditional: '一', simplified: '一', lesson: 1 },
  { kanji: '二', meaningVi: 'nhị (hai)', onyomi: 'ニ', kunyomi: 'ふた', radicals: ['二'], radicalMeanings: ['hai'], traditional: '二', simplified: '二', lesson: 1 },
  { kanji: '三', meaningVi: 'tam (ba)', onyomi: 'サン', kunyomi: 'み', radicals: ['三'], radicalMeanings: ['ba'], traditional: '三', simplified: '三', lesson: 1 },
  { kanji: '四', meaningVi: 'tứ (bốn)', onyomi: 'シ', kunyomi: 'よん', radicals: ['囗', '儿'], radicalMeanings: ['vây quanh', 'người'], traditional: '四', simplified: '四', lesson: 1 },
  { kanji: '五', meaningVi: 'ngũ (năm)', onyomi: 'ゴ', kunyomi: 'いつ', radicals: ['二', '乂'], radicalMeanings: ['hai', 'vắt chéo'], traditional: '五', simplified: '五', lesson: 1 },
  { kanji: '六', meaningVi: 'lục (sáu)', onyomi: 'ロク', kunyomi: 'む', radicals: ['亠', '八'], radicalMeanings: ['đầu', 'tám'], traditional: '六', simplified: '六', lesson: 1 },
  { kanji: '七', meaningVi: 'thất (bảy)', onyomi: 'シチ', kunyomi: 'なな', radicals: ['一', '乚'], radicalMeanings: ['một', 'móc'], traditional: '七', simplified: '七', lesson: 1 },
  { kanji: '八', meaningVi: 'bát (tám)', onyomi: 'ハチ', kunyomi: 'や', radicals: ['八'], radicalMeanings: ['tám'], traditional: '八', simplified: '八', lesson: 1 },
  { kanji: '九', meaningVi: 'cửu (chín)', onyomi: 'キュウ', kunyomi: 'ここの', radicals: ['乙', '丿'], radicalMeanings: ['can ất', 'phiệt'], traditional: '九', simplified: '九', lesson: 1 },
  { kanji: '十', meaningVi: 'thập (mười)', onyomi: 'ジュウ', kunyomi: 'とお', radicals: ['十'], radicalMeanings: ['mười'], traditional: '十', simplified: '十', lesson: 1 },
  { kanji: '百', meaningVi: 'bách (trăm)', onyomi: 'ヒャク', radicals: ['一', '白'], radicalMeanings: ['một', 'trắng'], traditional: '百', simplified: '百', lesson: 2 },
  { kanji: '千', meaningVi: 'thiên (nghìn)', onyomi: 'セン', kunyomi: 'ち', radicals: ['丿', '十'], radicalMeanings: ['phiệt', 'mười'], traditional: '千', simplified: '千', lesson: 2 },
  { kanji: '万', meaningVi: 'vạn (mười nghìn)', onyomi: 'マン', radicals: ['一', '刀'], radicalMeanings: ['một', 'dao'], traditional: '萬', simplified: '万', lesson: 2 },
  { kanji: '円', meaningVi: 'viên (tròn, yên Nhật)', onyomi: 'エン', kunyomi: 'まるい', radicals: ['冂', '儿'], radicalMeanings: ['quynh', 'người'], traditional: '圓', simplified: '円', lesson: 2 },
  { kanji: '日', meaningVi: 'nhật (mặt trời, ngày)', onyomi: 'ニチ', kunyomi: 'ひ', radicals: ['日'], radicalMeanings: ['mặt trời'], traditional: '日', simplified: '日', lesson: 3 },
  { kanji: '月', meaningVi: 'nguyệt (mặt trăng, tháng)', onyomi: 'ゲツ', kunyomi: 'つき', radicals: ['月'], radicalMeanings: ['mặt trăng'], traditional: '月', simplified: '月', lesson: 3 },
  { kanji: '火', meaningVi: 'hỏa (lửa)', onyomi: 'カ', kunyomi: 'ひ', radicals: ['火'], radicalMeanings: ['lửa'], traditional: '火', simplified: '火', lesson: 3 },
  { kanji: '水', meaningVi: 'thủy (nước)', onyomi: 'スイ', kunyomi: 'みず', radicals: ['水'], radicalMeanings: ['nước'], traditional: '水', simplified: '水', lesson: 3 },
  { kanji: '木', meaningVi: 'mộc (cây)', onyomi: 'モク', kunyomi: 'き', radicals: ['木'], radicalMeanings: ['cây'], traditional: '木', simplified: '木', lesson: 3 },
  { kanji: '金', meaningVi: 'kim (vàng, tiền, thứ 6)', onyomi: 'キン', kunyomi: 'かね', radicals: ['金'], radicalMeanings: ['vàng'], traditional: '金', simplified: '金', lesson: 3 },
  { kanji: '土', meaningVi: 'thổ (đất)', onyomi: 'ド', kunyomi: 'つち', radicals: ['土'], radicalMeanings: ['đất'], traditional: '土', simplified: '土', lesson: 3 },
  { kanji: '山', meaningVi: 'sơn (núi)', onyomi: 'サン', kunyomi: 'やま', radicals: ['山'], radicalMeanings: ['núi'], traditional: '山', simplified: '山', lesson: 4 },
  { kanji: '川', meaningVi: 'xuyên (sông)', onyomi: 'セン', kunyomi: 'かわ', radicals: ['川'], radicalMeanings: ['sông'], traditional: '川', simplified: '川', lesson: 4 },
  { kanji: '田', meaningVi: 'điền (ruộng)', onyomi: 'デン', kunyomi: 'た', radicals: ['田'], radicalMeanings: ['ruộng'], traditional: '田', simplified: '田', lesson: 4 },
  { kanji: '人', meaningVi: 'nhân (người)', onyomi: 'ジン', kunyomi: 'ひと', radicals: ['人'], radicalMeanings: ['người'], traditional: '人', simplified: '人', lesson: 5 },
  { kanji: '子', meaningVi: 'tử (con)', onyomi: 'シ', kunyomi: 'こ', radicals: ['子'], radicalMeanings: ['con'], traditional: '子', simplified: '子', lesson: 5 },
  { kanji: '女', meaningVi: 'nữ (phụ nữ)', onyomi: 'ジョ', kunyomi: 'おんな', radicals: ['女'], radicalMeanings: ['nữ'], traditional: '女', simplified: '女', lesson: 5 },
  { kanji: '父', meaningVi: 'phụ (bố)', onyomi: 'フ', kunyomi: 'ちち', radicals: ['父'], radicalMeanings: ['phụ'], traditional: '父', simplified: '父', lesson: 5 },
  { kanji: '母', meaningVi: 'mẫu (mẹ)', onyomi: 'ボ', kunyomi: 'はは', radicals: ['母'], radicalMeanings: ['mẫu'], traditional: '母', simplified: '母', lesson: 5 },

  // --- Bài 6-10 ---
  { kanji: '先', meaningVi: 'tiên (trước)', onyomi: 'セン', kunyomi: 'さき', radicals: ['儿', '土'], radicalMeanings: ['người', 'đất'], traditional: '先', simplified: '先', lesson: 6 },
  { kanji: '生', meaningVi: 'sinh (sống)', onyomi: 'セイ', kunyomi: 'うまれる', radicals: ['生'], radicalMeanings: ['sinh'], traditional: '生', simplified: '生', lesson: 6 },
  { kanji: '学', meaningVi: 'học', onyomi: 'ガク', kunyomi: 'まなぶ', radicals: ['子', '冖', '爻'], radicalMeanings: ['con', 'mái', 'vắt chéo'], traditional: '學', simplified: '学', lesson: 6 },
  { kanji: '校', meaningVi: 'hiệu (trường)', onyomi: 'コウ', radicals: ['木', '交'], radicalMeanings: ['cây', 'giao'], traditional: '校', simplified: '校', lesson: 6 },
  { kanji: '私', meaningVi: 'tư (tôi, riêng)', onyomi: 'シ', kunyomi: 'わたし', radicals: ['禾', '厶'], radicalMeanings: ['lúa', 'riêng'], traditional: '私', simplified: '私', lesson: 7 },
  { kanji: '本', meaningVi: 'bản (sách, nguồn gốc)', onyomi: 'ホン', kunyomi: 'もと', radicals: ['木', '一'], radicalMeanings: ['cây', 'một'], traditional: '本', simplified: '本', lesson: 7 },
  { kanji: '何', meaningVi: 'hà (cái gì)', onyomi: 'カ', kunyomi: 'なに', radicals: ['亻', '可'], radicalMeanings: ['người', 'có thể'], traditional: '何', simplified: '何', lesson: 7 },
  { kanji: '名', meaningVi: 'danh (tên)', onyomi: 'メイ', kunyomi: 'な', radicals: ['夕', '口'], radicalMeanings: ['chiều tối', 'miệng'], traditional: '名', simplified: '名', lesson: 8 },
  { kanji: '午', meaningVi: 'ngọ (buổi trưa)', onyomi: 'ゴ', radicals: ['十', '干'], radicalMeanings: ['mười', 'lá chắn'], traditional: '午', simplified: '午', lesson: 9 },
  { kanji: '前', meaningVi: 'tiền (trước)', onyomi: 'ゼン', kunyomi: 'まえ', radicals: ['丷', '一', '月', '刂'], radicalMeanings: ['đầu', 'một', 'trăng', 'dao'], traditional: '前', simplified: '前', lesson: 9 },
  { kanji: '後', meaningVi: 'hậu (sau)', onyomi: 'ゴ', kunyomi: 'あと', radicals: ['彳', '幺', '夂'], radicalMeanings: ['đi bộ', 'nhỏ', 'đến'], traditional: '後', simplified: '后', lesson: 9 },
  { kanji: '今', meaningVi: 'kim (bây giờ)', onyomi: 'コン', kunyomi: 'いま', radicals: ['人', '一'], radicalMeanings: ['người', 'một'], traditional: '今', simplified: '今', lesson: 10 },
  { kanji: '時', meaningVi: 'thời (thời gian)', onyomi: 'ジ', kunyomi: 'とき', radicals: ['日', '寺'], radicalMeanings: ['mặt trời', 'chùa'], traditional: '時', simplified: '时', lesson: 10 },
  { kanji: '間', meaningVi: 'gian (giữa, khoảng)', onyomi: 'カン', kunyomi: 'あいだ', radicals: ['門', '日'], radicalMeanings: ['cửa', 'mặt trời'], traditional: '間', simplified: '间', lesson: 10 },

  // --- Bài 11-15 (Đã có sẵn một phần, gộp lại và bổ sung) ---
  { kanji: '休', meaningVi: 'nghỉ', onyomi: 'キュウ', kunyomi: 'やすむ', radicals: ['亻', '木'], radicalMeanings: ['người', 'cây'], traditional: '休', simplified: '休', lesson: 11 },
  { kanji: '上', meaningVi: 'thượng (trên)', onyomi: 'ジョウ', kunyomi: 'うえ', radicals: ['一', '卜'], radicalMeanings: ['một', 'bói'], traditional: '上', simplified: '上', lesson: 11 },
  { kanji: '下', meaningVi: 'hạ (dưới)', onyomi: 'ゲ', kunyomi: 'した', radicals: ['一', '卜'], radicalMeanings: ['một', 'bói'], traditional: '下', simplified: '下', lesson: 11 },
  { kanji: '左', meaningVi: 'tả (trái)', onyomi: 'サ', kunyomi: 'ひだり', radicals: ['𠂇', '工'], radicalMeanings: ['tay', 'thợ'], traditional: '左', simplified: '左', lesson: 12 },
  { kanji: '右', meaningVi: 'hữu (phải)', onyomi: 'ウ', kunyomi: 'みぎ', radicals: ['𠂇', '口'], radicalMeanings: ['tay', 'miệng'], traditional: '右', simplified: '右', lesson: 12 },
  { kanji: '中', meaningVi: 'trung (trong, giữa)', onyomi: 'チュウ', kunyomi: 'なか', radicals: ['丨', '口'], radicalMeanings: ['nét sổ', 'miệng'], traditional: '中', simplified: '中', lesson: 12 },
  { kanji: '大', meaningVi: 'đại (lớn)', onyomi: 'ダイ', kunyomi: 'おおきい', radicals: ['大'], radicalMeanings: ['lớn'], traditional: '大', simplified: '大', lesson: 12 },
  { kanji: '小', meaningVi: 'tiểu (nhỏ)', onyomi: 'ショウ', kunyomi: 'ちいさい', radicals: ['小'], radicalMeanings: ['nhỏ'], traditional: '小', simplified: '小', lesson: 12 },
  { kanji: '字', meaningVi: 'tự (chữ)', onyomi: 'ジ', kunyomi: 'あざ', radicals: ['宀', '子'], radicalMeanings: ['mái nhà', 'đứa trẻ'], lesson: 13 },
  { kanji: '入', meaningVi: 'nhập (vào)', onyomi: 'ニュウ', kunyomi: 'いる', radicals: ['入'], radicalMeanings: ['nhập'], lesson: 13 },
  { kanji: '出', meaningVi: 'xuất (ra)', onyomi: 'シュツ', kunyomi: 'でる', radicals: ['山', '山'], radicalMeanings: ['núi', 'núi'], lesson: 13 },
  { kanji: '買', meaningVi: 'mãi (mua)', onyomi: 'バイ', kunyomi: 'かう', radicals: ['罒', '貝'], radicalMeanings: ['lưới', 'vỏ sò'], lesson: 13 },
  { kanji: '物', meaningVi: 'vật', onyomi: 'ブツ', kunyomi: 'もの', radicals: ['牛', '勿'], radicalMeanings: ['trâu', 'đừng'], lesson: 13 },
  { kanji: '食', meaningVi: 'thực (ăn)', onyomi: 'ショク', kunyomi: 'たべる', radicals: ['人', '良'], radicalMeanings: ['người', 'tốt'], lesson: 13 },
  { kanji: '事', meaningVi: 'sự (việc)', onyomi: 'ジ', kunyomi: 'こと', radicals: ['一', '口', '彐'], radicalMeanings: ['một', 'miệng', 'tay'], lesson: 13 },
  { kanji: '送', meaningVi: 'tống (tiễn, gửi)', onyomi: 'ソウ', kunyomi: 'おくる', radicals: ['辶', '关'], radicalMeanings: ['đi', 'đóng'], lesson: 14 },
  { kanji: '住', meaningVi: 'trú (ở)', onyomi: 'ジュウ', kunyomi: 'すむ', radicals: ['亻', '主'], radicalMeanings: ['người', 'chủ'], lesson: 14 },
  { kanji: '使', meaningVi: 'sứ (sử dụng)', onyomi: 'シ', kunyomi: 'つかう', radicals: ['亻', '吏'], radicalMeanings: ['người', 'quan'], lesson: 14 },
  { kanji: '借', meaningVi: 'tá (mượn)', onyomi: 'シャク', kunyomi: 'かりる', radicals: ['亻', '昔'], radicalMeanings: ['người', 'xưa'], lesson: 14 },
  { kanji: '貸', meaningVi: 'thải (cho mượn)', onyomi: 'タイ', kunyomi: 'かす', radicals: ['化', '貝'], radicalMeanings: ['biến', 'vỏ sò'], lesson: 14 },
  { kanji: '映', meaningVi: 'ánh (chiếu)', onyomi: 'エイ', kunyomi: 'うつる', radicals: ['日', '央'], radicalMeanings: ['mặt trời', 'giữa'], lesson: 15 },
  { kanji: '画', meaningVi: 'họa (vẽ, tranh)', onyomi: 'ガ', radicals: ['田', '一', '凵'], radicalMeanings: ['ruộng', 'một', 'hộp'], lesson: 15 },

  // --- Bài 16-20 ---
  { kanji: '飲', meaningVi: 'ẩm (uống)', onyomi: 'イン', kunyomi: 'のむ', radicals: ['食', '欠'], radicalMeanings: ['ăn', 'thiếu'], traditional: '飲', simplified: '饮', lesson: 16 },
  { kanji: '見', meaningVi: 'kiến (nhìn)', onyomi: 'ケン', kunyomi: 'みる', radicals: ['見'], radicalMeanings: ['kiến'], traditional: '見', simplified: '见', lesson: 16 },
  { kanji: '聞', meaningVi: 'văn (nghe)', onyomi: 'ブン', kunyomi: 'きく', radicals: ['門', '耳'], radicalMeanings: ['cửa', 'tai'], traditional: '聞', simplified: '闻', lesson: 16 },
  { kanji: '書', meaningVi: 'thư (viết)', onyomi: 'ショ', kunyomi: 'かく', radicals: ['曰', '聿'], radicalMeanings: ['nói', 'bút'], traditional: '書', simplified: '书', lesson: 16 },
  { kanji: '読', meaningVi: 'độc (đọc)', onyomi: 'ドク', kunyomi: 'よむ', radicals: ['言', '売'], radicalMeanings: ['ngôn', 'bán'], traditional: '讀', simplified: '读', lesson: 17 },
  { kanji: '話', meaningVi: 'thoại (nói)', onyomi: 'ワ', kunyomi: 'はなす', radicals: ['言', '舌'], radicalMeanings: ['ngôn', 'lưỡi'], traditional: '話', simplified: '话', lesson: 17 },
  { kanji: '語', meaningVi: 'ngôn ngữ', onyomi: 'ゴ', kunyomi: 'かたる', radicals: ['言', '五', '口'], radicalMeanings: ['ngôn', 'năm', 'miệng'], traditional: '語', simplified: '语', lesson: 17 },
  { kanji: '来', meaningVi: 'lai (đến)', onyomi: 'ライ', kunyomi: 'くる', radicals: ['木', '丷'], radicalMeanings: ['cây', 'đầu'], traditional: '來', simplified: '来', lesson: 18 },
  { kanji: '行', meaningVi: 'hành (đi)', onyomi: 'コウ', kunyomi: 'いく', radicals: ['行'], radicalMeanings: ['hành'], traditional: '行', simplified: '行', lesson: 18 },
  { kanji: '帰', meaningVi: 'quy (về)', onyomi: 'キ', kunyomi: 'かえる', radicals: ['丿', '止', '冖', '巾'], radicalMeanings: ['phiệt', 'dừng', 'mái', 'khăn'], traditional: '帰', simplified: '归', lesson: 18 },
  { kanji: '東', meaningVi: 'đông', onyomi: 'トウ', kunyomi: 'ひがし', radicals: ['木', '日'], radicalMeanings: ['cây', 'mặt trời'], traditional: '東', simplified: '东', lesson: 19 },
  { kanji: '西', meaningVi: 'tây', onyomi: 'セイ', kunyomi: 'にし', radicals: ['襾', '儿'], radicalMeanings: ['che mặt', 'người'], traditional: '西', simplified: '西', lesson: 19 },
  { kanji: '南', meaningVi: 'nam', onyomi: 'ナン', kunyomi: 'みなみ', radicals: ['十', '冂', '丷', '干'], radicalMeanings: ['mười', 'quynh', 'đầu', 'can'], traditional: '南', simplified: '南', lesson: 19 },
  { kanji: '北', meaningVi: 'bắc', onyomi: 'ホク', kunyomi: 'きた', radicals: ['匕', '匕'], radicalMeanings: ['thìa', 'thìa'], traditional: '北', simplified: '北', lesson: 19 },
  { kanji: '早', meaningVi: 'tảo (sớm)', onyomi: 'ソウ', kunyomi: 'はやい', radicals: ['日', '十'], radicalMeanings: ['mặt trời', 'mười'], traditional: '早', simplified: '早', lesson: 20 },

  // --- Bài 21-25 ---
  { kanji: '高', meaningVi: 'cao (đắt)', onyomi: 'コウ', kunyomi: 'たかい', radicals: ['高'], radicalMeanings: ['cao'], traditional: '高', simplified: '高', lesson: 21 },
  { kanji: '安', meaningVi: 'an (rẻ, bình an)', onyomi: 'アン', kunyomi: 'やすい', radicals: ['宀', '女'], radicalMeanings: ['mái', 'nữ'], traditional: '安', simplified: '安', lesson: 21 },
  { kanji: '新', meaningVi: 'tân (mới)', onyomi: 'シン', kunyomi: 'あたらしい', radicals: ['立', '木', '斤'], radicalMeanings: ['đứng', 'cây', 'rìu'], traditional: '新', simplified: '新', lesson: 21 },
  { kanji: '古', meaningVi: 'cổ (cũ)', onyomi: 'コ', kunyomi: 'ふるい', radicals: ['十', '口'], radicalMeanings: ['mười', 'miệng'], traditional: '古', simplified: '古', lesson: 21 },
  { kanji: '多', meaningVi: 'đa (nhiều)', onyomi: 'タ', kunyomi: 'おおい', radicals: ['夕', '夕'], radicalMeanings: ['chiều tối', 'chiều tối'], traditional: '多', simplified: '多', lesson: 22 },
  { kanji: '少', meaningVi: 'thiểu (ít)', onyomi: 'ショウ', kunyomi: 'すくない', radicals: ['小', '丿'], radicalMeanings: ['nhỏ', 'phiệt'], traditional: '少', simplified: '少', lesson: 22 },
  { kanji: '長', meaningVi: 'trường (dài, trưởng)', onyomi: 'チョウ', kunyomi: 'ながい', radicals: ['長'], radicalMeanings: ['trường'], traditional: '長', simplified: '长', lesson: 22 },
  { kanji: '短', meaningVi: 'đoản (ngắn)', onyomi: 'タン', kunyomi: 'みじかい', radicals: ['矢', '豆'], radicalMeanings: ['mũi tên', 'đậu'], traditional: '短', simplified: '短', lesson: 22 },
  { kanji: '明', meaningVi: 'minh (sáng)', onyomi: 'メイ', kunyomi: 'あかるい', radicals: ['日', '月'], radicalMeanings: ['mặt trời', 'mặt trăng'], traditional: '明', simplified: '明', lesson: 23 },
  { kanji: '暗', meaningVi: 'ám (tối)', onyomi: 'アン', kunyomi: 'くらい', radicals: ['日', '音'], radicalMeanings: ['mặt trời', 'âm thanh'], traditional: '暗', simplified: '暗', lesson: 23 },
  { kanji: '近', meaningVi: 'cận (gần)', onyomi: 'キン', kunyomi: 'ちかい', radicals: ['辶', '斤'], radicalMeanings: ['đi', 'rìu'], traditional: '近', simplified: '近', lesson: 23 },
  { kanji: '遠', meaningVi: 'viễn (xa)', onyomi: 'エン', kunyomi: 'とおい', radicals: ['辶', '土', '口', '衣'], radicalMeanings: ['đi', 'đất', 'miệng', 'áo'], traditional: '遠', simplified: '远', lesson: 23 },
  { kanji: '強', meaningVi: 'cường (mạnh)', onyomi: 'キョウ', kunyomi: 'つよい', radicals: ['弓', '口', '虫'], radicalMeanings: ['cung', 'miệng', 'sâu'], traditional: '強', simplified: '强', lesson: 24 },
  { kanji: '弱', meaningVi: 'nhược (yếu)', onyomi: 'ジャク', kunyomi: 'よわい', radicals: ['弓', '冫'], radicalMeanings: ['cung', 'băng'], traditional: '弱', simplified: '弱', lesson: 24 },
  { kanji: '男', meaningVi: 'nam', onyomi: 'ダン', kunyomi: 'おとこ', radicals: ['田', '力'], radicalMeanings: ['ruộng', 'lực'], traditional: '男', simplified: '男', lesson: 25 },
  { kanji: '女', meaningVi: 'nữ', onyomi: 'ジョ', kunyomi: 'おんな', radicals: ['女'], radicalMeanings: ['nữ'], traditional: '女', simplified: '女', lesson: 25 },
];

export function getDecomposition(kanji: string): KanjiDecomposition | undefined {
  return KANJI_DECOMPOSITIONS.find((k) => k.kanji === kanji);
}

export function getKanjiByLessonRange(start: number, end: number): KanjiDecomposition[] {
  return KANJI_DECOMPOSITIONS.filter((k) => k.lesson && k.lesson >= start && k.lesson <= end);
}
