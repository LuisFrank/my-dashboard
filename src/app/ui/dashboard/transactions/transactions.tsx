import { GetServerSideProps } from 'next';
import Image from 'next/image';
import styles from './transactions.module.css'
const transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}> Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>                    
                        <td>
                            <Image src="/noavatar.png" alt='' width={40} height={40} className={styles.userImage}></Image>
                            Jhon Doe
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>
                                Cancelled
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>           
                    <tr>                    
                        <td>
                            <Image src="/noavatar.png" alt='' width={40} height={40} className={styles.userImage}></Image>
                            Jhon Doe
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>
                                Cancelled
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>           
                    <tr>                    
                        <td>
                            <Image src="/noavatar.png" alt='' width={40} height={40} className={styles.userImage}></Image>
                            Jhon Doe
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>
                                Cancelled
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>           
                    <tr>                    
                        <td>
                            <Image src="/noavatar.png" alt='' width={40} height={40} className={styles.userImage}></Image>
                            Jhon Doe
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>
                                Cancelled
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>           
                </tbody>
            </table>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    return {
        props:{

        }
    }
}

export default transactions