'use client';

import { useState, ReactNode, FC, PropsWithChildren } from 'react';

type Props = {
  extraServerContent: ReactNode;
};

export const ClientWrapper: FC<PropsWithChildren<Props>> = ({ children, extraServerContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="client-border client-text">
      <p className="mb-2 client-text">
        I am a client component (with server components passed as props)
      </p>
      <button className="bordered mb-4" onClick={() => setIsOpen(o => !o)}>
        {isOpen ? 'Hide' : 'Show'} the <b>EXTRA</b> server content
      </button>
      {/* children and extraServerContent are server components — passed in, not imported */}
      {isOpen && extraServerContent}
      {children}
    </div>
  );
};
