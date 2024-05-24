/* TYPES */

import NavIcon from "../../common/NavIcon/NavIcon";
import NutritionCard from "../../common/NutritionCard/NutritionCard";
import Activity from "../../common/Activity/Activity";
import SessionDuration from "../../common/SessionDuration/SessionDuration";
/* STYLES */
import style from "./Dashboard.module.scss";
/* ASSETS */
import zen from "../../../assets/zen.png";
import swim from "../../../assets/swim.png";
import bike from "../../../assets/bike.png";
import strength from "../../../assets/strength.png";

import { useState, useEffect } from "react";
import {
  ActivityType,
  NutritionType,
  UserType,
  SessionDurationType,
  StatType,
} from "../../../models/Models";
import { useParams } from "react-router-dom";
import {
  getActivity,
  getDurations,
  getNutrition,
  getStats,
  getUser,
} from "../../../services/services";
import Stats from "../../common/Radar/Stats";

function Dashboard() {
  const params = useParams();
  const [user, setUser] = useState<UserType>();
  const [nutrition, setNutrition] = useState<NutritionType>();
  const [activities, setActivities] = useState<ActivityType[]>();
  const [durations, setDurations] = useState<SessionDurationType[]>();
  const [stats, setStats] = useState<StatType[]>();

  useEffect(() => {
    const userId = params.userId;
    if (userId) {
      setUser(getUser(userId));
      setNutrition(getNutrition(userId));
      setActivities(getActivity(userId));
      setDurations(getDurations(userId));
      setStats(getStats(userId));
    }
  }, [params]);

  return (
    <div className="content" id={style.dashboard}>
      <div id={style.nav}>
        <NavIcon icon={zen} to="/dashboard/zen" />
        <NavIcon icon={swim} to="/dashboard/swim" />
        <NavIcon icon={bike} to="/dashboard/bike" />
        <NavIcon icon={strength} to="/dashboard/strength" />
      </div>

      <div id={style.content}>
        <div id={style.header}>
          <h1>
            Bonjour <span className="primary">{user?.firstname}</span>
          </h1>
          <p id={style.message}>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>

        <div id={style.stats}>
          <main id={style.graphs}>
            <Activity data={activities} />
            <div id={style.resume}>
              <SessionDuration data={durations} />
              <Stats data={stats} />
              <div className={style.graph} id={style.kpi}></div>
            </div>
          </main>
          <aside id={style.aside}>
            <NutritionCard label="calories" value={nutrition?.calories} />
            <NutritionCard label="proteines" value={nutrition?.proteines} />
            <NutritionCard label="glucides" value={nutrition?.glucides} />
            <NutritionCard label="lipides" value={nutrition?.lipides} />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
