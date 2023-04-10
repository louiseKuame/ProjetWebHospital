import{ Rendezvous } from "../models/index.js"
import { validationResult } from "express-validator"

//Chercher la liste de tous les rendezvous
export const getAllRdv = async (req, res) => {


    try {
        const result = await Rendezvous.findAll()
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addRdv = async (req, res) => {
    const { type_rdv } = req.body
    const rdv = { type_rdv }

    //Erreurs de validation

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })   
    }
    console.log("new errors",errors)
    try {
        const result = await Rendezvous.create(rdv)
        res.status(200).json({ data: result, message: "rdv ajoute avec succes" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}
//
export const getRdvById = async (req, res) => {
    let { id } = req.params
    if (!id) res.status(400).json({ message: 'rdv Id is required' })

    try {
        const result = await Rendezvous.findByPk(id)
        res.status(201).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const updateRdv = async (req, res) => {
    let { id } = req.params
    const updatedRdv = { type_rdv: req.body.type_rdv }

    if (!id) res.status(400).json({ message: 'rdv Id is required' })
    try {
        const result = await Rendezvous.update(updatedRdv, { where: { id } })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const deleteRdv = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ error: true, message: "L'id du rdv est requise" })
    try {
        const result = await Rendezvous.destroy({ where: { id } })
        res.status(200).json({ message: `La rdv ${id} a ete supprime avec succes` })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}