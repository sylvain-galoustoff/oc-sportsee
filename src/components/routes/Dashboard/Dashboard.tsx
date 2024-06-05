import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavIcon from "../../common/NavIcon/NavIcon";
import NutritionCard from "../../common/NutritionCard/NutritionCard";
import Activity from "../../common/Activity/Activity";
import SessionDuration from "../../common/SessionDuration/SessionDuration";
import Stats from "../../common/Radar/Stats";
import Score from "../../common/Score/Score";
import style from "./Dashboard.module.scss";
import zen from "../../../assets/zen.png";
import swim from "../../../assets/swim.png";
import bike from "../../../assets/bike.png";
import strength from "../../../assets/strength.png";
import {
  ActivityType,
  NutritionType,
  UserType,
  SessionDurationType,
  StatType,
  ScoreType,
} from "../../../models/Models";
import { getActivity, getDurations, getNutrition, getScore, getStats, getUser } from "../../../services/services";

function Dashboard() {
  const params = useParams();
  const [user, setUser] = useState<UserType>();
  const [nutrition, setNutrition] = useState<NutritionType>();
  const [activities, setActivities] = useState<ActivityType[]>();
  const [durations, setDurations] = useState<SessionDurationType[]>();
  const [stats, setStats] = useState<StatType[]>();
  const [score, setScore] = useState<ScoreType[]>();

  useEffect(() => {
    const userId = params.userId;

    const fetchData = async () => {
      if (userId) {
        const userData = await getUser(userId);
        setUser(userData);
        const userNutrition = await getNutrition(userId);
        setNutrition(userNutrition);
        const userActivity = await getActivity(userId);
        setActivities(userActivity);
        const userDurations = await getDurations(userId);
        setDurations(userDurations);
        const userStats = await getStats(userId);
        setStats(userStats);
        const userScore = await getScore(userId);
        setScore(userScore);
      }
    };

    fetchData();
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
          <p id={style.message}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>

        <div id={style.stats}>
          <main id={style.graphs}>
            <Activity data={activities} />
            <div id={style.resume}>
              <SessionDuration data={durations} />
              <Stats data={stats} />
              <Score data={score} />
            </div>
          </main>
          <aside id={style.aside}>
            <NutritionCard label="calories" value={nutrition?.calories} />
            <NutritionCard label="proteins" value={nutrition?.proteins} />
            <NutritionCard label="carbohydrates" value={nutrition?.carbohydrates} />
            <NutritionCard label="lipids" value={nutrition?.lipids} />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
