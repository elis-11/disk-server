const express= require('express')
const mongoose= require('mongoose')
const config= require('config')
const authRouter=require('./routes/auth.routes')
const app = express()
const PORT= config.get('serverPort')  
const corsMiddleware= require('./middleware/cors.middleware')

app.use(corsMiddleware)
app.use(express.json())
app.use('/api/auth', authRouter)

const start = async () =>{
    try {
     await mongoose.connect(config.get("dbUrl"), {
       userNewUrlParser: true,
       userUnifiedTopology: true
     })
        
        app.listen(PORT, ()=>{
            // console.log(`Server started on port`, PORT);
  console.log(`Server started on port http://localhost:${PORT}`);

        })
    } catch (e) {
        
    }
}
 
start()