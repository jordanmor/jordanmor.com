import { projects } from '../../data/data.json';

const getProjectName = path => {
  const project = projects.filter(project => path.includes(project.id))[0];
  return project.project_name;
}

export function changeTitle(path) {
  if (path === '/') {
    document.title = 'Jordan Mor | Web Developer';
  } else if(path === '/portfolio' || path === '/portfolio-3D') {
    document.title = 'Portfolio | Jordan Mor';
  } else if (path === '/about') {
    document.title = 'About | Jordan Mor';
  } else if (path === '/contact') {
    document.title = 'Contact | Jordan Mor';
  } else if (path.includes("/project")) {
    const projectName = getProjectName(path);
    document.title = `${projectName} - Portfolio | Jordan Mor`;
  }
 }