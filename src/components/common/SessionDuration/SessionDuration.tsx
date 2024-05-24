import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import style from "./SessionDuration.module.scss";
import { SessionDurationType } from "../../../models/Models";

type PropsType = {
  data: SessionDurationType[] | undefined;
};

function SessionDuration({ data }: PropsType) {
  return (
    <div className={style.graph}>
      <ResponsiveContainer height={320}>
        <LineChart
          data={data}
          margin={{
            top: 0,
            left: 20,
            bottom: 10,
            right: 20,
          }}
        >
          <XAxis dataKey="day" />
          <Line
            type="monotone"
            dataKey="time"
            stroke="#fff"
            dot={false}
            activeDot={true}
          />
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
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SessionDuration;
