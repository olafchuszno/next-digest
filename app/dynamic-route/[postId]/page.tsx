import { cookies, headers } from 'next/headers';

export const dynamic = 'force-dynamic';

export default async function Page({ params, searchParams }: PageProps<'/dynamic-route/[postId]'>) {
  const { postId } = await params;
  const { page = '1', sort = 'date' } = await searchParams;

  const cookieStore = await cookies();
  const headerStore = await headers();

  const token = cookieStore.get('token')?.value;
  const locale = headerStore.get('accept-language');

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}?page=${page}&sort=${sort}`,
    {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${token}`,
        'Accept-Language': locale || 'en',
      },
    }
  );

  const post = await res.json();

  return <div>{post.title}</div>;
}
