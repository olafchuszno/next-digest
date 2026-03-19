'use client';

export default function Page() {
  return <div suppressHydrationWarning>{new Date().getTime()}</div>;
}
