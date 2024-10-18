import { Router } from "express";
import { signin, signup } from "../controllers/user";

const router: Router = Router();

router.post("/signup", signup);
router.post("/signin", signin);

export default router;
