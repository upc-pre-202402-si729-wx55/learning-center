/**
 * Model class for SignUpRequest
 */
export class SignUpRequest {
  public username: string;
  public password: string;

  /**
   * Constructor for SignUpRequest
   * @param username The username
   * @param password The password
   */
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
