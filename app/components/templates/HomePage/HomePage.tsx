import styles from './HomePage.module.scss';

import Navigation from '@element/Navigation/Navigation';
import Headline, { tags } from '@element/Headline/Headline';

const HomePage: React.FC = () => (
    <>
        <Navigation />
        <section id="news" className={styles.section}>
            <div className={styles.content}>
                <Headline tag={tags.H1} text="NEWS" />
            </div>
        </section>
        <section id="music" className={styles.section}>
            <div className={styles.content}>
                <Headline tag={tags.H1} text="MUSIC" />
            </div>
        </section>
        <section id="contact" className={styles.section}>
            <div className={styles.content}>
                <Headline tag={tags.H1} text="CONTACT" />
            </div>
        </section>
    </>
);

export default HomePage;
