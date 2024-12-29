import Authentication from "../features/users/Authentication";

function Register() {
  return <Authentication onClick={() => "register"}>REGISTER</Authentication>;
}

export default Register;
