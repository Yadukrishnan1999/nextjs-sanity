/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

const MainBanner = ({ data }: any) => {
  return (
    <div className="pb-8">
      <div>
        <Image
          height={1080}
          width={1920}
          src={data?.mainImage?.asset?.url}
          alt={"image"}
        />
      </div>
      <div className="px-[20px] lg:px-[50px]">
        <div className="font-bold text-[30px] md:text-[30px] text-blue-800 pt-3 bg-red">
          What is ZipCare?
        </div>
        <p className="font-sm columns-1 lg:columns-2 gap-2">
          {data?.whatIsZipcare}
        </p>
      </div>
    </div>
  );
};

export default MainBanner;
