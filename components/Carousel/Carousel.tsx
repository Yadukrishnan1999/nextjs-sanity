import React, { ReactNode, useRef } from "react";
import ArrowIcon from "../ArrowIcon/ArrowIcon";

type Card = {
  content: ReactNode;
};
type CarouselProps = {
  cards: Card[];
  cardsToVisible?: number;
  cardWidth?: number;
};

const Carousel = ({
  cards,
  cardsToVisible = 3,
  cardWidth = 264,
}: CarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  const containerWidth = cardsToVisible * (cardWidth + 24);
  return (
    <div className="relative flex  items-center w-full max-w-5xl mx-auto">
      <button
        className="hidden absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-10 h-10 md:flex items-center justify-center focus:outline-none"
        onClick={scrollLeft}
        aria-label="Scroll left"
      >
        <ArrowIcon color="blue" direction="left" />
      </button>
      <div
        className="flex flex-col md:flex-row overflow-x-auto scroll-smooth gap-6 p-4 mx-8 hide-scrollbar"
        ref={scrollContainerRef}
        style={{ width: `${containerWidth}px` }}
      >
        {cards.map((card, index) => (
          <div key={index}>{card.content}</div>
        ))}
      </div>
      <button
        className="hidden absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-10 h-10 md:flex items-center justify-center focus:outline-none "
        onClick={scrollRight}
        aria-label="Scroll right"
      >
        <ArrowIcon color="blue" direction="right" />
      </button>
    </div>
  );
};

export default Carousel;
