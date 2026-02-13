/**
 * POST /api/admin/lessons — Publish bài học lên Supabase (CMS).
 * Header: x-admin-secret: <ADMIN_SECRET>
 * Body: level, lessonNumber, title, description, grammarSummary, vocab, grammar, examples (JSON/MD strings)
 */
import { NextResponse } from 'next/server';
import { createSupabaseAdminClient } from '@/lib/supabase/admin';

const ADMIN_SECRET = process.env.ADMIN_SECRET;

function parseJsonOrEmpty<T>(raw: unknown): T {
  if (raw == null || raw === '') return [] as T;
  if (typeof raw === 'string') {
    try {
      return JSON.parse(raw) as T;
    } catch {
      return [] as T;
    }
  }
  if (Array.isArray(raw)) return raw as T;
  if (typeof raw === 'object') return raw as T;
  return [] as T;
}

export async function POST(request: Request) {
  const secret = request.headers.get('x-admin-secret');
  if (!ADMIN_SECRET || secret !== ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const level = (body.level ?? 'N5') as string;
    const lessonNumber = Number(body.lessonNumber);
    if (!Number.isInteger(lessonNumber) || lessonNumber < 0) {
      return NextResponse.json({ error: 'lessonNumber phải là số nguyên >= 0' }, { status: 400 });
    }

    const slug = `lesson${lessonNumber}`;
    const title = (body.title ?? `Bài ${lessonNumber}`).trim();
    const description = (body.description ?? '').trim();
    const grammarSummary = (body.grammarSummary ?? body.grammar_summary ?? '').trim();
    const vocabRaw = body.vocab;
    const grammarRaw = body.grammar;
    const examplesRaw = body.examples;

    const words = parseJsonOrEmpty<unknown[]>(vocabRaw);
    const grammarPoints = parseJsonOrEmpty<unknown[]>(grammarRaw);
    const sentences = parseJsonOrEmpty<unknown[]>(examplesRaw);

    const content = {
      words,
      sentences,
      dialogue: [],
      grammarPoints,
    };

    const quiz_vocab = Array.isArray(body.quiz_vocab) ? body.quiz_vocab : [];
    const quiz_grammar = Array.isArray(body.quiz_grammar) ? body.quiz_grammar : [];
    const quiz_builder = Array.isArray(body.quiz_builder) ? body.quiz_builder : [];
    const quiz_dialogue = Array.isArray(body.quiz_dialogue) ? body.quiz_dialogue : [];

    const supabase = createSupabaseAdminClient();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Database type chưa khai báo lessons đủ
    const { data, error } = await (supabase as any)
      .from('lessons')
      .upsert(
        {
          slug,
          title,
          description: description || null,
          grammar_summary: grammarSummary || null,
          content,
          quiz_vocab,
          quiz_grammar,
          quiz_builder,
          quiz_dialogue,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'slug' }
      )
      .select('id, slug, title')
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true, lesson: data });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
