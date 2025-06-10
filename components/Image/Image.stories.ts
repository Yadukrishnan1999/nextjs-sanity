import type { Meta, StoryObj } from "@storybook/nextjs";
import Image from "./Image";
import img from "../../public/Plot8.jpg";

const meta = {
  title: "Components/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
  },
} satisfies Meta<typeof Image>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: img as unknown as string,
  },
};
