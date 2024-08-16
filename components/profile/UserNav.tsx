// import Image from "next/image";
// import React from "react";
// import H1Gradient from "../ui/H1Gradient";
// import YellowButton from "../ui/YellowButton";
// import Button from "../ui/Button";
// import {
//   CarFront,
//   ChevronRight,
//   FileDown,
//   Megaphone,
//   User,
//   Edit2,
// } from "lucide-react";

// export default function UserNav() {
//   return (
//     <div className="relative ">
//       <div className="absolute ">
//         <div className="relative w-[160px] h-[160px]">
//           {/* <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#161616]"> */}
//           <Image
//             src="/images/user_profile.jpg"
//             alt="profile"
//             width={160}
//             height={160}
//             className=" absolute rounded-full left-1/2 transform -translate-x-1/2 z-10 top-0"
//             // className="object-cover"
//           />
//           {/* </div> */}
//           <div className="absolute bottom-0 right-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
//             <Edit2 size={20} className="text-black" />
//           </div>
//         </div>
//       </div>

//       <div className="h-[561px] min-w-[389px] bg-[#161616] flex flex-col items-center rounded-lg border-white-opacity-100 border border-white/[0.03]">
//         <div className="mt-20">
//           <H1Gradient className="text-[24px] font-bold mb-1 text-center">
//             JOSEPHINE ROBINSON
//           </H1Gradient>
//           <p className="text-gray-400 mb-1 text-center">Radical since 2020</p>
//           <p className="text-yellow-500 text-sm mb-6 cursor-pointer flex items-center justify-center">
//             <Edit2 size={14} className="mr-1" /> Edit profile
//           </p>
//         </div>

//         <div className="w-full px-6 space-y-3">
//           <YellowButton className="w-full justify-between">
//             <div className="flex gap-2 items-center">
//               <User size={18} strokeWidth={3} />
//               MY PROFILE
//             </div>
//             <ChevronRight size={18} />
//           </YellowButton>
//           <Button className="w-full justify-between">
//             <div className="flex gap-2 items-center">
//               <CarFront size={18} strokeWidth={3} />
//               MY RADICAL GARAGE
//             </div>
//             <ChevronRight size={18} />
//           </Button>
//           <Button className="w-full justify-between">
//             <div className="flex gap-2 items-center">
//               <Megaphone size={18} strokeWidth={3} />
//               TECHNICAL BULLETINS
//             </div>
//             <ChevronRight size={18} />
//           </Button>
//           <Button className="w-full justify-between">
//             <div className="flex gap-2 items-center">
//               <FileDown size={18} strokeWidth={3} />
//               MY DOWNLOADS
//             </div>
//             <ChevronRight size={18} />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import React from "react";
import H1Gradient from "../ui/H1Gradient";
import YellowButton from "../ui/YellowButton";
import Button from "../ui/Button";
import {
  CarFront,
  ChevronRight,
  FileDown,
  Megaphone,
  User,
  Edit2,
  Pencil,
} from "lucide-react";

export default function UserNav() {
  return (
    <div className="relative">
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-10">
        <div className="relative">
          <Image
            src="/images/user_profile.jpg"
            alt="profile"
            width={160}
            height={160}
            className="rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <Pencil size={16} fill="yellow" className="text-black" />
          </div>
        </div>
      </div>

      <div className="h-[561px] min-w-[389px] bg-[#161616] flex flex-col items-center rounded-lg border-white-opacity-100 border border-white/[0.03] pt-20">
        <H1Gradient className="text-[24px] font-bold mb-1 text-center">
          JOSEPHINE ROBINSON
        </H1Gradient>
        <p className="text-gray-400 mb-1 text-center">Radical since 2020</p>
        <p className="text-yellow-500 text-sm mb-6 cursor-pointer flex items-center justify-center">
          <Edit2 size={14} className="mr-1" /> Edit profile
        </p>

        <div className="w-full px-6 space-y-3">
          <YellowButton className="w-full justify-between">
            <div className="flex gap-2 items-center">
              <User size={18} strokeWidth={3} />
              MY PROFILE
            </div>
            <ChevronRight size={18} />
          </YellowButton>
          <Button className="w-full justify-between">
            <div className="flex gap-2 items-center">
              <CarFront size={18} strokeWidth={3} />
              MY RADICAL GARAGE
            </div>
            <ChevronRight size={18} />
          </Button>
          <Button className="w-full justify-between">
            <div className="flex gap-2 items-center">
              <Megaphone size={18} strokeWidth={3} />
              TECHNICAL BULLETINS
            </div>
            <ChevronRight size={18} />
          </Button>
          <Button className="w-full justify-between">
            <div className="flex gap-2 items-center">
              <FileDown size={18} strokeWidth={3} />
              MY DOWNLOADS
            </div>
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}
