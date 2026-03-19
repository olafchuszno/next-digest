// components/ui/LikeButton.tsx
'use client';

import { Post } from '@/types/post';
import { FC, useEffect, useState } from 'react';

type Props = {
  post: Post;
};

export const LikeButton: FC<Props> = ({ post }) => {
  const [count, setCount] = useState(post.likes ?? 0);

  useEffect(() => {
    console.log('mounted in browser');
  }, []);

  return (
    <button className="client-border client-text" onClick={() => setCount(count + 1)}>
      Client Likes: {count}
    </button>
  );
};
