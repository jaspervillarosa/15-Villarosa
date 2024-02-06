import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import './index.css'
import Calculator from './pages/Calculator'
import JSON from './pages/JSON'
import MyHobby from './pages/MyHobby'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/calculator' element={<Calculator/>}></Route>
         <Route path='/JSON' element={<JSON/>}></Route>
         <Route path='/myHobby' element={<MyHobby/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
