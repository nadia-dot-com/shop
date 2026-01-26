import { useEffect, useRef, useState } from "react";
import { HorizontalScrollButton } from "../../../components/HorizontalScrollButton/HorizontalScrollButton";
import { CollectionItem } from "./CollectionItem/CollectionItem";
import { useCollections } from "../../../hooks/collection/useCollections";
import { DataLoader } from "../../../components/DataLoader/DataLoader";

import classes from "./Collection.module.css";

export function Collection() {
  const scrollRef = useRef<HTMLUListElement | null>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const { data: collections, isLoading, error } = useCollections();

  useEffect(() => {
    if (!collections) return;

    const el = scrollRef.current;
    if (!el) return;

    const THRESHOLD = 5;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;

      const canScroll = scrollWidth > clientWidth + THRESHOLD;

      setIsAtStart(!canScroll || scrollLeft <= THRESHOLD);
      setIsAtEnd(
        !canScroll || scrollLeft + clientWidth >= scrollWidth - THRESHOLD,
      );
    };

    el.addEventListener("scroll", handleScroll);
    handleScroll();

    const resizeObserver = new ResizeObserver(handleScroll);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, [collections]);

  const scroll = (direction: "left" | "right") => {
    const target = scrollRef.current;
    if (!target) return;

    const style = window.getComputedStyle(target);
    const gap = parseFloat(style.columnGap || style.gap);
    const itemWidth = target.children[0].getBoundingClientRect().width + gap;
    target.scrollBy({ left: direction === "left" ? -itemWidth : +itemWidth });
  };

  return (
    <DataLoader loading={isLoading} loaded={!!collections} error={error}>
      <section className={classes.collectionWrapper}>
        <HorizontalScrollButton
          onClick={() => scroll("left")}
          direction="left"
          disabled={isAtStart}
        />
        <ul className={classes.collection} ref={scrollRef}>
          {(collections || []).map((el) => (
            <CollectionItem key={el.id} collectionItem={el} />
          ))}
        </ul>
        <HorizontalScrollButton
          onClick={() => scroll("right")}
          direction="right"
          disabled={isAtEnd}
        />
      </section>
    </DataLoader>
  );
}
