const express = require('express');
const router = express.Router();
const api = require('../models/api');



router.get('/', async(req,res) => {
    try{
        const apies = await api.find()
            res.json(apies)
    }catch(err){
        res.send('Error', + err);
    }
})

router.get('/:id', async(req,res) => {
    try{
        const apie = await api.findById(req.params.id)
            res.json(apie)
    }catch(err){
        return res.json(408, {
            message: "Request Time Out"
        });
    }
})

router.post('/', async(req,res) => {
    const ap = new api({
        name: req.body.name,
        age:req.body.age,
        email: req.body.email,
        gender: req.body.gender,
        mobileNumber: req.body.mobileNumber,
        birthday: req.body.birthday,
        city: req.body.city,
        state:req.body.state,
        country: req.body.country,
        address: req.body.address
            
    })
    try{
        const a1= await ap.save();
        return res.json(200, {
            message: "User Created Successfully!"
        });

    }catch(err){
        return res.json(408, {
            message: "Request Time Out"
        });
    }
})

router.patch('/:id', async(req,res)=> {
    try{
        const apie = await api.findById(req.params.id);
        apie.email = req.body.email;
        const a1 = await apie.save();
        res.json(a1);
    }catch(err){
       return res.json(400,{
           message: "Invalid id"
       });
    }
})

router.delete('/:id', async(req,res)=> {
    try{
        const apie = await api.findById(req.params.id);
        apie.email = req.body.email;
        const a1 = await apie.delete();
        res.json(a1);
    }catch(err){
        return res.json(400,{
            message: "deleted"
        });
    }
})

module.exports = router;