import { Request, Response, Router } from "express"
import { SpecificationsRepository } from "../repositories/SpecificationsRepository"
import { CreateSpecificationService } from "../services/CreateSpecificationService"

const specificationsRoutes = Router()
const specificationsRespository = new SpecificationsRepository()

specificationsRoutes.post("/", (request: Request, response: Response) => {
    const { name, description } = request.body

    const createSpecificationServive = new CreateSpecificationService(specificationsRespository)
    createSpecificationServive.execute({ name, description })

    return response.status(201).send()
})

specificationsRoutes.get("/", (request: Request, response: Response) => {
    const all = specificationsRespository.list()

    return response.json(all)
})

export { specificationsRoutes }