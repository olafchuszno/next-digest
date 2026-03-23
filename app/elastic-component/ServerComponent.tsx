'use server';

import { ElasticComponent } from './ElasticComponent';

export const ServerComponent = async () => {
  return (
    <div className="server-border">
      <ElasticComponent />
    </div>
  );
};
