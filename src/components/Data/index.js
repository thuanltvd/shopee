import classNames from "classnames/bind";
import styles from './ListProducts.module.scss';

import ListProduct from "./ListProducts";

function Data({children}) {
    const cx = classNames.bind(styles);
    return (
         <div className={cx('list')}>{children}</div>
         );
}

export default Data;