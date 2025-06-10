type TextPillsProps = {
  label: string;
  customClasses?: string;
};

const TextPills = ({ label, customClasses = "" }: TextPillsProps) => {
  return (
    <div
      className={`${customClasses} w-fit rounded-full bg-gray-800 text-white font-bold text-sm py-[4px] px-[12px] whitespace-nowrap`}
    >
      {label}
    </div>
  );
};

export default TextPills;
