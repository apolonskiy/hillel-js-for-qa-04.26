import { RestClient } from "../restClient";

export class Account extends RestClient {
  /**
   * Logs in a user with the provided credentials.
   * @param {Object} credentials { userName: "user1", password: "pass123" };
   * @returns {Promise} A promise that resolves to the response of the login request.
   * @example
   */
  loginUser(credentials) {
    return this.post({
      url: "/Account/v1/Login",
      data: credentials,
    });
  }

  /**
   *
   * @param {Object} credentials { userName: "user1", password: "pass123" };
   * @returns {Promise} A promise that resolves to the response of the token generation request.
   */
  generateToken(credentials) {
    return this.post({
      url: "/Account/v1/GenerateToken",
      data: credentials,
    });
  }

  isAuthorized(credentials) {
    return this.post({
      url: "/Account/v1/Authorized",
      data: credentials,
    });
  }

  postUser(userData) {
    return this.post({ url: "/Account/v1/User", data: userData });
  }

  /**
   * Get user by ID endpoint call
   * @param {string} id user id to get
   * @param {string} token user token to execute api call
   * @returns {Promise} A promise that resolves to the response of the get user by id request.
   */
  getUserById(id, token) {
    return this.get({
      url: `/Account/v1/User/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  deleteUserById(id, token) {
    return this.delete({
      url: `/Account/v1/User/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
