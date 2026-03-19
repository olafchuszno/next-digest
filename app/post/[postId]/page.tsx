// app/post/[postId]/page.tsx
import { LikeButton } from '@/components/ui';
import { LikeButtonWithUpdate } from '@/components/ui/LikeButtonWithUpdate';
import { LikeButtonWithUpdateFormAction } from '@/components/ui/LikeButtonWithUpdateFormAction';
import { getPostById } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { ServerLikeButtonWithFormAction } from './ServerLikeButtonWithFormAction';
import { ServerLikeButtonWithFormActionAndSpinner } from './ServerLikeButtonWithFormActionAndSpinner';

// This page is rendered on the server
export default async function PostPage({ params }: PageProps<'/post/[postId]'>) {
  const { postId } = await params;
  const post = await getPostById(+postId);

  if (!post) return notFound();

  return (
    <main className="server-border server-text">
      <h1>{post.title}</h1>
      {/* LikeButtons are client component */}
      <div className="flex gap-2">
        <LikeButton post={post} />
        <LikeButtonWithUpdate post={post} />
        <LikeButtonWithUpdateFormAction post={post} />
        <ServerLikeButtonWithFormAction post={post} />
        <ServerLikeButtonWithFormActionAndSpinner post={post} />
      </div>
    </main>
  );
}
