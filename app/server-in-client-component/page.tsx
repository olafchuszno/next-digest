import { ClientWrapper } from './ClientWrapper';

const ServerContent = () => {
  return (
    <div className="server-border">
      <p className="server-text">I am a server component</p>
    </div>
  );
};

const ExtraServerContent = () => {
  return (
    <div className="server-border mb-4">
      <p className="server-text">
        I am an <b>EXTRA</b> server component
      </p>
    </div>
  );
};

export default function Page() {
  return (
    <main className="p-8">
      <h1>Server Component inside Client Component</h1>
      <p>The server component is passed as children — not imported by the client.</p>
      <ClientWrapper extraServerContent={<ExtraServerContent />}>
        <ServerContent />
      </ClientWrapper>
    </main>
  );
}
