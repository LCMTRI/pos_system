import React from 'react';
import './Intro.css';

function Intro() {
  return (
    <div className='intro-container'>
        <div className="img-container">
          <img src={require('./photo.jpg')} />
        </div>
        <h1>Tên nhân viên</h1>
        <h2>Chức vụ: Nhân viên</h2>
    </div>
  )
}

export default Intro