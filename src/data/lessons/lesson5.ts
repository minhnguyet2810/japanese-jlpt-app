export interface Lesson5Word {
  japanese: string;
  kana: string;
  romaji: string;
  vietnamese: string;
  category: 'verbMove' | 'place' | 'transport' | 'personTime' | 'date';
}

export interface Lesson5Sentence {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface Lesson5Data {
  title: string;
  description: string;
  grammarSummary: string;
  words: Lesson5Word[];
  sentences: Lesson5Sentence[];
}

export const lesson5: Lesson5Data = {
  title: 'Bài 5: Đi đâu, bằng gì? (行きます・来ます・帰ります)',
  description:
    'Hỏi và trả lời &quot;đi đâu, đến đâu, về đâu&quot;, &quot;đi bằng phương tiện gì&quot; và &quot;đi với ai, khi nào&quot;.',
  grammarSummary:
    'Danh từ（địa điểm）へ 行きます／来ます／帰ります ・ Danh từ（phương tiện）で 行きます ・ Danh từ（người）と 行きます ・ いつ、～に～ます.',
  words: [
    // Động từ di chuyển
    {
      japanese: '行きます',
      kana: 'いきます',
      romaji: 'ikimasu',
      vietnamese: 'đi',
      category: 'verbMove',
    },
    {
      japanese: '来ます',
      kana: 'きます',
      romaji: 'kimasu',
      vietnamese: 'đến',
      category: 'verbMove',
    },
    {
      japanese: '帰ります',
      kana: 'かえります',
      romaji: 'kaerimasu',
      vietnamese: 'về (nhà, quê...)',
      category: 'verbMove',
    },

    // Địa điểm
    {
      japanese: '学校',
      kana: 'がっこう',
      romaji: 'gakkō',
      vietnamese: 'trường học',
      category: 'place',
    },
    {
      japanese: 'スーパー',
      kana: 'スーパー',
      romaji: 'sūpā',
      vietnamese: 'siêu thị',
      category: 'place',
    },
    {
      japanese: '駅',
      kana: 'えき',
      romaji: 'eki',
      vietnamese: 'ga, nhà ga',
      category: 'place',
    },
    {
      japanese: '会社',
      kana: 'かいしゃ',
      romaji: 'kaisha',
      vietnamese: 'công ty',
      category: 'place',
    },
    {
      japanese: 'うち',
      kana: 'うち',
      romaji: 'uchi',
      vietnamese: 'nhà (mình)',
      category: 'place',
    },

    // Phương tiện giao thông
    {
      japanese: '飛行機',
      kana: 'ひこうき',
      romaji: 'hikōki',
      vietnamese: 'máy bay',
      category: 'transport',
    },
    {
      japanese: '船',
      kana: 'ふね',
      romaji: 'fune',
      vietnamese: 'thuyền, tàu thủy',
      category: 'transport',
    },
    {
      japanese: '電車',
      kana: 'でんしゃ',
      romaji: 'densha',
      vietnamese: 'tàu điện',
      category: 'transport',
    },
    {
      japanese: '地下鉄',
      kana: 'ちかてつ',
      romaji: 'chikatetsu',
      vietnamese: 'tàu điện ngầm',
      category: 'transport',
    },
    {
      japanese: '新幹線',
      kana: 'しんかんせん',
      romaji: 'shinkansen',
      vietnamese: 'tàu Shinkansen (tàu điện siêu tốc)',
      category: 'transport',
    },
    {
      japanese: 'バス',
      kana: 'バス',
      romaji: 'basu',
      vietnamese: 'xe buýt',
      category: 'transport',
    },
    {
      japanese: 'タクシー',
      kana: 'タクシー',
      romaji: 'takushī',
      vietnamese: 'tắc-xi',
      category: 'transport',
    },
    {
      japanese: '自転車',
      kana: 'じてんしゃ',
      romaji: 'jitensha',
      vietnamese: 'xe đạp',
      category: 'transport',
    },
    {
      japanese: '歩いて',
      kana: 'あるいて',
      romaji: 'aruite',
      vietnamese: 'đi bộ',
      category: 'transport',
    },

    // Người & thời gian
    {
      japanese: '人',
      kana: 'ひと',
      romaji: 'hito',
      vietnamese: 'người',
      category: 'personTime',
    },
    {
      japanese: '友達',
      kana: 'ともだち',
      romaji: 'tomodachi',
      vietnamese: 'bạn, bạn bè',
      category: 'personTime',
    },
    {
      japanese: '彼',
      kana: 'かれ',
      romaji: 'kare',
      vietnamese: 'anh ấy, bạn trai',
      category: 'personTime',
    },
    {
      japanese: '彼女',
      kana: 'かのじょ',
      romaji: 'kanojo',
      vietnamese: 'chị ấy, bạn gái',
      category: 'personTime',
    },
    {
      japanese: '家族',
      kana: 'かぞく',
      romaji: 'kazoku',
      vietnamese: 'gia đình',
      category: 'personTime',
    },
    {
      japanese: '一人で',
      kana: 'ひとりで',
      romaji: 'hitori de',
      vietnamese: 'một mình',
      category: 'personTime',
    },
    {
      japanese: '先週',
      kana: 'せんしゅう',
      romaji: 'senshū',
      vietnamese: 'tuần trước',
      category: 'personTime',
    },
    {
      japanese: '今週',
      kana: 'こんしゅう',
      romaji: 'konshū',
      vietnamese: 'tuần này',
      category: 'personTime',
    },
    {
      japanese: '来週',
      kana: 'らいしゅう',
      romaji: 'raishū',
      vietnamese: 'tuần sau',
      category: 'personTime',
    },
    {
      japanese: '先月',
      kana: 'せんげつ',
      romaji: 'sengetsu',
      vietnamese: 'tháng trước',
      category: 'personTime',
    },
    {
      japanese: '今月',
      kana: 'こんげつ',
      romaji: 'kongetsu',
      vietnamese: 'tháng này',
      category: 'personTime',
    },
    {
      japanese: '来月',
      kana: 'らいげつ',
      romaji: 'raigetsu',
      vietnamese: 'tháng sau',
      category: 'personTime',
    },
    {
      japanese: '去年',
      kana: 'きょねん',
      romaji: 'kyonen',
      vietnamese: 'năm ngoái',
      category: 'personTime',
    },
    {
      japanese: '今年',
      kana: 'ことし',
      romaji: 'kotoshi',
      vietnamese: 'năm nay',
      category: 'personTime',
    },
    {
      japanese: '来年',
      kana: 'らいねん',
      romaji: 'rainen',
      vietnamese: 'sang năm',
      category: 'personTime',
    },
    // Ngày trong tháng (một phần)
    {
      japanese: '何月',
      kana: 'なんがつ',
      romaji: 'nan-gatsu',
      vietnamese: 'tháng mấy',
      category: 'date',
    },
    {
      japanese: '何日',
      kana: 'なんにち',
      romaji: 'nan-nichi',
      vietnamese: 'ngày mấy, ngày bao nhiêu',
      category: 'date',
    },
    {
      japanese: '１日',
      kana: 'ついたち',
      romaji: 'tsuitachi',
      vietnamese: 'ngày mồng 1',
      category: 'date',
    },
    {
      japanese: '２日',
      kana: 'ふつか',
      romaji: 'futsuka',
      vietnamese: 'ngày mồng 2, 2 ngày',
      category: 'date',
    },
    {
      japanese: '３日',
      kana: 'みっか',
      romaji: 'mikka',
      vietnamese: 'ngày mồng 3, 3 ngày',
      category: 'date',
    },
    {
      japanese: '４日',
      kana: 'よっか',
      romaji: 'yokka',
      vietnamese: 'ngày mồng 4, 4 ngày',
      category: 'date',
    },
    {
      japanese: '５日',
      kana: 'いつか',
      romaji: 'itsuka',
      vietnamese: 'ngày mồng 5, 5 ngày',
      category: 'date',
    },
    {
      japanese: '１４日',
      kana: 'じゅうよっか',
      romaji: 'jūyokka',
      vietnamese: 'ngày 14, 14 ngày',
      category: 'date',
    },
    {
      japanese: '２０日',
      kana: 'はつか',
      romaji: 'hatsuka',
      vietnamese: 'ngày 20, 20 ngày',
      category: 'date',
    },
    {
      japanese: '２４日',
      kana: 'にじゅうよっか',
      romaji: 'nijūyokka',
      vietnamese: 'ngày 24, 24 ngày',
      category: 'date',
    },
  ],
  sentences: [
    {
      japanese: '京都へ行きます。',
      romaji: 'Kyōto e ikimasu.',
      vietnamese: 'Tôi đi Kyoto.',
    },
    {
      japanese: '会社へ電車で行きます。',
      romaji: 'Kaisha e densha de ikimasu.',
      vietnamese: 'Tôi đi đến công ty bằng tàu điện.',
    },
    {
      japanese: '友達と大阪へ行きます。',
      romaji: 'Tomodachi to Ōsaka e ikimasu.',
      vietnamese: 'Tôi đi Osaka với bạn.',
    },
    {
      japanese: '一人で東京へ行きます。',
      romaji: 'Hitori de Tōkyō e ikimasu.',
      vietnamese: 'Tôi đi Tokyo một mình.',
    },
    {
      japanese: '来週日本へ来ます。',
      romaji: 'Raishū Nihon e kimasu.',
      vietnamese: 'Tuần sau (tôi) sẽ đến Nhật.',
    },
  ],
};

