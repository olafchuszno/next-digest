export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return <div>{posts[0].title}</div>;
}