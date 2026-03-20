import { getPostById } from '@/lib/posts';
import { notFound } from 'next/navigation';

export default async function Page({ params }: PageProps<'/not-found-state/[postId]'>) {
  const { postId } = await params;

  const post = await getPostById(+postId);

  if (!post) return notFound();

  return <div>Post title: {post.title}</div>;
}
