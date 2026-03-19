// app/post/[postId]/page.tsx
import { LikeButton } from '@/components/ui';
import { getPostById } from '@/lib';

// This page is rendered on the server
export default async function PostPage({ params }: PageProps<'/post/[postId]'>) {
  const { postId } = await params;
  const post = await getPostById(+postId);

  return (
    <>
      <h1>{post.title}</h1>
      {/* LikeButton is a client component */}
      <LikeButton initialLikes={post.likes} />
    </>
  );
}
