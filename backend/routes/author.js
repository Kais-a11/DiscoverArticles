const express=require("express");

const router=express.Router();
const Author=require("../models/author");
const multer=require("multer");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
filename='';

const mystorage=multer.diskStorage(
    {
        destination:"./uploads",
        filename:(req,file,redirect)=>{

            let date=Date.now();
            let f1=date + "." + file.mimetype.split('/')[1];
            redirect(null,f1);
            filename = f1;
        }
    }
)

const upload=multer({storage: mystorage});  

router.post("/register", upload.any('image'),(req,res)=>{
    data=req.body;
    author = new Author(data);
    author.image = filename;

    salt=bcrypt.genSaltSync(10);
    author.password=bcrypt.hashSync(data.password, salt)
    author.save()
    .then(
        (saved)=>{
            filename = '';
            res.send(saved);
        }
    )
    .catch(
        (error)=>{
            res.send(error)
        }
    )
    

})

router.post("/login", (req,res)=>{
    let data=req.body;

    Author.findOne({ email: data.email})
    .then(
        (author)=>{
            let valid=bcrypt.compareSync(data.password, author.password)
            if(!valid)
            {
                res.status(400).send("email or password invalid")
            }
            else{
                let payload={
                    _id: author._id,
                    email: author.email,
                    fullname: author.name + ' '+ author.lastname
                }
                let token= jwt.sign(payload, '123456789');
                res.status(200).send({ mytoken: token})
            }
        }
    )
    .catch(
        (error)=>{
            res.status(400).send(error)
        }
    )
    
})

router.get("/all", (req,res)=>{
    Author.find({})
    .then(
        (authors)=>{
            res.status(200).send(authors)

        }
    )
    .catch(
        (error)=>{
            res.status(400).send(error)

        }
    )
    
})


router.get("/getbyid/:id", (req,res)=>{
    let id=req.params.id;
    Author.findById({ _id: id})
    .then(
        (author)=>{
            res.status(200).send(author)
        }
    )
    .catch(
        (error)=>{
            res.status(400).send(error)
        }
    )
    
})


router.delete("/supprimer/:id", (req,res)=>{
    let id=req.params.id;
    Author.findByIdAndDelete({ _id: id})
    .then(
        (author)=>{
            res.status(200).send(author)
        }
    )
    .catch(
        (error)=>{
            res.status(400).send(error)
        }
    )
    
})

router.put("/update/:id", (req,res)=>{
    
})







module.exports=router;