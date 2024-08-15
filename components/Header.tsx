import { mainNav } from "@/lib/data";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="pt-[24px] sticky top-0 flex justify-between">
      <div>radical motorsport logo</div>
      <div className="flex">
        <nav>
          <ul className="flex gap-3">
            {mainNav.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <button>SIGN IN / PROFILE</button>
        </div>
      </div>
    </header>
  );
}
