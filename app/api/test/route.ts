import { wait } from '@/lib';

export const GET = async () => {
  await wait(1000);

  return Response.json('GET hello ' + new Date().getSeconds());
};

export const POST = async () => {
  await wait(1000);

  return Response.json('POST hello ' + new Date().getSeconds());
};
