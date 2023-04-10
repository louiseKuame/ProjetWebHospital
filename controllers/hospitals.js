import {  Hospital}  from "../models/index.js"
import { validationResult } from "express-validator"

//Chercher la liste de tous les departments
export const getAllHospitals = async (req, res) => {


    try {
        const result = await Hospital.findAll()
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addHospital = async (req, res) => {
    const { nom, adress } = req.body
    const hospitals = {  nom, adress }

    //Erreurs de validation

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })   
    }
    console.log("new errors",errors)
    try {
        const result = await Hospital.create(hospitals)
        res.status(200).json({ data: result, message: "Hospital ajoute avec succes" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}
//
export const getHospitalsById = async (req, res) => {
    let { id } = req.params
    if (!id) res.status(400).json({ message: 'Hospital Id is required' })

    try {
        const result = await Hospital.findByPk(id)
        res.status(201).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const updateHospitals = async (req, res) => {
    let { id } = req.params
    const updatedHospitals = { nom: req.body.nom, adress: req.body.description }

    if (!id) res.status(400).json({ message: 'Hospital Id is required' })
    try {
        const result = await Hospital.update(updatedHospitals, { where: { id } })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const deleteHospital = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ error: true, message: "L'id de l'hospital  est requis" })
    try {
        const result = await Hospital.destroy({ where: { id } })
        res.status(200).json({ message: `Le Hospital ${id} a ete supprime avec succes` })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}