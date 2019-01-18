import React from 'react';
import { Link } from 'react-router-dom';

const ProjectLinks = ({ project, projects }) => {

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
    <div className="links-project">
      <Link to={`/portfolio/project/${prevProjectID}`} className="btn">⇐ Prev Project</Link>
      <Link to={`/portfolio/project/${nextProjectID}`} className="btn">Next Project ⇒</Link>
    </div>
   );
}
 
export default ProjectLinks;