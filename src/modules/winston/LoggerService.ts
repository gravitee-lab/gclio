import * as winston from 'winston';
import 'winston-daily-rotate-file';

export class LoggerService {

  private static myLogger = winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.label({
        label: 'important-data'
      }),
      winston.format.json(),
      // winston.format.colorize(),
      // winston.format.prettyPrint(), // this one makes the JSon format like with [jq .]
    ),
    //winston.format.colorize(),
    //winston.format.prettyPrint() // this one makes the JSon format like with [jq .]
    transports: [
      /*new winston.transports.File({
        filename: `${process.cwd()}/.logs/gclio.logs`,
        level: process.env.LOG_LEVEL
      }),*/
      new winston.transports.DailyRotateFile({ /// error logs, all the time
        filename: `./.logs/gclio-%DATE%.error.logs`,
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        level: 'error'
      }).on('rotate', function(oldFilename, newFilename) {
          // do something when log rotation happens
      }),
      new winston.transports.DailyRotateFile({ /// warn logs, all the time
        filename: `./.logs/gclio-%DATE%.warn.logs`,
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        level: 'warn'
      }).on('rotate', function(oldFilename, newFilename) {
          // do something when log rotation happens
      }),
      new winston.transports.DailyRotateFile({ /// absolutely all logs, all the time (most verbose)
        filename: `./.logs/gclio-%DATE%.silly.logs`,
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        level: 'silly'
      }).on('rotate', function(oldFilename, newFilename) {
          // do something when log rotation happens
      }),
      new winston.transports.DailyRotateFile({ /// environment defined (log level) logs
        filename: `./.logs/gclio-%DATE%.logs`,
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        level: process.env.LOG_LEVEL
      }).on('rotate', function(oldFilename, newFilename) {
          // do something when log rotation happens
      }),
      new winston.transports.Console({
        level: process.env.LOG_LEVEL
      })
    ],

  })
  static writeErrorLog(msg) {

      this.myLogger.log({
          level: 'error',
          // timeStamp: new Date().toLocaleString(),
          message: msg,
      })
  }
  static writeInfoLog(msg) {
      this.myLogger.log({
          level: 'info',
          // timeStamp: new Date().toLocaleString(),
          message: msg
      })
  }
  static writeDebugLog(msg) {
      this.myLogger.log({
          level: 'debug',
          // timeStamp: new Date().toLocaleString(),
          message: msg,
      })
  }
  static writeWarnLog(msg) {
      this.myLogger.log({
          level: 'warn',
          // timeStamp: new Date().toLocaleString(),
          message: msg,
      })
  }
}
