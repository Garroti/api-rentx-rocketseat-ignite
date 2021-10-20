import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all avaliable cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "car 1",
      description: "description car 1",
      daily_rate: 100,
      license_plate: "abc 1234 1",
      fine_amount: 60,
      brand: "brand",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("it should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "car 2",
      description: "description car 2",
      daily_rate: 100,
      license_plate: "abc 1234 2",
      fine_amount: 60,
      brand: "brand2",
      category_id: "category_id2",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "brand2",
    });

    expect(cars).toEqual([car]);
  });

  it("it should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "car 3",
      description: "description car 3",
      daily_rate: 100,
      license_plate: "abc 1234 3",
      fine_amount: 60,
      brand: "brand3",
      category_id: "category_id3",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "car 3",
    });

    expect(cars).toEqual([car]);
  });

  it("it should be able to list all available cars by category_id", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "car 4",
      description: "description car 4",
      daily_rate: 100,
      license_plate: "abc 1234 4",
      fine_amount: 60,
      brand: "brand4",
      category_id: "category_id4",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "category_id4",
    });

    expect(cars).toEqual([car]);
  });
});
