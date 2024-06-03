import { BarChart, XAxis, Bar, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from "recharts";
import style from "./Activity.module.scss";
import { ActivityType } from "../../../models/Models";
import CustomLegend from "./CustomLegend.jsx";
import CustomTooltip from "./CustomTooltip.jsx";

type PropsType = {
  data: ActivityType[] | undefined;
};

function Activity({ data }: PropsType) {
  return (
    <div className={style.graph}>
      <p className={style.title}>Activité quotidienne</p>
      <ResponsiveContainer height={320}>
        <BarChart
          data={data}
          margin={{
            top: 70,
            bottom: 0,
            left: 50,
            right: 50,
          }}
          barSize={8}
          barGap={8}
        >
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{
              top: 20,
              right: 80,
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
            content={<CustomLegend />}
          />
          <CartesianGrid vertical={false} strokeDasharray="2" />
          <XAxis dataKey="day" />
          <Bar dataKey="poids" fill="#282D30" />
          <Bar dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Activity;
