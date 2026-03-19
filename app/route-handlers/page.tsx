import { ClientExamples } from './ClientExamples';

export default async function Page() {
  const res = await fetch('http://localhost:3000/api/test');
  const data = await res.json();

  return (
    <main>
      <h1>Route Handlers</h1>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2>From Server Component</h2>
          <div className="server-border">
            <p className="font-mono font-bold">GET /api/test</p>
            <p className="mt-2 font-mono server-text">Response: {JSON.stringify(data)}</p>
          </div>
        </div>

        <ClientExamples />
      </div>
    </main>
  );
}
