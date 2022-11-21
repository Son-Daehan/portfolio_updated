import {projects} from '../data'
import {AiFillCaretRight} from 'react-icons/ai'
import portfolio_img from '../images/portfolio_img.png'


const Projects = () => {
  return (
    <div className="projects" id="projects">
        <div className="container projects_container">
            <div className='projects_header_wrapper'>
                <h4>PROJECTS</h4>
                <hr className='header_line'/>
                <h2>COMPLETED PROJECTS</h2>
            </div>
        
            <div className="projects_wrapper">

                <article className="project_card projects_project">
                    <img className='project_icon' src={portfolio_img} alt="projects"/>
                    <h4>Portfolio Application</h4>
                    <p>A portfolio application created using React, to learn and showcase my capabilities in JavaScript and CSS.</p>
                    <a href='https://github.com/Son-Daehan/portfolio_updated' className="btn sm">Learn More <AiFillCaretRight/></a>
                </article>

 

            </div>
        </div>
    </div>
  )
}

export default Projects