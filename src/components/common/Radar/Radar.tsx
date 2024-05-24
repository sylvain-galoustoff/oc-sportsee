import { StatType } from "../../../models/Models";
import style from "./Radar.module.scss";

type PropsType = {
  data: StatType | undefined;
};

function Radar({ data }: PropsType) {
  return <div className={style.graph} id={style.radar}></div>;
}

export default Radar;
