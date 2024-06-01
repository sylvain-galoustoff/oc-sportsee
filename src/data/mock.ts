import {
  UserType,
  NutritionType,
  UserActivityType,
  UserSessionDurationType,
  UserStatType,
  UserScoreType,
} from "../models/Models";

export const users: UserType[] = [
  {
    userId: "1",
    firstname: "Alice",
    lastname: "Smith",
  },
  {
    userId: "2",
    firstname: "Bob",
    lastname: "Johnson",
  },
  {
    userId: "3",
    firstname: "Carol",
    lastname: "Williams",
  },
  {
    userId: "4",
    firstname: "David",
    lastname: "Brown",
  },
  {
    userId: "5",
    firstname: "Eve",
    lastname: "Jones",
  },
  {
    userId: "6",
    firstname: "Frank",
    lastname: "Garcia",
  },
  {
    userId: "7",
    firstname: "Grace",
    lastname: "Martinez",
  },
  {
    userId: "8",
    firstname: "Hank",
    lastname: "Rodriguez",
  },
  {
    userId: "9",
    firstname: "Ivy",
    lastname: "Martinez",
  },
  {
    userId: "10",
    firstname: "Jack",
    lastname: "Davis",
  },
  {
    userId: "12",
    firstname: "Ivy",
    lastname: "Martinez",
  },
  {
    userId: "18",
    firstname: "Jack",
    lastname: "Davis",
  },
];

export const nutrition: NutritionType[] = [
  {
    userId: "1",
    glucides: "250",
    lipides: "70",
    proteines: "60",
    calories: "2000",
  },
  {
    userId: "2",
    glucides: "300",
    lipides: "80",
    proteines: "70",
    calories: "2500",
  },
  {
    userId: "3",
    glucides: "150",
    lipides: "50",
    proteines: "50",
    calories: "1800",
  },
  {
    userId: "4",
    glucides: "200",
    lipides: "60",
    proteines: "65",
    calories: "2200",
  },
  {
    userId: "5",
    glucides: "180",
    lipides: "55",
    proteines: "55",
    calories: "1900",
  },
  {
    userId: "6",
    glucides: "275",
    lipides: "90",
    proteines: "75",
    calories: "2700",
  },
  {
    userId: "7",
    glucides: "225",
    lipides: "65",
    proteines: "70",
    calories: "2300",
  },
  {
    userId: "8",
    glucides: "260",
    lipides: "75",
    proteines: "80",
    calories: "2500",
  },
  {
    userId: "9",
    glucides: "240",
    lipides: "70",
    proteines: "60",
    calories: "2100",
  },
  {
    userId: "10",
    glucides: "190",
    lipides: "60",
    proteines: "65",
    calories: "2000",
  },
];

