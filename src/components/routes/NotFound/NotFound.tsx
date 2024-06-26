import style from "./NotFound.module.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="content" id={style.notFound}>
      <h1>Page non trouvée</h1>
      <div className={style.notFoundText}>
        <p>L'url doit fournir un identifiant utilisateur en paramètre.</p>
        <p>Identifiant de 1 à 10 pour l'api locale</p>
        <p>Identifiant 12 ou 18 pour l'api distante</p>
        <p>(Ex : http://localhost:5173/1)</p>
      </div>
      <Link className="button primary" to="/12">
        Charger un utilisateur
      </Link>
    </div>
  );
}

export default NotFound;
