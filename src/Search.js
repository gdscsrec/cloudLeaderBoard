import React from 'react';
import JSONDATA from './resources/itemsdata.json';
import { useState } from 'react';
import './searchstyle.css';

function SearchandTable() {
  const [searchName, setSearchName] = useState('');
  var flag;
  return (
    <div className="table">
      <input
        type="text"
        className="search"
        placeholder="Search...."
        onChange={(event) => {
          setSearchName(event.target.value);
        }}
      />
      <section className="thead row">
        <p>
          <i>Rank</i>
        </p>
        <p>
          <i>Name</i>
        </p>
        <section className="track hii">
          <p>
            <i>Track 1</i>
          </p>
          <p>
            <i>Track 2</i>
          </p>
        </section>
      </section>
      <div className="tbody">
        {JSONDATA.filter((val) => {
          if (searchName == '') {
            flag=0;
            return val;
          }  if ( val['StudentName'].toLowerCase().includes(searchName.toLowerCase())) {
              flag=1;
            return val;
          }
        }).map((val, key) => {
  
          return (
            <div className="user row" key={key} style={{ display: 'flex' }}>
              <p className="Rank">
                <i>{(flag==0)?val['rank']:val['realrank']}</i>
              </p>
              <p className="stdname" id="stdname">
                <i>{val['StudentName']}</i>
              </p>
              <section className="track">
                <p className="track1" id="track1">
                  <i>{val['#ofSkillBadgesCompletedinTrack1']}</i>
                </p>
                <p className="track2" id="track2">
                  <i>{val['#ofSkillBadgesCompletedinTrack2']}</i>
                </p>
              </section>
            </div>
          );
        })}
      </div>
    </div>
    
  );
}

export default SearchandTable;