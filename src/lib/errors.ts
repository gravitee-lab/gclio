import { LoggerService } from '../modules/winston/LoggerService';
/**
 * DOTENV Configuration Loader Module
 *
 **/
class ErrorReporter {
  // Use this option to specify the Gravitee version.
  // GIO_VERSION=3.2.7
  // 3.2
  private gio_version: string
  // Use this option to specify the path of the Gravitee Management API Classpath.
  // ~/.gclio/home/api
  private api_home: string
  // Use this option to specify the path of the Gravitee Gateway Classpath.
  // ~/.gclio/home/gateway
  private gw_home: string

  private gio_dist_server: string
  // same log levels than npm
  private log_level: string

  constructor(gio_version: string, api_home: string, gw_home: string, gio_dist_server: string, log_level: string) {

    if (gio_version === undefined || gio_version === "") {
      throw new Error("{[.DOTENV]} - [GIO_VERSION] is undefined, or an empty string, but is required. Value should be set to the verion of Gravitee you want to work with")
    } else {
      // console.debug("{[.DOTENV]} - validated [GIO_VERSION] NO error should be thrown")
    }
    if (api_home === undefined || api_home === "") {
      // console.debug("{[.DOTENV]} - validated [gio_version] an error should be thrown")
      throw new Error("{[.DOTENV]} - [API_HOME] is undefined, or an empty string, but is required. Value should be set to the path of the folder you want for the Gravitee API Runtime on your local machine. This path will be added to the Java Classpath in your Dev environment.")
    } else {
      // console.debug("{[.DOTENV]} - validated [API_HOME] NO error should be thrown")
    }
    if (gw_home === undefined || gw_home === "") {
      // console.debug("{[.DOTENV]} - validated [GW_HOME] an error should be thrown")
      throw new Error("{[.DOTENV]} - [GW_HOME] is undefined, or an empty string, but is required. Value should be set to the path of the folder you want for the Gravitee Gateway Runtime on your local machine. This path will be added to the Java Classpath in your Dev environment.")
    } else {
      // console.debug("{[.DOTENV]} - validated [GW_HOME] NO error should be thrown")
    }

    if (gio_dist_server === undefined || gio_dist_server === "") {
      throw new Error("{[.DOTENV]} - [GIO_DIST_SERVER] is undefined, or an empty string, but is required. Value should be set to the URL of the http server from which Gravitee Distribution bundles as Zip are downloadable.")
    } else {
      // console.debug("{[.DOTENV]} - validated [GW_HOME] NO error should be thrown")
    }

    this.gio_version = gio_version;
    this.api_home = api_home;
    this.gw_home = gw_home;
    this.gio_dist_server = gio_dist_server;

    if (log_level === undefined || log_level === "") {
      // console.debug("{[.DOTENV]} - validating [GW_HOME] an error should be thrown")
      // throw new Error("{[.DOTENV]} - [LOG_LEVEL] is undefined, or an empty string, but is required. Value should be set to the path of the folder you want for the Gravitee Gateway Runtime on your local machine. This path will be added to the Java Classpath in your Dev environment.")
      this.log_level = 'info'
    } else {
      // console.debug("{[.DOTENV]} - validating [GW_HOME] NO error should be thrown")
      this.log_level = log_level
    }
  }

  report(err: Error) {
    // could use [this.release_manifest_path], [this.product], etc... here to send error somewhere
    console.error(err.message);
    /// console.error(err.stack);
  }
}

let initErrorReporter: ErrorReporter = null;
try {
  initErrorReporter = new ErrorReporter(process.env.GIO_VERSION, process.env.API_HOME, process.env.GW_HOME, process.env.GIO_DIST_SERVER, process.env.LOG_LEVEL);
} catch (error) {
  LoggerService.writeNativeErrorLog(error);
  // log this one error, and
  // throwing it back, so that it actually stops the execution (and
  // it will be caught again, by the Winston Logger's exceptionHandler)
  throw error;

  /// process.exit(1)
}

export default initErrorReporter;

//export default new ErrorReporter(process.env.GIO_VERSION, process.env.API_HOME, process.env.GW_HOME, process.env.GIO_DIST_SERVER, process.env.LOG_LEVEL);
