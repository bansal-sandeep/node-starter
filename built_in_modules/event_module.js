const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', arg => {
  console.log('Listener called', arg);
});

logger.log('This is message ');