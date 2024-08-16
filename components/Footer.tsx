import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-between h-[56px] px-[32px] mb-[48px] text-[#B1B3B3] bg-gradient-to-r from-[#121212] to-[#000000]">
      <div className="flex items-end">
        <span>{`© ${currentYear} Radical Motorsport`}</span>
      </div>
      <div className="flex items-end">social logos</div>
    </div>
  );
}
