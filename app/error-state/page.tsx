import type { FC } from 'react';

export const dynamic = 'force-dynamic';

const page: FC = () => {
  if (Math.random() > 0.7) {
    throw new Error('Fake error');
  }
  return <div className="server-border server-text">This page throws an error sometimes</div>;
};

export default page;