export const activities: UserActivityType[] = [
  {
    userId: "1",
    activityData: [
      { day: "1", poids: "66", calories: "365" },
      { day: "2", poids: "65.8", calories: "370" },
      { day: "3", poids: "65.6", calories: "360" },
      { day: "4", poids: "65.4", calories: "355" },
      { day: "5", poids: "65.3", calories: "350" },
      { day: "6", poids: "65.1", calories: "345" },
      { day: "7", poids: "65.0", calories: "340" },
      { day: "8", poids: "64.8", calories: "335" },
      { day: "9", poids: "64.7", calories: "330" },
      { day: "10", poids: "64.5", calories: "325" },
    ],
  },
  {
    userId: "2",
    activityData: [
      { day: "1", poids: "70", calories: "400" },
      { day: "2", poids: "69.8", calories: "395" },
      { day: "3", poids: "69.6", calories: "390" },
      { day: "4", poids: "69.4", calories: "385" },
      { day: "5", poids: "69.2", calories: "380" },
      { day: "6", poids: "69.0", calories: "375" },
      { day: "7", poids: "68.8", calories: "370" },
      { day: "8", poids: "68.6", calories: "365" },
      { day: "9", poids: "68.4", calories: "360" },
      { day: "10", poids: "68.2", calories: "355" },
    ],
  },
  {
    userId: "3",
    activityData: [
      { day: "1", poids: "80", calories: "500" },
      { day: "2", poids: "79.8", calories: "495" },
      { day: "3", poids: "79.6", calories: "490" },
      { day: "4", poids: "79.4", calories: "485" },
      { day: "5", poids: "79.2", calories: "480" },
      { day: "6", poids: "79.0", calories: "475" },
      { day: "7", poids: "78.8", calories: "470" },
      { day: "8", poids: "78.6", calories: "465" },
      { day: "9", poids: "78.4", calories: "460" },
      { day: "10", poids: "78.2", calories: "455" },
    ],
  },
  {
    userId: "4",
    activityData: [
      { day: "1", poids: "85", calories: "550" },
      { day: "2", poids: "84.8", calories: "545" },
      { day: "3", poids: "84.6", calories: "540" },
      { day: "4", poids: "84.4", calories: "535" },
      { day: "5", poids: "84.2", calories: "530" },
      { day: "6", poids: "84.0", calories: "525" },
      { day: "7", poids: "83.8", calories: "520" },
      { day: "8", poids: "83.6", calories: "515" },
      { day: "9", poids: "83.4", calories: "510" },
      { day: "10", poids: "83.2", calories: "505" },
    ],
  },
  {
    userId: "5",
    activityData: [
      { day: "1", poids: "60", calories: "300" },
      { day: "2", poids: "59.8", calories: "295" },
      { day: "3", poids: "59.6", calories: "290" },
      { day: "4", poids: "59.4", calories: "285" },
      { day: "5", poids: "59.2", calories: "280" },
      { day: "6", poids: "59.0", calories: "275" },
      { day: "7", poids: "58.8", calories: "270" },
      { day: "8", poids: "58.6", calories: "265" },
      { day: "9", poids: "58.4", calories: "260" },
      { day: "10", poids: "58.2", calories: "255" },
    ],
  },
  {
    userId: "6",
    activityData: [
      { day: "1", poids: "72", calories: "420" },
      { day: "2", poids: "71.8", calories: "415" },
      { day: "3", poids: "71.6", calories: "410" },
      { day: "4", poids: "71.4", calories: "405" },
      { day: "5", poids: "71.2", calories: "400" },
      { day: "6", poids: "71.0", calories: "395" },
      { day: "7", poids: "70.8", calories: "390" },
      { day: "8", poids: "70.6", calories: "385" },
      { day: "9", poids: "70.4", calories: "380" },
      { day: "10", poids: "70.2", calories: "375" },
    ],
  },
  {
    userId: "7",
    activityData: [
      { day: "1", poids: "68", calories: "380" },
      { day: "2", poids: "67.8", calories: "375" },
      { day: "3", poids: "67.6", calories: "370" },
      { day: "4", poids: "67.4", calories: "365" },
      { day: "5", poids: "67.2", calories: "360" },
      { day: "6", poids: "67.0", calories: "355" },
      { day: "7", poids: "66.8", calories: "350" },
      { day: "8", poids: "66.6", calories: "345" },
      { day: "9", poids: "66.4", calories: "340" },
      { day: "10", poids: "66.2", calories: "335" },
    ],
  },
  {
    userId: "8",
    activityData: [
      { day: "1", poids: "74", calories: "440" },
      { day: "2", poids: "73.8", calories: "435" },
      { day: "3", poids: "73.6", calories: "430" },
      { day: "4", poids: "73.4", calories: "425" },
      { day: "5", poids: "73.2", calories: "420" },
      { day: "6", poids: "73.0", calories: "415" },
      { day: "7", poids: "72.8", calories: "410" },
      { day: "8", poids: "72.6", calories: "405" },
      { day: "9", poids: "72.4", calories: "400" },
      { day: "10", poids: "72.2", calories: "395" },
    ],
  },
  {
    userId: "9",
    activityData: [
      { day: "1", poids: "78", calories: "480" },
      { day: "2", poids: "77.8", calories: "475" },
      { day: "3", poids: "77.6", calories: "470" },
      { day: "4", poids: "77.4", calories: "465" },
      { day: "5", poids: "77.2", calories: "460" },
      { day: "6", poids: "77.0", calories: "455" },
      { day: "7", poids: "76.8", calories: "450" },
      { day: "8", poids: "76.6", calories: "445" },
      { day: "9", poids: "76.4", calories: "440" },
      { day: "10", poids: "76.2", calories: "435" },
    ],
  },
  {
    userId: "10",
    activityData: [
      { day: "1", poids: "82", calories: "520" },
      { day: "2", poids: "81.8", calories: "515" },
      { day: "3", poids: "81.6", calories: "510" },
      { day: "4", poids: "81.4", calories: "505" },
      { day: "5", poids: "81.2", calories: "500" },
      { day: "6", poids: "81.0", calories: "495" },
      { day: "7", poids: "80.8", calories: "490" },
      { day: "8", poids: "80.6", calories: "485" },
      { day: "9", poids: "80.4", calories: "480" },
      { day: "10", poids: "80.2", calories: "475" },
    ],
  },
];

