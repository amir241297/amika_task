const express=require("express")
const app=express()
const jwt=require("jsonwebtoken")
const cors=require("cors")


const {connection, AdminAccountModel}=require("./model/adminModel")
const {UserAccountModel}=require("./model/userModel")
const {ProductsModel}=require("./model/productsModel")
app.use(express.json())
app.use(cors({origin:"*"}))




app.get("/",(req,res)=>{
    res.send("Home")
    console.log("Home")
})
// USER
app.post("/userlogin",async(req,res)=>{

    const { Email, password } = req.body
    const data = await UserAccountModel.find({ Email })
    // console.log(data)
    // res.send(data[0]._id)

    try { 
        if (data.length > 0) {
                    const token = jwt.sign({ task: 'gettingToken' }, 'lecture')
                    console.log({ "user": "user", "token": token })
                    res.send({ "user": "user", "token": token })
        }
        else {
            res.send("Incorrect mail id or password!")
            console.log("Incorrect mail id or password!")
        }
    } catch (err) {
        res.send(err)
        console.log("Something went wrong!")
    }
})
app.post("/userRegister",async(req,res)=>{
    try{
        let userRegister=new UserAccountModel(req.body)
        await userRegister.save()
        res.send({"message":true,"response":"User Account Created"})
        console.log('User Account Created')

    }catch(err){
        res.send({"User Register":err})
    }
})

//  Admin

app.post("/adminlogin",async(req,res)=>{

    const { Email, password } = req.body
    const data = await AdminAccountModel.find({ Email })
    // console.log(data.length) 
    try {
        if (data.length > 0) {  
                    const token = jwt.sign({ course: 'backend' }, 'lecture')
                    console.log({ "user": "admin", "token": token })
                    res.send({ "user": "admin", "token": token })
        } 
        else {
            res.send("Incorrect mail id or password!")
            console.log("Incorrect mail id or password!")
        }
    } catch (err) {
        res.send(err) 
        console.log("Login Something went wrong!")
    }
})
app.post("/adminRegister",async(req,res)=>{
    // res.send(req.body)
    
    // console.log(req.body)
    try{
        let userRegister=new AdminAccountModel(req.body)
        await userRegister.save()
        res.send({"message":true,"response":"Admin Account Created"})
        console.log('Admin Account Created')
 
    }catch(err){
        res.send({"AdminRegister":err})
    }
})
// Add Products

app.get("/products",async(req,res)=>{
    try{
        let data=await ProductsModel.find()
        res.send(data)
    }catch(err){
        res.send(err)
        console.log("Error while fetching data to DB",err)
    }
})
app.post("/addProducts",async(req,res)=>{
    try{
        let data=new ProductsModel(req.body)
        await data.save()
        res.send("Data Added seccess...")
        console.log('Data Added')

    }catch(err){
        res.send({"User Register":err})
    }
})

app.patch("/edit/:_id",async(req,res)=>{
    const _id=req.params._id
    const payload=req.body
    // console.log(payload)
    // res.send(payload) 
    try{
        await ProductsModel.findByIdAndUpdate({_id},payload)
        res.send({status:true,"message":"Data Updated"})
        console.log("Data Updated")
    }catch(err){
        res.send({"Error while Updating":err})
        console.log({"error while edit":err})
    }
})
app.delete("/delete/:_id",async(req,res)=>{
    const _id=req.params._id
    // console.log()
    // res.send(_id) 
    try{
        await ProductsModel.findByIdAndDelete({_id})
        res.send("Data Deleted")
        console.log("Data Deleted")
    }catch(err){
        res.send({"Error while Updating":err})
        console.log({"error while edit":err})
    }
 
})


app.listen(3001,async()=>{ 
    try{
        await connection
        console.log("Server in connectred to db")
    }catch(err){
        console.log("Error while connecting to DB",err)
    } 
    console.log("Server is running....")
})