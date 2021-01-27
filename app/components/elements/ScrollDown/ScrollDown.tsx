import styles from './ScrollDown.module.scss';


const ScrollDown: React.FC = () => (
    <a href="#news">
        <div className={styles.downButton}>
            <div className={styles.arrowLeft} />
            <div className={styles.arrowRight} />
        </div>
    </a>
);

export default ScrollDown;