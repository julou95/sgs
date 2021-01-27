import styles from './ScrollDown.module.scss';


const ScrollDown: React.FC = () => (
    <div className={styles.downButton}>
        <div className={styles.arrowLeft} />
        <div className={styles.arrowRight} />
    </div>
);

export default ScrollDown;