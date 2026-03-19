'use client';

/**
 * This example will show Hydration errors.
 * In dev: Recoverable Error


Hydration failed because the server rendered text didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:
 * In prod (it will build - later in browser will error): f2f58a7e93290fbb.js:1 Uncaught Error: Minified React error #418; visit https://react.dev/errors/418?args[]=text&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
 */

export default function Page() {
  return <div>{new Date().getTime()}</div>;
}
