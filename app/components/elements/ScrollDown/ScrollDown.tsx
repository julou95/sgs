import styles from './ScrollDown.module.scss';
import Icon, { Icons, Sizes } from '@element/Icon/Icon';


const ScrollDown: React.FC = () => (
    <a href="#news" className={styles.iconLink}>
        <Icon icon={Icons.SCROLLDOWN} size={Sizes.LG} />
    </a>
);

export default ScrollDown;