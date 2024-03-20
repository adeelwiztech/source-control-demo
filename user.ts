export class User {
  private _username: string;
  public get username(): string {
    return this._username;
  }
  public set username(v: string) {
    this._username = v;
  }

  deleteUser(userId: number) {
    return { message: "user " + userId + " deleted successfully" };
  }

  findAllUsers() {
    return [];
  }
}
