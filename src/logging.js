// src/logging.js

const logLevel = process.env.REACT_APP_LOG_LEVEL || 'info';
const enableLogs = process.env.REACT_APP_ENABLE_LOGS === 'true';

export function log(message, level = 'info') {
  if (enableLogs) {
    switch (level) {
      case 'debug':
        if (logLevel === 'debug') console.debug(message);
        break;
      case 'info':
        if (['debug', 'info'].includes(logLevel)) console.info(message);
        break;
      case 'warn':
        console.warn(message);
        break;
      case 'error':
        console.error(message);
        break;
      default:
        console.log(message);
    }
  }
}
