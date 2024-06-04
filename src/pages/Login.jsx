import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const Login = () => {
  const { signIn, user, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await fetch(
        "https://inventory-backend-ooh5.onrender.com/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      console.log(data?.token);
      if (data?.status === "success") {
        await signIn(email, password);
        toast.success("Login successful!");
        // Store token in localStorage
        localStorage.setItem("token", data.token);
        navigate(from, { replace: true });
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };

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
          "http://localhost:5000/api/v1/user/google",
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
        console.log("reeeee", result);
        localStorage.setItem("token", result?.token);
      }
    } catch (error) {
      console.error("Error during Google sign-in:", error.message);
      // Optionally, you can display an error message to the user
    }
  };

  useEffect(() => {
    if (user?.email) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center min-h-screen bg-gray-100"
    >
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold mb-4 text-center">Login Now</h1>
        <div className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered border border-gray-300 w-full py-2 px-3 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered border border-gray-300 w-full py-2 px-3 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              name="password"
              required
            />
          </div>
          <div className="form-control">
            <button
              className="btn btn-primary w-full py-2 rounded-md bg-orange-400 focus:outline-none focus:bg-indigo-600"
              type="submit"
            >
              Login
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
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <p className="mt-4 text-center">
            New here?{" "}
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
