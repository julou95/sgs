import styles from './ButtonLink.module.scss';

type Props = {
    href: string,
    text: string,
    onClick?: any,
}

const ButtonLink: React.FC<Props> = ({ href, text , onClick}) => (
    <a href={href} onClick={onClick} className={styles.buttonLink}>
        {text}
    </a>
);

export default ButtonLink;