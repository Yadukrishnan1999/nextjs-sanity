import type { Meta, StoryObj } from "@storybook/nextjs";
import Title from "./Title";

const meta = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
} satisfies Meta<typeof Title>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Your device protection expert!",
  },
};
