import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const ForgotEmail = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/request-password-reset`,
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      console.log("Password reset request successful");
      alert('Check your email')
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

export default ForgotEmail;
