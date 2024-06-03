import style from "./SessionDuration.module.scss";

const CustomTooltip = (props) => {
  const { payload } = props;
  return <div className={style.tooltip}>{payload[0]?.payload.time} min</div>;
};

export default CustomTooltip;
