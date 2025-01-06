import { Router } from "express";
import {registerUser} from "../controllers/user.controller.js"
import { upload } from "../middlewares/multer.middleware.js";
import {loginUser,logoutUser,refreshAccessToken} from "../controllers/user.controller.js"
import { verifyJWT } from "../middlewares/auth.middelware.js";

const router = Router()

//middleware
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
    registerUser)

router.route("/login").post(loginUser)

// sercure routes
router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)

export default router