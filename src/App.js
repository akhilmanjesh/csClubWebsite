import './App.css';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import React, { useEffect } from 'react';
import Landing from './pages/Landing';



const FallbackRoute = () => {
  let navigate = useNavigate();
  
  useEffect(() => {
    navigate('/events');
  }, [navigate]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        {/* <Route path="/login" element={<LoginPage/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
