const app = require('./app')
const logger = require('./utils/logger')

const server = app.listen(app.get('port'), () => logger.info(`Server listening on port ${app.get('port')}`))
