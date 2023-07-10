import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

// import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const items = [
    { name: 'hàng mới về', href: '/a' },
    { name: 'hàng bán chạy', href: '/b' },
    { name: 'hàng giảm giá', href: '/c' },
];

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <span className= {cx('span')}>Sidebar</span>
            <div className={cx('items')}>
                <ul>
                    {items.map((item) => (
                        <li key={item} className = {cx('item')}>
                            <Button href={item.href} large>{item.name}</Button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
