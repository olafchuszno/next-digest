import { FC } from 'react';
import { ClientLikeButton } from './ClientLikeButton';

export default async function Page() {
  return (
    <main className="p-8">
      <h1 className="server-text">Client Component inside of a Server Component</h1>
      <ServerLikes />
    </main>
  );
}

const ServerLikes: FC = () => {
  return (
    <div>
      <h2 className="server-text">This text is rendered on the server</h2>
      {/* But the Like component is rendered on the client */}
      <ClientLikeButton initialLikes={1} />
    </div>
  );
};
