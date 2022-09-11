import '../index.css'

const SectionHead = ({ title, className, description }) => {
  return (
    <div className={`section_head ${className}`}>
        <h2>{title}</h2>
        <h3>{description}</h3>
    </div>
  )
}

export default SectionHead