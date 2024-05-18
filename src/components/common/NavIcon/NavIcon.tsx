import style from "./NavIcon.module.scss";
import { Link } from "react-router-dom";

type PropsType = {
  to: string;
  icon: string;
};

function NavIcon({ to, icon }: PropsType) {
  return (
    <div className={style.navIcon}>
      <Link to={to}>
        <img src={icon} alt={`Icone ${icon}`} className="responsive" />
      </Link>
    </div>
  );
}

export default NavIcon;
