// controller.js
const Task = require('./task');
const logger = require('./logger');

const createTask = async (req, res) => {
    const { title, description, priority, deadline, dependencies, assignedTo } = req.body;
    try {
        const task = await Task.create({
            title,
            description,
            priority,
            deadline,
            dependencies,
            assignedTo
        });
        logger.info('Task created successfully');
        res.status(201).json(task);
    } catch (error) {
        logger.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate('assignedTo dependencies comments.postedBy');
        res.status(200).json(tasks);
    } catch (error) {
        logger.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Add more task-related CRUD functions here (updateTask, deleteTask, etc.)

module.exports = { createTask, getTasks };
