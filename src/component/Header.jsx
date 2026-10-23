import './Header.css'
function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">MP</div>
        <span className="logo-text">Mayank Panse</span>
      </div>
      <nav className="nav">
        <a href="#" className="nav-link active">Home</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Projects</a>
      </nav>
      <button className="header-btn">Contact</button>
    </header>
  )
}
export default Header