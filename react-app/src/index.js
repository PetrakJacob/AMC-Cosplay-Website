import ReactDOM from "react-dom/client";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/index.js';
import Form from './pages/Form/index.js';
import BCS from './pages/Shows/BCS/index.js'

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/ticket" element={<Form />} />
        <Route path="/BCS" element={<BCS />} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
