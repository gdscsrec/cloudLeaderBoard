import React from 'react';
import logo from './resources/gdsclogo.svg';
import './preloader.css';


export default function Preloader() {
  return (
    <div className="preloader main">
      <div className="logo">
        <img src={logo} class="svg" alt="Google Developer Student Clubs logo" width="80%" />
      </div>
      <div className="loading">
        <div className="circle blue"></div>
        <div className="circle yellow"></div>
        <div className="circle green"></div>
        <div className="circle red"></div>
      </div>
    </div>
  );
}