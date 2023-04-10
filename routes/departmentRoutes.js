import { getAllDepartments, addDepartment, getDepartmentById, updateDepartment, deleteDepartment } from '../controllers/departments.js'
import { Router } from 'express'
import departmentRules from '../validations/departmentValidations.js'
import passport from 'passport'
import { verifierToken, isAdmin, isAdmin2 } from '../auth/autorisations.js'

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), verifierToken, isAdmin, getAllDepartments)
    .post('/', departmentRules, addDepartment)
    .get('/:id', getDepartmentById)
    .put('/:id', updateDepartment)
    .delete('/:id', deleteDepartment)

export default router