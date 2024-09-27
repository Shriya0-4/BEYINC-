const express = require('express');
   const mongoose = require('mongoose');
   const bodyParser = require('body-parser');
   const cors = require('cors');
   const { v4: uuidv4 } = require('uuid');

   const app = express();
   app.use(cors());
   app.use(bodyParser.json());

   // MongoDB connection
   mongoose.connect('mongodb://localhost:27017/userDB', {
       useNewUrlParser: true,
       useUnifiedTopology: true,
   });

   // Define user schema
   const userSchema = new mongoose.Schema({
       email: { type: String, required: true },
       name: { type: String, required: true },
       category: { type: String, required: true },
       expertise: [String],
       industries: [String],
       stages: [String],
       location: { type: String },
       languages: [String],
   });

   const User = mongoose.model('User', userSchema);

   // API to add user
   app.post('/api/users', async (req, res) => {
       const { name, category, expertise, industries, stages, location, languages } = req.body;

       const user = new User({
           email: uuidv4() + '@example.com', // Auto-generate email
           name,
           category,
           expertise,
           industries,
           stages,
           location,
           languages,
       });

       try {
           await user.save();
           res.status(201).send(user);
       } catch (error) {
           res.status(400).send(error);
       }
   });

   // API to get all users
   app.get('/api/users', async (req, res) => {
       try {
           const users = await User.find();
           res.status(200).send(users);
       } catch (error) {
           res.status(500).send(error);
       }
   });

   // Start the server
   app.listen(5000, () => {
       console.log('Server running on port 5000');
   });
   
