import { LessonFromDb } from '@/components/LessonFromDb';

type Props = { params: Promise<{ slug: string }> };

export default async function LessonSlugPage({ params }: Props) {
  const { slug } = await params;
  return <LessonFromDb slug={slug} />;
}
