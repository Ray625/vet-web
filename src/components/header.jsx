import { PrimaryButton } from './button';
import { useRef, useState, forwardRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { InfoGroup } from './footer';
import styles from '../styles/header.module.scss';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";


const MobileMenu = forwardRef((props, ref) => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className={styles.closedMenu} ref={ref}>
      <div className={styles.topSide}>
        <div onClick={() => navigate('/') } className={location.pathname === '/' ? styles.active : styles.entry}>
          {location.pathname === '/' && (
          <img src="svg/footprint.svg" alt="footprint" className={styles.activeImg} />
          )}
          首頁
        </div>
        <div onClick={() => navigate('/about')} className={location.pathname === '/about' ? styles.active : styles.entry}>
          {location.pathname === '/about' && (
          <img src="svg/footprint.svg" alt="footprint" className={styles.activeImg} />
          )}
          關於我們
        </div>
        <div onClick={() => navigate('/service')} className={location.pathname === '/service' ? styles.active : styles.entry}>
          {location.pathname === '/service' && (
          <img src="svg/footprint.svg" alt="footprint" className={styles.activeImg} />
          )}
          服務項目
        </div>
        <div onClick={() => navigate('/news')} className={location.pathname === '/news' ? styles.active : styles.entry}>
          {location.pathname === '/news' && (
          <img src="svg/footprint.svg" alt="footprint" className={styles.activeImg} />
          )}
          最新消息
        </div>
        <div onClick={() => navigate('/contact-us')} className={location.pathname === '/contact-us' ? styles.active : styles.entry}>
          {location.pathname === '/contact-us' && (
          <img src="svg/footprint.svg" alt="footprint" className={styles.activeImg} />
          )}
          聯絡我們
        </div>
      </div>
      <div className={styles.bottomSide}>
        <button className={styles.bookBtn} onClick={() => alert('booking')}>立即預約</button>
        <button className={styles.loginBtn} onClick={() => navigate('/login')}>登入</button>
        <InfoGroup />
      </div>
    </div>
  )
})

const DropdownMenu = ({linkTo, menuList}) => {
  const navigate = useNavigate()

  return (
    <ul className={styles.dropdownMenu}>
      {menuList.map((item, index) => <div onClick={() => navigate(`/${linkTo}`)}key={index}>{item}</div>)}
    </ul>  
  )
}

const Header = forwardRef(({bookBtnDisplay}, ref) => {
  const [ hamburgerOpen, setHamburgerOpen ] = useState(false)
  const [ user, setUser] = useState(null)
  const hamburgerRef = useRef(null)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const auth = getAuth();

  
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    });
  },[auth])

  const handleSignOut = () => {
    signOut(auth).then(() => {
      alert('已登出')
    }).catch((error) => {
      console.error(error)
    });
  }

  const handleReserveBtnClick = () => {
    alert('you hit the reserve btn')
  }

  const handleHamburgerClick = () => {
    if (!hamburgerOpen) {
      hamburgerRef.current.className = styles.closeBtn
      menuRef.current.className = styles.mobileMenu
      document.body.style.overflow = 'hidden';
    }else {
      hamburgerRef.current.className = styles.hamburgerBtn
      menuRef.current.className = styles.closedMenu
      document.body.style.overflow = 'auto';
    }

    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.wrapper}>
        <div className={styles.logo} onClick={() => navigate('/')}></div>
        <div className={styles.navbarList}>
          <div onClick={() => navigate('/')} className={styles.navbarEntry}>首頁</div>
          <div onClick={() => navigate('/about')} className={styles.navbarEntry}>
            關於我們
            <DropdownMenu 
              linkTo={'about'}
              menuList={['經營理念','專業團隊','診所資訊']} />
          </div>
          <div onClick={() => navigate('/service')} className={styles.navbarEntry}>
            服務項目
            <DropdownMenu 
              linkTo={'service'}
              menuList={['內科','外科','其他專科']} />
          </div>
          <div onClick={() => navigate('/news')} className={styles.navbarEntry}>最新消息</div>
          <div onClick={() => navigate('/contact-us')} className={styles.navbarEntry}>
            聯絡我們
            <DropdownMenu 
              linkTo={'contact-us'}
              menuList={['交通指南','聯絡表單']} />
          </div>
        </div>
        <div className={styles.btnGroup}>
          <PrimaryButton title={'立即預約'} onClick={handleReserveBtnClick}/>
          {user ? (
          <>
            <div className={styles.userName}>{user.displayName}</div>
            <div onClick={handleSignOut} className={styles.login}>登出</div>
          </>
          ) : (
            <div onClick={() => navigate('/login')} className={styles.login}>登入</div>
          )}          
        </div>
        <div className={styles.hamburgerContainer} onClick={handleHamburgerClick}>
          <div className={styles.hamburgerBtn} ref={hamburgerRef} ></div>
        </div>
        <MobileMenu ref={menuRef}/>
        {bookBtnDisplay && <div className={styles.mobileBookBtn} onClick={handleReserveBtnClick}>立即<br/>預約</div>}
      </div>
    </div>
  )
})

export default Header;