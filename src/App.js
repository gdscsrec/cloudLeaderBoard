import React from 'react';
import './footerstyle.css';
import SearchandTable from './Search';
import Footer from './Footer.jsx'

export default function App() {
  return (
    <div className="main">
      <div className="Table-view"><SearchandTable/></div>
      <div><Footer/></div>
      
    </div>
  );
}