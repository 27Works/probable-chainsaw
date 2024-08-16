// import UserForm from "@/components/profile/UserForm";
// import UserNav from "@/components/profile/UserNav";
// import { Dealer } from "@/lib/types";
// import React from "react";

// export default async function ProfilePage() {
//   const response = await fetch(`https://caruuto.27.works/api/v1/dealers`, {
//     headers: {
//       Authorization: `Api-key-v1 ${process.env.APIKEY}`,
//     },
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   const data = await response.json();

//   const results = data.results;

//   const dealers = results.map((dealer: Dealer) => {
//     return dealer.title;
//   });

//   console.log("dealers ===>>>", dealers);

//   return (
//     <div className="flex-center-col md:flex-row mt-[163px] gap-12">
//       <UserNav />
//       <UserForm dealers={dealers} />
//     </div>
//   );
// }

import UserForm from "@/components/profile/UserForm";
import UserNav from "@/components/profile/UserNav";
import { Dealer } from "@/lib/types";
import React from "react";

export default async function ProfilePage() {
  const response = await fetch(`https://caruuto.27.works/api/v1/dealers`, {
    headers: {
      Authorization: `Api-key-v1 ${process.env.APIKEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  const results = data.results;

  const dealers = results.map((dealer: Dealer) => {
    return dealer.title;
  });

  console.log("dealers ===>>>", dealers);

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center mt-[163px] gap-12 px-4">
      <UserNav />
      <UserForm dealers={dealers} />
    </div>
  );
}
