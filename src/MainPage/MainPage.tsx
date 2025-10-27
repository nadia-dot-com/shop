import { Collection } from '../component/Collection/Collection';
import { PopularCategories } from '../component/PopularCategories/PopularCategories';
import { Presentation } from '../component/Presentation/Presentation';
import classes from './MainPage.module.css';

export function MainPage() {

    return (
        <div className={classes.mainPageContainer}>
            < Presentation />
            <PopularCategories/>
            <Collection/>
        </div>
    )
}