// app/post/PostLink.tsx
import { Post } from '@/types/post';
import Link from 'next/link';

// Server component
export const PostLink = ({ postId }: { postId: Post['id'] }) => {
  return (
    <li>
      <Link href={`post/${postId}`}>Post id: {postId}</Link>
    </li>
  );
};
