import env from "../env";
import {
  users,
  nutrition,
  activities,
  sessionDuration,
  stats,
} from "../data/mock";
import {
  NutritionType,
  ActivityType,
  UserType,
  SessionDurationType,
  StatType,
} from "../models/Models";

export const getUser = (userId: string): UserType | undefined => {
  if (env.api === "local") {
    const mockData = [...users];
    const returnedData = mockData.filter((user) => user.userId === userId);
    return returnedData[0];
  }
};

export const getNutrition = (userId: string): NutritionType | undefined => {
  if (env.api === "local") {
    const mockData = [...nutrition];
    const returnedData = mockData.filter((user) => user.userId === userId);
    return returnedData[0];
  }
};

export const getActivity = (userId: string): ActivityType[] | undefined => {
  if (env.api === "local") {
    const mockData = [...activities];
    const returnedData = mockData.filter((user) => user.userId === userId);
    return returnedData[0].activityData;
  }
};

export const getDurations = (
  userId: string
): SessionDurationType[] | undefined => {
  if (env.api === "local") {
    const mockData = [...sessionDuration];
    const returnedData = mockData.filter((user) => user.userId === userId);
    return returnedData[0].duration;
  }
};

export const getStats = (userId: string): StatType[] | undefined => {
  if (env.api === "local") {
    const mockData = [...stats];
    const returnedData = mockData.filter((user) => user.userId === userId);
    return returnedData[0].statistiques;
  }
};
