import { CollectionProps } from "../types/types";

export const COLLECTION: CollectionProps[] = [
    {
        img: '/img/collection/living-room.png',
        title: 'Living Room Collection',
        hotspots: [
            { top: '50%', left: '50%', productId: 6 },
            { top: "70%", left: "20%", productId: 11 },
            { top: "66%", left: "58%", productId: 12 },
        ]
    },
    {
        img: '/img/collection/dining-room.png',
        title: 'Dining Room Collection',
        hotspots: [
            { top: '60%', left: '35%', productId: 5 },
            { top: "71%", left: "22%", productId: 9 },
        ]
    },
    {
        img: '/img/collection/bedroom-collection.png',
        title: 'Bedroom Collection',
        hotspots: [
            { top: '32%', left: '45%', productId: 7 },
            { top: "60%", left: "15%", productId: 13 },
            { top: "40%", left: "65%", productId: 14 },
        ]
    },
    {
        img: '/img/collection/home-collection.png',
        title: 'Home Collection',
        hotspots: [
            { top: '54%', left: '42%', productId: 15 },
            { top: "75%", left: "20%", productId: 1 },
            { top: "71%", left: "78%", productId: 16 },
        ]
    },
]