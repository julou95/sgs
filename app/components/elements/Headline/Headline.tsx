import cx from 'classnames';
import styles from './Headline.module.scss';


export enum tags {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3'
}

type Props = {
    tag: string,
    text: string,
}

const Headline: React.FC<Props> = ({ tag, text }) => (
    <div className={styles.headlineContainer}>
        <div className={cx(styles.headlineWrapper, styles[tag])}>
            <h1>{text}</h1>
        </div>
    </div>
);

export default Headline;