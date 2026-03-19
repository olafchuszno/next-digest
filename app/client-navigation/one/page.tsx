'use client';

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <main>
      <h1>Page One</h1>
      <button className="bordered" onClick={() => router.push('/client-navigation/two')}>
        Go to page Two
      </button>
    </main>
  );
}
