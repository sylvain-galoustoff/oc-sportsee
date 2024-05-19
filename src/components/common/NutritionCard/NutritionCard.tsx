import style from "./NutritionCard.module.scss";
import calories from "../../../assets/calories-icon.png";
import proteines from "../../../assets/protein-icon.png";
import glucides from "../../../assets/carbs-icon.png";
import lipides from "../../../assets/fat-icon.png";

type PropsType = {
  label: "calories" | "proteines" | "glucides" | "lipides";
  value: string;
};

function NutritionCard({ label, value }: PropsType) {
  const nutrition = {
    calories: {
      textLabel: "Calories",
      icon: calories,
      unit: "kCal",
    },
    proteines: {
      textLabel: "Protéines",
      icon: proteines,
      unit: "g",
    },
    glucides: {
      textLabel: "Glucides",
      icon: glucides,
      unit: "g",
    },
    lipides: {
      textLabel: "Lipides",
      icon: lipides,
      unit: "g",
    },
  };

  return (
    <div className={`card ${style.card}`}>
      <div className={style.icon}>
        <img
          src={nutrition[label]?.icon}
          alt={`Icône ${nutrition[label]?.textLabel}`}
          className="responsive"
        />
      </div>
      <div className={style.content}>
        <p className="h3">
          {value}
          {nutrition[label]?.unit}
        </p>
        <p className={style.label}>{nutrition[label]?.textLabel}</p>
      </div>
    </div>
  );
}

export default NutritionCard;
