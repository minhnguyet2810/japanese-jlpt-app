export interface Lesson6Word {
  japanese: string;
  kana: string;
  romaji: string;
  vietnamese: string;
  category: 'verb' | 'meal' | 'food' | 'drink' | 'object' | 'expression';
}

export interface Lesson6Sentence {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface Lesson6Data {
  title: string;
  description: string;
  grammarSummary: string;
  words: Lesson6Word[];
  sentences: Lesson6Sentence[];
}

export const lesson6: Lesson6Data = {
  title: 'Bài 6: Ăn uống & hoạt động hằng ngày (～を します)',
  description:
    'Nói về ăn uống, xem/nghe/đọc/viết/mua, làm bài tập, chơi thể thao… với mẫu 「N を V」 và 「N を します」, kèm cách mời rủ ませんか・ましょう.',
  grammarSummary:
    'Danh từ を V (食べます・飲みます・見ます…) ・ Danh từ を します (サッカーをします…) ・ 何をしますか ・ なん／なに ・ Danh từ（địa điểm）で V ・ Vませんか／Vましょう.',
  words: [
    // Động từ chính
    {
      japanese: '食べます',
      kana: 'たべます',
      romaji: 'tabemasu',
      vietnamese: 'ăn',
      category: 'verb',
    },
    {
      japanese: '飲みます',
      kana: 'のみます',
      romaji: 'nomimasu',
      vietnamese: 'uống',
      category: 'verb',
    },
    {
      japanese: '吸います',
      kana: 'すいます',
      romaji: 'suimasu',
      vietnamese: 'hút (thuốc lá)',
      category: 'verb',
    },
    {
      japanese: '見ます',
      kana: 'みます',
      romaji: 'mimasu',
      vietnamese: 'xem, nhìn, trông',
      category: 'verb',
    },
    {
      japanese: '聞きます',
      kana: 'ききます',
      romaji: 'kikimasu',
      vietnamese: 'nghe',
      category: 'verb',
    },
    {
      japanese: '読みます',
      kana: 'よみます',
      romaji: 'yomimasu',
      vietnamese: 'đọc',
      category: 'verb',
    },
    {
      japanese: '書きます',
      kana: 'かきます',
      romaji: 'kakimasu',
      vietnamese: 'viết',
      category: 'verb',
    },
    {
      japanese: '買います',
      kana: 'かいます',
      romaji: 'kaimasu',
      vietnamese: 'mua',
      category: 'verb',
    },
    {
      japanese: '撮ります',
      kana: 'とります',
      romaji: 'torimasu',
      vietnamese: 'chụp (ảnh)',
      category: 'verb',
    },
    {
      japanese: 'します',
      kana: 'します',
      romaji: 'shimasu',
      vietnamese: 'làm',
      category: 'verb',
    },
    {
      japanese: '会います',
      kana: 'あいます',
      romaji: 'aimasu',
      vietnamese: 'gặp',
      category: 'verb',
    },

    // Bữa ăn
    {
      japanese: 'ごはん',
      kana: 'ごはん',
      romaji: 'gohan',
      vietnamese: 'cơm, bữa ăn',
      category: 'meal',
    },
    {
      japanese: '朝ごはん',
      kana: 'あさごはん',
      romaji: 'asagohan',
      vietnamese: 'cơm sáng, bữa sáng',
      category: 'meal',
    },
    {
      japanese: '昼ごはん',
      kana: 'ひるごはん',
      romaji: 'hirugohan',
      vietnamese: 'cơm trưa, bữa trưa',
      category: 'meal',
    },
    {
      japanese: '晩ごはん',
      kana: 'ばんごはん',
      romaji: 'bangohan',
      vietnamese: 'cơm tối, bữa tối',
      category: 'meal',
    },

    // Đồ ăn
    {
      japanese: 'パン',
      kana: 'パン',
      romaji: 'pan',
      vietnamese: 'bánh mì',
      category: 'food',
    },
    {
      japanese: '卵',
      kana: 'たまご',
      romaji: 'tamago',
      vietnamese: 'trứng',
      category: 'food',
    },
    {
      japanese: '肉',
      kana: 'にく',
      romaji: 'niku',
      vietnamese: 'thịt',
      category: 'food',
    },
    {
      japanese: '魚',
      kana: 'さかな',
      romaji: 'sakana',
      vietnamese: 'cá',
      category: 'food',
    },
    {
      japanese: '野菜',
      kana: 'やさい',
      romaji: 'yasai',
      vietnamese: 'rau',
      category: 'food',
    },
    {
      japanese: '果物',
      kana: 'くだもの',
      romaji: 'kudamono',
      vietnamese: 'hoa quả, trái cây',
      category: 'food',
    },

    // Đồ uống
    {
      japanese: '水',
      kana: 'みず',
      romaji: 'mizu',
      vietnamese: 'nước',
      category: 'drink',
    },
    {
      japanese: 'お茶',
      kana: 'おちゃ',
      romaji: 'ocha',
      vietnamese: 'trà (nói chung)',
      category: 'drink',
    },
    {
      japanese: '紅茶',
      kana: 'こうちゃ',
      romaji: 'kōcha',
      vietnamese: 'trà đen',
      category: 'drink',
    },
    {
      japanese: '牛乳',
      kana: 'ぎゅうにゅう',
      romaji: 'gyūnyū',
      vietnamese: 'sữa bò',
      category: 'drink',
    },
    {
      japanese: 'ジュース',
      kana: 'ジュース',
      romaji: 'jūsu',
      vietnamese: 'nước hoa quả',
      category: 'drink',
    },
    {
      japanese: 'ビール',
      kana: 'ビール',
      romaji: 'bīru',
      vietnamese: 'bia',
      category: 'drink',
    },
    {
      japanese: '[お]酒',
      kana: '［お］さけ',
      romaji: 'o-sake',
      vietnamese: 'rượu, rượu sake',
      category: 'drink',
    },

    // Đồ vật / hoạt động
    {
      japanese: 'ビデオ',
      kana: 'ビデオ',
      romaji: 'bideo',
      vietnamese: 'video, băng video',
      category: 'object',
    },
    {
      japanese: '映画',
      kana: 'えいが',
      romaji: 'eiga',
      vietnamese: 'phim, điện ảnh',
      category: 'object',
    },
    {
      japanese: 'CD',
      kana: 'CD',
      romaji: 'shīdī',
      vietnamese: 'đĩa CD',
      category: 'object',
    },
    {
      japanese: '手紙',
      kana: 'てがみ',
      romaji: 'tegami',
      vietnamese: 'thư, lá thư',
      category: 'object',
    },
    {
      japanese: 'レポート',
      kana: 'レポート',
      romaji: 'repōto',
      vietnamese: 'báo cáo',
      category: 'object',
    },
    {
      japanese: '写真',
      kana: 'しゃしん',
      romaji: 'shashin',
      vietnamese: 'ảnh, bức ảnh',
      category: 'object',
    },
    {
      japanese: '店',
      kana: 'みせ',
      romaji: 'mise',
      vietnamese: 'cửa hàng, tiệm',
      category: 'object',
    },
    {
      japanese: 'レストラン',
      kana: 'レストラン',
      romaji: 'resutoran',
      vietnamese: 'nhà hàng',
      category: 'object',
    },
    {
      japanese: '庭',
      kana: 'にわ',
      romaji: 'niwa',
      vietnamese: 'vườn',
      category: 'object',
    },
    {
      japanese: '宿題',
      kana: 'しゅくだい',
      romaji: 'shukudai',
      vietnamese: 'bài tập về nhà',
      category: 'object',
    },
    {
      japanese: 'テニス',
      kana: 'テニス',
      romaji: 'tenisu',
      vietnamese: 'tennis',
      category: 'object',
    },
    {
      japanese: 'サッカー',
      kana: 'サッカー',
      romaji: 'sakkā',
      vietnamese: 'bóng đá',
      category: 'object',
    },
    {
      japanese: '[お]花見',
      kana: '［お］はなみ',
      romaji: 'o-hanami',
      vietnamese: 'ngắm hoa anh đào',
      category: 'object',
    },

    // Biểu thức hay dùng trong hội thoại
    {
      japanese: '何',
      kana: 'なに／なん',
      romaji: 'nani / nan',
      vietnamese: 'gì, cái gì',
      category: 'expression',
    },
    {
      japanese: 'いっしょに',
      kana: 'いっしょに',
      romaji: 'issho ni',
      vietnamese: 'cùng, cùng nhau',
      category: 'expression',
    },
    {
      japanese: 'ちょっと',
      kana: 'ちょっと',
      romaji: 'chotto',
      vietnamese: 'một chút',
      category: 'expression',
    },
    {
      japanese: 'いつも',
      kana: 'いつも',
      romaji: 'itsumo',
      vietnamese: 'luôn luôn, lúc nào cũng',
      category: 'expression',
    },
    {
      japanese: 'ときどき',
      kana: 'ときどき',
      romaji: 'tokidoki',
      vietnamese: 'thỉnh thoảng',
      category: 'expression',
    },
    {
      japanese: 'それから',
      kana: 'それから',
      romaji: 'sorekara',
      vietnamese: 'sau đó, tiếp theo',
      category: 'expression',
    },
    {
      japanese: 'ええ',
      kana: 'ええ',
      romaji: 'ee',
      vietnamese: 'vâng',
      category: 'expression',
    },
    {
      japanese: 'いいですね。',
      kana: 'いいですね。',
      romaji: 'ii desu ne.',
      vietnamese: 'Được đấy nhỉ./ Hay quá.',
      category: 'expression',
    },
    {
      japanese: 'わかりました。',
      kana: 'わかりました。',
      romaji: 'wakarimashita.',
      vietnamese: 'Tôi hiểu rồi./ Vâng ạ.',
      category: 'expression',
    },
  ],
  sentences: [
    {
      japanese: 'ジュースを飲みます。',
      romaji: 'Jūsu o nomimasu.',
      vietnamese: 'Tôi uống nước hoa quả.',
    },
    {
      japanese: '駅で新聞を買います。',
      romaji: 'Eki de shinbun o kaimasu.',
      vietnamese: 'Tôi mua báo ở ga.',
    },
    {
      japanese: 'うちでテレビを見ます。',
      romaji: 'Uchi de terebi o mimasu.',
      vietnamese: 'Tôi xem tivi ở nhà.',
    },
    {
      japanese: '一緒に映画を見ませんか。',
      romaji: 'Issho ni eiga o mimasen ka.',
      vietnamese: 'Anh/chị có cùng xem phim với tôi không?',
    },
    {
      japanese: '公園でサッカーをしましょう。',
      romaji: 'Kōen de sakkā o shimashō.',
      vietnamese: 'Chúng ta cùng đá bóng ở công viên nhé.',
    },
  ],
};

