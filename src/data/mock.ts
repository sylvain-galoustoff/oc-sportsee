export const users = [
  {
    id: "1",
    firstname: "Alice",
    lastname: "Smith",
  },
  {
    id: "2",
    firstname: "Bob",
    lastname: "Johnson",
  },
  {
    id: "3",
    firstname: "Carol",
    lastname: "Williams",
  },
  {
    id: "4",
    firstname: "David",
    lastname: "Brown",
  },
  {
    id: "5",
    firstname: "Eve",
    lastname: "Jones",
  },
  {
    id: "6",
    firstname: "Frank",
    lastname: "Garcia",
  },
  {
    id: "7",
    firstname: "Grace",
    lastname: "Martinez",
  },
  {
    id: "8",
    firstname: "Hank",
    lastname: "Rodriguez",
  },
  {
    id: "9",
    firstname: "Ivy",
    lastname: "Martinez",
  },
  {
    id: "10",
    firstname: "Jack",
    lastname: "Davis",
  },
];

export type UserType = {
  id: string;
  firstname: string;
  lastname: string;
};

export type UsersType = UserType[] | undefined;
