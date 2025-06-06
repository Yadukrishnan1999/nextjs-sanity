"use client";

const ViewAllButton = ({ btnLabel }: ViewAllButton) => {
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
        <div
          className={`h-[12px] w-[12px] bg-transparent border-t-3 border-r-3 border-blue-800 rotate-45`}
        ></div>
      </div>
    </div>
  );
};

export default ViewAllButton;
