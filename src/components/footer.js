import React from 'react';
import '../styles/main.css';
import githubLogo from '../images/github.png';
import linkedInLogo from '../images/linkedIn.png';
import stackOverflowLogo from '../images/stackOverflow.png';

function footer() {
  return (
  <div className='footer'>
    <a href='https://github.com/FigWheyMutton'><img className="github" src= {githubLogo} alt='Github Logo'></img></a>
    <a href='https://www.linkedin.com/feed/'><img src={linkedInLogo} alt='linkedIn Logo'></img></a>
    <a href='https://stackoverflow.com/users/21047295/figwheymutton'><img   src= {stackOverflowLogo} alt='Stack Overflow Logo'></img></a>
  </div>
  );
}

export default footer;
