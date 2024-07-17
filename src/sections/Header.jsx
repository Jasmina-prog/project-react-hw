import Button from "../components/Button";
import "./Header.scss";
function Header() {
  return (
    <header>
      <div className="container">
        <header>
        <div className="logo">
            <div className="logopic"></div>
            <h2>Artificial Intelligence</h2></div>
        <ul>
          <li> <a href="#">Home</a> </li>
          <li> <a href="#">About</a> </li>
          <li> <a href="#">Service</a> </li>
          <li> <a href="#">Blog</a> </li>
          <li> <a href="#">Contact</a>  </li>
        </ul>
        <Button name="Sign In"/>
        </header>
      </div>
    </header>
  );
}

export default Header;
