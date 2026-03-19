'use client';

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <main>
      <h1>Page Two</h1>
      <button className="bordered" onClick={() => router.push('/client-navigation/one')}>
        Go to page One
      </button>
    </main>
  );
}
