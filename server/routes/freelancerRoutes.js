import express from "express";
import freelancerController from "../controllers/freelancerController.js";
import ratingRoutes from "./ratingRoutes.js"

const router = express.Router({mergeParams : true})

router.get("/" , freelancerController.getFreelancers)
router.get("/:fid" , freelancerController.getFreelancer)

// freelancer bn skta he
router.post("/add-me" , freelancerController.becomeFreelancer)

// freelancer kisi ke bhi project dekh skta he apply kr skta he submit kr skta he
router.get("/project" , freelancerController.getMyPreviousProjects)
router.post("/project/:pid" , freelancerController.applyForProject)
router.put("/project/:pid" , freelancerController.submitProject)

// /Freelancer apne purane project dekh skta he , purane project dal skta he , update kr skta he , delete kr skta he
router.get("/my-work" , freelancerController.getMyWork)
router.post("/my-work" , freelancerController.addMyWork)
router.put("/my-work/:wid" , freelancerController.updateMyWork)
router.delete("/my-work/:wid" , freelancerController.removeMyWork)


// Freelancer project ko updated kr skte he
router.put("/profile" , freelancerController.updateProfile)


router.use("/:fid/ratings" , ratingRoutes)


export default router