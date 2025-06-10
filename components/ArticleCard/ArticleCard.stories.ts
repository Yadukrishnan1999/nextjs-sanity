import type { Meta, StoryObj } from "@storybook/nextjs";
import img from "../../public/Plot8.jpg";
import ArticleCard from "./ArticleCard";

const meta = {
  title: "Components/ArticleCard",
  component: ArticleCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    imageSrc: { control: "text" },
  },
} satisfies Meta<typeof ArticleCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc: img as unknown as string,
    label: "Home Appliances",
    title: "Buying a laptop from a store? Here's what you need to know",
    description: "Do not dismiss buying your laptop from a store just yet",
    author: "Karthik A",
    date: "Oct 11,22",
  },
};
