import { useEffect, useRef, useState } from "react";
import { ScrollButtonX } from "../../ButtonsForScroll/ScrollButtonX";
import { COLLECTION } from "../../data/collection";

import classes from './Collection.module.css';
import { CollectionItem } from "./CollectionItem/CollectionItem";

export function Collection() {
    const scrollRef = useRef<HTMLUListElement | null>(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

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
        if (!scrollRef.current) return;
        const target = scrollRef.current;
        const itemWidth = target.children[0].getBoundingClientRect().width + 25;
        target.scrollBy({ left: direction === 'left' ? -itemWidth : +itemWidth });
    }

    return (
        <div className={classes.collectionWrapper}>

            <ScrollButtonX onClick={() => scroll('left')} direction='left' disabled={isAtStart} />
            <ul className={classes.collection} ref={scrollRef}  >
                <CollectionItem array={COLLECTION} />
            </ul>
            <ScrollButtonX onClick={() => scroll('right')} direction='right' disabled={isAtEnd} />

        </div>
    )
}