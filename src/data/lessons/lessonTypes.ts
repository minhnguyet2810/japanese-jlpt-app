/**
 * Kiểu dùng chung cho bài học tĩnh (lesson14+), API dùng để trả về JSON.
 */
export interface StaticLessonWord {
  japanese: string;
  kana: string;
  romaji: string;
  vietnamese: string;
  category: string;
}

export interface StaticLessonSentence {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface StaticLessonDialogueTurn {
  speaker: string;
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface StaticLessonGrammarPoint {
  title: string;
  body: string;
  examples: string[];
  note?: string;
}

export interface StaticLessonData {
  title: string;
  description: string;
  grammarSummary: string;
  words: StaticLessonWord[];
  sentences: StaticLessonSentence[];
  dialogue: StaticLessonDialogueTurn[];
  grammarPoints: StaticLessonGrammarPoint[];
}
