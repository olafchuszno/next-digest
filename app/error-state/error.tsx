'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="client-border client-text">
      <div className="animate-pulse">Error message: {error?.message}</div>
      <button
        className="client-border"
        onClick={() =>
          startTransition(() => {
            router.refresh();
            reset();
          })
        }
      >
        Reset the error
      </button>
    </div>
  );
}
