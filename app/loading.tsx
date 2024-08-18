import React from "react";

export default function loading() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex items-center">
        <div className="w-4 h-4 border-2 border-[#F2CB13] border-l-transparent rounded-full animate-spin"></div>
        <span className="ml-2 text-[#F2CB13]">Loading...</span>
      </div>
    </div>
  );
}
