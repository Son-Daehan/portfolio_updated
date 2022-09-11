const SkillCard = ({className, children}) => {
    return (
      <article className={`skill_card ${className}`}>
          {children}
      </article>
    )
  }
  
  export default SkillCard