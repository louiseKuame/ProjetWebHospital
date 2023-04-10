import { getRoleUser, addRole, getAllRoles, createRoleUser,deleteRoleUser } from '../controllers/roles.js'
import { Router } from 'express'
import roleRules from '../validations/roleValidations.js'
import passport from 'passport'
import { verifierToken, isAdmin, isAdmin2 } from '../auth/autorisations.js'


const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), verifierToken, isAdmin, getRoleUser)
    .post('/', roleRules, addRole)
    .get('/:id', getAllRoles)
    .put('/:id', createRoleUser)
    .delete('/:id', deleteRoleUser)

export default router