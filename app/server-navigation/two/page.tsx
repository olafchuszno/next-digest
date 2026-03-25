import Link from 'next/link';

export default async function Page() {
  return (
    <main className="bordered pb-4">
      <h1>Page Two</h1>
      <Link className="bordered" href={'/server-navigation/one'}>
        Go to page One
      </Link>
    </main>
  );
}
