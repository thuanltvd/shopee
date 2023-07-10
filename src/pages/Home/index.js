import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    const images = [
        {
            img: '1',
            href: '/a',
        },
        {
            img: '2',
            href: '/b',
        },
        {
            img: '3',
            href: '/c',
        },
        {
            img: '4',
            href: '/a',
        },
        {
            img: '5',
            href: '/b',
        },
        {
            img: '6',
            href: '/c',
        },
    ];
    return (
        <div className={cx('home')}>
            <h4 className= {cx('title')}>san pham noi bat</h4>
            <FontAwesomeIcon icon={faLessThan} className={cx('icon', 'left')} />
            {images.map((image) => (
                <div key={image} className={cx('inner')}>
                    <a href={image.href} className={cx('link')}>
                        {image.img}
                    </a>
                </div>
            ))}
            <FontAwesomeIcon icon={faGreaterThan} className={cx('icon', 'icon__right')} />
        </div>
    );
}

export default Home;
