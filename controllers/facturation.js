import { Facturation }  from "../models/index.js"
import { validationResult } from "express-validator"

//Chercher la liste de toutes les facutres
export const getAllFacturation = async (req, res) => {


    try {
        const result = await Facturation.findAll()
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addFacturation = async (req, res) => {
    const { nom_prestation, prix, date } = req.body
    const facturation = { nom_prestation, prix, date }

    //Erreurs de validation

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })   
    }
    console.log("new errors",errors)
    try {
        const result = await Facturation.create(facturation)
        res.status(200).json({ data: result, message: "Facturation ajoute avec succes" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}
//
export const getFacturationById = async (req, res) => {
    let { id } = req.params
    if (!id) res.status(400).json({ message: 'Service Id is required' })

    try {
        const result = await Facturation.findByPk(id)
        res.status(201).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const updateFacturation = async (req, res) => {
    let { id } = req.params
    const updatedFacturation = { nom_prestation: req.body.nom_prestation, prix: req.body.prix, date: req.body.date}

    if (!id) res.status(400).json({ message: 'facture Id is required' })
    try {
        const result = await Service.update(updatedFacturation, { where: { id } })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const deleteFacturation = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ error: true, message: "L'id du facture est requis" })
    try {
        const result = await Facturation.destroy({ where: { id } })
        res.status(200).json({ message: `La facturation ${id} a ete supprime avec succes` })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}