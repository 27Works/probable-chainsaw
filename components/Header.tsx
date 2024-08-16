import { mainNav } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Bell, User } from "lucide-react";

export default function Header() {
  return (
    <header className="mx-auto max-w-7xl px-5 pt-[24px] sticky -top-1 flex justify-between   h-[64px]">
      <div className="">
        <Image
          src="/images/radical_motorsport.svg"
          alt="logo"
          width={194}
          height={40}
        />
      </div>
      <div className="flex  items-center">
        <nav className=" pr-6">
          <ul className="flex gap-4 ">
            {mainNav.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="pl-6 border-l border-[#B1B3B3] flex gap-2">
          <Link href="/profile" className="flex text-[#F2CB13]">
            <button className="flex gap-1">
              <User fill="#F2CB13" size={20} /> Josephine
            </button>
          </Link>

          <Bell fill="white" size={22} />
        </div>
      </div>
    </header>
  );
}