export const sessionDuration: UserSessionDurationType[] = [
  {
    userId: "1",
    duration: [
      { day: "L", time: "68" },
      { day: "M", time: "45" },
      { day: "M", time: "70" },
      { day: "J", time: "55" },
      { day: "V", time: "80" },
      { day: "S", time: "90" },
      { day: "D", time: "60" },
    ],
  },
  {
    userId: "2",
    duration: [
      { day: "L", time: "50" },
      { day: "M", time: "30" },
      { day: "M", time: "40" },
      { day: "J", time: "60" },
      { day: "V", time: "70" },
      { day: "S", time: "75" },
      { day: "D", time: "65" },
    ],
  },
  {
    userId: "3",
    duration: [
      { day: "L", time: "120" },
      { day: "M", time: "115" },
      { day: "M", time: "110" },
      { day: "J", time: "100" },
      { day: "V", time: "105" },
      { day: "S", time: "95" },
      { day: "D", time: "85" },
    ],
  },
  {
    userId: "4",
    duration: [
      { day: "L", time: "30" },
      { day: "M", time: "45" },
      { day: "M", time: "50" },
      { day: "J", time: "55" },
      { day: "V", time: "60" },
      { day: "S", time: "65" },
      { day: "D", time: "70" },
    ],
  },
  {
    userId: "5",
    duration: [
      { day: "L", time: "25" },
      { day: "M", time: "35" },
      { day: "M", time: "45" },
      { day: "J", time: "50" },
      { day: "V", time: "55" },
      { day: "S", time: "65" },
      { day: "D", time: "75" },
    ],
  },
  {
    userId: "6",
    duration: [
      { day: "L", time: "90" },
      { day: "M", time: "85" },
      { day: "M", time: "95" },
      { day: "J", time: "100" },
      { day: "V", time: "105" },
      { day: "S", time: "110" },
      { day: "D", time: "115" },
    ],
  },
  {
    userId: "7",
    duration: [
      { day: "L", time: "40" },
      { day: "M", time: "45" },
      { day: "M", time: "50" },
      { day: "J", time: "55" },
      { day: "V", time: "60" },
      { day: "S", time: "65" },
      { day: "D", time: "70" },
    ],
  },
  {
    userId: "8",
    duration: [
      { day: "L", time: "60" },
      { day: "M", time: "65" },
      { day: "M", time: "70" },
      { day: "J", time: "75" },
      { day: "V", time: "80" },
      { day: "S", time: "85" },
      { day: "D", time: "90" },
    ],
  },
  {
    userId: "9",
    duration: [
      { day: "L", time: "100" },
      { day: "M", time: "95" },
      { day: "M", time: "90" },
      { day: "J", time: "85" },
      { day: "V", time: "80" },
      { day: "S", time: "75" },
      { day: "D", time: "70" },
    ],
  },
  {
    userId: "10",
    duration: [
      { day: "L", time: "120" },
      { day: "M", time: "115" },
      { day: "M", time: "110" },
      { day: "J", time: "105" },
      { day: "V", time: "100" },
      { day: "S", time: "95" },
      { day: "D", time: "90" },
    ],
  },
];

