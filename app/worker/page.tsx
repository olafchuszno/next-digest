'use client';

import { Suspense, useMemo, useState, type FC } from 'react';

const randomNumbers = new Array(10000000)
  .fill(0)
  .map((_, i) => i)
  .sort(() => Math.random() - 0.5);

const Page: FC = () => {
  const [numbers, setNumbers] = useState<number[]>(randomNumbers);
  const [isSorted, setIsSorted] = useState<boolean>(false);
  const [sortingTime, setSortingTime] = useState<number | null>(null);
  const [isSorting, setIsSorting] = useState<boolean>(false);

  const firstFiveNumbers = useMemo(() => numbers.slice(0, 5), [numbers]);

  const handleSortNumbersInWorker = async () => {
    setIsSorting(true);

    const worker = new Worker(new URL('./worker.ts', import.meta.url));
    worker.postMessage(numbers);

    worker.onmessage = (
      event: MessageEvent<{ sorted: number[]; time: number }>,
    ) => {
      setNumbers(event.data.sorted);
      setSortingTime(event.data.time);
      setIsSorted(true);
      worker.terminate();
    };
  };

  return (
    <Suspense fallback={'Loading...'}>
      <div>First five numbers: {firstFiveNumbers.join(' ')}</div>
      <button
        style={{
          padding: '8px 16px',
          border: '1px solid red',
          marginRight: '8px',
        }}
        disabled={isSorting}
        onClick={handleSortNumbersInWorker}
      >
        {isSorting ? 'Sorting' : 'Sort'} numbers
      </button>
      <button
        style={{
          padding: '8px 16px',
          border: '1px solid red',
          marginRight: '8px',
        }}
        onClick={() => alert('Urgent info!')}
      >
        Display important message
      </button>
      {isSorted && <div>Sorted completed! It took {sortingTime} ms</div>}
    </Suspense>
  );
};

export default Page;
