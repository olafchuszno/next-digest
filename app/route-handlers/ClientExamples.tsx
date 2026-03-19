import { GetExample } from './GetExample';
import { PostExample } from './PostExample';

export const ClientExamples = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2>From Client Component</h2>
      <GetExample />
      <PostExample />
    </div>
  );
};
