import React from "react";
import AlsoLikeCard from "./AlsoLikeCard";
import { ChevronRight } from "lucide-react";

export default function AlsoLike() {
  return (
    <div className="relative">
      <h1 className="font-futura-bold text-[24px]">YOU MIGHT ALSO LIKE</h1>
      <div className="relative">
        <div className="flex gap-5 mt-6 overflow-x-auto pb-10 pr-24">
          {Array.from({ length: 4 }).map((_, index) => (
            <AlsoLikeCard
              imgSrc={`/images/article_thumb_0${index + 1}.jpg`}
              key={index}
            />
          ))}
          {Array.from({ length: 4 }).map((_, index) => (
            <AlsoLikeCard
              imgSrc={`/images/article_thumb_0${index + 1}.jpg`}
              key={`second-${index}`}
            />
          ))}
        </div>
        <div className="absolute top-0 right-0 bottom-0 w-1/4 bg-gradient-to-l from-black via-black/70 to-transparent  flex items-center justify-end">
          <ChevronRight
            strokeWidth={3.5}
            size={96}
            className="text-white opacity-50"
          />
        </div>
      </div>
    </div>
  );
}
