import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import ListProduct from '~/components/Data/ListProducts';

import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setRearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setRearchResult([1, 2, 3]);
        }, 3000);
    }, []);

    return (
        <header className={cx('wrapper')}>
          <div className = {cx('inner')}>
            <div className={cx('inner__top')}>
                <div className={cx('logo')}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqTT7ntYf4XanQKe4OhE-wJO-sytfEHIAhQ&usqp=CAU"
                        alt="logo"
                        style={{ width: '68px', height: '68px' }}
                    />
                </div>

                <Tippy
                    interactive
                    visible={searchResult.lenght > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        {/* <FontAwesomeIcon icon={faSearch} /> */}
                        <input className={cx('search__input')} type="text" />

                        <button className={cx('search__button')}>Tìm kiếm</button>
                        {/* <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <div className={cx('home')}>
                        <Button text href="/">
                            Trang Chủ
                        </Button>
                    </div>
                    <div className={cx('action__login')}>
                        <Button primary leftIcon={<FontAwesomeIcon icon={faUser} />} href="/login">
                            Login
                        </Button>
                    </div>
                    <span className={cx('bordered')}></span>
                    <div className={cx('action__cart')}>
                        <Button medium href="/cart">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cx('inner__bottom')}>
                <ListProduct className={cx('list')} />
            </div>
          </div>
        </header>
    );
}

export default Header;
