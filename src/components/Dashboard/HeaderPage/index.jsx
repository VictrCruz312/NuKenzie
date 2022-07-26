import styles from "./style.module.css";

const HeaderPage = ({ setStatusLog }) => {
  const closeDashboard = () => {
    setStatusLog(false);
  };

  return (
    <header className={styles.header}>
      <img className={styles.imgLogo} src="./assets/nuKenzie.svg" alt="" />
      <button onClick={closeDashboard} className={styles.backInit}>
        Inicio
      </button>
    </header>
  );
};

export default HeaderPage;
