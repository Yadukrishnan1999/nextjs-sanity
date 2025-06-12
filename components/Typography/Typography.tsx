// components/Typography.tsx
"use client";

import React from "react";

type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "b3" | "body" | "span" | "span1";
  children: React.ReactNode;
  className?: string;
};

const variantClasses: Record<string, string> = {
  h1: "text-[28px] lg:text-[40px] leading-8 lg:leading-11 -tracking-[1px] font-bold text-primary",
  h2: "font-semibold text-[16px] leading-[24px] tracking-[0] mb-[16px] lg:text-[18px] lg:leading-[28px] lg:mb-[24px]",
  h3: "text-[14px] lg:text-[16px] leading-[20px] lg:leading-[22px] tracking-[0] mb-[16px] lg:mb-[24px] font-bold ",
  b3: "font-normal text-[14px] lg-text-[18px] leading-[20px] lg:leading-[28px] tracking-[0] mb-[16px] lg:mb-[24px]",
  h4: "font-normal text-[12px] lg:text-[14px] leading-[16px] tracking-[0] mb-[16px]  lg:leading-[20px] lg:mb-[24px]",
  h5: "font-bold text-[10px] lg:text-[14px] leading-[100%] lg:leading-[20px] tracking-[0] mb-[16px] lg:mb-[24px]",
  h6: "font-medium text-[10px] leading-[100%] tracking-[0] mb-[16px]",
  body: "text-base",
  span: "inline font-medium text-[10px] leading-[100%] tracking-[0] mb-[16px]",
};

export default function Typography({
  variant = "body",
  children,
  className = "",
}: TypographyProps) {
  const baseClass = variantClasses[variant] || "";

  return <div className={`${baseClass} ${className}`}>{children}</div>;
}
