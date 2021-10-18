import React from 'react';
import './footerstyle.css'
import { Icon } from '@iconify/react';
import ICond from './resources/GDSC.png'



export default function Footer(){
    return (
        <div className="foter">
          <div className="social-links">
              <a href="https://www.linkedin.com/company/gdscsrec/"><Icon icon="brandico:linkedin" color="white"  width="20"/></a>
              <a href="http://discord.io/gdscsrec"><Icon icon="akar-icons:discord-fill" color="white"  width="20"/></a>
              <a href="https://www.instagram.com/gdscsrec/"><Icon icon="cib:instagram" color="white" width="20" /></a>
              <a href="https://gdsc.community.dev/sri-ramakrishna-engineering-college-coimbatore/"><img src={ICond} alt="GDSC" width="34" height="18"/></a>
            </div>
            <h2 className="dwheart"> Developed with ❤️ by </h2>

          <div className="quick-links">
               <a href="https://www.linkedin.com/in/sanjaydevtech" target="_blank">Sanjay</a> 
               <a href="https://www.linkedin.com/in/jayasakthi-balaji-g 337128204" target="_blank">Jayasakthi Balaji</a> 
               <a href="https://www.linkedin.com/in/harifbx" target="_blank">Hari Krishna</a> 
               <a href="http://www.linkedin.com/in/mohamedfazil17" target="_blank">Mohamed Fazil</a> 
               <a href="https://www.linkedin.com/in/jaswanth-solai-ba49b3191" target="_blank">Jaswanth Solai</a> 
               <a href="https://www.linkedin.com/in/varniha-s-6a7232222" target="_blank">Varniha</a> 
               <a href="https://www.linkedin.com/in/geetha-palanisamy-b2323b193" target="_blank">Geetha</a> 
          </div>
          <p className="gdsc">Google Developer Student Club :)</p>

      </div>

    );

}
