import { getAllRdv, addRdv, getRdvById, updateRdv, deleteRdv } from '../controllers/rendezvous.js'
import { Router } from 'express'
import rendezvousRules from '../validations/rendezvousValidations.js'
import passport from 'passport'
import { verifierToken, isAdmin, isAdmin2 } from '../auth/autorisations.js'

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), verifierToken, isAdmin, getAllRdv)
    .post('/', rendezvousRules, addRdv)
    .get('/:id', getRdvById)
    .put('/:id', updateRdv)
    .delete('/:id', deleteRdv)

export default router