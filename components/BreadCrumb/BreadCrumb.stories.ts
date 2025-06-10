import type { Meta, StoryObj } from "@storybook/nextjs";
import BreadCrumb from "./BreadCrumb";

const meta = {
  title: "Components/BreadCrumb",
  component: BreadCrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    items: { control: "object" },
  },
} satisfies Meta<typeof BreadCrumb>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: {
      Home: "/",
      "First Level": "/first-level",
      "Last Level": "/last-level",
    },
  },
};
