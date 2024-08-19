import { Post } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default async function PostsPage() {
  const response = await fetch(`https://caruuto.27.works/api/v1/posts/`, {
    headers: {
      Authorization: `Api-key-v1 ${process.env.APIKEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    notFound();
  }

  const slugs = data.results.map((post: Post) => {
    return post.slug;
  });

  return (
    <div className="max-w-6xl mx-auto">
      <ul className="flex-center-col">
        {slugs.map((slug: string) => (
          <li key={slug}>
            <Link href={`/posts/${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
