import style from "./Activity.module.scss";

const CustomTooltip = (props) => {
  const { payload } = props;

  const renderTooltipItems = Object.keys(payload).map((key) => (
    <p key={key} className={`small ${style.tooltipItem}`}>
      {payload[key].value}
      {payload[key].dataKey === "weight" ? "kg" : "kCal"}
    </p>
  ));

  return <div className={style.tooltip}>{renderTooltipItems}</div>;
};

export default CustomTooltip;
