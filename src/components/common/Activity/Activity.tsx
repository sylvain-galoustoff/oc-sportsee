import { BarChart, XAxis, YAxis, Bar, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from "recharts";
import style from "./Activity.module.scss";
import { ActivityType } from "../../../models/Models";

type PropsType = {
  data: ActivityType[] | undefined;
};

function Activity({ data }: PropsType) {
  return (
    <div className={style.graph}>
      <p>Activité quotidienne</p>
      <ResponsiveContainer height={320}>
        <BarChart
          data={data}
          margin={{
            top: 70,
            bottom: 0,
            left: 20,
            right: 20,
          }}
          barSize={8}
          barGap={8}
        >
          <Tooltip
            wrapperStyle={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              backgroundColor: "aqua",
            }}
            contentStyle={{
              backgroundColor: "red",
              textAlign: "center",
            }}
            labelStyle={{
              display: "none",
            }}
            itemStyle={{
              color: "white",
            }}
          />
          <Legend
            align="right"
            iconType="circle"
            wrapperStyle={{
              top: 0,
              right: 0,
              paddingTop: 20,
              paddingRight: 40,
            }}
          />
          <CartesianGrid vertical={false} strokeDasharray="2" />
          <XAxis dataKey="day" />
          <YAxis dataKey="calories" />
          <Bar dataKey="poids" fill="#282D30" />
          <Bar dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Activity;
