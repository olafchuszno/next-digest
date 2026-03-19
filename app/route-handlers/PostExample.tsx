'use client';

import { useState } from 'react';

export const PostExample = () => {
  const [result, setResult] = useState<string | null>(null);

  const handlePost = async () => {
    const res = await fetch('/api/test', { method: 'POST' });
    const data = await res.json();
    setResult(JSON.stringify(data));
  };

  return (
    <div className="client-border">
      <p className="font-mono font-bold">POST /api/test</p>
      <button className="bordered mt-2" onClick={handlePost}>Send POST</button>
      {result && <p className="mt-2 font-mono client-text">Response: {result}</p>}
    </div>
  );
};
