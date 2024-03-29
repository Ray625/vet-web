import { useNavigate } from "react-router-dom";
import { LoginContainer, LeftSide, RightSide, TitleGroup, GoogleBtn, FormGroup,InputGroup } from '../components/login';
import styles from './loginpage.module.scss';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup')
  }

  const handleGoogleLogin = () => {
    alert('use google login')
  }

  return (
    <LoginContainer>
      <LeftSide 
        describe={'Caring for your pets like'}
        focus={'family'}
        img={'url(/img/login_background.png)'}
      />
      <RightSide>
        <TitleGroup 
          title={'會員登入'}
          point={'尚未成為會員?'}
          point2={'註冊'}
          onClick={handleSignUpClick}
        />
        <GoogleBtn 
          title={'登入'}
          onClick={handleGoogleLogin}
        />
        <FormGroup btnText={'登入'}>
          <InputGroup 
            title={'Email'}
            name={'email'}
            type={'email'}
            placeholder={'請輸入您的電子信箱'}
          />
          <InputGroup 
            title={'密碼'}
            name={'password'}
            type={'password'}
            placeholder={'請輸入8-12位英數混合之密碼'}
          />
        </FormGroup>
        <div className={styles.forgetPass} onClick={() => navigate('/forget-pass')}>忘記密碼?</div>
      </RightSide>
    </LoginContainer>
  )
}

export default LoginPage;
