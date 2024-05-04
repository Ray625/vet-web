import Header from "../components/header"
import Footer from "../components/footer"
import { Outlet } from "react-router-dom"
import useRWD from '../hooks/useRWD';
import styles from '../pages/layout.module.scss';


const LoginLayout = () => {
  const device = useRWD()
  
  return (
    <div className={styles.container}>
      {device === 'mobile' && <Header />}
      <Outlet />
      {device === 'mobile' && <Footer />}      
    </div>
  )
}

export default LoginLayout;
