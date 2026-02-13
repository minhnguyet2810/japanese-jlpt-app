export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

export interface VocabItem {
  id: string;
  kanji: string;
  hiragana: string;
  meaning: string;
  example: string;
  exampleMeaning: string;
  level: JLPTLevel;
  tags: string[]; // ví dụ: 'finance', 'daily', 'business'
}

export interface UserProgress {
  vocabId: string;
  status: 'new' | 'learning' | 'mastered';
  nextReview: Date;
  interval: number; // dùng cho thuật toán lặp lại ngắt quãng SRS
}
