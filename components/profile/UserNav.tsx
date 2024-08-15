import Image from "next/image";
import React from "react";

export default function UserNav() {
  return (
    <div className="h-[561px] w-[389px] bg-[#161616]  flex-center-col rounded-lg">
      <Image
        className="rounded-full size-[189px] "
        src="/images/user_profile.jpg"
        alt="profile"
        width={189}
        height={189}
      />
      <p>JOSEPHINE ROBINSON </p>
      <p>Radical since 2020</p>
      <p>edit profile</p>

      <button>MY PROFILE</button>
      <button>MY RADICAL GARAGE</button>
      <button>TECHNICAL BULLETINS</button>
      <button>MY DOWNLOADS</button>
    </div>
  );
}
