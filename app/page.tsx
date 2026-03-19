import Link from 'next/link';

const PAGES = [
  { href: '/client-component', label: 'Client Component' },
  { href: '/server-component', label: 'Server Component' },
  { href: '/client-in-server-component', label: 'Client component (inside of) Server Component' },
  { href: '/post', label: 'Posts' },
  { href: '/server-navigation/one', label: 'Server Navigation (page One)' },
  { href: '/client-navigation/one', label: 'Client Navigation (page One)' },
  { href: '/hydration-error', label: 'Hydration Error' },
];

export default function Page() {
  return (
    <main>
      <h1>Next.js Digest</h1>
      <p>(cacheComponents: false)</p>

      <div className="my-12">
        <p>The colours in this app help explain the client-server boundaries</p>
        <p className="client-text">Green marks are for Client Components</p>
        <p className="server-text">While Blue marks are for Server Components</p>
      </div>

      <h2>Available Pages:</h2>

      <nav className="flex flex-col mt-4 gap-2">
        {PAGES.map(({ href, label }) => (
          <Link key={href} href={href} className="bordered w-fit">
            {label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
