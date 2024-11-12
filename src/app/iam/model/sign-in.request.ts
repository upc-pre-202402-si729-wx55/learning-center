/**
 * Model class for SignInRequest
 */
export class SignInRequest {
  public username: string;
  public password: string;

  /**
   * Constructor for SignInRequest
   * @param username The username
   * @param password The password
   */
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
