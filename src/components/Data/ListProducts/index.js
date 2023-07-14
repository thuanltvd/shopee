import styles from './ListProducts.module.scss';
import classNames from 'classnames/bind';

import Button from '~/components/Button';

function ListProduct() {
    const cx = classNames.bind(styles);

    const datas = [
        { name: 'trái cây', href: '/a' },
        { name: 'rau, củ', href: '/b' },
        { name: 'sữa', href: '/c' },
    ];
    return (
        <div className={cx('list')}>
            <ul className={cx('flex-list')}>
                {datas.map((data) => (
                    <li key={data} className={cx('data')}>
                        <Button href={data.href} small>
                            {data.name}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListProduct;
