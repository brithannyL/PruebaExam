import { Router } from 'express'
import {getPedidos, getPedidosxid, postPedidos, putPedidos, patchPedidos, deletePedidos} from '../controladores/pedidos.Ctrl.js'
const router=Router()
// armar nuestras rutas

router.get('/pedidos', getPedidos) //select
router.get('/pedidos/:id', getPedidosxid) //select x id
router.post('/pedidos', postPedidos) //insert
router.put('/pedidos/:id', putPedidos) //update
router.patch('/pedidos/:id', patchPedidos) //update
router.delete('/pedidos/:id', deletePedidos) //delete

export default router 