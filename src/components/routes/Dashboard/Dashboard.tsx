import NavIcon from "../../common/NavIcon/NavIcon";
import style from "./Dashboard.module.scss";
import zen from "../../../assets/zen.png";
import swim from "../../../assets/swim.png";
import bike from "../../../assets/bike.png";
import strength from "../../../assets/strength.png";
import NutritionCard from "../../common/NutritionCard/NutritionCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getUser,
  getUserActivity,
  getUserNutrition,
  getUserSessionDuration,
} from "../../../services/services";
import Activity from "../../common/Activity/Activity";
import { ActivityDataType } from "../../../models/Activity";
import { SessionType } from "../../../models/Session";
import SessionDuration from "../../common/SessionDuration/SessionDuration";

function Dashboard() {
  const params = useParams();
  const [user, setUser] = useState({
    id: "",
    firstname: "",
    lastname: "",
  });
  const [userNutrition, setUserNutrition] = useState({
    id: "",
    glucides: "",
    lipides: "",
    proteines: "",
    calories: "",
  });
  const [userActivity, setUserActivity] = useState<ActivityDataType[]>([]);
  const [userSessionDuration, setUserSessionDuration] = useState<SessionType[]>(
    []
  );

  useEffect(() => {
    const userId = params.userId;
    if (userId) {
      const userData = getUser(userId);
      if (userData) {
        setUser(userData);
      }

      const userNutritionData = getUserNutrition(userId);
      if (userNutritionData) {
        setUserNutrition(userNutritionData);
      }

      const userActivityData = getUserActivity(userId);
      if (userActivityData) {
        setUserActivity(userActivityData.activityData);
      }

      const userSessionDurationData = getUserSessionDuration(userId);
      if (userSessionDurationData) {
        setUserSessionDuration(userSessionDurationData.duration);
      }
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
            Bonjour <span className="primary">{user.firstname}</span>
          </h1>
          <p id={style.message}>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>

        <div id={style.stats}>
          <main id={style.graphs}>
            <Activity data={userActivity} />
            <div id={style.resume}>
              <SessionDuration data={userSessionDuration} />
              <div className={style.graph} id={style.radar}></div>
              <div className={style.graph} id={style.kpi}></div>
            </div>
          </main>
          <aside id={style.aside}>
            <NutritionCard label="calories" value={userNutrition.calories} />
            <NutritionCard label="proteines" value={userNutrition.proteines} />
            <NutritionCard label="glucides" value={userNutrition.glucides} />
            <NutritionCard label="lipides" value={userNutrition.lipides} />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
