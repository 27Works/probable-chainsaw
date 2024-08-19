import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex-center-col min-h-[80dvh]">
      <p>
        Please head over to the
        <Link className="underline text-[#F2CB13]" href="/posts">
          {" "}
          NEWS (articles/posts)
        </Link>
      </p>
      <p>Or</p>
      <p>
        <Link className="underline text-[#F2CB13]" href="/profile">
          MY RADICAL
        </Link>
      </p>
    </main>
  );
}
