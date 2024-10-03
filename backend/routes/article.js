const express=require("express");
const router=express.Router();
const Article=require("../models/article");
const multer=require("multer");

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


router.post("/ajout", upload.any('image'), async (req, res) => {
    try {
      const data = req.body;
      const article = new Article(data);
      article.date = new Date();
      article.image = filename;
      article.tags = data.tags.split(',');
  
      await article.save();
      filename = '';
      res.status(200).send(article);
    } catch (err) {
      res.status(400).send(err);
    }
  });

router.get("/all", async (req,res)=>{
    Article.find({})
    .then(
        (articles)=>{
            res.status(200).send(articles)

        }
    )
    .catch(
        (error)=>{
            res.status(400).send(error)

        }
    )
    
})

router.get("/getByid/:id", (req,res)=>{

    let id=req.params.id;
    Article.findById({ _id: id})
    .then(
        (article)=>{
            res.status(200).send(article)
        }
    )
    .catch(
        (error)=>{
            res.status(400).send(error)
        }
    )
    
})

router.get("/getByidauthor/:id", (req, res) => {
    let id = req.params.id;
    Article.find({ idAuthor: id })
        .then((articles) => {
            res.status(200).send(articles);
        })
        .catch((error) => {
            res.status(400).send(error);
        });
});


router.delete("/supprimer/:id", (req,res)=>{
    let id=req.params.id;
    Article.findByIdAndDelete({ _id: id})
    .then(
        (article)=>{
            res.status(200).send(article)
        }
    )
    .catch(
        (error)=>{
            res.status(400).send(error)
        }
    )
})

router.put("/update/:id", upload.any('image'),(req,res)=>{

    let id=req.params.id;
    let data=req.body;
    if (typeof data.tags === 'string') {
  data.tags = data.tags.split(',');
} else if (!Array.isArray(data.tags)) {
  data.tags = []; // Assurez-vous que data.tags est un tableau s'il n'est ni une chaîne de caractères ni un tableau
}
    if(filename.length >0)
    {

        data.image=filename;
    }

    Article.findOneAndUpdate({ _id:id}, data)
    .then(
        (article)=>{
            filename ='';
            res.status(200).send(article)
        }
    )
    .catch(
        (error)=>{
            res.status(400).send(error)
        }
    )

    
})

module.exports=router;