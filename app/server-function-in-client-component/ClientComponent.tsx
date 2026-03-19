'use client';

import { getPostIds } from '@/lib/posts';
import { FC, useState, useTransition } from 'react';

export const ClientComponent: FC = () => {
  const [postIds, setPostIds] = useState<number[] | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleFetchPosts = () =>
    startTransition(async () => {
      const data = await getPostIds();
      setPostIds(data);
    });

  return (
    <div className="client-border client-text">
      <button disabled={isPending} onClick={handleFetchPosts}>
        {isPending ? 'Fetching post ids...' : 'Fetch post ids'}
      </button>
      {postIds && <div>Post ids: {postIds}</div>}
    </div>
  );
};
