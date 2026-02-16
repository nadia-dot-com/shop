import { MemoryRouter } from "react-router-dom";
import { WishlistProvider } from "../../../context/WishlistContext";
import { EmptyWishList } from "./EmptyWishList";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EmptyWishList> = {
  component: EmptyWishList,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <WishlistProvider>
          <Story />
        </WishlistProvider>
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof EmptyWishList>;

export const Default: Story = {};
