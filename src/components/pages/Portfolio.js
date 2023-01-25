import React, {useState} from 'react';
import Project from "./Project";
import '../../styles/main.css';
import '../../styles/Portfolio.css';


export default function Projects() {
    const [projects] = useState([
        {
            name: "Employee Tracker",
            image: "employeeTracking",
            repolink: "https://github.com/FigWheyMutton/Employee-Tracking",
            imageDesc: "Picture showing the usage of the Employee Tracking application",
            description: "Built using Inquirer, MYSQL, and Node"
        },
        {
            name: "BurnWhisper",
            image: "burnwhisper",
            repolink: "https://github.com/nle641999/BurnWhisper",
            imageDesc: "Application with posts from other people as well as the homepage of the application",
            applink: "https://boiling-harbor-03856.herokuapp.com/",
            description: "Built using Handlebars, MYSQL, Express"
        },
        {
            name: "Horiseon",
            image: "horiseon",
            imageDesc: "Deployed application of the homepage of Horiseon",
            repolink: "https://figwheymutton.github.io/Horiseon/",
            applink: "https://boiling-harbor-03856.herokuapp.com/",
            description: "Built using HTML and CSS"
        },
        {
            name: "Team Profile Generator",
            image: "teamProfileGenerator",
            imageDesc: "Application with auto generated tabs for each member created through the node terminal.",
            repolink: "https://github.com/FigWheyMutton/Team-Profile-Generator",
            description: "Dynamically create team profiles utilizing Inquirer and Jest Node prompts/tests"
        },
        {
            name: "Note Taker",
            image: "noteTaker",
            imageDesc: "Deployed application showcasing the saved notes.",
            repolink: "https://github.com/FigWheyMutton/Note-Taker-3",
            applink: "https://boiling-harbor-03856.herokuapp.com/",
            description: "Built using UUID and Express to dynamically create notes"
        },
        {
            name: "Social Network Api",
            image: "socialNetworkApi",
            imageDesc: "Insomnia application showing the routes bringing up information from the back-end",
            repolink: "https://github.com/FigWheyMutton/Social-Network-Api--Mongoose",
            applink: "https://boiling-harbor-03856.herokuapp.com/",
            description: "Built using Mongoose and Express showcasing CRUD operations"
        }
    ]);
    
    return(
        <div className="bodyContainer">
             <div className="workhero">

            {
                projects.map((project, i) => (
                    <Project project = {project} key={i}/>
                    ))
                }
                </div>
        </div>
    );
}
