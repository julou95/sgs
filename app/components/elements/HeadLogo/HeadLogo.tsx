import cx from 'classnames';
import styles from './HeadLogo.module.scss';

const HeadLogo: React.FC = () => (
    <a href="#">
        <div className={cx(styles.text, styles.full)}>
            SNITCHES GET STITCHES
        </div>
        <div className={cx(styles.text, styles.small)}>
            SGS
        </div>
    </a>
);

export default HeadLogo;
