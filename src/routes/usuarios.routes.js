import {Router} from 'express'
import	{getUsuarios,getUsarioxid,postUsuarios,putUsuarios,patchUsuarios,deleteUsuarios, login} from '../controladores/usuarios.Ctrl.js'
import { verifyToken } from '../jwt/verifyToken.js';

const router=Router()

router.get('/usuarios',getUsuarios) //select
router.get('/usuarios/:id', verifyToken, getUsarioxid); // Obtener un usuario por id (requiere token)
router.post('/usuarios',postUsuarios)
router.put('/usuarios/:id', verifyToken, putUsuarios); // update
router.patch('/usuarios/:id', verifyToken, patchUsuarios); // Modificar parcialmente un usuario
router.delete('/usuarios/:id', verifyToken, deleteUsuarios); // Eliminar un usuario por id
router.post('/login', login); // login

export default router