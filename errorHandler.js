// errorHandler.js
const logger = require('./logger');

const errorHandler = (err, req, res, next) => {
    logger.error(`${err.name}: ${err.message}`);
    res.status(err.statusCode || 500).json({
        message: err.message || 'Server Error',
    });
};

module.exports = errorHandler;
