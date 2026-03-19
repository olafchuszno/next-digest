'use client';

import { FC, useState } from 'react';

type Props = { initialLikes: number };

export const ClientLikeButton: FC<Props> = ({ initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  return (
    <div className="client-text">
      <p>This is rendered on the client</p>
      <button className="bordered" onClick={() => setLikes(likes => likes + 1)}>
        Likes (passed from a Server Component): {likes}
      </button>
    </div>
  );
};
