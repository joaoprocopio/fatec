import { Router, Request, Response } from "express";
import controller from "../controllers/ColorController";

const routes = Router();

routes.get("/", controller.list);
routes.get("/:red/:green/:blue", controller.create);
routes.get("/:id", controller.remove);

//aceita qualquer método HTTP ou URL
routes.use((_: Request, res: Response) =>
  res.json({ error: "Requisição desconhecida" })
);

export default routes;