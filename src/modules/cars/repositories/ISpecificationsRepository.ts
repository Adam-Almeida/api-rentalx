import { Specification } from "../model/Specification"

interface ISpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository{
    findByName(name: string): Specification;
    list(): Specification[];
    create({name, description}: ISpecificationDTO): void;
}

export { ISpecificationDTO, ISpecificationsRepository }