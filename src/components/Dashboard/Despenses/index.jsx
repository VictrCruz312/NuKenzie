import styles from "./style.module.css";

const Despenses = ({ listTransactions, setListTransactions }) => {
  return (
    <section className={styles.containerDespenses}>
      <div className={styles.filter}>
        <h2 className={styles.title}>Resumo financeiro</h2>
        <nav className={styles.navigationFilter}>
          <button className={styles.btnFilter}>Todos</button>
          <button className={styles.btnFilter}>Entradas</button>
          <button className={styles.btnFilter}>Despesas</button>
        </nav>
      </div>
      <ul className={styles.listDespenses}>
        {listTransactions.map((transaction, index) => (
          <li className={styles.transaction} key={index}>
            <div className={styles.containerTransaction}>
              <h3 className={styles.description}>{transaction.description}</h3>
              <p className={styles.value}>{transaction.value}</p>
              <button className={styles.btnDelete}>delete</button>
            </div>
            <span className={styles.type}>{transaction.type}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Despenses;
