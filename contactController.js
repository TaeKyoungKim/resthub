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

exports.register = (req, res) =>{
    let contact = new Contact();
    let inputPassword = req.body.passwords;

    contact.name = req.body.name ? req.body.name : contact.name;
    contact.email = req.body.email
    contact.password = inputPassword
    contact.gender = req.body.gender
    contact.phone= req.body.phone

    //save the contact and check errors
    contact.save((err) =>{
        if(err){
            res.json(err);
        }else{
            res.json({
                message:'환영합니다',
                data:contact
            })
        }
    })
}
exports.Login= (req, res)=>{
    res.render('login', {
        status:'API Its Working',
        message:'Welcome to my Homepage'
    })
    // res.json({
    //     message:"test"
    // })
}
exports.doLogin = async (req, res)=>{
    var inputEmail = req.body.id
    if(inputEmail){
        var user = await Contact.findOne({email:inputEmail}).exec()
        console.log(user)

        try{
            if(!user){
                return res.status(400).send({message:"The username does not exit"})
            }
            else{
                console.log(user.password)
                if(req.body.passwords != user.password){
                    return res.status(400).send({message:"The password is invalid"})
                }

                else{
                    return res.send({message : "Welcome To my Homepage"})
                }
            }
        }
        catch(err){
            res.status(500).send(err)
        }
    }
    else{
        console.log("emailId is need!!!")
    }
}    