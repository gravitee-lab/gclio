import * as winston from 'winston';
import 'winston-daily-rotate-file';

export class LoggerService {

  private static myLogger = winston.createLogger({
    format: winston.format.combine(
    // winston.format.colorize(),
    winston.format.json(),
    // winston.format.prettyPrint() // this one makes the JSon format like with [jq .]
    ),
    transports: [
      new winston.transports.File({filename: `${process.env.GCLIO_RUNTIME_FOLDER}/.logs/gclio.logs`}),
      /// new winston.transports.Console(),
      new winston.transports.DailyRotateFile({
        filename: `${process.env.GCLIO_RUNTIME_FOLDER}/.logs/gclio-%DATE%.logs`,
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d'
      }).on('rotate', function(oldFilename, newFilename) {
          // and there I do anything when log file rotation happens !!
      })
    ],
    /*
    transport.on('rotate', function(oldFilename, newFilename) {
        // do something fun
      });*/
  })
  static writeErrorLog(msg) {

      this.myLogger.error({
          timeStamp: new Date().toLocaleString(),
          message: msg,
      })
  }
  static writeInfoLog(msg) {
      this.myLogger.info({
          timeStamp: new Date().toLocaleString(),
          message: msg,
      })
  }
  static writeDebugLog(msg) {
      this.myLogger.debug({
          timeStamp: new Date().toLocaleString(),
          message: msg,
      })
  }
  static writeWarnLog(msg) {
      this.myLogger.warn({
          timeStamp: new Date().toLocaleString(),
          message: msg,
      })
  }
}
