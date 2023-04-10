import { body } from "express-validator";

const serviceRules=[
    body('nom').notEmpty().withMessage('Le nom ne peut pas etre vide'),
 
]

export default serviceRules