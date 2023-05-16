import './Form.module.css';

const LoginPage = () => {
  return (
    <form>
      <h3>Login Here</h3>
      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Email or Phone" id="username" />

      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" id="password" />

      <button>Log In</button>
    </ form>
  );
}

export default LoginPage;
