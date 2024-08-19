import React from "react";

export default function PostsSlugLoading() {
  return (
    <div className="flex-center min-h-[80dvh]">
      <div className="w-4 h-4 border-2 border-[#F2CB13] border-l-transparent rounded-full animate-spin"></div>
      <span className="ml-2 text-[#F2CB13]">Loading...</span>
    </div>
  );
}
