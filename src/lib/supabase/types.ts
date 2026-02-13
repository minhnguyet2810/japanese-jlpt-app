/**
 * Types cho Supabase tables (khớp với schema.sql)
 */

export interface DbProfile {
  id: string;
  email: string | null;
  display_name: string | null;
  is_premium: boolean;
  created_at: string;
  updated_at: string;
}

export interface DbLesson {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  grammar_summary: string | null;
  content: LessonContent;
  quiz_vocab: unknown;
  quiz_grammar: unknown;
  quiz_builder: unknown;
  quiz_dialogue: unknown;
  created_at: string;
  updated_at: string;
}

export interface LessonContent {
  words: unknown[];
  sentences: unknown[];
  dialogue: unknown[];
  grammarPoints: unknown[];
}

export interface DbUserProgress {
  id: string;
  user_id: string;
  lesson_slug: string;
  games_completed: GamesCompleted;
  lesson_completed: boolean;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface GamesCompleted {
  dialogue?: boolean;
  vocab?: boolean;
  grammar?: boolean;
  builder?: boolean;
}

export interface LessonListItem {
  slug: string;
  title: string;
}
