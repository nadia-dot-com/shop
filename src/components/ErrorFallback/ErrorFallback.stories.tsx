import { ErrorFallback } from "./ErrorFallback";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ErrorFallback> = {
    component: ErrorFallback,
     argTypes: {
        resetErrorBoundary: { action: "resetErrorBoundary called" },
    }
};

export default meta;

type Story = StoryObj<typeof ErrorFallback>;

export const Default: Story = {};