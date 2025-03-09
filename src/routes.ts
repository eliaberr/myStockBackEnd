import { Router } from "express";
import ProductControllers from "./app/controllers/productControllers";

export const routes = Router()

routes.get('/products', ProductControllers.index)
routes.get('/products/:id', ProductControllers.show)
routes.post('/products', ProductControllers.store)
routes.delete('/products/:id', ProductControllers.delete)
routes.put('/products/:id', ProductControllers.update)