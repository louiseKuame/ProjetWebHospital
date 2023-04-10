import database from "../connexion.js";

import { DataTypes } from 'sequelize'

//Modele de la table departments
const Hospital = database.define('Hospital', {
   
    nom: { type: DataTypes.STRING, allowNull: false },
    adress: { type: DataTypes.STRING, allowNull: false },
    
},
    { //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
        timestamps: false
    })

export default Hospital

