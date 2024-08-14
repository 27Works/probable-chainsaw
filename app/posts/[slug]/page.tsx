import React from "react";
import { notFound } from "next/navigation";

export default async function PostsSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  console.log("slug ====>>>>", slug);

  //radical-cup-back-at-barber-in-2020

  const response = await fetch(
    `https://caruuto.27.works/api/v1/posts?filter={"slug":"${slug}"}`,
    {
      headers: {
        Authorization: `Api-key-v1 ${process.env.APIKEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  //   console.log("response data ===>>>", data);

  if (!data.results || data.results.length === 0) {
    notFound();
  }

  console.log("results ===>>>", data.results[0]);

  const post = data.results[0];

  return (
    <>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </>
  );
}
