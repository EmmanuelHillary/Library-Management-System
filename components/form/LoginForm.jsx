import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Eye from "../../public/eye.png";
import Image from "next/image";
import { useLoginUserMutation } from "@/app/apiSlices/auth";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "@/app/slices/authSlice";

const LoginForm = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [login, { error: loginError, isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setRememberMe(checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    try {
      const res = await login(loginData).unwrap();
    
      dispatch(setToken(res.access_token));
      dispatch(setUser(loginData.email));
      router.push("/user/dashboard");

    } catch (error) {
  
      setError(error.data.message ?? "Failed to login, please try again");
    }
  };

  return (
    <div
      className="py-8 md:py-20 p-8 md:p-20 relative shadow-3xl rounded-[50px] "
      style={{
        background:
          "linear-gradient(rgba(52, 52, 52, 1), rgba(255, 255, 255, 0))",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h1 className="text-[48px] text-center font-bold hidden md:block font-clash relative text-white font-outfit">
          Log in
        </h1>
        <h1 className="text-[20px] md:text-[24px] pt-4 pb-8 text-center relative text-white font-outfit">
          Don’t have a user account?{" "}
          <Link href={"/authentication/Signup"} className="text-[#971713]">
            Create an account
          </Link>
        </h1>
        <div className="py-2 text-[13px] md:text-[14px] flex md:flex-row flex-col justify-between items-center gap-2 md:gap-8">
          <div className="flex flex-col items-start relative w-full z-10">
            <input
              type="text"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              className="p-4  pl-6  mt-4 w-full text-white text-[20px] rounded-3xl bg-[#5A5A5A] font-outfit"
              required
              placeholder="Enter your Email"
            />
          </div>
        </div>
        <div className="py-2 text-[13px] md:text-[14px] flex md:flex-row flex-col justify-between items-center gap-2 md:gap-8">
          <div className="flex items-start relative w-full z-10 ">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="p-4  pl-6  mt-4 w-full text-white text-[20px] rounded-3xl bg-[#5A5A5A] font-outfit"
              required
              placeholder="Enter your Password"
            />

            <Image
              src={Eye}
              alt="Profile"
              className="w-15 h-15 rounded-full mr-2 absolute top-8 right-4  cursor-pointer"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
        </div>

        <div className="flex justify-center flex-col gap-4 mt-12">
          <div className="flex items-center justify-between w-full">
            <div className="relative z-10">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleCheckboxChange}
                />
                <span className="checkbox-icon"></span>
                <div className=" text-[16px] md:text-[20px] font-outfit">Remember me?</div>
              </label>
            </div>
            <div>
              <Link className="text-[16px] md:text-[20px] text-[#971713] font-outfit" href="#">
                Forgot Password?
              </Link>
            </div>
          </div>

          <div className="flex justify-center border-transparent w-full mt-12 relative z-10">
            <button className="border-4 border-[#971713] font-outfit bg-[#971713] px-16 py-2 rounded-[50px] hover:bg-transparent text-[16px] md:text-[32px]">
              Log in
            </button>
          </div>
        </div>
        {error && (
          <div className="text-white text-[13px] font-mont border-2 border-[#150E28] p-2 my-2 bg-red-500">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
