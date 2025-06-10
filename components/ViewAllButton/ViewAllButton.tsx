"use client";

import ArrowIcon from "../ArrowIcon/ArrowIcon";

type ViewAllButtonProps = {
  btnLabel: string;
};

const ViewAllButton = ({ btnLabel }: ViewAllButtonProps) => {
  const clickHandler = () => {
    console.log("Button clicked");
  };

  return (
    <div className="w-full flex item-center justify-center pt-[24px]">
      <div className="flex space-x-2 items-center cursor-pointer">
        <button
          onClick={() => {
            clickHandler();
          }}
          className={`text-blue-800 text-lg font-bold cursor-pointer`}
        >
          {btnLabel}
        </button>
        <ArrowIcon color={"blue"} direction={"right"} />
      </div>
    </div>
  );
};

export default ViewAllButton;
