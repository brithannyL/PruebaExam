import {Router} from 'express'
import multer from 'multer'
import {getProductos, getProductosxid, postProducto, putProductos, patchProductos, deleteProductos} from '../controladores/productos.Ctrl.js'

//configurar multer para almacenar las imagenes
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'uploads'); //carpta donde se guardan las imagenes
    },
    filename:(req,file,cb)=>{
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload=multer({storage});
const router=Router()
// armar nuestras rutas

router.get('/productos', getProductos) //select
router.get('/productos/:id', getProductosxid) //select x id
router.post('/productos',upload.single('image'), postProducto) //insert
router.put('/productos/:id', upload.single('image'), putProductos) //update
router.patch('/productos/:id/reducir-stock', patchProductos);
router.delete('/productos/:id', deleteProductos) //delete



export default router 
