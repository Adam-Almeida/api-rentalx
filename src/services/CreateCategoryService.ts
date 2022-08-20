import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryServie {

    constructor(private categoriesRespository: ICategoriesRepository) {}

    execute({ name, description }: IRequest) {
        const categoryAlreadyExists = this.categoriesRespository.categoryByName(name)

        if (categoryAlreadyExists) {
            throw new Error("Category already exists.")
        }

        this.categoriesRespository.create({ name, description })
    }
}

export { CreateCategoryServie }