/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import TextPills from "../../../components/TextPills/TextPills";

const MustReads = ({ data }: any) => {
  return (
    <div className="relative rounded-[10px] p-[2px] bg-gradient-to-r from-pink-500 to-orange-500">
      <div className="rounded-lg bg-white p-3 backdrop-blur-sm">
        <div className="grid grid-cols-3 items-center">
          <div className="col-span-2">
            <TextPills customClasses="mb-[8px]" label={data?.category} />

            <div>
              <div className="text-sm font-bold">{data?.headLine}</div>
              <div className="flex space-x-[8px] text-sm font-bold items-center">
                <span className="text-gray-500">{data?.Author}</span>
                <div className="rounded-full h-[6px] w-[6px] bg-gray-500"></div>
                <span className="text-gray-500">{data?.date}</span>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                fill
                src={data?.mainImage?.asset?.url}
                alt={data?.mainImage?.alt}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MustReads;
