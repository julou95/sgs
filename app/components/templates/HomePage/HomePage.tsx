import styles from './HomePage.module.scss';

import Navigation from '@element/Navigation/Navigation';
import Headline, { tags } from '@element/Headline/Headline';
import Slider from '@module/Slider/Slider';
import MusicList from '@module/MusicList/MusicList';
import About from '@module/About/About';

const HomePage: React.FC = () => (
    <>
        <Navigation />
        <section className={styles.section}>
            <div id="news" className={styles.firstAnchor} />
            <div className={styles.content}>
                <Headline tag={tags.H1} text="NEWS" />
                <Slider />
            </div>
        </section>
        <section className={styles.section}>
            <div id="music" className={styles.anchor} />
            <div className={styles.content}>
                <Headline tag={tags.H1} text="MUSIC" />
                <MusicList />
            </div>
        </section>
        <section className={styles.section}>
            <div id="about" className={styles.anchor} />
            <div className={styles.content}>
                <Headline tag={tags.H1} text="ABOUT" />
                <About />
            </div>
        </section>
        <section className={styles.section}>
            <div id="contact" className={styles.anchor} />
            <div className={styles.content}>
                <Headline tag={tags.H1} text="CONTACT" />
            </div>
        </section>
        <section className={styles.footer}>
            <div id="contact" className={styles.anchor} />
            <div className={styles.content}>
                FOOTER
            </div>
        </section>
    </>
);

export default HomePage;
