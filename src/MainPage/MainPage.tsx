import { Collection } from './Collection/Collection';
import { PopularCategories } from './PopularCategories/PopularCategories';
import { Presentation } from './Presentation/Presentation';
import classes from './MainPage.module.css';
import { Sale } from './Sale/Sale';

export function MainPage() {

    return (
        <div className={classes.mainPageContainer}>
            < Presentation />
            <PopularCategories />
            <Collection />
            <Sale />
            <OurShowroom/>
        </div>
    )
}