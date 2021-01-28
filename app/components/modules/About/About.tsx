import styles from './About.module.scss';

const persons = [];

const About: React.FC = () => {
    return (
        <div>
            <div className={styles.band}>
                <img src="https://picsum.photos/800/450" alt="band" className={styles.bandImage} />
                <div className={styles.description}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </div>
            </div>
            <div className={styles.personas}>
                <div className={styles.person}>
                    <div className={styles.pictureWrapper}>
                        <img src="https://www.placecage.com/c/500/500" alt="band" className={styles.profilePic} />
                    </div>
                </div>
                <div className={styles.person}>
                    <div className={styles.pictureWrapper}>
                        <img src="https://www.placecage.com/c/400/400" alt="band" className={styles.profilePic} />
                    </div>
                </div>
                <div className={styles.person}>
                    <div className={styles.pictureWrapper}>
                        <img src="https://www.placecage.com/c/450/450" alt="band" className={styles.profilePic} />
                    </div>
                </div>
                <div className={styles.person}>
                    <div className={styles.pictureWrapper}>
                        <img src="https://www.placecage.com/c/300/300" alt="band" className={styles.profilePic} />
                    </div>
                </div>
                <div className={styles.person}>
                    <div className={styles.pictureWrapper}>
                        <img src="https://www.placecage.com/c/350/350" alt="band" className={styles.profilePic} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;