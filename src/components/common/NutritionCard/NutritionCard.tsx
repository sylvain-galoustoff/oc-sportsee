import style from "./NutritionCard.module.scss";
import calories from "../../../assets/calories-icon.png";
import proteins from "../../../assets/protein-icon.png";
import carbohydrates from "../../../assets/carbs-icon.png";
import lipids from "../../../assets/fat-icon.png";

type PropsType = {
  label: "calories" | "proteins" | "carbohydrates" | "lipids";
  value: string | undefined;
};

function NutritionCard({ label, value }: PropsType) {
  const nutrition = {
    calories: {
      textLabel: "Calories",
      icon: calories,
      unit: "kCal",
    },
    proteins: {
      textLabel: "Protéines",
      icon: proteins,
      unit: "g",
    },
    carbohydrates: {
      textLabel: "Glucides",
      icon: carbohydrates,
      unit: "g",
    },
    lipids: {
      textLabel: "Lipides",
      icon: lipids,
      unit: "g",
    },
  };

  return (
    <div className={`card ${style.card}`}>
      <div className={style.icon}>
        <img src={nutrition[label]?.icon} alt={`Icône ${nutrition[label]?.textLabel}`} className="responsive" />
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
