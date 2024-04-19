import './styles/style.scss';
import 'normalize.css'; // Reset CSS
import HomePage from './pages/homepage';
import LoginPage from './pages/loginpage';
import SignupPage from './pages/signuppage';
import ForgetPassPage from './pages/forgetpasspage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/signup' element={<SignupPage/>} />
            <Route path='/forget-pass' element={<ForgetPassPage/>} />
            <Route path='*' element={<HomePage/>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
