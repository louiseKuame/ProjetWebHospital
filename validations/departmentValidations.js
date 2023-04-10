import { body } from "express-validator";

const departmentRules=[
    body('nom').notEmpty().withMessage('Le nom ne peut pas etre vide'),
    body('description').isLength({min:12}).withMessage('La description doit avoir au moins 12 caracteres')
]

export default departmentRules