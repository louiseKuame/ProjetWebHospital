import { getAllService, addService, getServiceById, updateService, deleteService } from '../controllers/service.js'
import { Router } from 'express'
import serviceRules from '../validations/serviceValidations.js'
import passport from 'passport'
import { verifierToken, isAdmin, isAdmin2 } from '../auth/autorisations.js'

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), verifierToken, isAdmin, getAllService)
    .post('/', serviceRules, addService)
    .get('/:id', getServiceById)
    .put('/:id', updateService)
    .delete('/:id', deleteService)

export default router