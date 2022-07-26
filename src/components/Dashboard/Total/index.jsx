import styles from "./style.module.css";

const Total = ({ listTransactions }) => {
  return (
    <div className={styles.containerTotal}>
      <div className={styles.containerValor}>
        <p className={styles.text}>Valor total:</p>
        <p className={styles.valueTotal}>
          {"$ " +
            listTransactions.reduce((a, b) => {
              if (b.type === "Entrada") {
                return parseInt(b.value) + a;
              } else {
                return a - parseInt(b.value);
              }
            }, 0)}
        </p>
      </div>
      <span className={styles.aviso}>O valor se refere ao saldo</span>
    </div>
  );
};

export default Total;
