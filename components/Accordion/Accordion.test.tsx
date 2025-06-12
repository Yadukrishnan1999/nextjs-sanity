import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";
describe("Accordion Component", () => {
    const items = [
        { id: "item1", title: "Item 1", content: <div>Content 1</div> },
        { id: "item2", title: "Item 2", content: <div>Content 2</div> },
        { id: "item3", title: "Item 3", content: <div>Content 3</div> },
    ];
    it("renders all item titles", () => {
        render(<Accordion items={items} />);
        items.forEach((item) => {
            expect(screen.getByText(item.title)).toBeInTheDocument();
        });
    });
    it("opens multiple items when `multiple` is true", () => {
        render(<Accordion items={items} multiple />);
        fireEvent.click(screen.getByText("Item 1"));
        fireEvent.click(screen.getByText("Item 2"));
        expect(screen.getByText("Content 1")).toBeVisible();
        expect(screen.getByText("Content 2")).toBeVisible();
    });
    it("respects defaultOpenIds", () => {
        render(<Accordion items={items} defaultOpenIds={["item3"]} />);
        expect(screen.getByText("Content 3")).toBeVisible();
    });
    it("should toggle multiple items in multiple mode", () => {
        render(<Accordion items={items} multiple={true} />);
        const btn1 = screen.getByRole("button", { name: /item 1/i });
        const btn2 = screen.getByRole("button", { name: /item 2/i });
        fireEvent.click(btn1);
        fireEvent.click(btn2);
        expect(screen.getByText("Content 1")).toBeVisible();
        expect(screen.getByText("Content 2")).toBeVisible();
        fireEvent.click(btn1);
        expect(screen.getByText("Content 2")).toBeVisible();
    });
    it("should toggle item open/close in single mode", () => {
        render(<Accordion items={items} multiple={false} />);
        const btn1 = screen.getByRole("button", { name: /item 1/i });
        const btn2 = screen.getByRole("button", { name: /item 2/i });
        fireEvent.click(btn1);
        expect(screen.getByText("Content 1")).toBeVisible();
        fireEvent.click(btn2);
        expect(screen.getByText("Content 2")).toBeVisible();
    });
})