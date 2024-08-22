// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./configDB');
const errorHandler = require('./errorHandler');
const authRoutes = require('./authRoutes');
const taskRoutes = require('./taskRoute');
const logger = require('./logger');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoute);
app.use('/api/tasks', taskRoute);

const swaggerSpec = require('./swagger');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});
