import { useState } from 'react';
import cx from 'classnames';
import ButtonLink from '@element/ButtonLink/ButtonLink';
import styles from './MobileNavigation.module.scss';

const MobileNavigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavi = () => {
        setTimeout(() => {
            setIsOpen(!isOpen);
        }, 200)
    };

    return (
        <>
            <div onClick={toggleNavi} className={cx(styles.icon, {[styles.open]: isOpen})}>
                <div className={cx(styles.line, styles.top)} />
                <div className={cx(styles.line, styles.center)} />
                <div className={cx(styles.line, styles.bottom)} />
            </div>
            {isOpen &&
                <div className={styles.overlay}>
                    <div className={styles.naviOpen}>
                        <div className={styles.navItemWrapper}>
                            <ButtonLink href="#" text="HOME" onClick={toggleNavi} />
                            <ButtonLink href="#news" text="NEWS" onClick={toggleNavi} />
                            <ButtonLink href="#music" text="MUSIC" onClick={toggleNavi} />
                            <ButtonLink href="#about" text="ABOUT" onClick={toggleNavi} />
                            <ButtonLink href="#contact" text="CONTACT" onClick={toggleNavi} />
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default MobileNavigation;