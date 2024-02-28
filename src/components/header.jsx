import styles from './header.module.scss';
import { PrimaryButton } from './button';

const Header = () => {
  const handleReserveBtn = () => {
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
            <ul className={styles.dropdownMenu}>
              <li><a href="/about">經營理念</a></li>
              <li><a href="/about">專業團隊</a></li>
              <li><a href="/about">診所資訊</a></li>
            </ul>
          </a>
          <a href="/service">
            服務項目
            <ul className={styles.dropdownMenu}>
              <li><a href="/service">內科</a></li>
              <li><a href="/service">外科</a></li>
              <li><a href="/service">其他專科</a></li>
            </ul>
            </a>
          <a href="/news">最新消息</a>
          <a href="/contact-us">
            聯絡我們
            <ul className={styles.dropdownMenu}>
              <li><a href="/contact-us">交通指南</a></li>
              <li><a href="/contact-us">聯絡表單</a></li>
            </ul>
            </a>
        </div>
        <div className={styles.btnGroup}>
          <PrimaryButton title={'立即預約'} onClick={handleReserveBtn}/>
          <a href="/login">登入</a>
        </div>
      </div>
    </header>
  )
}

export default Header;