import { EmptyCard } from "./EmptyCard";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EmptyCard> = {
  component: EmptyCard,
};

export default meta;

type Story = StoryObj<typeof EmptyCard>;

export const Default: Story = {};
