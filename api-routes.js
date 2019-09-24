var router = require('express').Router()
var contactController = require('./contactController')

router.get('/', (req, res)=>{
    res.json({
        'status' : 'Api is Working',
        'message' :'Wecomoe to RESTHUB !!',
    })
})

router.route('/contacts')
    .post(contactController.new)

router.route('/contacts/:contact_id')
    .get(contactController.view)
    


module.exports = router;