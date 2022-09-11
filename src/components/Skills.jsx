import SectionHead from "./SectionHead"
import { skills, about } from "../data"
import SkillCard from "../UI/SkillCard"
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
                  <p>{content}</p>
                </div>
              )
            })
          }
        </section>

        <div className="skills_wrapper">

          <SkillCard className="skills_skill">
            <span className="skill_icon"><Icons.FaCrop/></span>
            <h4 className="skills_title">WEB DEVELOPMENT</h4>
            <div className="skills_content_wrapper">
              <p className="skills_content">Create a full-stack web application, connecting front-end and back-end into one integrated web application.</p>
              <p className="skills_language">Languages:</p>
            </div>
          </SkillCard>
          <SkillCard className="skills_skill">
            <span className="skill_icon"><Icons.FaDesktop/></span>
            <h4 className="skills_title">FRONTEND</h4>
            <div className="skills_content_wrapper">
              <p className="skills_content">Designing and customizing user interaction with custom built front-end applications.</p>
              <p className="skills_language">Languages:</p>
            </div>
          </SkillCard>
          <SkillCard className="skills_skill">
            <span className="skill_icon"><Icons.FaCode/></span>
            <h4 className="skills_title">BACKEND</h4>
            <div className="skills_content_wrapper">
              <p className="skills_content">Creating API applications to interact with front-end applications.</p>
              <p className="skills_language">Languages: Python and Ruby</p>
            </div>
          </SkillCard>









          

        </div>
      </div>
    </section>
  )
}

export default Skills

{
  skills.map(({id, title, icon, language, content}) => {
    return <SkillCard className="skills_skill" key={id}>
      <span className="skill_icon"></span>
      <h4 className="skills_title">{title}</h4>
      <h5 className="skills_language">Languages: {language}</h5>
      <small className="skills_content">{content}</small>
    </SkillCard>
  })
}