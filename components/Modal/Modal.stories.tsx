import type { Meta, StoryObj } from "@storybook/nextjs";
import Modal from "./Modal";
import { useState } from "react";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: "boolean", description: "Controls modal visibility" },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Modal size",
    },
    onClose: {
      action: "closed",
      description: "Function called when closing the modal",
    },
    children: { control: false, description: "Modal content" },
  },
} satisfies Meta<typeof Modal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ size }) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <div>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size={size}>
          <form className="w-[495px] mx-auto">
            <p className=" font-bold text-primary text-[32px] leading-9 -tracking-[1px] text-center">
              Select Type of plan
            </p>
            <p className="font-semibold text-base leading-[22px] text-[#393939] text-center">
              After selecting an option below, you'll be redirected to
              croma.com, where you can choose the best ZipCare plan for your
              device.
            </p>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label htmlFor="html">HTML</label>
            <input type="radio" id="css" name="fav_language" value="CSS" />
            <label htmlFor="css">CSS</label>
            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="JavaScript"
            />
            <label htmlFor="javascript">JavaScript</label>
          </form>
        </Modal>
      </div>
    );
  },
  args: {
    size: "lg",
    isOpen: true,
    onClose() {
      console.log("Closing");
    },
    children: <></>,
  },
};
