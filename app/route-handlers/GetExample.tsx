'use client';

import { useState } from 'react';

export const GetExample = () => {
  const [result, setResult] = useState<string | null>(null);

  const handleGet = async () => {
    const res = await fetch('/api/test');
    const data = await res.json();
    setResult(JSON.stringify(data));
  };

  return (
    <div className="client-border">
      <p className="font-mono font-bold">GET /api/test</p>
      <button className="bordered mt-2" onClick={handleGet}>Send GET</button>
      {result && <p className="mt-2 font-mono client-text">Response: {result}</p>}
    </div>
  );
};
