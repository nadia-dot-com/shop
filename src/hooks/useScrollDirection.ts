import { useRef, useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

export function useScrollDirection() {
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const lastYRef = useRef(window.scrollY);

    useWindowEvent("scroll", () => {
        const currentY = window.scrollY;

        if(currentY <lastYRef.current) {
            setIsScrollingUp(true);
        } else if(currentY > lastYRef.current) {
            setIsScrollingUp(false);
        }

        lastYRef.current = currentY;
    });

    return {isScrollingUp};
}