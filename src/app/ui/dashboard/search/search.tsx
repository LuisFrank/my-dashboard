import { MdSearch } from 'react-icons/md';
import styles from './search.module.css';

const search = ({placeholder}:any) => {
    return (
        <div className={styles.container}>
            <MdSearch></MdSearch>
            <input type='text' placeholder={placeholder} className={styles.input}></input>
        </div>
    );
}

export default search