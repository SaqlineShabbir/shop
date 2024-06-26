import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import GoogleLogin from "../components/Login-Registration/GoogleLogin";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const [passMatch, setPassMatch] = useState(true);
  const { createUser, user, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSUbmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password !== confirm_password) {
      setPassMatch(false);
    }

    if (password === confirm_password) {
      createUser(email, password).then((data) => {
        if (data?.user?.email) {
          const userInfo = {
            email: data?.user?.email,
            name: name,
            password: password,
          };
          fetch("https://inventory-backend-ooh5.onrender.com/api/v1/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              navigate("/login");
              console.log(data);
            });
        }
      });
      if (user) {
        navigate(from);
      }
    }
  };
  //google  login
  //google
  const handleGoogleSignIn = async () => {
    try {
      const data = await googleLogin();
      console.log("googlee", data.user);
      if (data?.user?.email) {
        const userInfo = {
          email: data.user.email,
          name: data.user.displayName,
        };

        const response = await fetch(
          "https://inventory-backend-ooh5.onrender.com/api/v1/user/google",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          }
        );

        console.log("Fetch Response:", response);

        if (!response.ok) {
          // Log response status and message
          const errorText = await response.text();
          console.error(
            "Fetch Error:",
            response.status,
            response.statusText,
            errorText
          );
          throw new Error("Failed to login");
        }

        const result = await response.json();

        localStorage.setItem("token", result?.token);
        navigate("/");
      }
    } catch (error) {
      console.error("Error during Google sign-in:", error.message);
      // Optionally, you can display an error message to the user
    }
  };

  return (
    <form
      onSubmit={handleSUbmit}
      className="flex items-center justify-center min-h-screen bg-gray-100"
    >
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold mb-4 text-center">
          Register Now
        </h1>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="name"
              placeholder="Enter your name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm pl-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              name="name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm pl-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              name="email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm pl-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              name="password"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm pl-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              name="confirm_password"
              required
            />
          </div>
          {!passMatch && (
            <p className="text-red-500">Passwords do not match!</p>
          )}
          <button className="bg-orange-400 text-white w-full py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
            Register
          </button>
          <div className="mt-6 ">
            <button
              onClick={handleGoogleSignIn}
              className=" w-full  bg-orange-400 rounded"
            >
              <div className="flex items-center gap-2   text-center  justify-center py-2 ">
                <FcGoogle size={24} />
                <p>Google</p>
              </div>
            </button>
          </div>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Register;
