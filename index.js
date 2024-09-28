const express = require("express")
const getconnect = require("./dbconnect");
const { name } = require("ejs");




const app = express()

app.set("view engine", "ejs")

app.use('/views', express.static('public'))
app.use(express.static(__dirname+'/public'));


app.get("/index",(req,res)=> {
    res.render("index");
})



app.get("/loginres", async (req,res)=> {
    let gname = req.query.gname;
    let gpassword = req.query.gpassword;
   
    let  collection = await getconnect();
    let r = collection.insertOne ({ name:gname , password : gpassword});
    let records = await collection.find({}).toArray();
      res.render("show", {records});

}) 


        app.get("/login",(req,res)=> {
            res.render("login");
        })

        app.get("/Show",(req,res)=> {
            res.render("Show")
        })

        app.get("/Property",(req,res)=> {
            res.render("Property")
        })


        app.get("/Agent",(req,res)=> {
            res.render("Agent")
        })

        app.get("/Aboutus",(req,res)=> {
            res.render("Aboutus")
        })
   

         // Property

        app.get("/Flrst",(req,res)=> {
            res.render("Flrst")
        })

        app.get("/Second",(req,res)=> {
            res.render("Second")
        })


        app.get("/Third",(req,res)=> {
            res.render("Third")
        })

        app.get("/fourth",(req,res)=> {
            res.render("fourth")
        })


        app.get("/Fifth",(req,res)=> {
            res.render("Fifth")
        })


        app.get("/six",(req,res)=> {
            res.render("six")
        })



        app.get("/seven",(req,res)=> {
            res.render("seven")                
        })



        app.get("/Eight",(req,res)=> {
            res.render("Eight")                
        })



        app.get("/Nine",(req,res)=> {
            res.render("Nine")                
        })


        app.get("/ten",(req,res)=> {
            res.render("ten")                
        })

        app.get("/Eleven",(req,res)=> {
            res.render("Eleven")                
        })



        app.get("/thirteen",(req,res)=> {
            res.render("thirteen")                
        })


        app.get("/twelve",(req,res)=> {
            res.render("twelve")                
        })



        app.get("/fourteen",(req,res)=> {
            res.render("fourteen")                
        })



        app.get("/fifteen",(req,res)=> {
            res.render("fifteen")                
        })



        app.get("/sixteen",(req,res)=> {
            res.render("sixteen")                
        })

        app.get("/seventeen",(req,res)=> {
            res.render("seventeen")                
        })


            // Agent

        app.get("/page1",(req,res)=> {
           res.render("page1")                
        })
    
        app.get("/page2",(req,res)=> {
            res.render("page2")                
         })
         app.get("/page3",(req,res)=> {
            res.render("page3")                
         })
         app.get("/page4",(req,res)=> {
            res.render("page4")                
         })
         app.get("/page5",(req,res)=> {
            res.render("page5")                
         })
         app.get("/page6",(req,res)=> {
            res.render("page6")                
         })
         app.get("/page7",(req,res)=> {
            res.render("page7")                
         })
         app.get("/page8",(req,res)=> {
            res.render("page8")                
         })
         app.get("/page9",(req,res)=> {
            res.render("page9")                
         })
                   
         
         app.get("/Book",(req,res)=> {
              res.render("Book")
         })






app.get("/signupres", async (req,res)=> {
    let gname = req.query.gname;
    let gemail = req.query.gemail;
    let gpassword = req.query.gpassword;
   
    
    let  collection = await getconnect();
    let r = collection.insertOne ({ name:gname ,email : gemail, password : gpassword});
    let records = await collection.find({}).toArray();
      res.render("show", {records});
})


app.listen(5000,(req,res)=> {
    console.log("Server is running")
})
