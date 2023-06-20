// importamos el Modelo
import DronModel from "../models/DronModel.js"

// Métodos para el CRUD 

// Mostrar todos los blogs
export const getAllDrons = async (req, res) => {
    try {
        const drons = await DronModel.find()
        res.status(200).json(drons)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un blog
export const getDron = async (req, res) => {
    try {
        const id = req.params.id
        await DronModel.findById({ _id: id }).then((dron) => {
            res.status(200).json(dron)
        })

    } catch (error) {
        res.json({ message: error.message })
    }
}
//Crear un blog
export const createDron = async (req, res) => {
    try {
        await DronModel.create(req.body)
        res.status(200).json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Actualizar un blog
export const UpdateDron = async (req, res) => {
    try {
        const id = req.params.id
        await DronModel.updateOne({ _id: id }, req.body).then(res => {
            console.log(res)
        })
        res.status(200).json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Eliminar un blog
export const DeleteDron = async (req, res) => {
    try {
        const id = req.params.id
        await DronModel.deleteOne({ _id : id }).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message": "¡Tu registro se ha eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
