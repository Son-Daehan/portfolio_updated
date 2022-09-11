import {Link} from 'react-router-dom'
import './notFound.css'

const NotFoundPage = () => {
  return (
    <section>
        <div className='container notfound_container'>
            <h2>PAGE NOT FOUND</h2>
            <Link to="/" className='btn'>Go Back Home!</Link>
        </div>
    </section>
  )
}

export default NotFoundPage