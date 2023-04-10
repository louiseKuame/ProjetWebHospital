import {Service } from "../models/index.js"
import { validationResult } from "express-validator"

//Chercher la liste de tous les departments
export const getAllService = async (req, res) => {


    try {
        const result = await Service.findAll()
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addService = async (req, res) => {
    const { nom } = req.body
    const service = { nom}

    //Erreurs de validation

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })   
    }
    console.log("new errors",errors)
    try {
        const result = await Service.create(service)
        res.status(200).json({ data: result, message: "Service ajoute avec succes" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}
//
export const getServiceById = async (req, res) => {
    let { id } = req.params
    if (!id) res.status(400).json({ message: 'Service Id is required' })

    try {
        const result = await Service.findByPk(id)
        res.status(201).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const updateService = async (req, res) => {
    let { id } = req.params
    const updatedService = { nom: req.body.nom}

    if (!id) res.status(400).json({ message: 'Service Id is required' })
    try {
        const result = await Service.update(updatedService, { where: { id } })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const deleteService = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ error: true, message: "L'id du service est requis" })
    try {
        const result = await Service.destroy({ where: { id } })
        res.status(200).json({ message: `Le service ${id} a ete supprime avec succes` })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}