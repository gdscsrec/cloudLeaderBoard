import React from 'react';
import './headerbg.css';
import gdsclogo from './resources/logo_leaderpage.svg';
import cloudlogo from './resources/google_cloud-icon .svg';
import { Fragment } from 'react/cjs/react.production.min';




export default function headerbg(){
    return (
        <Fragment>
        <div className="header"><div id="gdsc">
          <img src={gdsclogo} id="logo" alt="Google Developers Students Club" /><br />
        </div>
        <div id="discord">
          <a href="http://discord.io/gdscsrec"  id="active"><p>Join Discord</p>
          </a>
        </div></div> 
        <div className="mainh">
        <div id="cloud_logo">
          <img src={cloudlogo} style={{float: 'left'}} width="18%" alt="cloud"/>
          <p id="title"><span id="yellow">30 </span><span id="green">Days</span> <span id="blue">Of</span><span id="red"> Google Cloud</span></p><br/>
          <p className="content">You will learn practice concepts like computing, application development, big data machine learning using cloud if you get stuck, you will have your "Campus Facilitators" who are specially trained on Google Cloud to help. </p>
          <nav id="viewEvents"> 
            <a href="https://events.withgoogle.com/30daysofgooglecloud/" id="active"><i>View Event</i>&nbsp;&nbsp;<i className="fas fa-angle-right" /></a>
          </nav>
          </div>
        </div>
    
    </Fragment> 

    );

}