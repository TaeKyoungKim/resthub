var router = require('express').Router()
var contactController = require('./contactController')


router.get('/', (req, res)=>{
    res.json({
        'status' : 'Api is Working',
        'message' :'Wecomoe to RESTHUB !!',
    })
})



router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new)

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .delete(contactController.delete)
    


module.exports = router;