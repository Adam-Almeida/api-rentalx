import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({name, description}: ICreateCategoryDTO): void;
    categoryByName(name: string): Category
}

export { ICategoriesRepository, ICreateCategoryDTO }