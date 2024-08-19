export default function AlsoLikeCard({ imgSrc }: { imgSrc: string }) {
  return (
    <div className="bg-[#0D0D0D] border-2 border-[#8C8C8C]/30 rounded-2xl w-[320px] h-[330px] flex-shrink-0 overflow-hidden">
      <div className="relative">
        <img src={imgSrc} alt="" className="w-full h-[176px] object-cover" />
        <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D] to-transparent"></div>
      </div>
      <div className="px-5 space-y-2">
        <div className="font-futura-bold text-[18px] text-white leading-[132%]">
          HAGERTY RADICAL CUP UK ROUND 2 - BRANDS HATCH POST-RACE REPORT
        </div>
        <div className="text-[16px] text-[#B1B3B3] font-futura-book leading-[120%]">
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Duis mollis, est non commodo.
        </div>
      </div>
    </div>
  );
}
