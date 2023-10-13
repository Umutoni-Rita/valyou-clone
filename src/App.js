
import { Route, Routes } from 'react-router';
import './App.css';
import LandingPage from './pages/landing';
import SignupPage from './pages/signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/signup' element={<SignupPage />}/>
      </Routes>
    </div>
  );
}

export default App;
