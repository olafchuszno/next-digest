'use client';

import { FC, useEffect } from 'react';

type Props = {
  luckyNumber: number;
};

export const ClientComponent: FC<Props> = ({ luckyNumber }) => {
  useEffect(() => {
    console.log('Mounted');
  }, []);

  return (
    <div className="client-text client-border">Some client data with number: {luckyNumber}</div>
  );
};
