import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Customizer from './component/Customizer';
import { Suspense } from 'react';

function App() {
  return (
    <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route element={<Navigate to="/customizer" />} path="/" />
            <Route element={<Suspense><Customizer /></Suspense>} path="customizer" />
            
            
          </Routes>
      </BrowserRouter>
  );
}

export default App;
