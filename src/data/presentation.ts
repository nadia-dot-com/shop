import { PresentationProps } from "../types/shopTypes";
import { v4 as uuidv4 } from 'uuid';

export const PRESENTATION: PresentationProps[] = [
    {
        id: uuidv4(),
        img: 'img/presentation/living-room.png',
        title: 'Ergo Sofa Collection',
        desc: 'Relax, make yourself comfortable, and sink into your new favourite spot.',
        category: 'Sofas',
    },
    {
        id: uuidv4(),
        img: 'img/presentation/kichen.png',
        title: 'Save 25% on tables',
        desc: 'Where every table invites you to slow down and feel at ease.',
        category: 'Tables',
    },
    {
        id: uuidv4(),
        img: 'img/presentation/chairs.png',
        title: 'New in',
        desc: 'Traditional craftsmanship',
        category: 'Chairs',
    }
]