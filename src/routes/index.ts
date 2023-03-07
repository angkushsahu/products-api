import { Router } from "express";
const router = Router();
import * as controllers from "../controllers";

router.route("/all").get(controllers.getAllProducts);
router.route("/:id").get(controllers.getOneProduct);

export default router;
