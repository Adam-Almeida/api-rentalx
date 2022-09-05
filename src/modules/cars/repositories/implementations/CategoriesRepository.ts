import { Category } from "../../entities/Category"
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";
import { Repository } from "typeorm";
import AppDataSource from "../../../../database/data-source";

class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>

    private categories: Category[]
    private static INSTANCE: CategoriesRepository

    public constructor() {
        this.repository = AppDataSource.getRepository(Category) 
    }

    async findByName(name: string|null): Promise<Category>{
        const category = await this.repository.findOne({name})
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