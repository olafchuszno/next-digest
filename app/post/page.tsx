// app/post/page.tsx
import { getPostIds } from '@/lib/posts';
import { PostLink } from './PostLink';

export default async function PostsPage() {
  const postIds = await getPostIds();

  if (!postIds) return <div>Could not get posts!</div>;

  return (
    <main className="server-border">
      <h1 className="server-text mb-4 text-2xl">Posts list rendered on the server</h1>
      <ul className="w-max">
        {postIds.map(postId => (
          <PostLink postId={postId} key={postId} />
        ))}
      </ul>
    </main>
  );
}
