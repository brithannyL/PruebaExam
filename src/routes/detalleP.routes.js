import { Router } from 'express'
import {getDetalle, getDetallexid, postDetalle, putDetalle, patchDetalle, deleteDetalle} from '../controladores/detalleP.Ctrl.js'
const router=Router()
// armar nuestras rutas

router.get('/detalleP', getDetalle) //select
router.get('/detalleP/:id', getDetallexid) //select x id
router.post('/detalleP', postDetalle) //insert
router.put('/detalleP/:id', putDetalle) //update
router.patch('/detalleP/:id', patchDetalle) //update
router.delete('/detalleP/:id', deleteDetalle) //delete

export default router 