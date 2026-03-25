import Link from 'next/link';

const GROUPS = [
  {
    title: 'Component Model',
    description:
      "The heart of App Router: understanding the server/client boundary. Components are server by default; 'use client' opts into browser capabilities. Elastic components adapt to their import context.",
    pages: [
      {
        href: '/client-component',
        label: 'Client Component',
        description:
          "Marked with 'use client'. Enables useState, useEffect, and browser APIs. Rendered on server for initial HTML, then hydrated on the client.",
      },
      {
        href: '/server-component',
        label: 'Server Component',
        description:
          'Default in App Router. Runs async on the server, accesses backend resources directly, and ships zero JS to the browser.',
      },
      {
        href: '/client-in-server-component',
        label: 'Client in Server Component',
        description:
          'A server component can import and render a client component. The server renders the outer shell; the client subtree handles interactivity.',
      },
      {
        href: '/server-in-client-component',
        label: 'Server in Client Component',
        description:
          "Server components can't be imported inside client files, but they can be passed as children or props — the server renders them, the client receives the output.",
      },
      {
        href: '/elastic-component',
        label: 'Elastic Component',
        description:
          "No 'use client' or 'use server' directive. Adapts to its import context — behaves as server when imported by a server file, client when imported by a client file.",
      },
    ],
  },
  {
    title: 'Hydration',
    description:
      'What hydration is, what breaks it, and how to fix it. Essential for understanding why server-rendered HTML sometimes conflicts with what React renders on the client.',
    pages: [
      {
        href: '/hydration-example',
        label: 'Hydration Example',
        description:
          'How Next.js sends pre-rendered HTML from the server and attaches React event listeners on the client. View page source vs the live DOM.',
      },
      {
        href: '/hydration-error',
        label: 'Hydration Error',
        description:
          'A mismatch between server HTML and what React renders on the client. Common causes: Date.now(), Math.random(), or browser-only APIs during render.',
      },
      {
        href: '/solved-hydration-error',
        label: 'Solved Hydration Error',
        description:
          'Fix strategies: suppressHydrationWarning for minor mismatches; dynamic() with ssr:false to skip server rendering for truly client-only components.',
      },
    ],
  },
  {
    title: 'Routing',
    description:
      'How Next.js maps the file system to URLs. Covers static, dynamic, and pre-generated routes, plus client- vs server-side navigation between them.',
    pages: [
      {
        href: '/server-navigation/one',
        label: 'Server Navigation',
        description:
          'Next.js <Link> prefetches server-rendered segments. Navigation happens without a full page reload and without client-side router state.',
      },
      {
        href: '/client-navigation/one',
        label: 'Client Navigation',
        description:
          "Programmatic navigation with the useRouter hook: push, replace, back. Requires 'use client' since it accesses browser routing APIs.",
      },
      {
        href: '/dynamic-route/1?page=2&sort=author',
        label: 'Dynamic Route',
        description:
          'Dynamic URL segments via [param] folder naming. The segment value is passed as a prop to the page and can drive server-side data fetching.',
      },
      {
        href: '/static-route',
        label: 'Static Route',
        description:
          'Pre-rendered at build time with no per-request work. Cached at CDN edge for the fastest possible response — the default when no dynamic APIs are used.',
      },
      {
        href: '/static-params/1',
        label: 'Generate Static Params',
        description:
          'generateStaticParams(): return param objects to pre-render dynamic routes at build time. The App Router replacement for getStaticPaths.',
      },
    ],
  },
  {
    title: 'Data & Server Actions',
    description:
      'Patterns for getting data into your UI: async server components for reads, Route Handlers for REST-style APIs, and Server Actions for mutations called directly from client code.',
    pages: [
      {
        href: '/post',
        label: 'Posts — Data Fetching',
        description:
          'async/await inside a Server Component. fetch() gets automatic request deduplication and caching built into the App Router.',
      },
      {
        href: '/route-handlers',
        label: 'Route Handlers (GET/POST)',
        description:
          'API endpoints defined in route.ts files. Export named functions (GET, POST, …). The App Router replacement for pages/api.',
      },
      {
        href: '/server-function-in-client-component',
        label: 'Server Action in Client Component',
        description:
          "Server Actions ('use server' functions) invoked directly from a client event handler. Run only on the server — no manually written API route needed.",
      },
    ],
  },
  {
    title: 'UI States & Special Files',
    description:
      'Next.js file conventions that handle the full lifecycle of a page: instant loading skeletons, runtime error boundaries, and custom 404 screens — all colocated with the route.',
    pages: [
      {
        href: '/loading-state',
        label: 'Loading State',
        description:
          'loading.tsx: shown instantly while the page awaits async data. Next.js wraps it in a React Suspense boundary automatically.',
      },
      {
        href: '/error-state',
        label: 'Error State',
        description:
          'error.tsx: catches errors thrown inside a route segment and renders a fallback UI. Must be a Client Component (React error boundaries require it).',
      },
      {
        href: '/not-found-state/1',
        label: 'Not Found State (404)',
        description:
          'not-found.tsx: rendered when notFound() is called inside a route. Lets you customise the 404 experience per route segment.',
      },
    ],
  },
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

      <nav className="flex flex-col mt-4 gap-8">
        {GROUPS.map(({ title, description, pages }) => (
          <div key={title}>
            {/* Group heading with its own hover description */}
            <div className="relative group w-fit mb-3">
              <h3 className="text-lg font-semibold text-gray-400 cursor-default">{title}</h3>
              <span
                className="
                pointer-events-none absolute left-0 top-full mt-1 z-10
                w-96 rounded-lg border border-gray-600 bg-gray-900 px-3 py-2
                text-sm text-gray-200 shadow-lg
                opacity-0 group-hover:opacity-100
                transition-opacity duration-200
              "
              >
                {description}
              </span>
            </div>

            {/* Links in this group */}
            <div className="flex flex-col gap-4 pl-4 border-l border-gray-700">
              {pages.map(({ href, label, description: pageDesc }) => (
                <div key={href} className="relative group w-fit">
                  <Link href={href} className="bordered">
                    {label}
                  </Link>
                  <span
                    className="
                    pointer-events-none absolute left-0 top-full mt-1 z-10
                    w-80 rounded-lg border border-gray-500 bg-gray-900 px-3 py-2
                    text-sm text-gray-200 shadow-lg
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-200
                  "
                  >
                    {pageDesc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </main>
  );
}
