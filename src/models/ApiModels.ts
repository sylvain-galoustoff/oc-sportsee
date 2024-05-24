export type ApiActivity = {
  day: string;
  kilogram: number;
  calories: number;
};

export type ApiSessions = {
  day: number;
  sessionLength: number;
};

export type ApiStat = {
  value: number;
  kind: number;
};
