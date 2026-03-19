// app/post/page.tsx
import { getPostIds } from '@/lib';
import { PostLink } from './PostLink';

export default async function PostsPage() {
  const postIds = await getPostIds();

  if (!postIds) return <div>Could not get posts!</div>;

  return (
    <>
      <h1>Posts list rendered on the server</h1>
      <ul>
        {postIds.map(postId => (
          <PostLink postId={postId} key={postId} />
        ))}
      </ul>
    </>
  );
}
