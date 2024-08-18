import React from "react";
import { notFound } from "next/navigation";
import H1Gradient from "@/components/ui/H1Gradient";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { Bookmark, Share2 } from "lucide-react";

export default async function PostsSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

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

  if (!data.results || data.results.length === 0) {
    notFound();
  }

  const post = data.results[0];

  const getSection = (type: string) =>
    post.sections.find((s: any) => s.content_type === type);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="relative">
      <div className="relative w-full h-[700px]">
        <Image
          src="/images/article_hero.jpg"
          alt={post.title}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
          priority
        />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="relative max-w-[820px] mx-auto -mt-64 text-white px-4 space-y-7">
        {/* top section, home, latest, title summary */}
        <section className="max-w-[715px] ">
          <p className=" text-[#F2CB13] font-futura-book text-[14px]">
            <Link href="/" className=" underline">
              Home
            </Link>{" "}
            <span>{" / "}</span>
            <Link href="/posts" className="text-[#F2CB13] underline">
              Latest News
            </Link>{" "}
          </p>
          <div className="max-w-[715px] pt-[11px] pb-[19px]">
            <h1 className="text-5xl font-futura-bold text-[#F2CB13]">
              {parse(post.title?.toUpperCase() || "Untitled")}
            </h1>
          </div>
          {getSection("subtitle") && (
            <p className="text-xl max-w-[680px]">
              {parse(getSection("subtitle")?.content || "")}
            </p>
          )}
        </section>
        <div></div>
        {/* avatar, name, date, 2 icons */}
        <section className="flex items-center justify-between max-w-[680px] ">
          <div className="flex items-center">
            <div className="flex items-center space-x-3 mr-3">
              <Image
                src="/images/article_author.jpg"
                alt="Author"
                width={42}
                height={42}
                className="rounded-full"
              />
              <span className="text-[16px] font-futura-book">
                {post.createdBy || "John Smith"}
              </span>
            </div>
            <span className="text-[#D9D9D9]">•</span>
            <div className="text-[16px] ml-3">
              <span className="text-[16px] font-futura-book">
                {formatDate(post.created_at)}
              </span>
            </div>
          </div>

          <div className="flex space-x-2 text-[#B1B3B3]">
            <span className="border border-[#B1B3B3] rounded-full p-1.5">
              <Bookmark className="w-4 h-4 " />
            </span>
            <span className="border border-[#B1B3B3] rounded-full p-1.5">
              {" "}
              <Share2 className="w-4 h-4" />
            </span>
          </div>
        </section>
        {/* Content sections */}
        {post.sections.map((section: any, index: number) => {
          switch (section.content_type) {
            case "bodyText":
              return (
                <section
                  key={index}
                  className="max-w-[680px] text-[18px] font-futura-book text-[#B1B3B3]"
                >
                  {parse(section.content || "")}
                </section>
              );
            case "pullQuote":
              return (
                <section key={index} className="max-w-[680px] ">
                  <div className=" border-l-[5px] border-[#F2CB13] pl-[25px]">
                    <H1Gradient className="font-futura-bold text-[24px] ">
                      "{section.content.toUpperCase()}"
                    </H1Gradient>
                    {section.author && (
                      <p className="mt-[7px] text-[#B1B3B3] text-[14px] font-futura-book">
                        {section.author}
                      </p>
                    )}
                  </div>
                </section>
              );

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
