import Authentication from "../features/user/Authentication";

function Register() {
  return <Authentication onClick={() => "register"}>REGISTER</Authentication>;
}

export default Register;
