
import database from "../connexion.js";

import { DataTypes } from 'sequelize'

//Modele de la table facturation
const Facturation = database.define('Facturation', {
   
    nom_prestation: { type: DataTypes.STRING, allowNull: false },
    prix: { type: DataTypes.INTEGER, allowNull: false },
    date: { type: DataTypes.DATEONLY },
   
},
    { //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
        timestamps: false
    })

export default Facturation
