import { getAllHospitals, addHospital, getHospitalsById, updateHospitals, deleteHospital } from '../controllers/hospitals.js'
import { Router } from 'express'
import hospitalsRules from '../validations/hospitalsValidations.js'
import passport from 'passport'
import { verifierToken, isAdmin, isAdmin2 } from '../auth/autorisations.js'
import { addRole } from '../controllers/roles.js'

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), verifierToken, isAdmin, getAllHospitals)
    .post('/', hospitalsRules, addHospital)
    .get('/:id', getHospitalsById)
    .put('/:id', updateHospitals)
    .delete('/:id', deleteHospital)

export default router