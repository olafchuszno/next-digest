import { ClientComponent } from './ClientComponent';

export default async function Page() {
  return (
    <main>
      <h1>Server function in Client Component</h1>
      <ClientComponent />
    </main>
  );
}
