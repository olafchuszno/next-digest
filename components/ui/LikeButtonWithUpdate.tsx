// components/ui/LikeButton.tsx
'use client';

import { updatePostLikesAction } from '@/lib/posts/actions/updatePostLikesAction';
import { Post } from '@/types/post';
import { FC, useState, useTransition } from 'react';
import { Spinner } from './Spinner';

type Props = {
  post: Post;
};

export const LikeButtonWithUpdate: FC<Props> = ({ post }) => {
  const [count, setCount] = useState(post.likes ?? 0);
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className="bordered flex gap-1"
      onClick={() => {
        startTransition(async () => {
          const result = await updatePostLikesAction({
            id: post.id,
            likes: count + 1,
          });
          if (!result) return;
          setCount(result.likes);
        });
      }}
    >
      Client Likes (with update): {isPending ? <Spinner /> : count}
    </button>
  );
};
