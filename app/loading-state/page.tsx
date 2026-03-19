import { getPostIds } from '@/lib/posts';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const freshPostIds = await getPostIds();

  return <div>Post ids: {freshPostIds}</div>;
}
