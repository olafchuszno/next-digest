import Link from 'next/link';

export default async function Page() {
  return (
    <main className="bordered pb-4">
      <h1>Page One</h1>
      <Link className="bordered" href={'/server-navigation/two'}>
        Go to page Two
      </Link>
    </main>
  );
}
