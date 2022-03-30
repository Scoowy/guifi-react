import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h2>Guifi</h2>
      </div>
      <div className="navbar-menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Random</a>
          </li>
          <li>
            <a href="#">Most used</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
