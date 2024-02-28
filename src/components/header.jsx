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
          <a href="/about">關於我們</a>
          <a href="/service">服務項目</a>
          <a href="/news">最新消息</a>
          <a href="/contact-us">聯絡我們</a>
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