import classes from "./RadioGroup.module.scss";

export function RadioGroup<T extends { id: string | number; name: string }>({
  title,
  options,
  onClick,
  method,
}: {
  title: string;
  options: T[];
  method: T | null;
  onClick: (option: T) => void;
}) {
  return (
    <fieldset className={classes.wrapper}>
      <legend className={classes.title}>{title}</legend>

      {options.map((option) => (
        <div className={classes.option} key={option.id}>
          <label>
            <input
              className={classes.radio}
              type="radio"
              name="radio-group"
              checked={method?.id === option.id}
              onChange={() => onClick(option)}
            />
            {option.name}
          </label>
        </div>
      ))}
    </fieldset>
  );
}
