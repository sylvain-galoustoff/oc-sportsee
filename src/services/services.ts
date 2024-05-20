import env from "../env";
import { users, nutrition, activities, sessionDuration } from "../data/mock";

function getMockDataFromUserId(data: unknown[], userId: string) {
  const targetData = [...data];
  const returnData = targetData.filter((data) => data.userId === userId);
  if (returnData.length === 1) {
    return returnData[0];
  } else {
    console.error(
      `Problème de récupération de l'utilisateur ${userId} dans les données suivante`,
      data
    );
  }
}

/* GET USER */
export const getUser = (userId: string) => {
  if (env.api === "local") {
    const user = getMockDataFromUserId(users, userId);
    return user;
  }
};

/* GET USER NUTRITION */
export const getUserNutrition = (userId: string) => {
  if (env.api === "local") {
    const nutritionData = getMockDataFromUserId(nutrition, userId);
    return nutritionData;
  }
};

/* GET USER ACTIVITY */
export const getUserActivity = (userId: string) => {
  if (env.api === "local") {
    const activityData = getMockDataFromUserId(activities, userId);
    return activityData;
  }
};

/* GET USER SESSION DURATION */
export const getUserSessionDuration = (userId: string) => {
  if (env.api === "local") {
    const sessionData = getMockDataFromUserId(sessionDuration, userId);
    console.log(sessionData);

    return sessionData;
  }
};
