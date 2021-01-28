import { useState, useEffect } from 'react';
import cx from 'classnames';
import NewsSlide from '@element/NewsSlide/NewsSlide';

import styles from './Slider.module.scss';


const slides = [
    {
        title: '1 Title',
        text: '1 This is is a text. lorem blabla',
        imageUrl: 'https://picsum.photos/800/450',
        linkText: 'get this',
        linkUrl: 'https://pointerpointer.com/',
    },
    {
        title: '2 Title',
        text: '2 This is is a text. lorem blabla',
        imageUrl: 'https://picsum.photos/800/450',
        linkText: 'get this',
        linkUrl: 'https://pointerpointer.com/',
    },
    {
        title: '3 Title',
        text: '3 This is is a text. lorem blabla',
        imageUrl: 'https://picsum.photos/800/450',
        linkText: 'get this',
        linkUrl: 'https://pointerpointer.com/',
    },
    {
        title: '4 Title',
        text: '4 This is is a text. lorem blabla',
        imageUrl: 'https://picsum.photos/800/450',
        linkText: 'get this',
        linkUrl: 'https://pointerpointer.com/',
    },
    {
        title: '5 Title',
        text: '5 This is is a text. lorem blabla',
        imageUrl: 'https://picsum.photos/800/450',
        linkText: 'get this',
        linkUrl: 'https://pointerpointer.com/',
    }
];

const Slider: React.FC = () => {
    const [wrapperWidth, setWrapperWidth] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const [isGrabbing, setIsGrabbing] = useState(false);
    const [clientX, setClientX] = useState(0);

    let isScrolling;

    useEffect(() => {
        sizeHandler();
        const wrapper = document.getElementById('slider');
        wrapper.addEventListener('scroll', scrollHandler);
        window.addEventListener('resize', sizeHandler);

        return () => {
            window.removeEventListener('resize', sizeHandler);
            wrapper.removeEventListener('scoll', scrollHandler);
        }
    }, []);

    const sizeHandler = () => {
        const element = document.getElementById('slider');
        setWrapperWidth(element.clientWidth);
    };

    const scrollHandler = () => {
        window.clearTimeout( isScrolling );
        isScrolling = setTimeout(() => {
            const el = document.getElementById('slider');
            setActiveSlide(el.scrollLeft/el.clientWidth);
        }, 66);
    };

    const toggleSlide = (index) => {
        const el = document.getElementById('slider');
        setActiveSlide(index);
        el.scrollTo({
            top: 0,
            left: index*wrapperWidth,
            behavior: 'smooth'
        });
    };

    const mouseMoveHandler = (e) => {
        if (!isGrabbing) return;
        e.preventDefault();
        const wrapper = document.getElementById('slider');
        const scroll = e.clientX - clientX;
        wrapper.scrollTo({
            top: 0,
            left: wrapper.scrollLeft - scroll,
            behavior: 'smooth',
        });
    };

    const grabHandler = (e) => {
        setIsGrabbing(true);
        setClientX(e.clientX);
    };
    const leaveHandler = () => {
        setIsGrabbing(false);
    };

    return (
        <>
            <div
                id="slider"
                className={styles.slider}
                onMouseDown={grabHandler}
                onMouseUp={leaveHandler}
                onMouseMove={mouseMoveHandler}
                onMouseLeave={leaveHandler}
            >
                <div id="wrapper" className={styles.sliderWrapper}>
                    {
                        slides.map(slide =>
                            <div
                                key={slide.title}
                                style={{ width: `${wrapperWidth}px` }}
                                className={styles.slide}
                            >
                                <NewsSlide {...slide} />
                            </div>
                        )
                    }
                </div>
            </div>
            <div className={styles.navigation}>
                {
                    slides.map((slide, index) =>
                        <div
                            className={styles.dot}
                            key={index}
                            onClick={() => toggleSlide(index)}
                        >
                            <div className={cx(styles.visibleDot, {[styles.active]: activeSlide === index})} />
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Slider;