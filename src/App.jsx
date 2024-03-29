import './styles/style.scss';
import 'normalize.css'; // Reset CSS
import HomePage from './pages/homepage';
import LoginPage from './pages/loginpage';
import SignupPage from './pages/signuppage';
import ForgetPassPage from './pages/forgetpasspage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<SignupPage/>} />
          <Route path='/forget-pass' element={<ForgetPassPage/>} />
          <Route path='*' element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
