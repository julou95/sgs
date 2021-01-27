import { useEffect } from 'react';
import HeadLogo from '@element/HeadLogo/HeadLogo';
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
                {/*<div className={styles.skewedBorder} />*/}
            </div>
        </div>
    );
};

export default Navigation;