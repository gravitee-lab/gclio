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
  private log_level: string

  constructor(gio_version: string, api_home: string, gw_home: string, log_level: string) {

    // console.debug("{[.DOTENV]} - validating [GIO_VERSION] ")
    if (gio_version === undefined || gio_version === "") {
      // console.debug("{[.DOTENV]} - validating [GIO_VERSION] an error should be thrown")
      throw new Error("{[.DOTENV]} - [GIO_VERSION] is undefined, or an empty string, but is required. Value should be set to the verion of Gravitee you want to work with")
    } else {
      // console.debug("{[.DOTENV]} - validating [GIO_VERSION] NO error should be thrown")
    }
    if (api_home === undefined || api_home === "") {
      // console.debug("{[.DOTENV]} - validating [gio_version] an error should be thrown")
      throw new Error("{[.DOTENV]} - [API_HOME] is undefined, or an empty string, but is required. Value should be set to the path of the folder you want for the Gravitee API Runtime on your local machine. This path will be added to the Java Classpath in your Dev environment.")
    } else {
      // console.debug("{[.DOTENV]} - validating [API_HOME] NO error should be thrown")
    }
    if (gw_home === undefined || gw_home === "") {
      // console.debug("{[.DOTENV]} - validating [GW_HOME] an error should be thrown")
      throw new Error("{[.DOTENV]} - [GW_HOME] is undefined, or an empty string, but is required. Value should be set to the path of the folder you want for the Gravitee Gateway Runtime on your local machine. This path will be added to the Java Classpath in your Dev environment.")
    } else {
      // console.debug("{[.DOTENV]} - validating [GW_HOME] NO error should be thrown")
    }

    this.gio_version = gio_version;
    this.api_home = api_home;
    this.gw_home = gw_home;

    if (log_level === undefined || gw_home === "") {
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

export default new ErrorReporter(process.env.GIO_VERSION, process.env.API_HOME, process.env.GW_HOME, process.env.LOG_LEVEL);
