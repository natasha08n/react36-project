import { useCallback, memo } from "react";

import "./styles.css";

function Input({
  type = "input",
  labelName,
  name,
  value,
  onChange,
  isTextArea,
}) {
  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;

      onChange(value);
    },
    [onChange]
  );

  return (
    <div>
      <label>
        {labelName}
        {!isTextArea ? (
          <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            className="input"
          />
        ) : (
          <textarea name={name} value={value} onChange={handleChange} />
        )}
      </label>
    </div>
  );
}

const InputMemo = memo(Input);

export { InputMemo as Input };
