import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {

    e.preventDefault();

    // Fake Login
    localStorage.setItem("isAuthenticated", "true");

    navigate("/dashboard");

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10">

        {/* Logo */}
        <div className="flex justify-center mb-6">

          <img
            src="./src/assets/TmezLogoTransparent.png"
            className="w-24"
          />

        </div>

        {/* Title */}
        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold text-slate-800 mb-3">
            Admin Login
          </h1>

          <p className="text-slate-500">
            Sign in to manage the community website.
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          {/* Email */}
          <div>

            <label className="block text-slate-700 font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-4 rounded-2xl border border-slate-300 outline-none focus:border-sky-500"
            />

          </div>

          {/* Password */}
          <div>

            <label className="block text-slate-700 font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-5 py-4 rounded-2xl border border-slate-300 outline-none focus:border-sky-500"
            />

          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-4 rounded-2xl font-semibold hover:bg-sky-600 transition duration-300"
          >
            Login
          </button>

        </form>

      </div>

    </div>

  );
}

export default Login;