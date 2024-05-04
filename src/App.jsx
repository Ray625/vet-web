import './styles/style.scss';
import 'normalize.css'; // Reset CSS
import Layout from './pages/layout';
import LoginLayout from './pages/login_layout';
import HomePage from './pages/homepage';
import LoginPage from './pages/loginpage';
import SignupPage from './pages/signuppage';
import ForgetPassPage from './pages/forgetpasspage';
import BookingPage from './pages/bookingpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider>
            <Routes>
              <Route path='/' element={<LoginLayout />}>
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/signup' element={<SignupPage/>} />
                <Route path='/forget-pass' element={<ForgetPassPage/>} />
              </Route>
              <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage/>} />
                <Route path='/booking' element={<BookingPage/>} />
              </Route>
            </Routes>
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
