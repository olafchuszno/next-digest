import { ClientComponent } from './ClientComponent';

export default async function Page() {
  return (
    <main>
      <h1>Hydration example</h1>
      <ClientComponent luckyNumber={7} />
    </main>
  );
}
