var router = require('express').Router()
var contactController = require('./contactController')


// router.get('/login', (req, res)=>{
//     res.render('login',{
//         status:'API Its Working',
//         message:'Welcome to my Homepage'
//     })
// })


router.get('/register' ,(req, res)=>{
    res.render('register' ,{
        status:'API Its Working',
        message : 'Wecome to reshub '
    })
})
router.route('/login')
    .post(contactController.doLogin)
    .get(contactController.Login)

router.route('/register')
    .post(contactController.register)

router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new)

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .delete(contactController.delete)
    


module.exports = router;