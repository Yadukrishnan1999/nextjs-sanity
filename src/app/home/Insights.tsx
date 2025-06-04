/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

const Insights = ({ data }: any) => {
  return (
    <div>
      
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
        <Image
          fill
          src={data?.mainImage?.asset?.url}
          alt={data?.mainImage?.alt}
          className="object-cover"
        />
        <div className="absolute top-[70%] md:top-[80%] lg:top-[80%] left-[24px] w-fit rounded-full bg-gray-800 text-white font-bold text-sm py-[4px] px-[12px] whitespace-nowrap">
        {data?.category}
      </div>
      </div>
      <div className="font-bold text-lg pt-[8px] leading-snug">
        {data?.headLine}
      </div>
      <p className="text-sm text-gray-500">{data?.description}</p>
      <div className="flex space-x-[8px] text-sm font-bold items-center">
        <span className="text-gray-500">{data?.Author}</span>
        <div className="rounded-full h-[6px] w-[6px] bg-gray-500"></div>
        <span className="text-gray-500">{data?.date}</span>
      </div>
    </div>
  );
};

export default Insights;
