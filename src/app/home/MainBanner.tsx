/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Typography from "../../../components/Typography/Typography";

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
        <Typography variant="h1" className="text-blue-800 pt-3 bg-red pb-[15px]">What is ZipCare?</Typography> 
        <Typography variant="b3" className="font-sm columns-1 lg:columns-2 gap-2">{data?.whatIsZipcare}</Typography> 
      </div>
    </div>
  );
};

export default MainBanner;
