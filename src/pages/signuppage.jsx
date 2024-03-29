import { useNavigate } from 'react-router-dom';
import { LoginContainer, LeftSide, RightSide, TitleGroup, GoogleBtn, FormGroup,InputGroup } from '../components/login';
import styles from './signuppage.module.scss'

const SignupPage = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleGoogleSignup = () => {
    alert('use google signup')
  }

  return (
    <LoginContainer>
      <LeftSide 
        describe={`Your pet's health is our `}
        focus={'priority'}
        img={'url(/img/signup_background.png)'}
      />
      <RightSide>
        <TitleGroup 
          title={'會員註冊'}
          point={'已經成為會員?'}
          point2={'登入'}
          onClick={handleLoginClick}
        />
        <GoogleBtn 
          title={'註冊'}
          onClick={handleGoogleSignup}
          />
        <FormGroup btnText={'登入'}>
          <div className={styles.nameGroup}>
            <InputGroup 
            title={'姓氏'}
            name={'lastName'}
            type={'lastName'}
            placeholder={'請輸入您的姓氏'}
            />
            <InputGroup 
              title={'名字'}
              name={'firstName'}
              type={'firstName'}
              placeholder={'請輸入您的名字'}
            />
          </div>
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
          <div className={styles.termGroup}>
            <input type="checkbox" name="terms" id="terms" className={styles.checkbox}/>
            <p className={styles.describe}>我同意 <span onClick={() => alert('服務條款')}>服務條款</span> 與 <span onClick={() => alert('隱私權政策')}>隱私權政策</span></p>            
          </div>
        </FormGroup>
      </RightSide>
    </LoginContainer>
  )
}

export default SignupPage;