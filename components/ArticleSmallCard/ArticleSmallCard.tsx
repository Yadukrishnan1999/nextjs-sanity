import Image from "../Image/Image";
import TextPills from "../TextPills/TextPills";

type ArticleSmallCardProps = {
  imageSrc: string;
  label: string;
  title: string;
  description: string;
  author: string;
  date: string;
};

const ArticleSmallCard = ({
  imageSrc,
  label,
  title,
  description,
  author,
  date,
}: ArticleSmallCardProps) => {
  return (
    <div className="w-[365px] bg-linear-to-b from-[#FF9501] to-[#CD00C9] p-0.5 rounded-2xl">
      <div className="flex bg-white p-2 rounded-2xl">
        <div className="flex flex-col">
          <TextPills label={label} />
          <div className=" text-[#393939] font-bold text-base leading-[22px] tracking-normal">
            {title}
          </div>
          <div className="text-[#5f5f5f] flex items-center gap-1 font-medium text-[10px] leading-none">
            <span>{author}</span>
            <div className=" h-1 w-1 bg-[#5f5f5f] rounded-full" />
            <span>{date}</span>
          </div>
        </div>
        <Image src={imageSrc} innerClass="w-auto h-[100px] rounded-2xl" />
      </div>
    </div>
  );
};

export default ArticleSmallCard;
