import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import style from "./SessionDuration.module.scss";
import { SessionDurationType } from "../../../models/Models";

type PropsType = {
  data: SessionDurationType[] | undefined;
};

function SessionDuration({ data }: PropsType) {
  const renderCustomLegend = () => {
    return <span className={style.legend}>Durée moyenne des sessions</span>;
  };

  return (
    <div className={style.graph}>
      <ResponsiveContainer height={320}>
        <LineChart
          data={data}
          margin={{
            top: 40,
            left: 20,
            bottom: 10,
            right: 20,
          }}
        >
          <XAxis dataKey="day" stroke="#fff" />
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
          />
          <Legend
            formatter={renderCustomLegend}
            wrapperStyle={{
              top: 20,
              left: 20,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SessionDuration;
