import type { Meta, StoryObj } from "@storybook/nextjs";
import Accordion from "./Accordion";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}
const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    multiple: {
      control: "boolean",
      description: "Allow multiple items to be expanded",
    },
    defaultOpenIds: {
      control: "object",
      description: "IDs of items open by default",
    },
    className: {
      control: "text",
      description: "Custom CSS class for the accordion",
    },
    items: { control: false, description: "Array of accordion items" },
  },
} satisfies Meta<typeof Accordion>;
export default meta;

type Story = StoryObj<typeof meta>;
const defaultItems: AccordionItem[] = [
  {
    id: "1",
    title: "What is an accordion?",
    content: (
      <p>
        An accordion is a UI component that allows users to expand and collapse
        sections of content.
      </p>
    ),
  },
  {
    id: "2",
    title: "How does it work?",
    content: (
      <p>
        Clicking the title toggles the visibility of the content section, with
        smooth animations.
      </p>
    ),
  },
  {
    id: "3",
    title: "Is it accessible?",
    content: <p>Yes, it includes ARIA attributes for screen reader support.</p>,
  },
];
export const Default: Story = {
  args: {
    items: defaultItems,
    multiple: false,
    defaultOpenIds: ["1"],
  },
};
