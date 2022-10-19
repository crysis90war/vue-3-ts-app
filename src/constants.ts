export const periods = ["Today", "This Week", "This Month"] as const;
export type Period = typeof periods[number];

export const brands = [
  "",
  "BMW",
  "Mercedes-Benz",
  "Mini Cooper",
  "Audi",
  "Volvo",
  "Tesla",
] as const;
export type Brand = typeof brands[number];
