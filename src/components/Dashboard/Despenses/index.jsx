import styles from "./style.module.css";
import "./style.css";
import { useEffect, useState } from "react";

const Despenses = ({ listTransactions, setListTransactions }) => {
  const [buttonTodos, setButtonTodos] = useState(true);
  const [buttonDespesa, setButtonDespesa] = useState(false);
  const [buttonEntrada, setButtonEntrada] = useState(false);

  const [filtered, setFiltered] = useState(listTransactions);
  useEffect(() => {
    setFiltered(listTransactions);
  }, [listTransactions]);

  const filter = (filtro) => {
    if (filtro === "Todos") {
      setFiltered(listTransactions);
      setButtonTodos(true);
      setButtonDespesa(false);
      setButtonEntrada(false);
    } else if (filtro === "Despesas") {
      setFiltered(
        listTransactions.filter((transaction) => transaction.type === "Despesa")
      );
      setButtonTodos(false);
      setButtonDespesa(true);
      setButtonEntrada(false);
    } else {
      setFiltered(
        listTransactions.filter((transaction) => transaction.type === "Entrada")
      );
      setButtonTodos(false);
      setButtonDespesa(false);
      setButtonEntrada(true);
    }
  };

  const deleteFinance = (btn) => {
    const newlist = listTransactions.filter(
      (_, index) => index !== parseInt(btn.parentNode.id)
    );
    setListTransactions(newlist);
  };

  return (
    <section className={styles.containerDespenses}>
      <div className={styles.filter}>
        <h2 className={styles.title}>Resumo financeiro</h2>
        <nav className={styles.navigationFilter}>
          <button
            onClick={(event) => filter("Todos")}
            className={buttonTodos ? "btnFilterSelect" : "btnFilter"}
          >
            Todos
          </button>
          <button
            onClick={(event) => filter("Entradas")}
            className={buttonEntrada ? "btnFilterSelect" : "btnFilter"}
          >
            Entradas
          </button>
          <button
            onClick={(event) => filter("Despesas")}
            className={buttonDespesa ? "btnFilterSelect" : "btnFilter"}
          >
            Despesas
          </button>
        </nav>
      </div>
      <ul className={styles.listDespenses}>
        {filtered.map((transaction, index) => (
          <li
            className={
              transaction.type === "Entrada"
                ? styles.positiveEntries
                : styles.transaction
            }
            key={index}
          >
            <div className={styles.containerTransaction}>
              <h3 className={styles.description}>{transaction.description}</h3>
              <div className={styles.containerTransactionRight}>
                <p className={styles.value}>
                  R$ {parseInt(transaction.value)},00
                </p>
                <button
                  onClick={(event) => deleteFinance(event.target)}
                  className={styles.btnDelete}
                  id={index}
                >
                  <img src="./assets/trash.png" alt="lixeira" />
                </button>
              </div>
            </div>
            <span className={styles.type}>{transaction.type}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Despenses;
