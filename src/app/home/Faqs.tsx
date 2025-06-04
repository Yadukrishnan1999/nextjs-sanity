/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

const Faqs = ({ data }: any) => {
  const [activeQuestion, setActiveQuestion] = useState("");

  return (
    <div
      className={`border border-blue-800 bg-white rounded-xl overflow-hidden`}
    >
      {data?.map((faqs: any, index: number) => {
        return (
          <div key={index}>
            <div
              key={index}
              className={`${activeQuestion === faqs?.qid ? "bg-blue-800" : ""} text-sm px-4 py-6 border-blue-800 ${data?.length === index + 1 ? "border-0" : "border-b"}`}
              onClick={() => {
                if (faqs?.qid === activeQuestion) {
                  setActiveQuestion("");
                } else {
                  setActiveQuestion(faqs?.qid);
                }
              }}
            >
              <div className={`flex space-x-4 justify-between items-center`}>
                <div
                  className={`${activeQuestion === faqs?.qid ? "text-white" : ""} font-bold text-lg`}
                >
                  {faqs?.question}
                </div>
                <div>
                  <div
                    className={`${activeQuestion === faqs?.qid ? "border-white rotate-315" : "border-blue-800 rotate-135"} h-[12px] w-[12px] bg-transparent border-t-3 border-r-3 `}
                  ></div>
                </div>
              </div>
            </div>
            <div
              className={`${faqs?.qid === activeQuestion ? "" : "hidden"} transition-all duration-300 ease-in-out overflow-hidden text-sm bg-white px-4 py-6 border-blue-800 border-b`}
            >
              {faqs?.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Faqs;
