/**
 * Minimal Supabase Database types (khớp schema.sql).
 * Có thể thay bằng codegen: npx supabase gen types typescript --project-id <id> > src/lib/supabase/database.types.ts
 */
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string | null;
          display_name: string | null;
          is_premium: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['profiles']['Row'], 'created_at' | 'updated_at'> & {
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>;
      };
      lessons: {
        Row: {
          id: string;
          slug: string;
          title: string;
          description: string | null;
          grammar_summary: string | null;
          content: Record<string, unknown>;
          quiz_vocab: unknown;
          quiz_grammar: unknown;
          quiz_builder: unknown;
          quiz_dialogue: unknown;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['lessons']['Row'], 'id' | 'created_at' | 'updated_at'> & {
          id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['lessons']['Insert']>;
      };
      user_progress: {
        Row: {
          id: string;
          user_id: string;
          lesson_slug: string;
          games_completed: Record<string, unknown>;
          lesson_completed: boolean;
          completed_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['user_progress']['Row'], 'id' | 'created_at' | 'updated_at'> & {
          id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['user_progress']['Insert']>;
      };
    };
  };
}
