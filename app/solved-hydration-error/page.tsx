'use client';

export default function Page() {
  return (
    <>
      <div suppressHydrationWarning>
        Random number in a client component: {new Date().getTime()}
      </div>
      <p>
        To solve the hydration error, a work-around attribute is added:
        `addedsuppressHydrationWarning`
      </p>
    </>
  );
}
