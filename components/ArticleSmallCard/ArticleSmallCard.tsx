import Image from "../Image/Image";
import TextPills from "../TextPills/TextPills";
import Typography from "../Typography/Typography";
export type ArticleSmallCardProps = {
  imageSrc: string;
  label: string;
  title: string;
  author: string;
  date: string;
  className?: string;
};

const ArticleSmallCard = ({
  imageSrc,
  label,
  title,
  author,
  date,
  className,
}: ArticleSmallCardProps) => {
  return (
    <div
      className={` bg-linear-to-b from-[#FF9501] to-[#CD00C9] p-0.5 rounded-[18px] ${className}`}
    >
      <div className="grid grid-cols-[1fr_100px] bg-white p-2 rounded-2xl">
        <div className="flex flex-col">
          <TextPills label={label} />
          <Typography variant="b3_bold" className="line-clamp-2">
            {title}
          </Typography>
          <div className="text-[#5f5f5f] flex items-center gap-1 font-semibold text-[10px] lg:text-sm leading-none lg:leading-5 pt-1">
            <Typography variant="span">{author}</Typography>
            <div className=" h-1 w-1 bg-[#5f5f5f] rounded-full" />
            <time dateTime={date}>{date}</time>
          </div>
        </div>
        <Image
          width={100}
          height={100}
          src={imageSrc}
          innerClass="w-auto h-[100px] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ArticleSmallCard;
