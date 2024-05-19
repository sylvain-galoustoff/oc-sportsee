export type ActivityType = {
  userId: string;
  activityData: ActivityDataType[];
};

export type ActivityDataType = {
  day: string;
  poids: string;
  calories: string;
};
