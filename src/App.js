// import logo from './logo.svg';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import "./Style.css";
import Cities from './Cities';
import Drive from './Drive';
import Blog from './Blog';
import Partner from './Partner';
import Help from './Help';
import Navbar from "./Navbar";
function App() {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="city" element={<Cities/>}></Route>
        <Route path="drive" element={<Drive/>}></Route>
        <Route path="blog" element={<Blog/>}></Route>
        <Route path="partner" element={<Partner/>}></Route>
        <Route path="help" element={<Help/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
