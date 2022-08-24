import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportcategoryUseCase";

const importCategoryUseCase = new ImportCategoryUseCase()
const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export { importCategoryController }