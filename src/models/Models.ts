export type UserType = {
  userId: string;
  firstname: string;
  lastname: string;
};

export type NutritionType = {
  userId: string;
  glucides: string;
  lipides: string;
  proteines: string;
  calories: string;
};

export type ActivityType = {
  day: string;
  poids: string;
  calories: string;
};

export type UserActivityType = {
  userId: string;
  activityData: ActivityType[];
};

export type SessionDurationType = {
  day: string;
  time: string;
};

export type UserSessionDurationType = {
  userId: string;
  duration: SessionDurationType[];
};

export type StatType = {
  intensity: number;
  vitesse: number;
  force: number;
  endurance: number;
  energy: number;
  cardio: number;
};

export type UserStatType = {
  userId: string;
  stats: StatType;
};
