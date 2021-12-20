var express=require('express');
var cors=require('cors');
var mongoose=require('mongoose')
var port = process.env.PORT || 3000;

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb+srv://nvsai:Nvsai222@cluster0.srxbd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phonenumber: String,
    dob: String,
    gender: String,
    id: String,
    des: String,
    hospital: String
})

const prescriptionSchema = new mongoose.Schema({
    title: String
})

const User = new mongoose.model("User", userSchema)
const Pescription =new mongoose.model("Prescription",prescriptionSchema)

app.post("/docdes", (req,res)=> {
    const {title} = req.body
 const pescription = new Pescription({
                title
            })
 pescription.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    setTimeout((() => {
 res.send( { message: "Successfully Registered, Please login now." })
}), 2000)
                    
                }
})
})

//Routes
app.post("/login", (req, res)=> {
    const { email, password, des} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user , des:user.des,login: "true"})

            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password, phonenumber,dob,gender,id,des,hospital} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password,
                phonenumber,
                dob,
                gender,
                id,
                des,
                hospital
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    setTimeout((() => {
 res.send( { message: "Successfully Registered, Please login now." })
}), 2000)
                    
                }
            })
        }
    })
    
}) 

app.listen(port,() => {
    console.log("BE started at port 9002")
})
