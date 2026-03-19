self.onmessage = (event: MessageEvent<number[]>) => {
  const startTime = performance.now();
  const sorted = [...event.data].sort((a, b) => a - b);
  const endTime = performance.now();
  self.postMessage({ sorted, time: endTime - startTime });
};
