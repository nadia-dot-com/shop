import { useEffect, useRef, useState } from "react";
import { HorizontalScrollButton } from "../../../components/HorizontalScrollButton/HorizontalScrollButton";
import { COLLECTION_UI } from "../../../data/collectionUi";
import { CollectionItem } from "./CollectionItem/CollectionItem";
import { useCollections } from "../../../hooks/useCollections";

import classes from './Collection.module.css';

export function Collection() {
    const scrollRef = useRef<HTMLUListElement | null>(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const {data: collections} = useCollections();

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const handleScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = el;

            setIsAtStart(scrollLeft <= 1);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1); // невеликий запас
        };

        el.addEventListener("scroll", handleScroll);
        handleScroll();

        const resizeObserver = new ResizeObserver(handleScroll);
        resizeObserver.observe(el);

        return () => {
            el.removeEventListener("scroll", handleScroll);
            resizeObserver.disconnect();
        };
    }, []);


    const scroll = (direction: 'left' | 'right') => {
        const target = scrollRef.current;
        if (!target) return;

        const style = window.getComputedStyle(target);
        const gap = parseFloat(style.columnGap || style.gap);
        const itemWidth = target.children[0].getBoundingClientRect().width + gap;
        target.scrollBy({ left: direction === 'left' ? -itemWidth : +itemWidth });
    }

    const mergedCollections = COLLECTION_UI.map(ui => {
        const serverCollection = collections?.find(c => c.id === ui.id);

        return {
            ...ui,
            id: serverCollection?.id ?? ui.id,
            name: serverCollection?.name ?? ui.name,
        }
    } )

    return (
        <div className={classes.collectionWrapper}>

            <HorizontalScrollButton onClick={() => scroll('left')} direction='left' disabled={isAtStart} />
            <ul className={classes.collection} ref={scrollRef} >
                {mergedCollections.map(el => (
                    <CollectionItem key={el.id} collectionItem={el} />
                ))
                }
            </ul>
            <HorizontalScrollButton onClick={() => scroll('right')} direction='right' disabled={isAtEnd} />

        </div>
    )
}