"use client";

import { mainNav } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Bell, Menu, User } from "lucide-react";
import { usePathname } from "next/navigation";
import YellowButton from "./ui/YellowButton";
import { cn } from "@/lib/utils";

export default function Header() {
  const path = usePathname();
  const isProfilePage = path.includes("profile");

  return (
    <header className="mx-auto max-w-7xl sticky -top-1 flex justify-between items-center h-[64px] px-4 md:px-5 pt-[24px]">
      <div className="flex-shrink-0">
        <Link href="/">
          <Image
            src="/images/radical_motorsport.svg"
            alt="logo"
            width={194}
            height={40}
          />
        </Link>
      </div>
      <div className="flex items-center">
        <nav className="pr-2 md:pr-6">
          <div className="md:hidden flex items-center gap-4">
            <Menu />
            <Link href="/profile">
              <User
                size={20}
                className={isProfilePage ? "text-[#F2CB13]" : "text-white"}
              />
            </Link>
          </div>
          <ul className="hidden md:flex gap-4">
            {mainNav.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-white",
                    path.includes(item.href) && "text-[#F2CB13]"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={`hidden md:flex items-center gap-2 ${
            isProfilePage ? "pl-6 border-l border-[#B1B3B3]" : "pl-2"
          }`}
        >
          {isProfilePage ? (
            <>
              <Link
                href="/profile"
                className="flex text-[#F2CB13] items-center"
              >
                <User size={20} className="mr-2" />
                Josephine
              </Link>
              <Bell size={22} className="text-white ml-2" />
            </>
          ) : (
            <Link href="/profile">
              <YellowButton className="max-h-[34px]">MY RADICAL</YellowButton>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
