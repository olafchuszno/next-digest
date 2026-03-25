import { cookies, headers } from 'next/headers';

// Forces dynamic rendering EVEN when not using any dynamic APIs
export const dynamic = 'force-dynamic';

// Almost everything in this page forces it to be Dynamically Rendered
export default async function Page({ params, searchParams }: PageProps<'/dynamic-route/[postId]'>) {
  // Forces dynamic rendering
  const { postId } = await params;
  // Forces dynamic rendering
  const { page = '1', sort = 'date' } = await searchParams;

  // Forces dynamic rendering
  const cookieStore = await cookies();
  // Forces dynamic rendering
  const headerStore = await headers();

  const token = cookieStore.get('token')?.value;
  const locale = headerStore.get('accept-language');

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}?page=${page}&sort=${sort}`,
    {
      // Forces dynamic rendering
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${token}`,
        'Accept-Language': locale || 'en',
      },
    }
  );

  const post = await res.json();

  return (
    <ul>
      <li>Title: {post.title}</li>
      {page && <li>Page: {page}</li>}
      {postId && <li>PostId: {postId}</li>}
      {sort && <li>Sort: {sort}</li>}
    </ul>
  );
}
