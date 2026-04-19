import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/login">S'inscrire</Link>
      <Link to="/signup">Connexion</Link>
    </nav>
  );
}
