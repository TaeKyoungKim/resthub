var Contact = require('./contactModel')

exports.new = (req, res) =>{
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name
    contact.email =req.body.email
    contact.password =req.body.password
    contact.gender =req.body.gender
    contact.phone =req.body.phone

    contact.save((err)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json({
                message : "New contact created",
                data: contact
            })
        }
    })
}

exports.view = (req , res)=>{
    Contact.findById(req.params.contact_id , (err,contact )=>{
        if(err){
            res.send(err)
        }
        else{
            res.json({
                message: "Contact details loading",
                data : contact
            })
        }
    })
}