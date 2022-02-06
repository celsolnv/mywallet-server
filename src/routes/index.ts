import { Router } from "express";
import * as userController from "../controllers/userController";
import * as operationController from "../controllers/operationController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const router = Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

router.post("/operations", ensureAuthenticated, operationController.create);
export { router };
