import { getAllPrestations, addPrestation, getPrestationById, updatePrestation, deletePrestation } from '../controllers/prestations.js'
import { Router } from 'express'
import prestationRules from '../validations/prestationsValidations.js'
import passport from 'passport'
import { verifierToken, isAdmin, isAdmin2 } from '../auth/autorisations.js'

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), verifierToken, isAdmin, getAllPrestations)
    .post('/', prestationRules, addPrestation)
    .get('/:id', getPrestationById)
    .put('/:id', updatePrestation)
    .delete('/:id', deletePrestation)

export default router