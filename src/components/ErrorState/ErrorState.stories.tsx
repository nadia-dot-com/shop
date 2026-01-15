import { ErrorState } from "./ErrorState";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ErrorState> = {
    component: ErrorState,
};

export default meta;

type Story = StoryObj<typeof ErrorState>;

export const Default: Story = {
    args: {
        message: "Error message",
    },
};