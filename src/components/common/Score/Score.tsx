import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import style from "./Score.module.scss";
import { ScoreType } from "../../../models/Models";

type PropsType = {
  data: ScoreType[] | undefined;
};

function Score({ data }: PropsType) {
  return (
    <div className={style.graph}>
      <div className={style.legend}>Score</div>

      <div className={style.scoreText}>
        <div className={style.scoreTextWrapper}>
          <p className="h2">{data ? data[1].progress : null} %</p>
          <p className={`small ${style.scoreLabel}`}>de votre objectif</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="100%"
          startAngle={90}
          endAngle={450}
          barSize={10}
          data={data}
        >
          <RadialBar dataKey="progress" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Score;
