import { Router } from "express";
import ProductControllers from "./app/controllers/productControllers";
import userControllers from "./app/controllers/userControllers";

export const routes = Router()

routes.get('/products', ProductControllers.index)
routes.get('/products/:id', ProductControllers.show)
routes.post('/products', ProductControllers.store)
routes.delete('/products/:id', ProductControllers.delete)
routes.put('/products/:id', ProductControllers.update)

routes.get('/users', userControllers.index)
routes.get('/users/:userEmail', userControllers.show)
routes.post('/users', userControllers.store)