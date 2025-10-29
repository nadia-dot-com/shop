import { useState } from 'react'
import { useInterval } from '../../hooks/useInterval'
import { PRESENTATION } from '../../data/presentation';
import { PresentationItem } from './PresentationItem/PresentationItem';

import classes from './Presentation.module.css'

const DELAY = 3000;
export function Presentation() {
    const [index, setIndex] = useState<number>(0);

    useInterval(() => {
        setTimeout(() => {
            setIndex(prev => (prev + 1) % PRESENTATION.length)
        }, 1000)
    }, DELAY)

    return (
        <div className={classes.presentation}>
            <PresentationItem array={PRESENTATION} index={index} currentItem={PRESENTATION[index]}/>
        </div >
    )
}