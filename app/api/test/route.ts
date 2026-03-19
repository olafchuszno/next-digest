import { wait } from '@/lib';

export const GET = async () => {
  await wait(1000);

  return Response.json('GET hello');
};

export const POST = async () => {
  await wait(1000);

  return Response.json('POST hello');
};