export const stats: UserStatType[] = [
  {
    userId: "1",
    statistiques: [
      { subject: "Intensité", value: "10" },
      { subject: "Vitesse", value: "8" },
      { subject: "Force", value: "6" },
      { subject: "Endurance", value: "7" },
      { subject: "Energie", value: "9" },
      { subject: "Cardio", value: "8" },
    ],
  },
  {
    userId: "2",
    statistiques: [
      { subject: "Intensité", value: "9" },
      { subject: "Vitesse", value: "7" },
      { subject: "Force", value: "8" },
      { subject: "Endurance", value: "6" },
      { subject: "Energie", value: "10" },
      { subject: "Cardio", value: "7" },
    ],
  },
  {
    userId: "3",
    statistiques: [
      { subject: "Intensité", value: "8" },
      { subject: "Vitesse", value: "6" },
      { subject: "Force", value: "7" },
      { subject: "Endurance", value: "9" },
      { subject: "Energie", value: "6" },
      { subject: "Cardio", value: "10" },
    ],
  },
  {
    userId: "4",
    statistiques: [
      { subject: "Intensité", value: "7" },
      { subject: "Vitesse", value: "10" },
      { subject: "Force", value: "9" },
      { subject: "Endurance", value: "8" },
      { subject: "Energie", value: "7" },
      { subject: "Cardio", value: "6" },
    ],
  },
  {
    userId: "5",
    statistiques: [
      { subject: "Intensité", value: "6" },
      { subject: "Vitesse", value: "9" },
      { subject: "Force", value: "10" },
      { subject: "Endurance", value: "7" },
      { subject: "Energie", value: "8" },
      { subject: "Cardio", value: "7" },
    ],
  },
  {
    userId: "6",
    statistiques: [
      { subject: "Intensité", value: "9" },
      { subject: "Vitesse", value: "6" },
      { subject: "Force", value: "8" },
      { subject: "Endurance", value: "10" },
      { subject: "Energie", value: "7" },
      { subject: "Cardio", value: "9" },
    ],
  },
  {
    userId: "7",
    statistiques: [
      { subject: "Intensité", value: "8" },
      { subject: "Vitesse", value: "10" },
      { subject: "Force", value: "7" },
      { subject: "Endurance", value: "6" },
      { subject: "Energie", value: "9" },
      { subject: "Cardio", value: "8" },
    ],
  },
  {
    userId: "8",
    statistiques: [
      { subject: "Intensité", value: "7" },
      { subject: "Vitesse", value: "9" },
      { subject: "Force", value: "6" },
      { subject: "Endurance", value: "10" },
      { subject: "Energie", value: "8" },
      { subject: "Cardio", value: "7" },
    ],
  },
  {
    userId: "9",
    statistiques: [
      { subject: "Intensité", value: "10" },
      { subject: "Vitesse", value: "7" },
      { subject: "Force", value: "8" },
      { subject: "Endurance", value: "9" },
      { subject: "Energie", value: "6" },
      { subject: "Cardio", value: "10" },
    ],
  },
  {
    userId: "10",
    statistiques: [
      { subject: "Intensité", value: "6" },
      { subject: "Vitesse", value: "8" },
      { subject: "Force", value: "9" },
      { subject: "Endurance", value: "7" },
      { subject: "Energie", value: "10" },
      { subject: "Cardio", value: "8" },
    ],
  },
];

export const scores: UserScoreType[] = [
  {
    userId: "1",
    progress: [
      {
        name: "ref",
        progress: 100,
        fill: "#fff",
      },
      {
        name: "score",
        progress: 72,
        fill: "#E60000",
      },
    ],
  },
  {
    userId: "2",
    progress: [
      {
        name: "ref",
        progress: 100,
        fill: "#fff",
      },
      {
        name: "score",
        progress: 85,
        fill: "#E60000",
      },
    ],
  },
  {
    userId: "3",
    progress: [
      {
        name: "ref",
        progress: 100,
        fill: "#fff",
      },
      {
        name: "score",
        progress: 90,
        fill: "#E60000",
      },
    ],
  },
  {
    userId: "4",
    progress: [
      {
        name: "ref",
        progress: 100,
        fill: "#fff",
      },
      {
        name: "score",
        progress: 65,
        fill: "#E60000",
      },
    ],
  },
  {
    userId: "5",
    progress: [
      {
        name: "ref",
        progress: 100,
        fill: "#fff",
      },
      {
        name: "score",
        progress: 78,
        fill: "#E60000",
      },
    ],
  },
  {
    userId: "6",
    progress: [
      {
        name: "ref",
        progress: 100,
        fill: "#fff",
      },
      {
        name: "score",
        progress: 50,
        fill: "#E60000",
      },
    ],
  },
  {
    userId: "7",
    progress: [
      {
        name: "ref",
        progress: 100,
        fill: "#fff",
      },
      {
        name: "score",
        progress: 92,
        fill: "#E60000",
      },
    ],
  },
  {
    userId: "8",
    progress: [
      {
        name: "ref",
        progress: 100,
        fill: "#fff",
      },
      {
        name: "score",
        progress: 68,
        fill: "#E60000",
      },
    ],
  },
  {
    userId: "9",
    progress: [
      {
        name: "ref",
        progress: 100,
        fill: "#fff",
      },
      {
        name: "score",
        progress: 74,
        fill: "#E60000",
      },
    ],
  },
  {
    userId: "10",
    progress: [
      {
        name: "ref",
        progress: 100,
        fill: "#fff",
      },
      {
        name: "score",
        progress: 88,
        fill: "#E60000",
      },
    ],
  },
];
