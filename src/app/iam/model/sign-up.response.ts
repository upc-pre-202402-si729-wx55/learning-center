/**
 * Model class for SignUpResponse
 */
export class SignUpResponse {
  public id: number;
  public username: string;

  /**
   * Constructor for SignUpResponse
   * @param id The id
   * @param username The username
   */
  constructor(id: number, username: string) {
    this.id = id;
    this.username = username;
  }

}
