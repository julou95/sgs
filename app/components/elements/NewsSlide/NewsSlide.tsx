import styles from './NewsSlide.module.scss';

import Icon, {Icons, Sizes} from '@element/Icon/Icon';

type Props = {
    title: string,
    text: string,
    imageUrl: string,
    linkText: string,
    linkUrl: string,
}

const NewsSlide: React.FC<Props> = ({title, text, imageUrl, linkUrl, linkText}) => {
 return (
     <div className={styles.slide}>
         <img src={imageUrl} className={styles.image} alt={title} />
         <div className={styles.content}>
             <div>
                <h2>{title}</h2>
                {text}
             </div>
             {linkText && linkUrl &&
                 <div>
                    <a className={styles.link} href={linkUrl} target="_blank">
                        {linkText}
                        <Icon icon={Icons.CHEVRONRIGHT} size={Sizes.SM} />
                    </a>
                 </div>
             }
         </div>
     </div>
 )
};

export default NewsSlide;