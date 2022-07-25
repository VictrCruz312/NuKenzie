import styles from "./style.module.css";

const InsertFinance = ({ listTransactions, setListTransactions }) => {
  const newTransation = { type: "Entrada" };

  const addTransaction = (event) => {
    event.preventDefault();
    setListTransactions([...listTransactions, newTransation]);
    console.log(listTransactions);
    event.target.reset();
  };

  return (
    <section className={styles.insertFinance}>
      <form
        onSubmit={(event) => addTransaction(event)}
        className={styles.formFinance}
      >
        <label className={styles.descriptionText} htmlFor="Descricao">
          Descrição
        </label>
        <input
          className={styles.descriptionInput}
          required
          onChange={(event) => (newTransation.description = event.target.value)}
          id="Descricao"
          type="text"
          placeholder="Digite aqui sua descrição"
        />

        <span className={styles.exempleDescription}>Ex: Compra de roupas</span>

        <div className={styles.containerValueAndType}>
          <div className={styles.labelAndInput}>
            <label className={styles.insertValueText} htmlFor="Insertvalor">
              Valor
            </label>
            <div className={styles.textRightRS}>
              <input
                className={styles.inputValor}
                required
                onChange={(event) => (newTransation.value = event.target.value)}
                id="Insertvalor"
                type="text"
                placeholder="1"
              />
              <span>R$</span>
            </div>
          </div>
          <div className={styles.labelAndInput}>
            <label className={styles.typeValue} htmlFor="selectType">
              Tipo de valor
            </label>
            <select
              className={styles.selectType}
              required
              onChange={(event) => (newTransation.type = event.target.value)}
              name="selectType"
              id="selectType"
            >
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </div>
        <button className={styles.buttonInsertValue} type="submit">
          Inserir valor
        </button>
      </form>
    </section>
  );
};

export default InsertFinance;
