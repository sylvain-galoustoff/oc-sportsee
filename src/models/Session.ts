export type SessionType = {
  day: string;
  time: string;
};

export type UserSessionDuration = {
  userId: string;
  duration: SessionType[];
};
