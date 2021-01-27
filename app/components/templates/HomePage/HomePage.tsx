import styles from './HomePage.module.scss';

import Navigation from '@element/Navigation/Navigation';

const HomePage: React.FC = () => (
    <>
        <Navigation />
        <section className={styles.section}>
            1
        </section>
        <section className={styles.section}>
            2
        </section>
        <section className={styles.section}>
            3
        </section>
    </>
);

export default HomePage;
