import { Router } from "express";
import {logInUser, logoutUser, registerUser} from "../controllers/user.controller.js"
import {upload} from "../middlewares/muter.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";




const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)

router.route("/login").post(logInUser)

//secured routes

router.route("/logout").post(verifyJWT, logoutUser)

export default router