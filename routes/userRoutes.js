import { Router } from "express";
import { addUser, getAllUsers, createUserRole, getUserRole,getUserById, userLogin } from "../controllers/users.js";

const router = Router()

router.post('/', addUser)
router.get('/', getAllUsers)
router.post('/:id/role', createUserRole)
router.get('/:id/role', getUserRole)
router.get('/:id', getUserById)
router.post('/login', userLogin)
export default router

