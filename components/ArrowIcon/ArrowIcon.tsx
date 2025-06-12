type ArrowIconProps = {
  direction: "down" | "up" | "left" | "right";
  className?: string;
};
const ArrowIcon = ({
  direction = "down",
  className = "border-primary",
}: ArrowIconProps) => {
  const orientation = {
    down: "rotate-135",
    up: "rotate-315",
    left: "rotate-225",
    right: "rotate-45",
  };
  return (
    <div
      className={`h-[12px] w-[12px] bg-transparent border-t-3 border-r-3 ${orientation[direction]} ${className}`}
      data-testid={`arrow-icon-${direction}`}
    ></div>
  );
};

export default ArrowIcon;
