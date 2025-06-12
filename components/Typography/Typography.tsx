// components/Typography.tsx
"use client";

import React from "react";

type TypographyProps = {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "b2"
    | "b3"
    | "b3_regular"
    | "b3_bold"
    | "b4_regular"
    | "body"
    | "span"
    | "span1";
  children: React.ReactNode;
  className?: string;
};

const variantClasses: Record<string, string> = {
  h1: "text-[28px] lg:text-[40px] leading-8 lg:leading-11 -tracking-[1px] font-bold text-primary",
  h2: "font-semibold text-[16px] leading-[24px] tracking-[0] mb-[16px] lg:text-[18px] lg:leading-[28px] lg:mb-[24px]",
  h3: "text-[28px] lg:text-[40px] leading-8 lg:leading-11 -tracking-[1px] font-bold text-primary",
  h4: "font-normal text-[12px] lg:text-[14px] leading-[16px] tracking-[0] mb-[16px]  lg:leading-[20px] lg:mb-[24px]",
  h5: "font-bold text-[10px] lg:text-[14px] leading-[100%] lg:leading-[20px] tracking-[0]",
  h6: "font-medium text-[10px] leading-[100%] tracking-[0]",
  b3_regular:
    "font-normal text-sm lg:text-[18px] leading-5 lg:leading-7 tracking-[0] text-[#393939]",
  b3_bold:
    "font-bold text-sm lg:text-[18px] leading-5 lg:leading-7 tracking-[0] text-[#393939]",
  b4_regular:
    "font-normal text-xs lg:text-sm leading-4 lg:leading-5 tracking-0 text-[#5f5f5f]",
  body: "text-base",
  span: "inline",
};

export default function Typography({
  variant = "body",
  children,
  className = "",
}: TypographyProps) {
  return (
    <div className={`${variantClasses[variant]} ${className}  `}>
      {children}
    </div>
  );
}
