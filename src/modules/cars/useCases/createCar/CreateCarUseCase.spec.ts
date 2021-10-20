import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { AppError } from "../../../../shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a nem car ", async () => {
    const car = await createCarUseCase.execute({
      name: "name car",
      description: "description car",
      daily_rate: 100,
      license_plate: "abc 1234",
      fine_amount: 60,
      brand: "brand",
      category_id: "category",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a new car with exists license plate", async () => {
    await createCarUseCase.execute({
      name: "car 1",
      description: "description car 1",
      daily_rate: 100,
      license_plate: "abc 1234",
      fine_amount: 60,
      brand: "brand",
      category_id: "category",
    });
    await expect(
      createCarUseCase.execute({
        name: "car 2",
        description: "description car 2",
        daily_rate: 80,
        license_plate: "abc 1234",
        fine_amount: 50,
        brand: "brand",
        category_id: "category",
      })
    ).rejects.toEqual(new AppError("Car already exists"));
  });

  it("should not be able to create a new car with available true by default", () => {
    expect(async () => {
      const car = await createCarUseCase.execute({
        name: "car available",
        description: "description car 2",
        daily_rate: 80,
        license_plate: "abcd 1234",
        fine_amount: 50,
        brand: "brand",
        category_id: "category",
      });

      expect(car.available).toBe(true);
    });
  });
});
