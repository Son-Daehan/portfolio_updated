import { about } from "../data"
import * as Icons from "react-icons/fa"


const Skills = () => {
  return (
    <section className="skills" id="about">
      <div className="container skills_container">

        <section className="about_wrapper">
          { 
            about.map(({id, title, content}) => {
              return (
                <div key={id} className="abouts_about">
                  <h4>{title}</h4>
                  <hr className="header_line"/>
                  <h2>TRANSITIONING PHASE TO WEB DEVELOPMENT</h2>
                  <p>{content}</p>
                </div>
              )
            })
          }
        </section>

        <div className="skills_wrapper">

          <article className="skill_card skills_skill">
            <span className="skill_icon"><Icons.FaCrop/></span>
            <h4 className="skills_title">WEB DEVELOPMENT</h4>
            <div className="skills_content_wrapper">
              <p className="skills_content">Create a full-stack web application, connecting front-end and back-end into one integrated web application.</p>
              <p className="skills_language">Framework/Library: ReactJS</p>
            </div>
          </article>
          <article className="skill_card skills_skill">
            <span className="skill_icon"><Icons.FaDesktop/></span>
            <h4 className="skills_title">FRONTEND</h4>
            <div className="skills_content_wrapper">
              <p className="skills_content">Designing and customizing user interaction with custom built front-end applications.</p>
              <p className="skills_language">Languages: JavaScript, CSS, HTML5</p>
            </div>
          </article>
          <article className="skill_card skills_skill">
            <span className="skill_icon"><Icons.FaCode/></span>
            <h4 className="skills_title">BACKEND</h4>
            <div className="skills_content_wrapper">
              <p className="skills_content">Creating API applications to interact with front-end applications.</p>
              <p className="skills_language">Languages: Python and Ruby</p>
            </div>
          </article>









          

        </div>
      </div>
    </section>
  )
}

export default Skills