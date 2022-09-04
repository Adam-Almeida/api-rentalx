import { Category } from "../../entities/Category"
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";
import { Repository } from "typeorm";
import AppDataSource from "../../../../database/data-source";

class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>

    private categories: Category[]
    private static INSTANCE: CategoriesRepository

    private constructor() {
        this.repository = AppDataSource.getRepository(Category) 
    }

    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository()
        }

        return CategoriesRepository.INSTANCE
    }

    findByName(name: string): Promise<Category >{
        const category = this.categories.find((category) => category.name === name)
        return category
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            description,
            name
        })

        await this.repository.save(category)
    }

    async list(): Promise<Category[]> {
        const categories =  await this.repository.find()
        return categories
    }

}

export { CategoriesRepository }