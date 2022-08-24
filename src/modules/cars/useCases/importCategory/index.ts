import { CategoriesRespository } from "../../repositories/implementations/CategoriesRespository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportcategoryUseCase";

const categoriesRepository = CategoriesRespository.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository)
const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export { importCategoryController }