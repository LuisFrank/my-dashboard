import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image';

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/avatar.png" alt="" width={40} height={40} className={styles.userImage}></Image>
                </div>
                Jhon Doe
            </div>
            <div className={styles.formContainer}>
                <form action='' className={styles.form}>
                <label> UserName</label>
                <input type='text' name='username' placeholder='Jhon Doe'></input>
                <label> Email</label>
                <input type='email' name='email' placeholder='JhonDoe@gmail.com'></input>
                <label> Password</label>
                <input type='password' name='password'></input>
                <label> Phone</label>
                <input type='text' name='phone' placeholder='1234567'></input>
                <label> Address</label>
                <textarea name='address' placeholder='New York'></textarea>
                <label> Is Admin?</label>
                <select name="isAdmin" id="isAdmin">
                    <option value='false' selected> Is Admin? </option>
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>    
                </select>
                <label> Is Active?</label>
                <select name="isActive" id="isActive">
                    <option value='true' selected> Is Active? </option>
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>    
                </select>
                <button>Update</button>
                </form>
            </div>
           
        </div>
    );
}


export default SingleUserPage