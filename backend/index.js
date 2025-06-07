const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 5000;
const Task = require('./models/Task');

//middleware to parse JSON bodies
app.use(express.json());

//middleware to allow cors
app.use(cors());

//connect to local mongodb database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/taskmanager')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Connection error:', err));

//test route
app.get('/', 
    (req,res) => {
        res.send('Hello World');
    }
);



//receive a new task
app.post('/tasks', 
    (req,res) => {
        //get the task from the request body
        const task = req.body;
        //create a new task
        const newTask = new Task({name: task.name});
        //save the task to the database
        newTask.save();
        //send a response back to the client
        res.status(201).json(newTask);
    }
)

//get all tasks
app.get('/tasks',
    async (req,res) => {
        try{
            //get all tasks from the database
            const tasks = await Task.find();
            //send a response back to the client
            res.status(200).json(tasks);
        }catch(error){
            res.status(500).json({message: error.message});
        }
    }
)

//delete a specific task by ID
app.delete('/tasks/:id', async (req, res) => {
    try {
        //get the task ID from the URL
        const taskId = req.params.id;
        
        //find and delete the task from database
        const deletedTask = await Task.findByIdAndDelete(taskId);
        
        //check if task was found
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        
        //send success response
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//update a specific task by ID
app.put('/tasks/:id', async (req, res) => {
    try {
        //get the task ID from the URL
        const taskId = req.params.id;
        
        //get the new task data from request body
        const { name } = req.body;
        
        //find and update the task in database
        const updatedTask = await Task.findByIdAndUpdate(
            taskId, 
            { name: name }, 
            { new: true }  // Return the updated document (not the old one)
        );
        
        //check if task was found
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        
        //send the updated task back
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//start the server
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});