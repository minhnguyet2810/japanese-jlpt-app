export interface Lesson7Word {
  japanese: string;
  kana: string;
  romaji: string;
  vietnamese: string;
  category: 'verbGive' | 'person' | 'thing';
}

export interface Lesson7Sentence {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface Lesson7Data {
  title: string;
  description: string;
  grammarSummary: string;
  words: Lesson7Word[];
  sentences: Lesson7Sentence[];
}

export const lesson7: Lesson7Data = {
  title: 'Bài 7: Cho – nhận & mượn – cho mượn (あげます・もらいます)',
  description:
    'Nói về việc tặng quà, nhận quà, cho mượn – mượn, dạy – học với các mẫu 「N1 は N2 に N3 を あげます／かします／おしえます」 và 「N1 は N2 から N3 を もらいます／かります／ならいます」.',
  grammarSummary:
    'N1 は N2 に N3 を あげます・かします・おしえます／N1 は N2 から N3 を もらいます・かります・ならいます ・ だれに／だれから／何を',
  words: [
    // Động từ cho – nhận
    {
      japanese: 'あげます',
      kana: 'あげます',
      romaji: 'agemasu',
      vietnamese: 'tặng, cho',
      category: 'verbGive',
    },
    {
      japanese: 'もらいます',
      kana: 'もらいます',
      romaji: 'moraimasu',
      vietnamese: 'nhận',
      category: 'verbGive',
    },
    {
      japanese: 'かします',
      kana: 'かします',
      romaji: 'kashimasu',
      vietnamese: 'cho mượn',
      category: 'verbGive',
    },
    {
      japanese: 'かります',
      kana: 'かります',
      romaji: 'karimasu',
      vietnamese: 'mượn',
      category: 'verbGive',
    },
    {
      japanese: 'おしえます',
      kana: 'おしえます',
      romaji: 'oshie-masu',
      vietnamese: 'dạy, chỉ',
      category: 'verbGive',
    },
    {
      japanese: 'ならいます',
      kana: 'ならいます',
      romaji: 'naraimasu',
      vietnamese: 'học (từ ai)',
      category: 'verbGive',
    },

    // Người
    {
      japanese: '先生',
      kana: 'せんせい',
      romaji: 'sensei',
      vietnamese: 'thầy, cô',
      category: 'person',
    },
    {
      japanese: '友達',
      kana: 'ともだち',
      romaji: 'tomodachi',
      vietnamese: 'bạn bè',
      category: 'person',
    },
    {
      japanese: '父',
      kana: 'ちち',
      romaji: 'chichi',
      vietnamese: 'bố (mình)',
      category: 'person',
    },
    {
      japanese: '母',
      kana: 'はは',
      romaji: 'haha',
      vietnamese: 'mẹ (mình)',
      category: 'person',
    },
    {
      japanese: '彼',
      kana: 'かれ',
      romaji: 'kare',
      vietnamese: 'anh ấy',
      category: 'person',
    },
    {
      japanese: '彼女',
      kana: 'かのじょ',
      romaji: 'kanojo',
      vietnamese: 'chị ấy',
      category: 'person',
    },

    // Đồ vật/quà
    {
      japanese: 'プレゼント',
      kana: 'プレゼント',
      romaji: 'purezento',
      vietnamese: 'quà tặng',
      category: 'thing',
    },
    {
      japanese: '花',
      kana: 'はな',
      romaji: 'hana',
      vietnamese: 'hoa',
      category: 'thing',
    },
    {
      japanese: '本',
      kana: 'ほん',
      romaji: 'hon',
      vietnamese: 'sách',
      category: 'thing',
    },
    {
      japanese: 'ノート',
      kana: 'ノート',
      romaji: 'nōto',
      vietnamese: 'vở',
      category: 'thing',
    },
    {
      japanese: 'えんぴつ',
      kana: 'えんぴつ',
      romaji: 'enpitsu',
      vietnamese: 'bút chì',
      category: 'thing',
    },
    {
      japanese: 'ペン',
      kana: 'ペン',
      romaji: 'pen',
      vietnamese: 'bút mực, bút bi',
      category: 'thing',
    },
    {
      japanese: 'メモ',
      kana: 'メモ',
      romaji: 'memo',
      vietnamese: 'giấy ghi chú, mẩu ghi nhớ',
      category: 'thing',
    },
    {
      japanese: 'メール',
      kana: 'メール',
      romaji: 'mēru',
      vietnamese: 'email',
      category: 'thing',
    },
    {
      japanese: '住所',
      kana: 'じゅうしょ',
      romaji: 'jūsho',
      vietnamese: 'địa chỉ',
      category: 'thing',
    },
    {
      japanese: '電話番号',
      kana: 'でんわばんごう',
      romaji: 'denwa bangō',
      vietnamese: 'số điện thoại',
      category: 'thing',
    },
  ],
  sentences: [
    {
      japanese: 'わたしは友達に本をあげます。',
      romaji: 'Watashi wa tomodachi ni hon o agemasu.',
      vietnamese: 'Tôi tặng sách cho bạn.',
    },
    {
      japanese: 'わたしは先生から日本語をならいます。',
      romaji: 'Watashi wa sensei kara Nihongo o naraimasu.',
      vietnamese: 'Tôi học tiếng Nhật từ thầy/cô.',
    },
    {
      japanese: '父はわたしに時計をくれました。',
      romaji: 'Chichi wa watashi ni tokei o kuremashita.',
      vietnamese: 'Bố đã cho/tặng tôi một cái đồng hồ.',
    },
    {
      japanese: '友達からプレゼントをもらいました。',
      romaji: 'Tomodachi kara purezento o moraimashita.',
      vietnamese: 'Tôi đã nhận được quà từ bạn.',
    },
  ],
};

