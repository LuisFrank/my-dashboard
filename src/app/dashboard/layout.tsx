import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import styles from "../ui/dashboard/dashboard.module.css"
import Footer from "../ui/dashboard/footer/footer";


export default function layout ({
        children
    }:{
        children: React.ReactNode
    }) {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar></Sidebar>
            </div>
            <div className={styles.content}>
                <Navbar></Navbar>
                {children}
                
                <Footer></Footer>
            </div>
        </div>
    );
}