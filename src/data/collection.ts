import { CollectionProps } from "../types/shopTypes";

export const COLLECTION: CollectionProps[] = [
    {
        img: '/img/collection/living-room.png',
        title: 'Living Room Collection',
        hotspots: [
            { top: '60%', left: '50%', productId: 11 },
            { top: "80%", left: "20%", productId: 6 },
            { top: "77%", left: "50%", productId: 12 },
        ]
    },
    {
        img: '/img/collection/dining-room.png',
        title: 'Dining Room Collection',
        hotspots: [
            { top: '70%', left: '35%', productId: 5 },
            { top: "73%", left: "20%", productId: 9 },
        ]
    },
    {
        img: '/img/collection/bedroom-collection.png',
        title: 'Bedroom Collection',
        hotspots: [
            { top: '38%', left: '42%', productId: 7 },
            { top: "62%", left: "15%", productId: 13 },
            { top: "46%", left: "65%", productId: 14 },
        ]
    },
    {
        img: '/img/collection/home-collection.png',
        title: 'Home Collection',
        hotspots: [
            { top: '64%', left: '42%', productId: 15 },
            { top: "89%", left: "20%", productId: 1 },
            { top: "87%", left: "53%", productId: 16 },
        ]
    },
]