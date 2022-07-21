import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Alert } from "./Alert";

const ResetPassword = () => {
  const [user, setUser] = useState({
    email: "",
  });

  const [error, setError] = useState();

  const { resetPassword } = useAuth();

  const handlechange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleResetPassword = async () => {
    if (!user.email) {
      return setError("Please enter your email");
    }
    try {
      await resetPassword(user.email);
      setError("we sent you an email with a link to reset your password");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Write your Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="youremail@company.ltd"
            onChange={handlechange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline "
            onClick={handleResetPassword}
          >
            Send
          </button>
        </div>
      </form>

      <p className="text-center text-gray-500 text-xs ">
        Check your spam if you dont find our email
      </p>

      <p className="text-center text-gray-500 text-xs ">
        <Link
          to="/login"
          className="text-black-500 hover:text-black-800; text-decoration: underline"
        >
          Go to login
        </Link>
      </p>
    </div>
  );
};

export default ResetPassword;
