import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { MdPlayCircleFilled } from 'react-icons/md';
import styles from "./rightbar.module.css";

const rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="" fill></Image>
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>&#128293; Available Now</span>
                    <h3 className={styles.title}>
                        How to use the new version of the admin dashboard?
                    </h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Hic voluptas debitis blanditiis. Temporibus doloribus doloremque facere sint facilis exercitationem amet. 
                       
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled>
                        </MdPlayCircleFilled>
                        Watch
                    </button>
                </div>
                
            </div>
            <div className={styles.item}>
            <div className={styles.texts}>
                    <span className={styles.notification}>&#128293; Comming soon</span>
                    <h3 className={styles.title}>
                        How to use the new version of the admin dashboard?
                    </h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Hic voluptas debitis blanditiis. Temporibus doloribus doloremque facere sint facilis exercitationem amet. 
                      
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled>
                        </MdPlayCircleFilled>
                        Watch
                    </button>
                </div>
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    return {
        props:{

        }
    }
}

export default rightbar