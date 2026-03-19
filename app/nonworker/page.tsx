'use client';

import { Suspense, useMemo, useState, type FC } from 'react';

const randomNumbers = new Array(10 ^ 6)
  .fill(0)
  .map((_, i) => i)
  .sort(() => Math.random() - 0.5);

const Page: FC = () => {
  const [numbers, setNumbers] = useState<number[]>(randomNumbers);
  const [isSorted, setIsSorted] = useState<boolean>(false);
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [sortingTime, setSortingTime] = useState<number | null>(null);

  const firstFiveNumbers = useMemo(() => numbers.slice(0, 5), [numbers]);

  const handleSortNumbersManually = () => {
    setIsSorting(true);
    setNumbers((numbers) => {
      const startTime = performance.now();
      const sortedNumbers = [...numbers].sort((a, b) => a - b);
      const endTime = performance.now();
      setSortingTime(endTime - startTime);
      return sortedNumbers;
    });
    setIsSorted(true);
    setIsSorting(false);
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
        onClick={handleSortNumbersManually}
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
