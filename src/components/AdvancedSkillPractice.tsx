'use client';

import { useMemo, useState } from 'react';
import type { StaticLessonData } from '@/data/lessons/lessonTypes';

interface AdvancedSkillPracticeProps {
  lessonCode: string;
  lesson: StaticLessonData;
  topicVi: string;
  grammarFocus: string[];
  onSpeak: (text: string) => void;
}

interface ListeningItem {
  id: number;
  japanese: string;
  romaji: string;
  questionVi: string;
  options: string[];
  correctIndex: number;
  explanationVi: string;
}

function buildListeningItems(
  lessonCode: string,
  lesson: StaticLessonData,
  topicVi: string,
  grammarFocus: string[]
): ListeningItem[] {
  const source = lesson.sentences.slice(0, 3);
  return source.map((s, idx) => {
    const distractors = lesson.sentences
      .filter((x) => x.japanese !== s.japanese)
      .map((x) => x.vietnamese)
      .slice(0, 2);

    while (distractors.length < 2) {
      distractors.push(`(Nhiễu) Nội dung khác của ${lessonCode} về ${topicVi}.`);
    }

    const options = [s.vietnamese, ...distractors];

    return {
      id: idx + 1,
      japanese: s.japanese,
      romaji: s.romaji,
      questionVi: `Nghe câu và chọn bản dịch đúng nhất (${lessonCode}).`,
      options,
      correctIndex: 0,
      explanationVi:
        `Đáp án đúng là câu mô tả đúng nghĩa gốc. Khi nghe, tập trung các từ khóa ngữ pháp trong bài: ` +
        `${grammarFocus.join(', ')}. Sau đó đối chiếu chủ ngữ, hành động và sắc thái câu.`,
    };
  });
}

function buildSpeakingModel(lesson: StaticLessonData, grammarFocus: string[]): string {
  const lines = lesson.dialogue.slice(0, 2).map((d) => d.japanese);
  const fallback = lesson.sentences[0]?.japanese ?? '';
  const base = lines.length > 0 ? lines.join(' ') : fallback;
  return `${base}。${grammarFocus[0] ? `（${grammarFocus[0]}を意識して話す）` : ''}`;
}

