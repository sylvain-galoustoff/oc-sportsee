import style from "./NotFound.module.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="content" id={style.notFound}>
      <h1>Page non trouvée</h1>
      <Link className="button primary" to="/">
        Retour à l'acceuil
      </Link>
    </div>
  );
}

export default NotFound;
