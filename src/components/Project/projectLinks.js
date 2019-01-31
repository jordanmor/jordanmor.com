import React from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../Context';

const ProjectLinks = ({ match }) => {
  // console.log(match);
  // if (!path.includes('/portfolio/project')) return null;

  return ( 
    <Consumer>
      { ({ projects }) => {
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
              <Link to={`/portfolio/project/${prevProjectID}`} className="btn">⇐ Prev Project</Link>
              <Link to={`/portfolio/project/${nextProjectID}`} className="btn">Next Project ⇒</Link>
            </div>
          </div>
        );
      }}
    </Consumer>
   );
}
 
export default ProjectLinks;