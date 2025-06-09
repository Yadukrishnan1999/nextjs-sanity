import { ArrowIconProps } from "@/types/ComponentPropsTypes";

const ArrowIcon = ({ color = "blue", direction = "down" }: ArrowIconProps) => {
  const getOrientation = () => {
    switch (direction) {
      case "down":
        return "rotate-135";
      case "up":
        return "rotate-315";
      case "left":
        return "rotate-225";
      case "right":
        return "rotate-45";
    }
  };
  const getColor = () => {
    switch (color) {
      case "red":
        return "border-red-800";
      case "blue":
        return "border-blue-800";
      case "white":
        return "border-white";
    }
  };

  const orientation = getOrientation();
  const arrowColor = getColor();

  return (
    <div
      className={`h-[12px] w-[12px] bg-transparent border-t-3 border-r-3 ${arrowColor} ${orientation}`}
    ></div>
  );
};

export default ArrowIcon;
