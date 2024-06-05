import style from "./NavIcon.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

NavIcon.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.string,
};

export default NavIcon;
