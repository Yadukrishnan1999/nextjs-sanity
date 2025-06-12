import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal Component", () => {
    it("should not render when isOpen is false", () => {
        const { container } = render(
            <Modal isOpen={false}>
                <div>Modal Content</div>
            </Modal>
        );
        expect(container).toBeEmptyDOMElement();
    });

    it("should render children when isOpen is true", () => {
        render(
            <Modal isOpen={true}>
                <div>Modal Content</div>
            </Modal>
        );
        expect(screen.getByText("Modal Content")).toBeInTheDocument();
    });

    it("should call onClose when close button is clicked", () => {
        const onClose = jest.fn();
        render(
            <Modal isOpen={true} onClose={onClose}>
                <div>Modal Content</div>
            </Modal>
        );

        const closeButton = screen.getByLabelText("Close modal");
        fireEvent.click(closeButton);

        expect(onClose).toHaveBeenCalled();
    });

    it("applies correct size class based on size prop", () => {
        const { container } = render(
            <Modal isOpen={true} size="lg">
                <div>Modal Content</div>
            </Modal>
        );
        const modalBox = container.querySelector("div.bg-white");
        expect(modalBox).toHaveClass("max-w-3xl");
    });
});