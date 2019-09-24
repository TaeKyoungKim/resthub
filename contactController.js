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


exports.index = (req,res) =>{

    
    Contact.get((err , contacts)=>{
        if(err){
            res.json({
                status:"error",
                message : err
            })
        }

        else{
            res.json({
                status:"Success",
                message : " Contacts  received Successfully",
                data: contacts
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

exports.update = (req, res)=>{
    Contact.findById(req.params.name ,(err , contact)=>{
        if(err) {
            res.send(err)
        }
        else {
            contact.name = req.body.name ? req.body.name : contact.name
            contact.email = req.body.email
            contact.password = req.body.password
            contact.gender = req.body.gender
            contact.phone = req.body.phone

            contact.save((err)=>{
                if(err) {
                    res.json(err);
                }
                else {
                    res.json({
                        message: 'Contact info Update',
                        data : contact
                    })
                }
            })
        }
    })
}

exports.delete = (req , res) =>{
    Contact.remove({
        _id :req.params.contact_id
    } , (err, contact)=>{
        if(err) {
            res.send(err)
        }
        else{
            res.json({
                status:"success",
                message: "completed delete"
            })
        }
    })
}


