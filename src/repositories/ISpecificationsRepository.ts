import { Specification } from "../model/Specification"

interface ISpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository{
    findByName(name: string): Specification;
    list(): Specification[];
    create(name:string, description: string): void;
    specificationByName(name: string): Specification;
}

export { ISpecificationDTO, ISpecificationsRepository }