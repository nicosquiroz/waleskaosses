import React from 'react';
const Header = ({ onMusicClick, onScienceClick }) => {
    return (
      <header className="header">
        <div>
        <div>
          <img src={punto} alt="Punto" className='Punto'/>
        </div>
          <button className="buttonHeader" onHover={onMusicClick}>Music</button>
          {/* <button onCLick={onBothClick}>Both</button> */}
          <img src={linea} alt="Linea"/>
          
          <button className="buttonHeader" onClick={onScienceClick}>Science</button>
        </div>
      </header>
    );
  };