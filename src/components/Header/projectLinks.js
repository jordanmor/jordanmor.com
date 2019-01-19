import React from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../Context';

const ProjectLinks = ({ path }) => {

  if (!path.includes('/portfolio/project')) return null;

  return ( 
    <Consumer>
      { ({ projects, menuIsOpen }) => {
        // extract current project id from url
        const projectID = path.match(/\/portfolio\/project\/(.+)/)[1];
        const project = projects.filter(project => project.id === projectID)[0];
        
        let prevProjectID = '', nextProjectID = '';
        const projectIndex = projects.indexOf(project);
      
        if (projectIndex === 0) {
          prevProjectID = projects[projects.length - 1].id;
        } else {
          prevProjectID = projects[projectIndex - 1].id;
        }
        if (projectIndex === projects.length - 1) {
          nextProjectID = projects[0].id;
        } else {
          nextProjectID = projects[projectIndex + 1].id;
        }
        
        return ( 
          <div className={menuIsOpen ? "links-project hide" : "links-project"}>
            <Link to={`/portfolio/project/${prevProjectID}`} className="btn">⇐ Prev Project</Link>
            <Link to={`/portfolio/project/${nextProjectID}`} className="btn">Next Project ⇒</Link>
          </div>
        );
      }}
    </Consumer>
   );
}
 
export default ProjectLinks;