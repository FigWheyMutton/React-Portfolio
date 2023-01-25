import React from 'react';
import '../../styles/main.css';
import '../../styles/Blog.css';

export default function Resume() {
  return (
    <div className='bodyContainer'>
      <h1>Resume:</h1>
      <p className="resume">Download my resume <a href='https://docs.google.com/document/d/1PUj62ApFBmsVcv99mdxJasuCR8SpJyvg2SAtaTRZy8Q/edit?usp=sharing'>here</a></p>
      <h2>Front-End Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      <h2>Back-End Skills</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
      </ul>
    </div>
  );
}
