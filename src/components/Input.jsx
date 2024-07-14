import { cloneElement } from "react";
import { useController } from "react-hook-form";
import styles from "./Input.module.css";

export const Input = ({
  label,
  children,
  control,
  name,
  placeholder,
  ...props
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <label className={styles.input}>
      <span
        className={styles.input_label}
        style={{ color: error?.message ? "#E53935" : "#FFFFFF" }}
      >
        {label}
      </span>
      {children ? (
        cloneElement(children, {
          ...field,
          className: `${styles.input_box} ${
            error?.message && styles.input_error_message
          } `,
          placeholder: error?.message ? error?.message : placeholder,
        })
      ) : (
        <input
          className={`${styles.input_box} ${
            error?.message && styles.input_error_message
          } `}
          type="text"
          placeholder={error?.message ? error?.message : placeholder}
          {...props}
          {...field}
        />
      )}
    </label>
  );
};
