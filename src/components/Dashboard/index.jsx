import { useState } from "react";
import Despenses from "./Despenses";
import HeaderPage from "./HeaderPage";
import InsertFinance from "./InsertFinance";
import styles from "./style.module.css";

const Dashboard = ({ setStatusLog }) => {
  const [listTransactions, setListTransactions] = useState([]);
  return (
    <div className={styles.containerDashboard}>
      <HeaderPage setStatusLog={setStatusLog} />
      <main className={styles.mainDashboard}>
        <InsertFinance
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
        <Despenses
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </main>
    </div>
  );
};

export default Dashboard;
