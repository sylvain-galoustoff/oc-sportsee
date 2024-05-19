import env from "../env";
import { users } from "../data/mock";

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
