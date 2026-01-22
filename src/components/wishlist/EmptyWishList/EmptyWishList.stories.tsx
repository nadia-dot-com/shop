import { MemoryRouter } from "react-router-dom";
import { ShopProvider } from "../../../context/CartContext";
import { EmptyWishList } from "./EmptyWishList";
import { Meta, StoryObj } from "@storybook/react";


const meta: Meta<typeof EmptyWishList> = {
    component: EmptyWishList,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <ShopProvider>
                    <Story />
                </ShopProvider>
            </MemoryRouter>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof EmptyWishList>;

export const Default: Story = {};