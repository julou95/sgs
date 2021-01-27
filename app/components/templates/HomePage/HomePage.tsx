import styles from './HomePage.module.scss';

import Navigation from '@element/Navigation/Navigation';

const HomePage: React.FC = () => (
    <>
        <Navigation />
        <section id="news" className={styles.section}>
            <div className={styles.content}>
                <div className={styles.headline}>
                    <h1>NEWS : </h1>
                </div>
            </div>
        </section>
        <section id="music" className={styles.section}>
            <div className={styles.content}>
                <div className={styles.headline}>
                    <h1>MUSIC : </h1>
                </div>
            </div>
        </section>
        <section id="contact" className={styles.section}>
            <div className={styles.content}>
                <div className={styles.headline}>
                    <h1>CONTACT : </h1>
                </div>
            </div>
        </section>
    </>
);

export default HomePage;
