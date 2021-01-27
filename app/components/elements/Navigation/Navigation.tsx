import { useEffect } from 'react';
import HeadLogo from '@element/HeadLogo/HeadLogo';
import Icon, { Icons, Sizes } from '@element/Icon/Icon';
import styles from './Navigation.module.scss';

const Navigation: React.FC = () => {
    useEffect(() => {
        const element = document.getElementById('HEADER');
        const observer = new IntersectionObserver(
            ([e]) => {
                console.log('LJ - e.intersectionRatio:', window.pageYOffset, window.innerHeight);
                return e.target.classList.toggle(styles.sticky, e.intersectionRatio < 1 &&  window.pageYOffset > window.innerHeight)
            },
            {threshold: [1]}
        );
        observer.observe(element)
    }, []);

    return (
        <div id="HEADER" className={styles.navBar}>
            <div className={styles.headLogo}>
                <HeadLogo />
            </div>
            <div className={styles.icons}>
                <a href="#news" className={styles.iconButton}>
                    <Icon icon={Icons.WHATSHOT} size={Sizes.MD} />
                </a>
                <a href="#music">
                    <Icon icon={Icons.SPEAKER} size={Sizes.MD} />
                </a>
                <a href="#contact">
                    <Icon icon={Icons.MAILOUTLINE} size={Sizes.MD} />
                </a>
            </div>
        </div>
    );
};

export default Navigation;