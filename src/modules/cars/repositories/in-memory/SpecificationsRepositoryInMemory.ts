import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import {
  ISpecificationRepository,
  ISpecificationRepositoryDTO,
} from "@modules/cars/repositories/ISpecificationRepository";

class SpecificationsRepositoryInMemory implements ISpecificationRepository {
  specifications: Specification[] = [];

  async create({
    name,
    description,
  }: ISpecificationRepositoryDTO): Promise<Specification> {
    const specification = new Specification();

    Object.assign(specification, {
      description,
      name,
    });

    this.specifications.push(specification);

    return specification;
  }
  async findByName(name: string): Promise<Specification> {
    return this.specifications.find((spec) => spec.name === name);
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const allSpecifications = this.specifications.filter((spec) =>
      ids.includes(spec.id)
    );

    return allSpecifications;
  }
}

export { SpecificationsRepositoryInMemory };
