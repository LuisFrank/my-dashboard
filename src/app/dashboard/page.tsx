import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
import styles from '../ui/dashboard/dashboard.module.css'
export default function Dashboard() {
  return (
        <div className={styles.wrapper}>
          <div className={styles.main}>
          <div className={styles.cards}>
              <Card></Card>
              <Card></Card>
              <Card></Card>

          </div>
            <Transactions></Transactions>
            <Chart></Chart>
          </div>
          <div className={styles.side}>
              <Rightbar></Rightbar>
          </div>
        </div>
    )
}
  