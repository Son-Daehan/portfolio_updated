import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import {projects} from '../data'
import {Link} from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'
import ProjectCard from '../UI/ProjectCard'


const Projects = () => {
  return (
    <div className="projects" id="projects">
        <div className="container projects_container">
            <div className='projects_header_wrapper'>
                <h4>Projects</h4>
                <hr className='header_line'/>
                <h2>Upcomming Projects</h2>
            </div>
        
            <div className="projects_wrapper">
                {
                    projects.map(({id, title, url, icon, info}) => {
                        return (
                            <ProjectCard className="projects_project" key={id}>
                                <img className='project_icon' src={icon}/>
                                <h4>{title}</h4>
                                <p>{info}</p>
                                <a href={url} className="btn sm">Learn More <AiFillCaretRight/></a>
                            </ProjectCard>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Projects