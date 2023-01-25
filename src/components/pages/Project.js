import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import githubLogo from '../../images/github.png';

export default function Project ({project}) {
    console.log(project)
    return (
       
        <div className="card">
            <img className="card-img-top" src= {require( `../../images/${project.image}.png`)} alt={project.imageDesc}/>
        <div className='image_overlay image_overlay_blur'>
            <h2 className='image_title'><a href={project.repolink}>{project.name}</a></h2>
            <a href='https://github.com/FigWheyMutton'><img className="github" src= {githubLogo} alt='Github Logo'></img></a>
            <p className='image_description'>{project.description}</p>
        </div>
    </div>
    )
}