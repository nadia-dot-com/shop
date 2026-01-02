type ItemPayload = {
    product: {
        id: string;
    },
    quantity: number;
};

export type OrderPayload = {
    delivery: {
        method: string;
    },
    payment: {
        method: string;
    },

    totalPrice: number;

    shippingDetails: {
        address: {
            country: string;
            city: string;
            postalCode: string;
            street: string;
        },

        company: null;
        email: string;
        phone: string;
        notes: string | null;
    },

    items: ItemPayload[]
}