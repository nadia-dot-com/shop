import { PresentationProps } from "../../../../types/presentation";
import { cn } from "../../../../utils/cn";
import { Button } from "../../../../components/Button/Button";

import classes from "./PresentationItem.module.css";
import { useShoppingNavigation } from "../../../../hooks/useShoppingNavigation";
import { getImagePath } from "../../../../utils/getImagePath";

export function PresentationItem({
  array,
  index,
  currentItem,
}: {
  array: PresentationProps[];
  index: number;
  currentItem: PresentationProps;
}) {
  const { navigateToCategory } = useShoppingNavigation();

  return array.map((current, i) => (
    <div className={classes.slide} key={current.id}>
      <img
        src={getImagePath(current.img)}
        alt={current.title}
        className={cn(classes.image, i === index && classes.active)}
        width="1760"
        height="600"
        fetchPriority="high"
      />
      <div
        className={cn(
          classes.content,
          i === index && classes.active,
          i === 0 && classes.contentColor1,
        )}
      >
        <h1 className={classes.title}>{current.title}</h1>
        <p className={classes.desc}>{current.desc}</p>
        <Button
          bgColor="white"
          textColor="black"
          onClick={() => navigateToCategory(currentItem.category)}
          text={"• SHOP NOW"}
        />
      </div>
    </div>
  ));
}
