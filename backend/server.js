const express=require("express");
const articleApi=require("./routes/article")
const AuthorApi=require("./routes/author")
const cors=require("cors")
require("./config/connect")
const app=express();
app.use(express.json());
app.use(cors());


app.use("/article", articleApi);
app.use("/author", AuthorApi);
app.use("/getimage", express.static('./uploads'));


app.listen(443, (req,res)=>{
    console.log("Server work");

})