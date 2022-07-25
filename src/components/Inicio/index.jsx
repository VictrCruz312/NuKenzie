import styles from "./style.module.css";

const Inicio = ({ setStatusLog }) => {
  const openDasboard = () => {
    setStatusLog(true);
  };

  return (
    <div className={styles.containerInicio}>
      <div className={styles.containerLeft}>
        <img className={styles.imgLogo} src="./assets/nuKenzie.png" alt="" />
        <h1 className={styles.textOne}>
          Centralize o controle das suas finanças
        </h1>
        <p className={styles.textTwo}>de forma rápida e segura</p>
        <button className={styles.buttonStart} onClick={openDasboard}>
          Iniciar
        </button>
      </div>
      <img
        className={styles.imgPrincipal}
        src="./assets/nuKenzie-inicio.svg"
        alt=""
      />
    </div>
  );
};

export default Inicio;
