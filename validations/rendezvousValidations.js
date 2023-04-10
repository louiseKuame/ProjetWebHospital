import { body } from "express-validator";

const rendezvousRules=[
    body('type_rdv').notEmpty().withMessage('Le Champ ne peut pas etre vide')
    
]

export default rendezvousRules