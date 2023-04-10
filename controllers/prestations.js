import { Prestation } from "../models/index.js"
import { validationResult } from "express-validator"

//Chercher la liste de toutes les prestations
export const getAllPrestations = async (req, res) => {


    try {
        const result = await Prestation.findAll()
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addPrestation = async (req, res) => {
    const { nom_prestation, prix, date } = req.body
    const prestation = { nom_prestation, prix, date}

    //Erreurs de validation

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })   
    }
    console.log("new errors",errors)
    try {
        const result = await Prestation.create(prestation)
        res.status(200).json({ data: result, message: "prestation ajoute avec succes" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}
//
export const getPrestationById = async (req, res) => {
    let { id } = req.params
    if (!id) res.status(400).json({ message: 'prestation Id is required' })

    try {
        const result = await Prestation.findByPk(id)
        res.status(201).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const updatePrestation = async (req, res) => {
    let { id } = req.params
    const updatedPrestation = { nom_prestation: req.body.nom_prestation, prix: req.body.prix, date: req.body.date}

    if (!id) res.status(400).json({ message: 'Prestation Id is required' })
    try {
        const result = await Prestation.update(updatedPrestation, { where: { id } })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const deletePrestation = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ error: true, message: "L'id de la prestation est requise" })
    try {
        const result = await Prestation.destroy({ where: { id } })
        res.status(200).json({ message: `La prestation ${id} a ete supprime avec succes` })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}