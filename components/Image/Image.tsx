import NextImage from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
  innerClass?: string;
  outterClass?: string;
};

const Image = ({
  src,
  alt = "",
  innerClass,
  outterClass,
  ...props
}: ImageProps) => {
  return (
    <div className={outterClass}>
      <NextImage
        src={src}
        alt={alt}
        className={`rounded-2xl object-cover ${innerClass}`}
        {...props}
      />
    </div>
  );
};

export default Image;
