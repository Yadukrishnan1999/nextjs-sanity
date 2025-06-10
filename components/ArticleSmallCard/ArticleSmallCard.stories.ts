import type { Meta, StoryObj } from "@storybook/nextjs";
import img from "../../public/Plot8.jpg";
import ArticleSmallCard from "./ArticleSmallCard";

const meta = {
  title: "Components/ArticleSmallCard",
  component: ArticleSmallCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    imageSrc: { control: "text" },
  },
} satisfies Meta<typeof ArticleSmallCard>;
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
