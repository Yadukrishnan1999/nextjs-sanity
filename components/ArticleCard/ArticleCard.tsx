import Image from "../Image/Image";
import TextPills from "../TextPills/TextPills";

type ArticleCardProps = {
  imageSrc: string;
  label: string;
  title: string;
  description: string;
  author: string;
  date: string;
};

const ArticleCard = ({
  imageSrc,
  label,
  title,
  description,
  author,
  date,
}: ArticleCardProps) => {
  return (
    <div className="w-[264px]">
      <div className="relative">
        <Image src={imageSrc} innerClass="h-[167px] rounded-lg" />
        <TextPills label={label} customClasses="absolute bottom-2 left-2" />
      </div>
      <div className="text-[#393939] font-bold text-base leading-6 tracking-normal">
        {title}
      </div>
      <div className="text-[#5f5f5f] font-normal text-sm leading-5">
        {description}
      </div>
      <div className="text-[#5f5f5f] flex items-center gap-1 font-semibold text-sm leading-5">
        <span>{author}</span>
        <div className=" h-1 w-1 bg-[#5f5f5f] rounded-full" />
        <span>{date}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
