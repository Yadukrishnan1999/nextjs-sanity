import { TextPillsProps } from "@/types/ComponentPropsTypes";
import Typography from "../Typography/Typography";
const TextPills = ({ label, customClasses = "" }: TextPillsProps) => {
  return (
    <Typography variant="h5" className={`${customClasses} w-fit rounded-full bg-gray-800 text-white py-[4px] px-[12px] whitespace-nowrap`}>{label}</Typography> 
  );
};

export default TextPills;
