import React from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../Context';

const ProjectLinks = ({ match }) => {
  return ( 
    <Consumer>
      { ({ projects, actions }) => {
        const project = projects.filter(project => project.id === match.params.id)[0];
        
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
          <div className="links-project-wrapper">
            <div className="links-project">
              <Link to={`/project/${prevProjectID}`} onClick={ actions.closeMenu } className="btn">⇐ Prev Project</Link>
              <Link to={`/project/${nextProjectID}`} onClick={ actions.closeMenu } className="btn">Next Project ⇒</Link>
            </div>
          </div>
        );
      }}
    </Consumer>
   );
}
 
export default ProjectLinks;