export default function LoginForm() {
  return (
    <div className="loginForm">
      <form>
        <div>
          <label>User ID</label>
          <br></br>
          <input type="text" placeholder="User ID"></input>
        </div>
        <div>
          <label>Password</label>
          <br></br>
          <input type="text" placeholder="Password"></input>
          <br></br>
        </div>
        <div>
          <h3>Login</h3>
        </div>
      </form>
    </div>
  );
}

{
  /* <input type="submit" value="Login"></input> */
}
