export class Auth {
  login(username: string, password: string) {
    console.log("username and password", username, password);

    return { message: "login successful", token: "IamAToken" };
  }
}
