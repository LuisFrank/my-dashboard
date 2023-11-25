'use client'
import { usePathname } from "next/navigation";
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md";
import  styles from "./navbar.module.css";



const Navbar = () => {
    const pathname = usePathname();

    return (
    <div className={styles.container}>
        <div className={styles.title}> {pathname}</div>
        <div className={styles.menu}>
            <div className={styles.search}>
                <MdSearch></MdSearch>
                <input type="text" placeholder="Search..." className={styles.input}></input>
            </div>
            <div className={styles.icons}>
                <MdOutlineChat size={20}></MdOutlineChat>
                <MdNotifications size={20}></MdNotifications>
                <MdPublic size={20}></MdPublic>
            </div>

        </div>
        
    </div>
    );
}

export default Navbar