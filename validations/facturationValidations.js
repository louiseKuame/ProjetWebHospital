import { body } from "express-validator";

const facturationRules=[
    body('nom_prestation').notEmpty().withMessage('Le nom de la prestation ne peut pas etre vide'),
    body('prix').notEmpty().withMessage('Le prix ne peut pas etre vide'),
    body('date').notEmpty().withMessage('La date ne peut pas etre vide')
 
]

export default facturationRules