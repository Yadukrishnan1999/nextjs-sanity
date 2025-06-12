import Image from "../Image/Image";
import TextPills from "../TextPills/TextPills";
import Typography from "../Typography/Typography";
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
      <Typography variant="h3" className={`text-[#393939]`}>{title}</Typography>
      <Typography variant="h4" className={`text-[#5f5f5f]`}>{description}</Typography>
      <div className="text-[#5f5f5f] flex items-center gap-1 font-semibold text-sm leading-5">
       <Typography variant="span">{author}</Typography>
        <div className=" h-1 w-1 bg-[#5f5f5f] rounded-full" />
        <Typography variant="span">{date}</Typography>
      </div>
    </div>
  );
};

export default ArticleCard;
