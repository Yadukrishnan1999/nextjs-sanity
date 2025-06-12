import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

describe("Carousel Component", () => {
 beforeEach(() => {
    Element.prototype.scrollBy = jest.fn();
  });

  const mockCards = [
    { content: <div data-testid="card">Card 1</div> },
    { content: <div data-testid="card">Card 2</div> },
    { content: <div data-testid="card">Card 3</div> },
    { content: <div data-testid="card">Card 4</div> },
  ];

  it("renders all cards", () => {
    render(<Carousel cards={mockCards} cardsToVisible={3} />);
    const cardElements = screen.getAllByTestId("card");
    expect(cardElements.length).toBe(mockCards.length);
  });

  it("renders left and right arrow buttons", () => {
    render(<Carousel cards={mockCards} />);
    const leftButton = screen.getByLabelText("Scroll left");
    const rightButton = screen.getByLabelText("Scroll right");

    expect(leftButton).toBeInTheDocument();
    expect(rightButton).toBeInTheDocument();
  });

  it("calls scrollBy when left or right button is clicked", () => {
    render(<Carousel cards={mockCards} />);

    const leftButton = screen.getByLabelText("Scroll left");
    const rightButton = screen.getByLabelText("Scroll right");

    fireEvent.click(rightButton);
    fireEvent.click(leftButton);

    expect(Element.prototype.scrollBy).toHaveBeenCalledTimes(2);
    expect(Element.prototype.scrollBy).toHaveBeenCalledWith({ left: 300, behavior: "smooth" });
    expect(Element.prototype.scrollBy).toHaveBeenCalledWith({ left: -300, behavior: "smooth" });
  });
});
