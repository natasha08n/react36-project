import styles from "./Button.module.css";

function Button({ name, type, onClick }) {
  return (
    <button type={type} className={styles.base} onClick={onClick}>
      {name}
    </button>
  );
}

Button.defaultProps = {
  name: "Добавить",
};

export { Button };
