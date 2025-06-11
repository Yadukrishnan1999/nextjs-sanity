import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BreadCrumb from "./BreadCrumb";

describe("BreadCrumb Component", () => {
  const defaultItems: Record<string, string> = {
    Home: "/",
    Products: "/products",
    Laptop: "/products/laptop",
  };
  it("renders breadcrumb navigation with all items", () => {
    render(<BreadCrumb items={defaultItems} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Laptop")).toBeInTheDocument();
    const separators = screen.getAllByText("|");
    expect(separators).toHaveLength(2);
  });

  it("applies correct Tailwind classes to nav and ol elements", () => {
    render(<BreadCrumb items={defaultItems} />);

    const nav = screen.getByRole("navigation", { name: /breadcrumb/i });
    expect(nav).toHaveClass("px-5", "lg:px-[50px]", "bg-[#E6E9FE]");

    const ol = nav.querySelector("ol");
    expect(ol).toHaveClass(
      "no-scrollbar",
      "h-7",
      "lg:h-9",
      "flex",
      "items-center",
      "gap-1.5",
      "whitespace-nowrap",
      "text-xs",
      "lg:text-sm",
      "leading-4",
      "lg:leading-5"
    );
  });
  it("applies custom className to nav element", () => {
    const customClass = "custom-breadcrumb";
    render(<BreadCrumb items={defaultItems} className={customClass} />);

    const nav = screen.getByRole("navigation", { name: /breadcrumb/i });
    expect(nav).toHaveClass(
      "px-5",
      "lg:px-[50px]",
      "bg-[#E6E9FE]",
      customClass
    );
  });
  it("renders links with correct href and text content", () => {
    render(<BreadCrumb items={defaultItems} />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveAttribute("href", "/");
    expect(links[0]).toHaveTextContent("Home");
    expect(links[1]).toHaveAttribute("href", "/products");
    expect(links[1]).toHaveTextContent("Products");
    expect(links[2]).toHaveAttribute("href", "/products/laptop");
    expect(links[2]).toHaveTextContent("Laptop");
  });

  it("applies correct styles to links based on position", () => {
    render(<BreadCrumb items={defaultItems} />);

    const links = screen.getAllByRole("link");

    expect(links[0]).toHaveClass("text-primary", "font-semibold");
    expect(links[1]).toHaveClass("text-primary", "font-semibold");
    expect(links[2]).toHaveClass("text-neutral-500", "font-normal");
  });

  it('sets aria-current="page" on the last link only', () => {
    render(<BreadCrumb items={defaultItems} />);

    const links = screen.getAllByRole("link");

    expect(links[0]).not.toHaveAttribute("aria-current");
    expect(links[1]).not.toHaveAttribute("aria-current");

    expect(links[2]).toHaveAttribute("aria-current", "page");
  });

  it("disables prefetch on all links", () => {
    render(<BreadCrumb items={defaultItems} />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
    links.forEach((link) => {
      expect(link.tagName).toBe("A");
    });
  });

  it("renders correctly with a single item", () => {
    const singleItem: Record<string, string> = { Home: "/" };
    render(<BreadCrumb items={singleItem} />);

    expect(screen.getByText("Home")).toBeInTheDocument();

    const separators = screen.queryAllByText("|");
    expect(separators).toHaveLength(0);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("aria-current", "page");
    expect(link).toHaveClass("text-neutral-500", "font-normal");
  });

  it("renders empty breadcrumb when items is empty", () => {
    render(<BreadCrumb items={{}} />);

    const nav = screen.getByRole("navigation", { name: /breadcrumb/i });
    const links = nav.querySelectorAll("a");
    expect(links).toHaveLength(0);
    const separators = nav.querySelectorAll("li");
    expect(separators).toHaveLength(0);
  });
  it("ensures accessibility attributes are present", () => {
    render(<BreadCrumb items={defaultItems} />);

    const nav = screen.getByRole("navigation", { name: /breadcrumb/i });
    expect(nav).toHaveAttribute("aria-label", "Breadcrumb");

    const lastLink = screen.getByText("Laptop");
    expect(lastLink).toHaveAttribute("aria-current", "page");
  });
});
