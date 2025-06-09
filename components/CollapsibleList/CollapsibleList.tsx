/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  CollapsibleListData,
  CollapsibleListProps,
} from "@/types/ComponentPropsTypes";

const CollapsibleList = ({
  data,
  activeItemBgColor = "bg-blue-800",
  borderColor = "text-white",
}: CollapsibleListProps) => {
  const [activeQuestion, setActiveQuestion] = useState("");

  // This iteration will add a unique identifier for each items in the list.
  const dataWithId = data?.map((itme: CollapsibleListData, index: number) => {
    return { ...itme, id: index };
  });

  return (
    <div
      className={`border border-blue-800 bg-white rounded-xl overflow-hidden`}
    >
      {dataWithId?.map((listItem: any, index: number) => {
        return (
          <div key={`item-${index}`}>
            <div
              key={index}
              className={`${activeQuestion === listItem?.id ? activeItemBgColor : ""} text-sm px-4 py-6 border-blue-800 ${data?.length === index + 1 ? "border-0" : "border-b"}`}
              onClick={() => {
                if (listItem?.id === activeQuestion) {
                  setActiveQuestion("");
                } else {
                  setActiveQuestion(listItem?.id);
                }
              }}
            >
              <div className={`flex space-x-4 justify-between items-center`}>
                <div
                  className={`${activeQuestion === listItem?.id ? borderColor : ""} font-bold text-lg`}
                >
                  {listItem?.listData}
                </div>
                <div>
                  <div
                    className={`${activeQuestion === listItem?.id ? "border-white rotate-315" : "border-blue-800 rotate-135"} h-[12px] w-[12px] bg-transparent border-t-3 border-r-3 `}
                  ></div>
                </div>
              </div>
            </div>
            <div
              className={`${listItem?.id === activeQuestion ? "" : "hidden"} transition-all duration-300 ease-in-out overflow-hidden text-sm bg-white px-4 py-6 ${data?.length === index + 1 ? "" : "border-blue-800 border-b"}`}
            >
              {listItem?.collapsingData}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CollapsibleList;
