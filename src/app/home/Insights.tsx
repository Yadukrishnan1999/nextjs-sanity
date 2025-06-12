/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import TextPills from "../../../components/TextPills/TextPills";
import Typography from "../../../components/Typography/Typography";
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
        <TextPills
          customClasses="absolute top-[70%] md:top-[80%] lg:top-[80%] left-[24px]"
          label={data?.category}
        />
      </div>
      <Typography variant="h3" className={`pt-[8px]`}>{data?.headLine}</Typography>
      <Typography variant="h4" className={`text-gray-500`}>{data?.description}</Typography>
      <div className="flex space-x-[8px] text-sm font-bold items-center">
        <span className="text-gray-500">{data?.Author}</span>
        <div className="rounded-full h-[6px] w-[6px] bg-gray-500"></div>
        <span className="text-gray-500">{data?.date}</span>
      </div>
    </div>
  );
};

export default Insights;
