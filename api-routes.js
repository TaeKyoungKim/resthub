var router = require('express').Router()

router.get('/', (req, res)=>{
    res.json({
        'status' : 'Api is Working',
        'message' :'Wecomoe to RESTHUB !!',
    })
})


module.exports = router;