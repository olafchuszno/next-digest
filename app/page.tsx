import Link from 'next/link';

const PAGES = [
  { href: '/client-component', label: 'Client Component' },
  { href: '/server-component', label: 'Server Component' },
  { href: '/post', label: 'Posts' },
  { href: '/server-navigation/one', label: 'Server Navigation (page One)' },
  { href: '/client-navigation/one', label: 'Client Navigation (page One)' },
  { href: '/hydration-error', label: 'Hydration Error' },
];

export default function Page() {
  return (
    <main>
      <h1>Next.js Digest Pages</h1>

      <nav className="flex flex-col gap-2">
        {PAGES.map(({ href, label }) => (
          <Link key={href} href={href} className="bordered w-fit">
            {label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
