import React,{useState,useEffect} from 'react';
import './footerstyle.css';
import SearchandTable from './Search';
import Footer from './Footer.jsx'
import Headerbg from './headerbg.jsx'
import Preloader from './preloader'
import './preloader.css'

export default function App() {
  const [loading,setloading] = useState(false);

  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    },1700);
  },[]);
  return (
    loading?<Preloader loading={loading}/>:<div className="bodybg">
      <Headerbg/>
      <div className="main Table-view"><SearchandTable/></div>
      <div className="footmain"><Footer/></div>
      </div>
    // <Preloader loading={loading}/>
  );
}