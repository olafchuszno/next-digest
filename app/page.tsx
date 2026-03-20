import Link from 'next/link';

const PAGES = [
  { href: '/client-component', label: 'Client Component' },
  { href: '/server-component', label: 'Server Component' },
  { href: '/client-in-server-component', label: 'Client component (inside of) Server Component' },
  { href: '/server-in-client-component', label: 'Server component (inside of) Client Component' },
  { href: '/post', label: 'Posts' },
  { href: '/server-navigation/one', label: 'Server Navigation (page One)' },
  { href: '/client-navigation/one', label: 'Client Navigation (page One)' },
  { href: '/dynamic-route/1', label: 'Dynamic Route' },
  { href: '/static-route', label: 'Static Route' },
  { href: '/route-handlers', label: 'Route Handlers (GET/POST)' },
  { href: '/server-function-in-client-component', label: 'Server function in a Client Component' },
  { href: '/hydration-example', label: 'Hydration example (check response HTML)' },
  { href: '/hydration-error', label: 'Hydration Error' },
  { href: '/solved-hydration-error', label: 'Solved hydration Error' },
  { href: '/loading-state', label: 'Loading State' },
  { href: '/error-state', label: 'Error State' },
  { href: '/not-found-state/1', label: 'Not Found State (404)' },
  { href: '/static-params/1', label: 'Generate Static Params' },
];

export default function Page() {
  return (
    <main>
      <h1>Welcome to 2026 Next.js Digest!</h1>
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
