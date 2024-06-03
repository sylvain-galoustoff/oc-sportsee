import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import style from "./SessionDuration.module.scss";
import { SessionDurationType } from "../../../models/Models";
import CustomTooltip from "./CustomTooltip";

type PropsType = {
  data: SessionDurationType[] | undefined;
};

function SessionDuration({ data }: PropsType) {
  const getActivePoint = () => {
    const activeDot = document.querySelector(".recharts-active-dot");
    const parent = document.querySelector("#session-duration");
    const shader = document.querySelector("#session-shader") as HTMLElement;
    if (activeDot && parent && shader) {
      const activeDotRect = activeDot.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();

      // Calculer la coordonnée X par rapport au parent
      const coordXRelativeToParent = activeDotRect.left - parentRect.left;
      shader.style.left = coordXRelativeToParent + 3 + "px";
    }
  };

  return (
    <div className={style.graph} id="session-duration">
      <div className={style.layer} id="session-shader" />
      <p className={style.legend}>Durée moyenne des sessions</p>
      <ResponsiveContainer height={320}>
        <LineChart
          data={data}
          margin={{
            top: 100,
            left: 20,
            bottom: 20,
            right: 20,
          }}
          onMouseMove={getActivePoint}
        >
          <XAxis dataKey="day" stroke="rgba(255, 255, 255, 0.5)" axisLine={false} tickLine={false} />
          <Line type="monotone" dataKey="time" stroke="#fff" dot={false} activeDot={true} />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              textAlign: "center",
            }}
            labelStyle={{
              display: "none",
            }}
            itemStyle={{
              color: "black",
            }}
            content={<CustomTooltip />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SessionDuration;
