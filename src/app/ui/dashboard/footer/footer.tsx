import { GetServerSideProps } from 'next';
import styles from "./footer.module.css";

const footer = () => {
    return (
        
        <div className={styles.container}>
            <div className={styles.logo}>Florentino Dev</div>
            <div className={styles.logo}>© All rights reserved.</div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    return {
        props:{

        }
    }
}

export default footer