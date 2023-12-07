import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple, FaFacebook } from "react-icons/fa";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (email === "admin@iep.com" && password === "Admin@123") {
      navigate("./main-page");

      //   alert("Login successful!");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="  flex flex-col gap-7 bg-center bg-cover min-h-50-screen mt-3 mx-2 rounded-md items-center bg-image relative">
      <span className="absolute top-0 left-0 w-50 h-50 bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-60"></span>
      <h1 className="mt-12 mb-2 text-white text-5xl font-bold">Welcome</h1>
      {/* <p className="text-white text-[18px] text-center w-[35%]">
        Use these awesome forms to login or create new account in your project
        for free.
      </p> */}
      <div className="bg-white w-[27%] h-[80%] flex flex-col items-center gap-7 shadow-md rounded-xl mt-5 absolute top-56">
        <h1 className="text-xl font-[600] mt-4">Login</h1>
        <div className="flex items-center gap-2">
          {/* ... (your existing code) */}
        </div>
        <h1>or</h1>
        <form className="w-[88%] flex flex-col gap-4" onSubmit={handleLogin}>
          {/* ... (your existing code) */}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="email-addon"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="password-addon"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
