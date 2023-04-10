import {Department }  from "../models/index.js"
import { validationResult } from "express-validator"

//Chercher la liste de tous les departments
export const getAllDepartments = async (req, res) => {


    try {
        const result = await Department.findAll()
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addDepartment = async (req, res) => {
    const { nom, description, creation_date } = req.body
    const department = { nom, description, creation_date }

    //Erreurs de validation

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })   
    }
    console.log("new errors",errors)
    try {
        const result = await Department.create(department)
        res.status(200).json({ data: result, message: "Department ajoute avec succes" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}
//
export const getDepartmentById = async (req, res) => {
    let { id } = req.params
    if (!id) res.status(400).json({ message: 'Department Id is required' })

    try {
        const result = await Department.findByPk(id)
        res.status(201).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const updateDepartment = async (req, res) => {
    let { id } = req.params
    const updatedDepartment = { nom: req.body.nom, description: req.body.description, creation_date: req.body.creation_date }

    if (!id) res.status(400).json({ message: 'Department Id is required' })
    try {
        const result = await Department.update(updatedDepartment, { where: { id } })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const deleteDepartment = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ error: true, message: "L'id du department est requis" })
    try {
        const result = await Department.destroy({ where: { id } })
        res.status(200).json({ message: `Le department ${id} a ete supprime avec succes` })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}