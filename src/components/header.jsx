import styles from '../styles/header.module.scss';
import { PrimaryButton } from './button';
import { useRef, useState, forwardRef } from 'react';
import {  InfoGroup } from './footer';

const DropdownMenu = ({linkTo, menuList}) => {
  return (
    <ul className={styles.dropdownMenu}>
      {menuList.map((item) => <li><a href={'/' + linkTo}>{item}</a></li>)}
    </ul>  
  )
}

const MobileMenu = forwardRef((props, ref) => {
  return (
    <div className={styles.closedMenu} ref={ref}>
      <div className={styles.topSide}>
        <a href="/" >
          <img src="svg/footprint.svg" alt="footprint" className={styles.activeImg} />
          首頁
        </a>
        <a href="/about">
          <img src="svg/footprint.svg" alt="footprint" className={styles.activeImg} />
          關於我們
        </a>
        <a href="/service">
          <img src="svg/footprint.svg" alt="footprint" className={styles.activeImg} />
          服務項目
        </a>
        <a href="/news">
          <img src="svg/footprint.svg" alt="footprint" className={styles.activeImg} />
          最新消息
        </a>
        <a href="/contact-us">
          <img src="svg/footprint.svg" alt="footprint" className={styles.activeImg} />
          聯絡我們
        </a>
      </div>
      <div className={styles.bottomSide}>
        <button className={styles.bookBtn} onClick={() => alert('booking')}>立即預約</button>
        <button className={styles.loginBtn} onClick={() => alert('login')}>登入</button>
        <InfoGroup />
      </div>
    </div>
  )
})

const Header = forwardRef((props, ref) => {
  const [ hamburgerOpen, setHamburgerOpen ] = useState(false)
  const hamburgerRef = useRef(null)
  const menuRef = useRef(null)

  const handleReserveBtnClick = () => {
    alert('you hit the reserve btn')
  }

  const handleHamburgerClick = () => {
    if (!hamburgerOpen) {
      hamburgerRef.current.className = styles.closeBtn
      menuRef.current.className = styles.mobileMenu
    }else {
      hamburgerRef.current.className = styles.hamburger
      menuRef.current.className = styles.closedMenu
    }

    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.wrapper}>
        <a href="/">
          <div className={styles.logo}></div>
        </a>
        <div className={styles.navbarList}>
          <a href="/" >首頁</a>
          <a href="/about">
            關於我們
            <DropdownMenu 
              linkTo={'about'}
              menuList={['經營理念','專業團隊','診所資訊']} />
          </a>
          <a href="/service">
            服務項目
            <DropdownMenu 
              linkTo={'service'}
              menuList={['內科','外科','其他專科']} />
          </a>
          <a href="/news">最新消息</a>
          <a href="/contact-us">
            聯絡我們
            <DropdownMenu 
              linkTo={'contact-us'}
              menuList={['交通指南','聯絡表單']} />
          </a>
        </div>
        <div className={styles.btnGroup}>
          <PrimaryButton title={'立即預約'} onClick={handleReserveBtnClick}/>
          <a href="/login">登入</a>
        </div>
        <div className={styles.hamburger} ref={hamburgerRef} onClick={handleHamburgerClick}></div>
        <MobileMenu ref={menuRef}/>
      </div>
    </div>
  )
})

export default Header;