export default function AdvancedSkillPractice({
  lessonCode,
  lesson,
  topicVi,
  grammarFocus,
  onSpeak,
}: AdvancedSkillPracticeProps) {
  const [listeningSelected, setListeningSelected] = useState<Record<number, number>>({});
  const [speakingOpen, setSpeakingOpen] = useState<Record<number, boolean>>({});
  const [writingOpen, setWritingOpen] = useState<Record<number, boolean>>({});

  const listeningItems = useMemo(
    () => buildListeningItems(lessonCode, lesson, topicVi, grammarFocus),
    [lessonCode, lesson, topicVi, grammarFocus]
  );

  const speakingTasks = useMemo(
    () => [
      {
        id: 1,
        title: 'Task 1: Shadowing + biến đổi',
        prompt:
          'Nghe 1 câu mẫu, nhắc lại 2 lần, sau đó tự đổi 1 chi tiết (thời gian/địa điểm/chủ thể) nhưng vẫn giữ đúng mẫu ngữ pháp.',
        mustUse: grammarFocus.slice(0, 2),
        sampleJp: buildSpeakingModel(lesson, grammarFocus),
        sampleVi:
          'Nói lại câu mẫu rồi đổi dữ kiện nhỏ để tạo câu mới, giúp bạn phản xạ đúng cấu trúc.',
      },
      {
        id: 2,
        title: 'Task 2: Role-play hội thoại',
        prompt:
          'Đóng vai A/B trong bối cảnh của bài. Mỗi vai nói tối thiểu 2 câu, có mở đầu, phản hồi và chốt ý.',
        mustUse: grammarFocus.slice(0, 3),
        sampleJp: lesson.dialogue.slice(0, 4).map((x) => x.japanese).join('\n'),
        sampleVi:
          'Dùng đúng ngữ cảnh bài học, chú ý ngữ điệu và liên kết câu tự nhiên thay vì nói rời rạc.',
      },
    ],
    [lesson, grammarFocus]
  );

  const writingTasks = useMemo(
    () => [
      {
        id: 1,
        title: 'Task 1: Viết đoạn ngắn theo mẫu bài',
        prompt:
          `Viết 5-7 câu về chủ đề "${topicVi}", bắt buộc dùng tối thiểu 2 mẫu ngữ pháp của bài.`,
        rubric: [
          'Đúng ngữ pháp mục tiêu (4 điểm)',
          'Dùng từ vựng đúng ngữ cảnh bài (3 điểm)',
          'Mạch ý rõ ràng, liên kết tự nhiên (2 điểm)',
          'Ít lỗi chính tả/kana/kanji cơ bản (1 điểm)',
        ],
        sample:
          lesson.sentences.slice(0, 3).map((s) => s.japanese).join('\n') ||
          '（Viết theo câu mẫu của bài）',
        explain:
          `Bài mẫu ưu tiên đúng khung ngữ pháp ${grammarFocus.join(', ')}. ` +
          'Bạn nên tự thay từ khóa theo tình huống của mình để nhớ sâu hơn.',
      },
      {
        id: 2,
        title: 'Task 2: Viết hội thoại ứng dụng',
        prompt:
          'Viết hội thoại 4 lượt lời (A-B-A-B), trong đó có 1 câu hỏi và 1 câu phản hồi mở rộng.',
        rubric: [
          'Đúng dạng câu hỏi/trả lời (3 điểm)',
          'Áp dụng đúng ngữ pháp trọng tâm (3 điểm)',
          'Tự nhiên và bám ngữ cảnh (2 điểm)',
          'Có liên kết ý hợp lý (2 điểm)',
        ],
        sample:
          lesson.dialogue.slice(0, 4).map((d) => `${d.speaker}: ${d.japanese}`).join('\n') ||
          'A: ...\nB: ...\nA: ...\nB: ...',
        explain:
          'Cần có câu hỏi rõ thông tin cần hỏi, câu trả lời đúng trọng tâm, và một câu mở rộng để hội thoại không cụt.',
      },
    ],
    [lesson, topicVi, grammarFocus]
  );

  return (
    <>
      <section className="card practice-card">
        <div className="card-header">
          <h2>Listening nâng cao – {lessonCode}</h2>
          <p className="section-caption">Nghe, chọn đáp án đúng và xem giải thích chi tiết.</p>
        </div>
        <div className="card-body practice-body">
          {listeningItems.map((item) => {
            const selected = listeningSelected[item.id];
            return (
              <div key={item.id} style={{ marginBottom: '1rem' }}>
                <p className="practice-question">
                  <strong>Câu {item.id}.</strong> {item.questionVi}
                </p>
                <div className="practice-actions" style={{ justifyContent: 'flex-start' }}>
                  <button type="button" className="listen-button" onClick={() => onSpeak(item.japanese)}>
                    🔊 Nghe audio
                  </button>
                </div>
                <p className="romaji" style={{ marginTop: '0.35rem' }}>
                  Gợi ý đọc: {item.romaji}
                </p>
                <div className="practice-options">
                  {item.options.map((opt, idx) => {
                    const isCorrect = idx === item.correctIndex;
                    const isSelected = selected === idx;
                    const className =
                      'practice-option' +
                      (selected != null
                        ? isSelected && isCorrect
                          ? ' correct'
                          : isSelected && !isCorrect
                          ? ' wrong'
                          : ''
                        : '');
                    return (
                      <button
                        key={`${item.id}-${opt}`}
                        type="button"
                        className={className}
                        onClick={() =>
                          setListeningSelected((prev) => ({
                            ...prev,
                            [item.id]: idx,
                          }))
                        }
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {selected != null && (
                  <div
                    className="grammar-note"
                    style={{
                      marginTop: '0.5rem',
                      padding: '0.5rem 0.75rem',
                      background: '#f0f9ff',
                      borderRadius: '6px',
                      borderLeft: '3px solid #0ea5e9',
                    }}
                  >
                    <strong>Đáp án:</strong> {item.options[item.correctIndex]}
                    <br />
                    <strong>Giải thích chi tiết:</strong> {item.explanationVi}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="card practice-card">
        <div className="card-header">
          <h2>Speaking chuyên sâu – {lessonCode}</h2>
          <p className="section-caption">Mỗi task có bài mẫu và hướng dẫn chấm chi tiết.</p>
        </div>
        <div className="card-body practice-body">
          {speakingTasks.map((task) => {
            const open = Boolean(speakingOpen[task.id]);
            return (
              <div key={task.id} style={{ marginBottom: '1rem' }}>
                <h3 className="grammar-subtitle">{task.title}</h3>
                <p className="grammar-note">{task.prompt}</p>
                <ul className="grammar-list">
                  {task.mustUse.map((x) => (
                    <li key={x}>Bắt buộc dùng: {x}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() =>
                    setSpeakingOpen((prev) => ({
                      ...prev,
                      [task.id]: !open,
                    }))
                  }
                >
                  {open ? 'Ẩn bài mẫu' : 'Xem bài mẫu + giải thích'}
                </button>
                {open && (
                  <div
                    className="grammar-note"
                    style={{
                      marginTop: '0.6rem',
                      padding: '0.6rem 0.75rem',
                      background: '#ecfeff',
                      borderRadius: '6px',
                      borderLeft: '3px solid #14b8a6',
                    }}
                  >
                    <div className="jp" style={{ whiteSpace: 'pre-wrap' }}>
                      {task.sampleJp}
                    </div>
                    <div className="vi" style={{ marginTop: '0.35rem' }}>
                      {task.sampleVi}
                    </div>
                    <p style={{ marginTop: '0.35rem' }}>
                      <strong>Cách tự chấm:</strong> đúng mẫu ngữ pháp, phát âm rõ, tốc độ đều, phản hồi đúng ngữ cảnh.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="card practice-card">
        <div className="card-header">
          <h2>Writing chi tiết – {lessonCode}</h2>
          <p className="section-caption">Có tiêu chí chấm và bài giải mẫu để đối chiếu.</p>
        </div>
        <div className="card-body practice-body">
          {writingTasks.map((task) => {
            const open = Boolean(writingOpen[task.id]);
            return (
              <div key={task.id} style={{ marginBottom: '1rem' }}>
                <h3 className="grammar-subtitle">{task.title}</h3>
                <p className="grammar-note">{task.prompt}</p>
                <ul className="grammar-list">
                  {task.rubric.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() =>
                    setWritingOpen((prev) => ({
                      ...prev,
                      [task.id]: !open,
                    }))
                  }
                >
                  {open ? 'Ẩn bài giải mẫu' : 'Xem bài giải mẫu chi tiết'}
                </button>
                {open && (
                  <div
                    className="grammar-note"
                    style={{
                      marginTop: '0.6rem',
                      padding: '0.6rem 0.75rem',
                      background: '#fefce8',
                      borderRadius: '6px',
                      borderLeft: '3px solid #eab308',
                    }}
                  >
                    <div className="jp" style={{ whiteSpace: 'pre-wrap' }}>
                      {task.sample}
                    </div>
                    <p style={{ marginTop: '0.4rem' }}>
                      <strong>Giải thích chi tiết:</strong> {task.explain}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

