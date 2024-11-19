import Authentication from "../features/user/Authentication";

function Login() {
  return <Authentication onClick={() => "login"}>LOGIN</Authentication>;
}

export default Login;
