import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <div>Page Two</div>
      <Link href={"/one"}>Go to page One</Link>
    </div>
  );
}
