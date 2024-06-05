import env from "../env";
import { users, nutrition, activities, sessionDuration, stats, scores } from "../data/mock";
import { NutritionType, ActivityType, UserType, SessionDurationType, StatType, ScoreType } from "../models/Models";
import { ApiActivity, ApiSessions, ApiStat } from "../models/ApiModels";

const fetchApi = async (endpoint: string, userId: string) => {
  if (userId === "12" || userId === "18") {
    try {
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
    }
  } else {
    console.error(
      "L'api n'expose que les utilisateurs avec l'id 12 ou 18. Vous avez demandé l'utilisateur : " + userId
    );
  }
};

export const getUser = async (userId: string): Promise<UserType | undefined> => {
  if (env.api === "local") {
    const mockData = [...users];
    const returnedData = mockData.filter((user) => user.userId === userId);
    return returnedData[0];
  }

  if (env.api === "distant") {
    const data = await fetchApi(`http://localhost:3000/user/${userId}`, userId);
    const returnedData = {
      userId: data.data.id,
      firstname: data.data.userInfos.firstName,
      lastname: data.data.userInfos.lastName,
    };
    return returnedData;
  }
};

export const getNutrition = async (userId: string): Promise<NutritionType | undefined> => {
  if (env.api === "local") {
    const mockData = [...nutrition];
    const returnedData = mockData.filter((user) => user.userId === userId);
    return returnedData[0];
  }

  if (env.api === "distant") {
    const data = await fetchApi(`http://localhost:3000/user/${userId}`, userId);
    const returnedData = {
      userId: data.data.id,
      carbohydrates: data.data.keyData.carbohydrateCount,
      lipids: data.data.keyData.lipidCount,
      proteins: data.data.keyData.proteinCount,
      calories: data.data.keyData.calorieCount,
    };
    return returnedData;
  }
};

export const getActivity = async (userId: string): Promise<ActivityType[] | undefined> => {
  if (env.api === "local") {
    const mockData = [...activities];
    const returnedData = mockData.filter((user) => user.userId === userId);
    return returnedData[0].activityData;
  }

  if (env.api === "distant") {
    const data = await fetchApi(`http://localhost:3000/user/${userId}/activity`, userId);
    const returnedData = data.data.sessions.map((activity: ApiActivity) => ({
      day: activity.day,
      weight: activity.kilogram,
      calories: activity.calories,
    }));

    return returnedData;
  }
};

export const getDurations = async (userId: string): Promise<SessionDurationType[] | undefined> => {
  if (env.api === "local") {
    const mockData = [...sessionDuration];
    const returnedData = mockData.filter((user) => user.userId === userId);
    return returnedData[0].duration;
  }
  if (env.api === "distant") {
    const data = await fetchApi(`http://localhost:3000/user/${userId}/average-sessions`, userId);
    const convertDays = ["L", "M", "M", "J", "V", "S", "D"];
    const returnedData = data.data.sessions.map((session: ApiSessions) => ({
      day: convertDays[session.day - 1],
      time: session.sessionLength,
    }));
    return returnedData;
  }
};

export const getStats = async (userId: string): Promise<StatType[] | undefined> => {
  if (env.api === "local") {
    const mockData = [...stats];
    const returnedData = mockData.filter((user) => user.userId === userId);
    return returnedData[0].statistiques;
  }
  if (env.api === "distant") {
    const data = await fetchApi(`http://localhost:3000/user/${userId}/performance`, userId);
    const convertKinds = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];
    const returnedData: StatType[] = [];
    data.data.data.forEach((stat: ApiStat) => {
      const statObj = {
        subject: "",
        value: "",
      };
      statObj.subject = convertKinds[stat.kind - 1];
      statObj.value = String(stat.value);
      returnedData.push(statObj);
    });
    return returnedData;
  }
};

export const getScore = async (userId: string): Promise<ScoreType[] | undefined> => {
  if (env.api === "local") {
    const mockData = [...scores];
    const returnedData = mockData.filter((user) => user.userId === userId);
    return returnedData[0].progress;
  }
  if (env.api === "distant") {
    const data = await fetchApi(`http://localhost:3000/user/${userId}`, userId);
    const returnedData = [
      {
        name: "ref",
        progress: 100,
        fill: "#fff",
      },
      {
        name: "score",
        progress: data.data.score ? data.data.score * 100 : data.data.todayScore * 100,
        fill: "#E60000",
      },
    ];
    return returnedData;
  }
};
