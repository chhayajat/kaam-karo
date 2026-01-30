import express from "express";
import projectController from "../controllers/projecController.js";


const router = express.Router()

router.post("/add" , projectController.listProject)
router.post("/:pid" , projectController.acceptProjectRequest)
router.put("/:pid" , projectController.updateProjectStatus)
router.get("/:pid" , projectController.checkProjectApplications)


export default router