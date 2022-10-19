import { DateTime } from "luxon";

export interface Car {
  id: number;
  brand: string;
  model: string;
  description?: string;
  release: DateTime;
  hp?: number;
  kw?: number;
}

export const bmw525: Car = {
  id: 1,
  brand: "BMW",
  model: "525i",
  release: DateTime.fromFormat("01-01-2020", "dd-MM-yyyy"),
  hp: 215,
  kw: 160,
};

export const bmw320: Car = {
  id: 2,
  brand: "BMW",
  model: "320i",
  release: DateTime.fromFormat("01-10-2021", "dd-MM-yyyy"),
  hp: 181,
  kw: 135,
};

export const mini: Car = {
  id: 3,
  brand: "Mini Cooper",
  model: "SE",
  release: DateTime.fromFormat("01-01-2022", "dd-MM-yyyy"),
  hp: 181,
  kw: 135,
};

export const mercedes: Car = {
  id: 4,
  brand: "Mercedes-Benz",
  model: "C200",
  release: DateTime.fromFormat("01-01-2021", "dd-MM-yyyy"),
  hp: 136,
  kw: 100,
};
