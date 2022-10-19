export interface Stage {
  id: number;
  maxPoints: number;
}

export interface Result {
  id: number;
  name: string;
  stages: Stage[];
}

export const results: Result[] = [
  {
    id: 1,
    name: "name de test",
    stages: [
      {
        id: 1,
        maxPoints: 55,
      },
      {
        id: 1,
        maxPoints: 90,
      },
      {
        id: 1,
        maxPoints: 160,
      },
      {
        id: 1,
        maxPoints: 145,
      },
    ],
  },
  {
    id: 1,
    name: "name de test",
    stages: [
      {
        id: 1,
        maxPoints: 45,
      },
    ],
  },
  {
    id: 1,
    name: "name de test",
    stages: [],
  },
  {
    id: 1,
    name: "name de test",
    stages: [],
  },
];
