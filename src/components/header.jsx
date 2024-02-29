import styles from './header.module.scss';
import { PrimaryButton } from './button';

const DropdownMeun = ({linkTo, menuList}) => {
  return (
    <ul className={styles.dropdownMenu}>
      {menuList.map((item) => <li><a href={'/' + linkTo}>{item}</a></li>)}
    </ul>  
  )
}

const Header = () => {
  const handleReserveBtnClick = () => {
    alert('you hit the reserve btn')
  }

  return (
    <header>
      <div className={styles.wrapper}>
        <a href="/">
          <div className={styles.logo}></div>
        </a>
        <div className={styles.navbarList}>
          <a href="/" >首頁</a>
          <a href="/about">
            關於我們
            <DropdownMeun 
              linkTo={'about'}
              menuList={['經營理念','專業團隊','診所資訊']} />
          </a>
          <a href="/service">
            服務項目
            <DropdownMeun 
              linkTo={'service'}
              menuList={['內科','外科','其他專科']} />
            </a>
          <a href="/news">最新消息</a>
          <a href="/contact-us">
            聯絡我們
            <DropdownMeun 
              linkTo={'contact-us'}
              menuList={['交通指南','聯絡表單']} />
            </a>
        </div>
        <div className={styles.btnGroup}>
          <PrimaryButton title={'立即預約'} onClick={handleReserveBtnClick}/>
          <a href="/login">登入</a>
        </div>
      </div>
    </header>
  )
}

export default Header;