import React from 'react';
import '../../styles/main.css';
import '../../styles/About.css';
import mePhoto from '../../images/boiler-plate.png'
export default function About() {
  return (
    <div className='bodyContainer'>
      <h1 className='aboutHeader'>About Me</h1>
      <a><img className="aboutMePhoto" src={mePhoto}></img></a>
      <p className='aboutContent'>
        My name is Alex, and I am currently located in Chino Hills, California. I am a current student at the University of California, Riverside studying Business Analytics. While studying business in school,
        I took the incentive to pursue a UCLA full stack web development bootcamp. I have been able to develop many front and back end applications throughout this program and am looking for opportunities to continue to improving my abilities.
        I am a determined individual who strives to continue improving on my skills. I am passionate about creating beautiful interfaces, while also utilizing multiple applications together to create fluid connections between server and client.
      </p>
    </div>
  );
}
