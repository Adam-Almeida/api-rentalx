import { Category } from "../model/Category"
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";


class CategoriesRespository implements ICategoriesRepository {

    private categories: Category[]

    constructor() {
        this.categories = []
    }
    findByName(name: string): Category {
        throw new Error("Method not implemented.");
    }
    categoryByName(name:string ): Category {
        const category = this.categories.find((category) => category.name === name)
        return category
    }

    create({ name, description }: ICreateCategoryDTO) {
        const category = new Category()

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })

        this.categories.push(category)
    }

    list(): Category[] {
        return this.categories
    }



}

export { CategoriesRespository }