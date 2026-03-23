'use client';

import type { FC } from 'react';
import { ElasticComponent } from './ElasticComponent';

export const ClientComponent: FC = () => {
  return (
    <div className="client-border">
      <ElasticComponent />
    </div>
  );
};
