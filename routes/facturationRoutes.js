import { getAllFacturation, addFacturation, getFacturationById, updateFacturation, deleteFacturation} from '../controllers/facturation.js'
import { Router } from 'express'
import facturationRules from '../validations/facturationValidations.js'
import passport from 'passport'
import { verifierToken, isAdmin, isAdmin2 } from '../auth/autorisations.js'

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), verifierToken, isAdmin, getAllFacturation)
    .post('/', facturationRules, addFacturation)
    .get('/:id', getFacturationById)
    .put('/:id', updateFacturation)
    .delete('/:id', deleteFacturation)

export default router