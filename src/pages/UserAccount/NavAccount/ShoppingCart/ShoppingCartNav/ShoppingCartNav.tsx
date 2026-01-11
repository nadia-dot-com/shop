import { cn } from '../../../../../utils/cn';
import { STEP } from '../step';

import classes from './ShoppingCartNav.module.css'

export function ShoppingCartNav({step}: {step: number}) {

    return (
        <div className={classes.steps}>
        <span className={cn(classes.stepSpan, step === STEP.CART && classes.activeStep)}>
          Cart
          <svg width="30" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <path d="M8 4l8 8-8 8" />
          </svg>
        </span>
        <span className={cn(classes.stepSpan, step === STEP.ADDRESS && classes.activeStep)}>
          Address
          <svg width="30" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <path d="M8 4l8 8-8 8" />
          </svg>
        </span>
        <span className={cn(classes.stepSpan, step === STEP.REVIEW && classes.activeStep)}>
          Delivery / Payment
          <svg width="30" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <path d="M8 4l8 8-8 8" />
          </svg>
        </span>
        <span className={cn(classes.stepSpan, step === STEP.COMPLETE && classes.activeStep)}>
          Complete
        </span>
      </div>
    )
}