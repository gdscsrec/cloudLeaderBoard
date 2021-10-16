import React from 'react';
import './footerstyle.css';
import SearchandTable from './Search';
import Footer from './Footer.jsx'
import Headerbg from './headerbg.jsx'

export default function App() {
  return (
    <div className="bodybg">
      <Headerbg/>
      <div className="main Table-view"><SearchandTable/></div>
      <div className="footmain"><Footer/></div>
      
    </div>
    
  );
}