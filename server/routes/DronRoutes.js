import express from 'express'
import { DeleteDron, UpdateDron, createDron, getAllDrons, getDron } from '../controllers/DronControllers.js'
const router = express.Router()

router.get('/', getAllDrons);
router.get('/:id', getDron);
router.post('/', createDron);
router.put('/:id', UpdateDron);
router.delete('/:id', DeleteDron);



export default router