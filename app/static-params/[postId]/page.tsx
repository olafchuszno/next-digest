import { getPostById, getPostIds } from '@/lib/posts';
import { notFound } from 'next/navigation';

export const generateStaticParams = async () => {
  const postIds = await getPostIds();

  return postIds.map(id => ({
    postId: String(id),
  }));
};

export default async function Page({ params }: PageProps<'/static-params/[postId]'>) {
  const { postId } = await params;
  const post = await getPostById(+postId);

  if (!post) return notFound();

  return (
    <main>
      <h1>Post title: {post.title}</h1>
    </main>
  );
}
