import { Collection } from "./Collection/Collection";
import { PopularCategories } from "./PopularCategories/PopularCategories";
import { Presentation } from "./Presentation/Presentation";
import { Sale } from "./Sale/Sale";
import { OurShowroom } from "./OurShowroom/OurShowroom";
import classes from "./MainPage.module.css";

export function MainPage() {
  return (
    <div className={classes.mainPageContainer}>
      <Presentation />
      <PopularCategories />
      <Collection />
      <Sale />
      <OurShowroom />
    </div>
  );
}
