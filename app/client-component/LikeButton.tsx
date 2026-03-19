'use client';

import { FC, useEffect, useState } from 'react';

export const LikeButton: FC = () => {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    console.log('Mounted just now!');
  }, []);

  return (
    <button className="bordered" onClick={() => setLikes(likes + 1)}>
      Likes: {likes}
    </button>
  );
};
