import React from 'react';
import './headerbg.css';
import gdsclogo from './resources/logo_leaderpage.svg';
import cloudlogo from './resources/google_cloud-icon .svg';
import { Fragment } from 'react/cjs/react.production.min';
import { Icon } from '@iconify/react';



export default function headerbg(){
    return (
        <Fragment>
      
      {/* <div id="Web_leaderboard__1" className="bg">
          <svg className="Ellipse_2">
            <ellipse id="Ellipse_2" rx={464} ry={664} cx={464} cy={400}>
            </ellipse>
          </svg>
          <svg className="Path_7" viewBox="-4000 80 477 477">
            <path id="Path_7" d="M 238.5 0 C 370.2199096679688 0 477 106.7800903320312 477 238.5 C 477 370.2199096679688 370.2199096679688 477 238.5 477 C 106.7800903320312 477 0 370.2199096679688 0 238.5 C 0 106.7800903320312 106.7800903320312 0 238.5 0 Z">
            </path>
          </svg>
          <svg className="Ellipse_6">
            <ellipse id="Ellipse_6" rx={287} ry={187} cx={1887} cy={87}>
            </ellipse>
          </svg>
          <svg className="Polygon_1" viewBox="-1850 3600 433 462">
            <path id="Polygon_1" d="M 366.4999694824219 0 L 633 462 L 0 462 Z">
            </path>
          </svg>
          <svg className="Ellipse_2">
            <ellipse id="Ellipse_2" rx={464} ry={464} cx={6700} cy={1200}>
            </ellipse>
          </svg>
          <svg className="Rectangle_2">
            <rect id="Rectangle_2" rx={0} ry={0} x={0} y={0} width="391.109" height="323.831">
            </rect>
          </svg>
          <svg className="Rectangle_4">
            <rect id="Rectangle_4" rx={0} ry={0} x={0} y={0} width={1920} height={160}>
            </rect>
          </svg>
        </div> */}
        <div className="header"><div id="gdsc">
          <img src={gdsclogo} id="logo" alt="Google Developers Students Club" /><br />
        </div>
        <div id="discord">
          <a href="http://discord.io/gdscsrec"  id="active"><p>Join Discord</p>
          </a>
        </div></div> 
        <div className="mainh">
        <div id="cloud_logo">
          <img src={cloudlogo} style={{float: 'left'}} width="20%"/>
          <p id="title"><span id="yellow">30 </span><span id="green">Days</span> <span id="blue">Of</span><span id="red"> GCloud</span></p><br/>
          <p className="content">You will learn practice concepts like computing, application development, big data machine learning using cloud if you get stuck, you will have your "Campus Facilitators" who are specially trained on Google Cloud to help. </p>
          <nav id="viewEvents"> 
            <a href="#" id="active"><i>View Event</i>&nbsp;&nbsp;<i className="fas fa-angle-right" /></a>
          </nav>
          </div>
        </div>
    
    </Fragment> 

    );

}