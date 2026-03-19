// app/post/[postId]/page.tsx
import { LikeButton } from '@/components/ui';
import { getPostById } from '@/lib';

export default async function PostPage({ params }: PageProps<'/post/[postId]'>) {
  const { postId } = await params;
  const post = await getPostById(+postId) 

  return (
    <>
      <h1>{post.title}</h1>
      <LikeButton initialLikes={post.likes} />
    </>
  )
}