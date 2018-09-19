import express from 'express' 
import product_controller from '../controller/products'

const router = express.Router()

router.get('/product/get', product_controller.product_list_get)
router.put('/product/update/:id', product_controller.product_update_put)
router.post('/product/new', product_controller.product_create_post)
router.delete('/product/delete/:id', product_controller.product_delete_delete)

router.get('/' , function(req, res){
  res.redirect('http://www.google.co.th')
})

export default router 