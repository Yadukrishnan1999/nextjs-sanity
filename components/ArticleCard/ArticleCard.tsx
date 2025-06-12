import Image from "../Image/Image";
import TextPills from "../TextPills/TextPills";
import Typography from "../Typography/Typography";
export type ArticleCardProps = {
  imageSrc: string;
  label: string;
  title: string;
  description: string;
  author: string;
  date: string;
  className?: string;
};

const ArticleCard = ({
  imageSrc,
  label,
  title,
  description,
  author,
  date,
  className,
}: ArticleCardProps) => {
  return (
    <div className={`w-auto ${className}`}>
      <div className="relative">
        <Image
          src={imageSrc}
          height={164}
          width={400}
          innerClass="h-[167px] rounded-lg"
        />
        <TextPills label={label} customClasses="absolute bottom-2 left-2" />
      </div>
      <Typography variant="b3_bold" className="line-clamp-2 pt-1">
        {title}
      </Typography>
      <Typography variant="b4_regular" className="line-clamp-2 pt-1">
        {description}
      </Typography>
      <div className="text-[#5f5f5f] flex items-center gap-1 font-semibold text-[10px] lg:text-sm leading-none lg:leading-5 pt-1">
        <Typography variant="span">{author}</Typography>
        <div className=" h-1 w-1 bg-[#5f5f5f] rounded-full" />
        <time dateTime={date}>{date}</time>
      </div>
    </div>
  );
};

export default ArticleCard;
