import type { ReactNode } from "react";

import classes from "./Wrapper.module.css";

export function Wrapper({ children }: { children: ReactNode }) {
  return <div className={classes.wrapper}>{children}</div>;
}
