import { Request, Response, Router } from "express"
import { CategoriesRespository } from "../repositories/CategoriesRespository"
import { CreateCategoryServie } from "../services/CreateCategoryService"

const categoriesRoutes = Router()
const categoriesRespository = new CategoriesRespository()

categoriesRoutes.post("/", (request: Request, response: Response) => {
    const { name, description } = request.body

    const createCategoryService = new CreateCategoryServie(categoriesRespository)
    createCategoryService.execute({ name, description })

    return response.status(201).send()
})

categoriesRoutes.get("/", (request: Request, response: Response) => {
    const all = categoriesRespository.list()

    return response.json(all)
})


export { categoriesRoutes }