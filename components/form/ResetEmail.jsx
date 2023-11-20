import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const ResetEmail = () => {
  const router = useRouter();
  const { query } = router;
  
  // Manually extract the token
  const token = query.token || '';
  console.log(token)
  const [loginData, setLoginData] = useState({
    password: "",
    repeat_password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginData.password !== loginData.repeat_password) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/reset-password`,
        {
          token: token,
          newPassword: loginData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status < 400) {
        alert('Password succesfully changed')
        console.log("Password reset successful");
        router.push("/authentication/Login");
      } else {
        console.error("Password reset failed");
        setError("Password reset failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.response.data.message);
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
        <h1 className="text-[20px] md:text-[24px] pt-4 pb-8 text-center relative text-white font-outfit">
          Enter Your email address
        </h1>

        <div className="flex justify-center flex-col gap-4 mt-12">
          <div className="py-2 text-[13px] md:text-[14px] flex md:flex-row flex-col justify-between items-center gap-2 md:gap-8">
            <div className="flex flex-col items-start relative w-full z-10">
              <input
                type="text"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="p-4  pl-6  mt-4 w-full text-white text-[20px] rounded-3xl bg-[#5A5A5A] font-outfit"
                required
                placeholder="Enter your Password"
              />
            </div>
            <div className="flex flex-col items-start relative w-full z-10">
              <input
                type="text"
                id="repeat_password"
                name="repeat_password"
                value={loginData.repeat_password}
                onChange={handleChange}
                className="p-4  pl-6  mt-4 w-full text-white text-[20px] rounded-3xl bg-[#5A5A5A] font-outfit"
                required
                placeholder="Confirm your Password"
              />
            </div>
          </div>
          <div className="flex justify-center border-transparent w-full mt-12 relative z-10">
            <button className="border-4 border-[#971713] font-outfit bg-[#971713] px-16 py-2 rounded-[50px] hover:bg-transparent text-[16px] md:text-[32px]">
              Submit
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

export default ResetEmail;
