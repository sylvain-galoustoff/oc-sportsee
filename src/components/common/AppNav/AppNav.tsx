import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import style from "./AppNav.module.scss";

function AppNav() {
  return (
    <nav id={style.header}>
      <div id={style.logo}>
        <img className="responsive" src={logo} alt="logo SportSee" />
      </div>
      <Link className="h2" to="/">
        Accueil
      </Link>
      <Link className="h2" to="/profil">
        Profil
      </Link>
      <Link className="h2" to="/reglage">
        Réglage
      </Link>
      <Link className="h2" to="/communaute">
        Communauté
      </Link>
    </nav>
  );
}

export default AppNav;
