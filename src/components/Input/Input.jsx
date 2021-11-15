import "./styles.css";

function Input({ type = "input", labelName, name, value, onChange }) {
  const handleChange = (e) => {
    const { value } = e.target;

    onChange(value);
  };

  return (
    <div>
      <label>
        {labelName}
        {type === "input" ? (
          <input
            name={name}
            type="text"
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

export { Input };
