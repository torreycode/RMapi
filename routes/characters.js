const express = require("express");
const router = express.Router();
const Character = require("../models/Character");


// Gets Back all of the characters

router.get('/', async (req,res) => {
    try{
        const characters = await Character.find();
        res.json(characters);
    }catch(err){
        res.json({ message : err})
    }
});


// Submits a post 

router.post('/', async (req,res) => {
    const characters = new Character({
    id: req.body.id,
    name: req.body.name,
    status: req.body.status,
    species: req.body.species,
    gender: req.body.gender,
    origin: {
        name: req.body.name
    },
    date: req.body.date
    });

    try{
   const savedCharacter = await characters.save() 
  res.json(savedCharacter);
    }catch(err){
        res.json({ message : err})
    }
});


// Gets Back A Specific Post

router.get('/:characterID', async (req,res) => {
    try{
  const character = await Character.findById(req.params.characterID);
  res.json(character);
    } catch (err){
        res.json({ message : err});
    }
});


// Delete A Specific Post


router.delete('/:characterID', async (req,res) => {
    try{
    const removedCharacter =  await Character.remove({  _id: req.params.characterID});
    res.json(removedCharacter)
    } catch (err){
        res.json({ message : err});
    }
});


// Update a Post

router.patch('/:characterID', async (req,res) => {
   try{
       const updatedCharacter = await Character.updateOne({ _id: req.params.characterID}, 
        {$set: {name: req.body.name} 
    })
    res.json(updatedCharacter);
}    catch (err){
    res.json({ message : err});
}
});


module.exports = router;