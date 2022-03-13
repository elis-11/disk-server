const express= require('express')
const mongoose= require('mongoose')
const config= require('config')

const app = express()
const PORT= config.get('serverPort')

const start = () =>{
    try {
      mongoose.connect(config.get("dbUrl"))
        
        app.listen(PORT, ()=>{
            // console.log(`Server started on port`, PORT);
  console.log(`Server started on port http://localhost:${PORT}`);

        })
    } catch (e) {
        
    }
}
 
start()