const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const path = require("path")
app.use('/static', express.static('./static/')) 
app.set("view engine","pug")
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set("views",path.join(__dirname,"./public"))
app.get("/",(req,res)=>{
    res.status(200).render("index")
})
app.get("/men",(req,res)=>{
    res.status(200).render("men")
})
// app.get("/about/*",(req,res)=>{
//     res.status(404).render("404")
// })
// app.get("/contact",(req,res)=>{
//     res.status(200).render("contact")
// })

// app.get("/contact/*",(req,res)=>{
//     res.status(404).render("404")
// })
// app.get("/news",(req,res)=>{
//     res.status(200).render("news")
// })
// app.get("/news/*",(req,res)=>{
//     res.status(404).render("404")
// })
app.get("/*",(req,res)=>{
    res.status(404).render("404")
})
app.listen(port,()=>{
    console.log(`listening at port no. ${port}`)
})
