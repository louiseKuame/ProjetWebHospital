import { body } from "express-validator";

const roleRules=[
    body('nom').notEmpty().withMessage('Le nom ne peut pas etre vide'),
   
]

export default roleRules