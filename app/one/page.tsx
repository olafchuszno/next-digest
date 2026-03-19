import Link from 'next/link';

export default async function Page() {
  return (
    <div>
      <div>Page One</div>
      <Link href={'/two'}>Go to page Two</Link>
    </div>
  );
}
