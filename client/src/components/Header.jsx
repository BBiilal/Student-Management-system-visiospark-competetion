import "./Header.css";

function Header() {
  return (
    <nav className="main-header">
        <div className="header-items">
            <h2>Logo</h2>
            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  );
}
export default Header;
