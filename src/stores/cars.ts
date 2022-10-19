import { defineStore } from "pinia";
import { bmw320, bmw525, mini, mercedes, type Car } from "../models/cars";
import type { Brand } from "../constants";

interface CarsState {
  ids: number[];
  all: Map<number, Car>;
  selectedBrand: Brand;
  selectedCar?: Car;
}

export const useCars = defineStore("cars", {
  state: (): CarsState => ({
    ids: [bmw320.id, bmw525.id, mini.id, mercedes.id],
    all: new Map([
      [bmw320.id, bmw320],
      [bmw525.id, bmw525],
      [mini.id, mini],
      [mercedes.id, mercedes],
    ]),
    selectedBrand: "",
    selectedCar: undefined,
  }),

  actions: {
    setSelectedBrand(brand: Brand) {
      this.selectedBrand = brand;
    },
    setSelectedCar(car: Car) {
      this.selectedCar = car;
    },
  },

  getters: {
    filteredCars: (state): Car[] => {
      return state.ids
        .map((id) => {
          const car = state.all.get(id)!;

          return {
            ...car,
            brand: car.brand,
          };
        })
        .filter((car) => {
          if (state.selectedBrand === "") {
            return car;
          }
          return car.brand === state.selectedBrand;
        });
    },
    getSelectedCar: (state): Car | undefined => {
      return state.selectedCar;
    },
  },
});
