import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import style from "./SessionDuration.module.scss";
import { SessionType } from "../../../models/Session";

type PropsType = {
  data: SessionType[];
};

function SessionDuration({ data }: PropsType) {
  return (
    <div className={style.graph}>
      <ResponsiveContainer height={320}>
        <LineChart data={data}>
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
