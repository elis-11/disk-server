const Router = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const router=new Router()


router.post('/registration', async (req, res) => {
    try {
        

        const {email, password} = req.body

        const candidate = User.findOne({email})

        if(candidate){
            return res.status(400).join({message: `User with email ${email} already exist`})
        }
        const hashPassword = await bcrypt.hash(password, 15)
        const user = new User({email, password: hashPassword})
        user.save()
        return res.join({message: `User was created})

    } catch (e) {
        console.log(e);
        res.send({message:'Server Error'})
    }
})