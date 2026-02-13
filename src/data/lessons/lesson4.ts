export interface Lesson4Word {
  japanese: string;
  kana: string;
  romaji: string;
  vietnamese: string;
  category: 'timeCore' | 'dayPart' | 'weekday' | 'frequency' | 'question';
}

export interface Lesson4Sentence {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface Lesson4Data {
  title: string;
  description: string;
  grammarSummary: string;
  words: Lesson4Word[];
  sentences: Lesson4Sentence[];
}

export const lesson4: Lesson4Data = {
  title: 'Bài 4: Thời gian & lịch sinh hoạt',
  description:
    'Hỏi và nói giờ giấc trong ngày với ～時／～分／半, phân biệt sáng・trưa・tối, và nói lịch sinh hoạt hằng ngày.',
  grammarSummary:
    'Mẫu chính: 今～時です。／～時～分です。／～時半です。／～時から～時までです。／何時・何分.',
  words: [
    // Core time words
    {
      japanese: '～時',
      kana: '～じ',
      romaji: '~ji',
      vietnamese: 'giờ',
      category: 'timeCore',
    },
    {
      japanese: '～分',
      kana: '～ふん／～ぷん',
      romaji: '~fun / ~pun',
      vietnamese: 'phút',
      category: 'timeCore',
    },
    {
      japanese: '半',
      kana: 'はん',
      romaji: 'han',
      vietnamese: 'rưỡi (30 phút)',
      category: 'timeCore',
    },
    {
      japanese: '何時',
      kana: 'なんじ',
      romaji: 'nanji',
      vietnamese: 'mấy giờ?',
      category: 'question',
    },
    {
      japanese: '何分',
      kana: 'なんぷん',
      romaji: 'nanpun',
      vietnamese: 'mấy phút?',
      category: 'question',
    },

    // Phân chia buổi
    {
      japanese: '午前',
      kana: 'ごぜん',
      romaji: 'gozen',
      vietnamese: 'buổi sáng, trước 12 giờ trưa (AM)',
      category: 'dayPart',
    },
    {
      japanese: '午後',
      kana: 'ごご',
      romaji: 'gogo',
      vietnamese: 'buổi chiều, sau 12 giờ trưa (PM)',
      category: 'dayPart',
    },
    {
      japanese: '朝',
      kana: 'あさ',
      romaji: 'asa',
      vietnamese: 'buổi sáng',
      category: 'dayPart',
    },
    {
      japanese: '昼',
      kana: 'ひる',
      romaji: 'hiru',
      vietnamese: 'buổi trưa',
      category: 'dayPart',
    },
    {
      japanese: '晩（夜）',
      kana: 'ばん／よる',
      romaji: 'ban / yoru',
      vietnamese: 'buổi tối, ban đêm',
      category: 'dayPart',
    },

    // Ngày trong tuần, tần suất
    {
      japanese: '月曜日',
      kana: 'げつようび',
      romaji: 'getsuyōbi',
      vietnamese: 'thứ hai',
      category: 'weekday',
    },
    {
      japanese: '火曜日',
      kana: 'かようび',
      romaji: 'kayōbi',
      vietnamese: 'thứ ba',
      category: 'weekday',
    },
    {
      japanese: '水曜日',
      kana: 'すいようび',
      romaji: 'suiyōbi',
      vietnamese: 'thứ tư',
      category: 'weekday',
    },
    {
      japanese: '木曜日',
      kana: 'もくようび',
      romaji: 'mokuyōbi',
      vietnamese: 'thứ năm',
      category: 'weekday',
    },
    {
      japanese: '金曜日',
      kana: 'きんようび',
      romaji: 'kinyōbi',
      vietnamese: 'thứ sáu',
      category: 'weekday',
    },
    {
      japanese: '土曜日',
      kana: 'どようび',
      romaji: 'doyōbi',
      vietnamese: 'thứ bảy',
      category: 'weekday',
    },
    {
      japanese: '日曜日',
      kana: 'にちようび',
      romaji: 'nichiyōbi',
      vietnamese: 'chủ nhật',
      category: 'weekday',
    },
    {
      japanese: '毎朝',
      kana: 'まいあさ',
      romaji: 'maiasa',
      vietnamese: 'mỗi sáng',
      category: 'frequency',
    },
    {
      japanese: '毎晩',
      kana: 'まいばん',
      romaji: 'maiban',
      vietnamese: 'mỗi tối',
      category: 'frequency',
    },
    {
      japanese: '毎日',
      kana: 'まいにち',
      romaji: 'mainichi',
      vietnamese: 'mỗi ngày',
      category: 'frequency',
    },
  ],
  sentences: [
    {
      japanese: '今は９時です。',
      romaji: 'Ima wa ku-ji desu.',
      vietnamese: 'Bây giờ là 9 giờ.',
    },
    {
      japanese: '授業は９時半から１２時までです。',
      romaji: 'Jugyō wa ku-ji han kara jū-ni-ji made desu.',
      vietnamese: 'Giờ học từ 9 giờ rưỡi đến 12 giờ.',
    },
    {
      japanese: '昼休みは１２時から１時までです。',
      romaji: 'Hiruyasumi wa jū-ni-ji kara ichi-ji made desu.',
      vietnamese: 'Giờ nghỉ trưa từ 12 giờ đến 1 giờ.',
    },
    {
      japanese: 'わたしは毎朝７時に起きます。',
      romaji: 'Watashi wa maiasa shichi-ji ni okimasu.',
      vietnamese: 'Tôi dậy lúc 7 giờ mỗi sáng.',
    },
    {
      japanese: '会社は９時から５時までです。',
      romaji: 'Kaisha wa ku-ji kara go-ji made desu.',
      vietnamese: 'Công ty làm việc từ 9 giờ đến 5 giờ.',
    },
  ],
};

