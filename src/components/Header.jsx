// import './pages/home.css'

const Header = ({title, image, children}) => {
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_container-bg">
          <img src="https://res-console.cloudinary.com/daehan/thumbnails/v1/image/upload/v1653145480/UGV0IE1lZGlhL2Nyb3duX2hjZnVtYQ==/preview" alt="Header Background Img"/>
        </div>
        <div className="header_content">
          <h2>Title</h2>
          <p>{children}</p>
        </div>
      </div>
    </header>
  )
}

export default Header