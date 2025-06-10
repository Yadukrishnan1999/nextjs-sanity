import type { Meta, StoryObj } from "@storybook/nextjs";
import img from "../../public/Plot8.jpg";
import Carousel from "./Carousel";
import ArticleCard from "../ArticleCard/ArticleCard";
import ArticleSmallCard from "../ArticleSmallCard/ArticleSmallCard";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    cards: { control: "object" },
  },
} satisfies Meta<typeof Carousel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cards: [
      {
        content: (
          <ArticleCard
            imageSrc={img as unknown as string}
            label={"Home Appliances"}
            title="Buying a laptop from a store? Here's what you need to know"
            description="Do not dismiss buying your laptop from a store just yet"
            author="Karthik A"
            date="Oct 11,22"
          />
        ),
      },
      {
        content: (
          <ArticleCard
            imageSrc={img as unknown as string}
            label={"Home Appliances"}
            title="Buying a laptop from a store? Here's what you need to know"
            description="Do not dismiss buying your laptop from a store just yet"
            author="Karthik A"
            date="Oct 11,22"
          />
        ),
      },
      {
        content: (
          <ArticleCard
            imageSrc={img as unknown as string}
            label={"Home Appliances"}
            title="Buying a laptop from a store? Here's what you need to know"
            description="Do not dismiss buying your laptop from a store just yet"
            author="Karthik A"
            date="Oct 11,22"
          />
        ),
      },
      {
        content: (
          <ArticleCard
            imageSrc={img as unknown as string}
            label={"Home Appliances"}
            title="Buying a laptop from a store? Here's what you need to know"
            description="Do not dismiss buying your laptop from a store just yet"
            author="Karthik A"
            date="Oct 11,22"
          />
        ),
      },
      {
        content: (
          <ArticleCard
            imageSrc={img as unknown as string}
            label={"Home Appliances"}
            title="Buying a laptop from a store? Here's what you need to know"
            description="Do not dismiss buying your laptop from a store just yet"
            author="Karthik A"
            date="Oct 11,22"
          />
        ),
      },
      {
        content: (
          <ArticleCard
            imageSrc={img as unknown as string}
            label={"Home Appliances"}
            title="Buying a laptop from a store? Here's what you need to know"
            description="Do not dismiss buying your laptop from a store just yet"
            author="Karthik A"
            date="Oct 11,22"
          />
        ),
      },
    ],
    cardsToVisible: 4,
    cardWidth: 264,
  },
};

export const Secondary: Story = {
  args: {
    cards: [
      {
        content: (
          <ArticleSmallCard
            imageSrc={img as unknown as string}
            label={"Home Appliances"}
            title="Buying a laptop from a store? Here's what you need to know"
            description="Do not dismiss buying your laptop from a store just yet"
            author="Karthik A"
            date="Oct 11,22"
          />
        ),
      },
      {
        content: (
          <ArticleSmallCard
            imageSrc={img as unknown as string}
            label={"Home Appliances"}
            title="Buying a laptop from a store? Here's what you need to know"
            description="Do not dismiss buying your laptop from a store just yet"
            author="Karthik A"
            date="Oct 11,22"
          />
        ),
      },
      {
        content: (
          <ArticleSmallCard
            imageSrc={img as unknown as string}
            label={"Home Appliances"}
            title="Buying a laptop from a store? Here's what you need to know"
            description="Do not dismiss buying your laptop from a store just yet"
            author="Karthik A"
            date="Oct 11,22"
          />
        ),
      },
      {
        content: (
          <ArticleSmallCard
            imageSrc={img as unknown as string}
            label={"Home Appliances"}
            title="Buying a laptop from a store? Here's what you need to know"
            description="Do not dismiss buying your laptop from a store just yet"
            author="Karthik A"
            date="Oct 11,22"
          />
        ),
      },
      {
        content: (
          <ArticleSmallCard
            imageSrc={img as unknown as string}
            label={"Home Appliances"}
            title="Buying a laptop from a store? Here's what you need to know"
            description="Do not dismiss buying your laptop from a store just yet"
            author="Karthik A"
            date="Oct 11,22"
          />
        ),
      },
      {
        content: (
          <ArticleSmallCard
            imageSrc={img as unknown as string}
            label={"Home Appliances"}
            title="Buying a laptop from a store? Here's what you need to know"
            description="Do not dismiss buying your laptop from a store just yet"
            author="Karthik A"
            date="Oct 11,22"
          />
        ),
      },
    ],
    cardsToVisible: 4,
    cardWidth: 240,
  },
};
