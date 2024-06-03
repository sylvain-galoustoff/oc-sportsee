import { PolarGrid, RadarChart, ResponsiveContainer, PolarAngleAxis, Radar } from "recharts";
import style from "./Radar.module.scss";
import { StatType } from "../../../models/Models";

type PropsType = {
  data: StatType[] | undefined;
};

function Stats({ data }: PropsType) {
  return (
    <div className={style.graph}>
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" data={data} height={320}>
          <PolarGrid stroke="#ffffff" />
          <PolarAngleAxis dataKey="subject" stroke="#ffffff" />
          <Radar dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.8} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Stats;
