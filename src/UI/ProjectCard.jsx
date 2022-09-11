const ProjectCard = ({className, children}) => {
  return (
    <article className={`project_card ${className}`}>
        {children}
    </article>
  )
}

export default ProjectCard