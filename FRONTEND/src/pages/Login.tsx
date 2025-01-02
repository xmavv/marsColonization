import Authentication from "../features/users/Authentication";

function Login() {
  return <Authentication onClick={() => "login"}>LOGIN</Authentication>;
}

export default Login;
