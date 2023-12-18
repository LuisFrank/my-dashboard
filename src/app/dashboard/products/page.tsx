import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css"
import Image from "next/image";
const ProductsPage = () => {
    return (
        <div className={styles.container}>
        <div className={styles.top}>
            <Search placeholder="Search for product..."/>
            <Link href="/dashboard/products/add">
                <button className={styles.addButton}>Add New</button>
            </Link>
           
        </div>  
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Price</td>
                    <td>Created at</td>
                    <td>Stock</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className={styles.product}>
                            <Image src="/noproduct.png" alt="" width={40} height={40} className={styles.productImage} ></Image>
                            Iphone
                        </div>
                    </td>
                    <td>Dec</td>
                    <td>$999</td>
                    <td>13.01.200</td>
                    <td>72</td>
                    <td>
                        <div className={styles.buttons}>
                            <Link href="/dashboard/products/test">
                                <button className={`${styles.button} ${styles.view}`}>
                                    View
                                </button>
                            </Link>
                        
                            <button className={`${styles.button} ${styles.delete}`}>
                                Delete
                            </button>
                           
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <Pagination></Pagination>
    </div>
    );
}

export default ProductsPage