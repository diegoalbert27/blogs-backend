const logger = require('./utils/logger')
const config = require('./utils/config')
const mongoose = require('mongoose');

const connectionURI = config.MONGO_DB_URI

if (!connectionURI) {
    logger.error('MONGO_DB_URI Missing')
}

mongoose.connect(connectionURI)
  .then(() => logger.info('Database was connected successfully'))
  .catch(err => logger.error(err))
