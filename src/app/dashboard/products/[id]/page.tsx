import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image';

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/avatar.png" alt="" width={40} height={40} className={styles.productImage}></Image>
                </div>
                Iphone
            </div>
            <div className={styles.formContainer}>
                <form action='' className={styles.form}>
                <label> Title</label>
                <input type='text' name='title' placeholder='Jhon Doe'></input>
                <label> Price</label>
                <input type='number' name='price' placeholder='JhonDoe@gmail.com'></input>
                <label> Stock </label>
                <input type='number' name='stock'></input>
                <label> Color</label>
                <input type='text' name='color' placeholder='1234567'></input>
                <label> Size </label>
                <textarea name='size' placeholder='New York'></textarea>
                <label>Cat</label>
                <select name="cat" id="cat">                   
                    <option value='kitchen'>kitchen</option>
                    <option value='computer'>computer</option>    
                </select>
                <label> Description</label>
                <textarea name='desc' id="desc" rows={10} placeholder='description'></textarea>
                <button>Update</button>
                </form>
            </div>
           
        </div>
    );
}


export default SingleProductPage