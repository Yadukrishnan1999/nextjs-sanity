"use client";
import { useState } from "react";
import ArrowIcon from "../ArrowIcon/ArrowIcon";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  multiple?: boolean;
  defaultOpenIds?: string[];
  className?: string;
}

const Accordion = ({
  items,
  multiple = false,
  defaultOpenIds = [],
  className = "",
}: AccordionProps) => {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);
  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      if (multiple) {
        return prev.includes(id)
          ? prev.filter((itemId) => itemId !== id)
          : [...prev, id];
      } else {
        return prev.includes(id) ? [] : [id];
      }
    });
  };
  return (
    <div
      className={`w-full rounded-2xl border border-primary overflow-hidden ${className}`}
    >
      {items.map((item) => (
        <div key={item.id} className="border-b border-primary last:border-none">
          <button
            type="button"
            onClick={() => toggleItem(item.id)}
            aria-expanded={openIds.includes(item.id)}
            aria-controls={item.id}
            className={`${openIds.includes(item.id) ? "bg-primary text-white" : " text-[#393939] "} flex w-full justify-between items-center px-[15px] py-6 `}
          >
            <div className=" text-lg leading-7 text-left font-semibold">
              {item.title}
            </div>
            <ArrowIcon
              direction={openIds.includes(item.id) ? "up" : "down"}
              className={
                openIds.includes(item.id) ? "border-white" : "border-primary"
              }
            />
          </button>
          <div
            id={item.id}
            role="region"
            aria-labelledby={`${item.id}-header`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIds.includes(item.id) ? "max-h-auto" : "max-h-0"
            }
            `}
          >
            <div className="p-4 font-normal text-base leading-[22px] tracking-normal text-[#393939]">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
