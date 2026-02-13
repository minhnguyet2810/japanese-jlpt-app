export interface LessonWord {
  japanese: string;
  romaji: string;
  vietnamese: string;
  type: 'pronoun' | 'occupation' | 'country' | 'particle' | 'copula' | 'other';
}

export interface LessonSentence {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface Lesson1Data {
  grammarTitle: string;
  grammarPattern: string;
  grammarExplanation: string;
  words: LessonWord[];
  sentences: LessonSentence[];
}

export interface SimplePhrase {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface NumberItem {
  value: number;
  japanese: string;
  romaji: string;
  vietnamese: string;
}

// Vocab flashcard với 3 dạng chữ (Kanji / kana / romaji)
export interface TripleScriptVocab {
  main: string; // Kanji hoặc Katakana
  kana: string; // ひらがな／カタカナ
  romaji: string;
  vietnamese: string;
}

export const lesson1: Lesson1Data = {
  grammarTitle: 'Giới thiệu bản thân với 「～は～です」',
  grammarPattern: 'Noun1 は Noun2 です',
  grammarExplanation:
    'Mẫu câu cơ bản để nói “Tôi là ... / Anh là ...”. 「は」 là trợ từ chủ đề (đọc là wa), 「です」 là động từ “là” lịch sự.',
  words: [
    // Pronouns
    {
      japanese: '私',
      romaji: 'watashi',
      vietnamese: 'tôi',
      type: 'pronoun',
    },
    {
      japanese: 'あなた',
      romaji: 'anata',
      vietnamese: 'bạn',
      type: 'pronoun',
    },

    // Occupations
    {
      japanese: '学生',
      romaji: 'gakusei',
      vietnamese: 'sinh viên, học sinh',
      type: 'occupation',
    },
    {
      japanese: '先生',
      romaji: 'sensei',
      vietnamese: 'giáo viên',
      type: 'occupation',
    },
    {
      japanese: '会社員',
      romaji: 'kaishain',
      vietnamese: 'nhân viên công ty',
      type: 'occupation',
    },
    {
      japanese: '医者',
      romaji: 'isha',
      vietnamese: 'bác sĩ',
      type: 'occupation',
    },
    {
      japanese: 'エンジニア',
      romaji: 'enjinia',
      vietnamese: 'kỹ sư',
      type: 'occupation',
    },

    // Countries
    {
      japanese: 'ベトナム',
      romaji: 'Betonamu',
      vietnamese: 'Việt Nam',
      type: 'country',
    },
    {
      japanese: '日本',
      romaji: 'Nihon',
      vietnamese: 'Nhật Bản',
      type: 'country',
    },
    {
      japanese: 'アメリカ',
      romaji: 'Amerika',
      vietnamese: 'Mỹ',
      type: 'country',
    },

    // Particles & copula
    {
      japanese: 'は',
      romaji: 'wa',
      vietnamese: '(trợ từ chủ đề)',
      type: 'particle',
    },
    {
      japanese: 'です',
      romaji: 'desu',
      vietnamese: 'là (lịch sự)',
      type: 'copula',
    },
    {
      japanese: '人',
      romaji: 'jin',
      vietnamese: 'người (hậu tố quốc tịch)',
      type: 'other',
    },
  ],
  sentences: [
    {
      japanese: '私は学生です。',
      romaji: 'Watashi wa gakusei desu.',
      vietnamese: 'Tôi là sinh viên.',
    },
    {
      japanese: '私は会社員です。',
      romaji: 'Watashi wa kaishain desu.',
      vietnamese: 'Tôi là nhân viên công ty.',
    },
    {
      japanese: '私は医者です。',
      romaji: 'Watashi wa isha desu.',
      vietnamese: 'Tôi là bác sĩ.',
    },
    {
      japanese: '私はエンジニアです。',
      romaji: 'Watashi wa enjinia desu.',
      vietnamese: 'Tôi là kỹ sư.',
    },
    {
      japanese: 'あなたは先生ですか。',
      romaji: 'Anata wa sensei desu ka.',
      vietnamese: 'Bạn là giáo viên à?',
    },
    {
      japanese: '私はベトナム人です。',
      romaji: 'Watashi wa Betonamu-jin desu.',
      vietnamese: 'Tôi là người Việt Nam.',
    },
    {
      japanese: '私は日本人です。',
      romaji: 'Watashi wa Nihon-jin desu.',
      vietnamese: 'Tôi là người Nhật.',
    },
    {
      japanese: '私はアメリカ人です。',
      romaji: 'Watashi wa Amerika-jin desu.',
      vietnamese: 'Tôi là người Mỹ.',
    },
    // Giới thiệu bản thân mở rộng
    {
      japanese: '私はベトナムから来ました。',
      romaji: 'Watashi wa Betonamu kara kimashita.',
      vietnamese: 'Tôi đến từ Việt Nam.',
    },
    {
      japanese: '私はホーチミンに住んでいます。',
      romaji: 'Watashi wa Hōchimin ni sunde imasu.',
      vietnamese: 'Tôi đang sống ở Hồ Chí Minh.',
    },
    {
      japanese: '私は二十五歳です。',
      romaji: 'Watashi wa nijūgo sai desu.',
      vietnamese: 'Tôi 25 tuổi.',
    },
    {
      japanese: '私は日本語を勉強しています。',
      romaji: 'Watashi wa Nihongo o benkyō shite imasu.',
      vietnamese: 'Tôi đang học tiếng Nhật.',
    },
    {
      japanese: '私の趣味は読書です。',
      romaji: 'Watashi no shumi wa dokusho desu.',
      vietnamese: 'Sở thích của tôi là đọc sách.',
    },
    {
      japanese: '私の趣味は音楽を聞くことです。',
      romaji: 'Watashi no shumi wa ongaku o kiku koto desu.',
      vietnamese: 'Sở thích của tôi là nghe nhạc.',
    },
    {
      japanese: '将来、日本で働きたいです。',
      romaji: 'Shōrai, Nihon de hatarakitai desu.',
      vietnamese: 'Tương lai tôi muốn làm việc ở Nhật.',
    },
    {
      japanese: '将来、エンジニアになりたいです。',
      romaji: 'Shōrai, enjinia ni naritai desu.',
      vietnamese: 'Tương lai tôi muốn trở thành kỹ sư.',
    },
    {
      japanese: 'どうぞよろしくお願いします。',
      romaji: 'Dōzo yoroshiku onegai shimasu.',
      vietnamese: 'Rất mong được giúp đỡ / Rất mong được làm quen.',
    },
  ],
};

export const classroomPhrases: SimplePhrase[] = [
  {
    japanese: 'はじめましょう。',
    romaji: 'Hajimemashō.',
    vietnamese: 'Chúng ta bắt đầu nhé.',
  },
  {
    japanese: 'もう一度お願いします。',
    romaji: 'Mō ichido onegai shimasu.',
    vietnamese: 'Xin nhắc lại một lần nữa.',
  },
  {
    japanese: 'ゆっくり話してください。',
    romaji: 'Yukkuri hanashite kudasai.',
    vietnamese: 'Xin hãy nói chậm lại.',
  },
  {
    japanese: '分かりましたか。',
    romaji: 'Wakarimashita ka.',
    vietnamese: 'Bạn hiểu chưa?',
  },
  {
    japanese: '分かりません。',
    romaji: 'Wakarimasen.',
    vietnamese: 'Tôi không hiểu.',
  },
];

export const greetingPhrases: SimplePhrase[] = [
  {
    japanese: 'おはようございます。',
    romaji: 'Ohayō gozaimasu.',
    vietnamese: 'Chào buổi sáng.',
  },
  {
    japanese: 'こんにちは。',
    romaji: 'Konnichiwa.',
    vietnamese: 'Xin chào (buổi trưa/chiều).',
  },
  {
    japanese: 'こんばんは。',
    romaji: 'Konbanwa.',
    vietnamese: 'Chào buổi tối.',
  },
  {
    japanese: 'ありがとうございます。',
    romaji: 'Arigatō gozaimasu.',
    vietnamese: 'Xin cảm ơn.',
  },
  {
    japanese: 'すみません。',
    romaji: 'Sumimasen.',
    vietnamese: 'Xin lỗi / làm phiền.',
  },
  {
    japanese: 'はじめまして。',
    romaji: 'Hajimemashite.',
    vietnamese: 'Rất hân hạnh được gặp bạn.',
  },
  {
    japanese: 'どうぞよろしくお願いします。',
    romaji: 'Dōzo yoroshiku onegai shimasu.',
    vietnamese: 'Mong được bạn giúp đỡ / hợp tác tốt.',
  },
  {
    japanese: 'いってきます。',
    romaji: 'Ittekimasu.',
    vietnamese: 'Em/con/anh/chị đi đây (nói khi rời nhà).',
  },
  {
    japanese: 'いってらっしゃい。',
    romaji: 'Itterasshai.',
    vietnamese: 'Đi nhé / đi mạnh giỏi nhé (người ở lại nói).',
  },
  {
    japanese: 'ただいま。',
    romaji: 'Tadaima.',
    vietnamese: 'Tôi về rồi đây.',
  },
  {
    japanese: 'おかえりなさい。',
    romaji: 'Okaerinasai.',
    vietnamese: 'Chào mừng về nhà.',
  },
  {
    japanese: 'おやすみなさい。',
    romaji: 'Oyasuminasai.',
    vietnamese: 'Chúc ngủ ngon.',
  },
  {
    japanese: 'じゃあ、また。',
    romaji: 'Jā, mata.',
    vietnamese: 'Vậy nhé, hẹn gặp lại.',
  },
  {
    japanese: 'また明日。',
    romaji: 'Mata ashita.',
    vietnamese: 'Hẹn gặp lại ngày mai.',
  },
];

export const basicNumbers: NumberItem[] = [
  { value: 0, japanese: 'れい／ゼロ', romaji: 'rei / zero', vietnamese: 'không' },
  { value: 1, japanese: '一（いち）', romaji: 'ichi', vietnamese: 'một' },
  { value: 2, japanese: '二（に）', romaji: 'ni', vietnamese: 'hai' },
  { value: 3, japanese: '三（さん）', romaji: 'san', vietnamese: 'ba' },
  { value: 4, japanese: '四（よん／し）', romaji: 'yon / shi', vietnamese: 'bốn' },
  { value: 5, japanese: '五（ご）', romaji: 'go', vietnamese: 'năm' },
  { value: 6, japanese: '六（ろく）', romaji: 'roku', vietnamese: 'sáu' },
  { value: 7, japanese: '七（なな／しち）', romaji: 'nana / shichi', vietnamese: 'bảy' },
  { value: 8, japanese: '八（はち）', romaji: 'hachi', vietnamese: 'tám' },
  { value: 9, japanese: '九（きゅう／く）', romaji: 'kyū / ku', vietnamese: 'chín' },
  { value: 10, japanese: '十（じゅう）', romaji: 'jū', vietnamese: 'mười' },
];

export const lesson1TripleVocab: TripleScriptVocab[] = [
  {
    main: '学生',
    kana: 'がくせい',
    romaji: 'gakusei',
    vietnamese: 'sinh viên, học sinh',
  },
  {
    main: '先生',
    kana: 'せんせい',
    romaji: 'sensei',
    vietnamese: 'giáo viên',
  },
  {
    main: '会社員',
    kana: 'かいしゃいん',
    romaji: 'kaishain',
    vietnamese: 'nhân viên công ty',
  },
  {
    main: '医者',
    kana: 'いしゃ',
    romaji: 'isha',
    vietnamese: 'bác sĩ',
  },
  {
    main: 'エンジニア',
    kana: 'エンジニア',
    romaji: 'enjinia',
    vietnamese: 'kỹ sư',
  },
  {
    main: '銀行員',
    kana: 'ぎんこういん',
    romaji: 'ginkōin',
    vietnamese: 'nhân viên ngân hàng',
  },
  {
    main: '看護師',
    kana: 'かんごし',
    romaji: 'kangoshi',
    vietnamese: 'y tá, điều dưỡng',
  },
  {
    main: '研究者',
    kana: 'けんきゅうしゃ',
    romaji: 'kenkyūsha',
    vietnamese: 'nhà nghiên cứu',
  },
  {
    main: '高校生',
    kana: 'こうこうせい',
    romaji: 'kōkōsei',
    vietnamese: 'học sinh cấp 3',
  },
  {
    main: '主婦',
    kana: 'しゅふ',
    romaji: 'shufu',
    vietnamese: 'nội trợ',
  },
  {
    main: '社長',
    kana: 'しゃちょう',
    romaji: 'shachō',
    vietnamese: 'giám đốc, chủ tịch công ty',
  },
];

// Đại từ nhân xưng + tính từ sở hữu cơ bản
export const lesson1PronounVocab: TripleScriptVocab[] = [
  {
    main: '私',
    kana: 'わたし',
    romaji: 'watashi',
    vietnamese: 'tôi',
  },
  {
    main: 'あなた',
    kana: 'あなた',
    romaji: 'anata',
    vietnamese: 'bạn',
  },
  {
    main: '彼',
    kana: 'かれ',
    romaji: 'kare',
    vietnamese: 'anh ấy',
  },
  {
    main: '彼女',
    kana: 'かのじょ',
    romaji: 'kanojo',
    vietnamese: 'cô ấy',
  },
  {
    main: '私たち',
    kana: 'わたしたち',
    romaji: 'watashitachi',
    vietnamese: 'chúng tôi / chúng ta',
  },
  {
    main: 'あなたたち',
    kana: 'あなたたち',
    romaji: 'anatatachi',
    vietnamese: 'các bạn',
  },
  {
    main: '彼ら',
    kana: 'かれら',
    romaji: 'karera',
    vietnamese: 'họ (nam hoặc hỗn hợp)',
  },
  {
    main: '彼女たち',
    kana: 'かのじょたち',
    romaji: 'kanojotachi',
    vietnamese: 'họ (nữ)',
  },
  {
    main: '私の',
    kana: 'わたしの',
    romaji: 'watashi no',
    vietnamese: 'của tôi',
  },
  {
    main: 'あなたの',
    kana: 'あなたの',
    romaji: 'anata no',
    vietnamese: 'của bạn',
  },
  {
    main: '彼の',
    kana: 'かれの',
    romaji: 'kare no',
    vietnamese: 'của anh ấy',
  },
  {
    main: '彼女の',
    kana: 'かのじょの',
    romaji: 'kanojo no',
    vietnamese: 'của cô ấy',
  },
  {
    main: '私たちの',
    kana: 'わたしたちの',
    romaji: 'watashitachi no',
    vietnamese: 'của chúng tôi / chúng ta',
  },
  {
    main: '彼らの',
    kana: 'かれらの',
    romaji: 'karera no',
    vietnamese: 'của họ',
  },
];

// Từ vựng gia đình cơ bản
export const familyVocab: TripleScriptVocab[] = [
  {
    main: '家族',
    kana: 'かぞく',
    romaji: 'kazoku',
    vietnamese: 'gia đình',
  },
  {
    main: '父',
    kana: 'ちち',
    romaji: 'chichi',
    vietnamese: 'bố (khi nói về bố mình)',
  },
  {
    main: '母',
    kana: 'はは',
    romaji: 'haha',
    vietnamese: 'mẹ (khi nói về mẹ mình)',
  },
  {
    main: 'お父さん',
    kana: 'おとうさん',
    romaji: 'otōsan',
    vietnamese: 'bố (cách gọi lịch sự / bố người khác)',
  },
  {
    main: 'お母さん',
    kana: 'おかあさん',
    romaji: 'okāsan',
    vietnamese: 'mẹ (cách gọi lịch sự / mẹ người khác)',
  },
  {
    main: '兄',
    kana: 'あに',
    romaji: 'ani',
    vietnamese: 'anh trai (khi nói về anh mình)',
  },
  {
    main: '姉',
    kana: 'あね',
    romaji: 'ane',
    vietnamese: 'chị gái (khi nói về chị mình)',
  },
  {
    main: '弟',
    kana: 'おとうと',
    romaji: 'otōto',
    vietnamese: 'em trai',
  },
  {
    main: '妹',
    kana: 'いもうと',
    romaji: 'imōto',
    vietnamese: 'em gái',
  },
];


export interface PatternExample {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface CountryInfo {
  countryJa: string;
  personJa: string;
  languageJa: string;
  countryRomaji: string;
  personRomaji: string;
  languageRomaji: string;
  countryVi: string;
  personVi: string;
  languageVi: string;
}

export const patternExamples: PatternExample[] = [
  // Khẳng định
  {
    japanese: 'リンさんはデザイナーです。',
    romaji: 'Rin-san wa dezainā desu.',
    vietnamese: 'Chị Linh là nhà thiết kế.',
  },
  // Phủ định
  {
    japanese: 'ナムさんは学生ではありません。',
    romaji: 'Namu-san wa gakusei dewa arimasen.',
    vietnamese: 'Anh Nam không phải là sinh viên.',
  },
  // Nghi vấn + trả lời
  {
    japanese: 'ハナさんは日本人ですか。',
    romaji: 'Hana-san wa Nihon-jin desu ka.',
    vietnamese: 'Bạn Hana là người Nhật phải không?',
  },
  {
    japanese: 'はい、そうです。',
    romaji: 'Hai, sō desu.',
    vietnamese: 'Vâng, đúng vậy.',
  },
  {
    japanese: 'いいえ、ちがいます。',
    romaji: 'Īe, chigaimasu.',
    vietnamese: 'Không, không phải.',
  },
];

export const noPatternExamples: PatternExample[] = [
  {
    japanese: 'グリーンテックの社員です。',
    romaji: 'Gurīn Tekku no shain desu.',
    vietnamese: 'Là nhân viên của công ty GreenTech.',
  },
  {
    japanese: 'アジア大学の学生です。',
    romaji: 'Ajia daigaku no gakusei desu.',
    vietnamese: 'Là sinh viên trường Đại học Á Châu.',
  },
];

export const countryInfos: CountryInfo[] = [
  {
    countryJa: 'アメリカ',
    personJa: 'アメリカ人',
    languageJa: '英語',
    countryRomaji: 'Amerika',
    personRomaji: 'Amerika-jin',
    languageRomaji: 'eigo',
    countryVi: 'Mỹ',
    personVi: 'người Mỹ',
    languageVi: 'tiếng Anh',
  },
  {
    countryJa: 'イギリス',
    personJa: 'イギリス人',
    languageJa: '英語',
    countryRomaji: 'Igirisu',
    personRomaji: 'Igirisu-jin',
    languageRomaji: 'eigo',
    countryVi: 'Anh',
    personVi: 'người Anh',
    languageVi: 'tiếng Anh',
  },
  {
    countryJa: 'ベトナム',
    personJa: 'ベトナム人',
    languageJa: 'ベトナム語',
    countryRomaji: 'Betonamu',
    personRomaji: 'Betonamu-jin',
    languageRomaji: 'Betonamu-go',
    countryVi: 'Việt Nam',
    personVi: 'người Việt Nam',
    languageVi: 'tiếng Việt',
  },
  {
    countryJa: '日本',
    personJa: '日本人',
    languageJa: '日本語',
    countryRomaji: 'Nihon',
    personRomaji: 'Nihon-jin',
    languageRomaji: 'Nihon-go',
    countryVi: 'Nhật Bản',
    personVi: 'người Nhật',
    languageVi: 'tiếng Nhật',
  },
  {
    countryJa: '韓国',
    personJa: '韓国人',
    languageJa: '韓国語',
    countryRomaji: 'Kankoku',
    personRomaji: 'Kankoku-jin',
    languageRomaji: 'Kankoku-go',
    countryVi: 'Hàn Quốc',
    personVi: 'người Hàn Quốc',
    languageVi: 'tiếng Hàn',
  },
  {
    countryJa: '中国',
    personJa: '中国人',
    languageJa: '中国語',
    countryRomaji: 'Chūgoku',
    personRomaji: 'Chūgoku-jin',
    languageRomaji: 'Chūgoku-go',
    countryVi: 'Trung Quốc',
    personVi: 'người Trung Quốc',
    languageVi: 'tiếng Trung',
  },
  {
    countryJa: 'フランス',
    personJa: 'フランス人',
    languageJa: 'フランス語',
    countryRomaji: 'Furansu',
    personRomaji: 'Furansu-jin',
    languageRomaji: 'Furansu-go',
    countryVi: 'Pháp',
    personVi: 'người Pháp',
    languageVi: 'tiếng Pháp',
  },
  {
    countryJa: 'ドイツ',
    personJa: 'ドイツ人',
    languageJa: 'ドイツ語',
    countryRomaji: 'Doitsu',
    personRomaji: 'Doitsu-jin',
    languageRomaji: 'Doitsu-go',
    countryVi: 'Đức',
    personVi: 'người Đức',
    languageVi: 'tiếng Đức',
  },
  {
    countryJa: 'オーストラリア',
    personJa: 'オーストラリア人',
    languageJa: '英語',
    countryRomaji: 'Ōsutoraria',
    personRomaji: 'Ōsutoraria-jin',
    languageRomaji: 'eigo',
    countryVi: 'Úc',
    personVi: 'người Úc',
    languageVi: 'tiếng Anh',
  },
  {
    countryJa: 'カナダ',
    personJa: 'カナダ人',
    languageJa: '英語／フランス語',
    countryRomaji: 'Kanada',
    personRomaji: 'Kanada-jin',
    languageRomaji: 'eigo / Furansu-go',
    countryVi: 'Canada',
    personVi: 'người Canada',
    languageVi: 'tiếng Anh / tiếng Pháp',
  },
  {
    countryJa: 'シンガポール',
    personJa: 'シンガポール人',
    languageJa: '英語',
    countryRomaji: 'Shingapōru',
    personRomaji: 'Shingapōru-jin',
    languageRomaji: 'eigo',
    countryVi: 'Singapore',
    personVi: 'người Singapore',
    languageVi: 'tiếng Anh (và các ngôn ngữ khác)',
  },
  {
    countryJa: 'タイ',
    personJa: 'タイ人',
    languageJa: 'タイ語',
    countryRomaji: 'Tai',
    personRomaji: 'Tai-jin',
    languageRomaji: 'Tai-go',
    countryVi: 'Thái Lan',
    personVi: 'người Thái',
    languageVi: 'tiếng Thái',
  },
];