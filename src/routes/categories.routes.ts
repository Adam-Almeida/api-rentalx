import { Request, Response, Router } from "express"
import { CategoriesRespository } from "../repositories/CategoriesRespository"

const categoriesRoutes = Router()
const categoriesRespository = new CategoriesRespository()

categoriesRoutes.post("/", (request: Request, response: Response) => {
    const { name, description } = request.body

    const categoryAlreadyExists = categoriesRespository.categoryByName(name)

    if(categoryAlreadyExists){
        return response.status(400).json({error: "Category already exists."})
    }

    categoriesRespository.create({ name, description })

    return response.status(201).send()
})

categoriesRoutes.get("/", (request: Request, response: Response) => {
    const all = categoriesRespository.list()

    return response.json(all)
})


export { categoriesRoutes }