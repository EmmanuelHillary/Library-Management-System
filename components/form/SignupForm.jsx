import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const SignupForm = () => {
  const [regData, setRegData] = useState({
    username: "",
    email: "",
    password: "",
    repeat_password: "",
    remember_me: false,
  });
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegData({ ...regData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setRememberMe(checked);
  };
  // //   const [isOpen, setIsOpen] = useState(false);
  // //   const [categories, setCategories] = useState([]);
  // //   const [error, setError] = useState("");
  // //

  // //   const handleSubmit = (e) => {
  // //     e.preventDefault();
  // //     setLoading(true);

  // //     const registrationApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}hackathon/registration`;

  // //     axios
  // //       .post(registrationApiUrl, regData, {
  // //         headers: {
  // //           "Content-Type": "application/json",
  // //         },
  // //       })
  // //       .then((response) => {
  // //         console.log(response);
  // //         setLoading(false);
  // //         setIsOpen(true);
  // //       })
  // //       .catch((error) => {
  // //         console.log("Error:", error);
  // //         if (error.response && error.response.data) {
  // //           setError(error.response.data.email[0]);
  // //         } else {
  // //           setError("An error occurred during registration.");
  // //         }
  // //       });
  // //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (regData.password !== regData.repeat_password) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    const signupUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/users/usersignup`;
    axios
      .post(signupUrl, regData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        alert("User Created, Log in");
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div
      className="py-8 md:py-20 p-8 md:p-20 relative shadow-3xl rounded-[50px] w-[700px]"
      style={{
        background:
          "linear-gradient(rgba(52, 52, 52, 1), rgba(255, 255, 255, 0))",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h1 className="text-[48px] text-center font-bold hidden md:block font-outfit relative text-white">
          Sign Up
        </h1>
        <h1 className="text-[20px] md:text-[24px] pt-4 pb-8 text-center relative text-white font-outfit">
          Already have an account?{" "}
          <Link href={"/authentication/Login"} className="text-[#971713]">
            Log in
          </Link>
        </h1>
        <div className="py-2 text-[13px] md:text-[14px] flex md:flex-row flex-col justify-between items-center gap-2 md:gap-8">
          <div className="flex flex-col items-start relative w-full z-10">
            <input
              type="text"
              id="username"
              name="username"
              value={regData.username}
              onChange={handleChange}
              className="p-4  pl-6  mt-4 w-full text-white text-[20px] rounded-3xl bg-[#5A5A5A] font-outfit"
              required
              placeholder="Enter your username"
            />
          </div>
        </div>
        <div className="py-2 text-[13px] md:text-[14px] flex md:flex-row flex-col justify-between items-center gap-2 md:gap-8">
          <div className="flex flex-col items-start relative w-full z-10">
            <input
              type="text"
              id="email"
              name="email"
              value={regData.email}
              onChange={handleChange}
              className="p-4  pl-6  mt-4 w-full text-white text-[20px] rounded-3xl bg-[#5A5A5A] font-outfit"
              required
              placeholder="Enter your Email Address"
            />
          </div>
        </div>
        <div className="py-2 text-[13px] md:text-[14px] flex md:flex-row flex-col justify-between items-center gap-2 md:gap-8">
          <div className="flex flex-col items-start relative w-full z-10">
            <input
              type="text"
              id="password"
              name="password"
              value={regData.password}
              onChange={handleChange}
              className="p-4  pl-6  mt-4 w-full text-white text-[20px] rounded-3xl bg-[#5A5A5A] font-outfit"
              required
              placeholder="Enter your Password"
            />
          </div>
        </div>
        <div className="py-2 text-[13px] md:text-[14px] flex md:flex-row flex-col justify-between items-center gap-2 md:gap-8">
          <div className="flex flex-col items-start relative w-full z-10">
            <input
              type="text"
              id="repeat_password"
              name="repeat_password"
              value={regData.repeat_password}
              onChange={handleChange}
              className="p-4  pl-6  mt-4 w-full text-white text-[20px] rounded-3xl bg-[#5A5A5A] font-outfit"
              required
              placeholder="Confirm your password"
            />
          </div>
        </div>

        <div className="flex justify-center flex-col gap-4 mt-12">
          <div className="flex items-center justify-between w-full">
            <div className="relative z-10">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="remember_me"
                  checked={regData.remember_me}
                  onChange={handleCheckboxChange}
                />
                <span className="checkbox-icon"></span>
                <div className=" text-[20px] font-outfit">Remember me?</div>
              </label>
            </div>
            <div>
              <Link className="text-[20px] text-[#971713] font-outfit" href="#">
                Forgot Password?
              </Link>
            </div>
          </div>

          <div className="flex justify-center border-transparent w-full mt-12 relative z-10">
            <button className="border-4 font-outfit border-[#971713] bg-[#971713] px-12 py-2 rounded-[50px] hover:bg-transparent text-[32px]">
              Get Started
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

export default SignupForm;
