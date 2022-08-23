import { Request, Response, Router } from "express"
import { CategoriesRespository } from "../modules/cars/repositories/CategoriesRespository"
import { createCategoryController } from "../modules/cars/useCases/createCategory"

const categoriesRoutes = Router()
const categoriesRespository = new CategoriesRespository()

categoriesRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res)
})

categoriesRoutes.get("/", (request: Request, response: Response) => {
    const all = categoriesRespository.list()

    return response.json(all)
})

export { categoriesRoutes }