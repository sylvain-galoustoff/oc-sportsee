import style from "./Activity.module.scss";

const CustomLegend = (props) => {
  const { payload } = props;

  const unit = {
    weight: "kg",
    calories: "kCal",
  };

  return (
    <div className={style.legend}>
      {payload.map((entry, index) => (
        <p key={`item-${index}`} className={style.legendItem}>
          <span
            className={style.legendIcon}
            style={{
              backgroundColor: entry.color,
            }}
          ></span>
          {entry.value === "weight" ? "poids" : entry.value} ({unit[entry.value]})
        </p>
      ))}
    </div>
  );
};

export default CustomLegend;
