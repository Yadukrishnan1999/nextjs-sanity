import React from "react";

type TitleProps = {
  text: string;
  className?: string;
};

const Title = ({ text, className }: TitleProps) => {
  return (
    <div
      className={`font-bold text-[28px] lg:text-[40px] leading-8 lg:leading-11 text-[#2f0e73] -tracking-[1px] ${className}`}
    >
      {text}
    </div>
  );
};

export default Title;
