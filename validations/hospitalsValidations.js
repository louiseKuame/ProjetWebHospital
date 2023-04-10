import { body } from "express-validator";

const hospitalsRules=[
    body('nom').notEmpty().withMessage('Le nom ne peut pas etre vide'),
    body('adress').isLength({min:12}).withMessage('La description doit avoir au moins 12 caracteres')
]

export default hospitalsRules