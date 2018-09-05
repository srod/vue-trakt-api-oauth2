import Api from "./Api";

class TraktApi extends Api {
  /**
   * The constructor for the TraktApi.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(parameters = {}) {
    super("", parameters);

    this.setBaseURL(process.env.VUE_APP_TRAKT_API_LOCATION);

    this.setHeaders({
      "trakt-api-version": process.env.VUE_APP_TRAKT_API_VERSION,
      "trakt-api-key": process.env.VUE_APP_TRAKT_API_CLIENT_ID
    });
  }

  /**
   * Method used to get access_token.
   *
   * @returns {Promise} The result in a promise.
   */
  getHistory() {
    return this.submit("get", `/users/srod/history`);
  }

  /**
   * Method used to get access_token.
   *
   * @param {String} code The code returned by https://trakt.tv/oauth/authorize.
   *
   * @returns {Promise} The result in a promise.
   */
  getToken({ code }) {
    const data = {
      code,
      client_id: process.env.VUE_APP_TRAKT_API_CLIENT_ID,
      client_secret: process.env.VUE_APP_TRAKT_API_CLIENT_SECRET,
      redirect_uri: process.env.VUE_APP_TRAKT_API_REDIRECT_URI,
      grant_type: "authorization_code"
    };

    return this.submit("post", `/oauth/token`, data);
  }
}

export default TraktApi;
