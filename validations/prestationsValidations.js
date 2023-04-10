import { body } from "express-validator";

const prestationRules=[
    body('nom_prestation').notEmpty().withMessage('Le nom ne peut pas etre vide'),
    body('prix').notEmpty().withMessage('La date ne peut pas etre vide'),
    body('date').notEmpty().withMessage('Le prix ne peut pas etre vide'),
   
]

export default prestationRules