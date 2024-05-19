import env from "../env";
import { users, nutrition } from "../data/mock";

/* GET USER */
export const getUser = (userId: string) => {
  if (env.api === "local") {
    const user = getUserFromMock(userId);
    return user;
  }
};

const getUserFromMock = (userId: string) => {
  const usersData = [...users];
  const user = usersData.filter((user) => user.id === userId);
  if (user.length === 1) {
    return user[0];
  } else {
    console.error(
      "Erreur de récupération de l'utilisateur depuis les données mockées"
    );
  }
};

/* GET USER NUTRITION */
export const getUserNutrition = (userId: string) => {
  if (env.api === "local") {
    const user = getUserNutritionFromMock(userId);
    return user;
  }
};

const getUserNutritionFromMock = (userId: string) => {
  const usersNutritionData = [...nutrition];
  const userNutritionData = usersNutritionData.filter(
    (userNutrition) => userNutrition.id === userId
  );
  if (userNutritionData.length === 1) {
    return userNutritionData[0];
  } else {
    console.error(
      "Erreur de récupération des données de nutrition de l'utilisateur depuis les données mockées"
    );
  }
};
