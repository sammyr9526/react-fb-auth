import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Alert } from "./Alert";

export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //con el signup guardaremos los resultados del form para regustrar
  const { signup } = useAuth();
  const [error, setError] = useState();

  const handlechange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      //console.log(error.code);
      setError(error.message);

      //se puede mejorar tomando el console log con error.code
    }
  };

  const navigate = useNavigate(); // oara redireccionar
  //PASSWORD CON MAS DE 6 CARACTERES
  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm  font-bold my-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="youremail@company.ltd"
            onChange={handlechange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            placeholder="password"
            className="block text-gray-700 text-sm font-bold my-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            onChange={handlechange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline ">
          Register
        </button>
      </form>
      <p className="text-center text-gray-500 text-xs ">
        Already have an Account?
        <Link
          to="/login"
          className="font-weight: bold; text-decoration: underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
