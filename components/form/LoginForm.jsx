import React, { useState, useEffect } from "react";
import Link from "next/link";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember_me: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...regData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setLoginData({ ...regData, [name]: checked });
  };
  // //   const [isOpen, setIsOpen] = useState(false);
  // //   const [categories, setCategories] = useState([]);
  // //   const [error, setError] = useState("");
  // //   const [loading, setLoading] = useState(false);

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

  return (
    <div
      className="py-8 md:py-20 p-8 md:p-20 w-full relative shadow-3xl rounded-[50px]"
      style={{
        background:
          "linear-gradient(rgba(52, 52, 52, 1), rgba(255, 255, 255, 0))",
      }}
    >
      <form>
        <h1 className="text-[48px] text-center font-bold hidden md:block font-clash relative text-white">
          Log in
        </h1>
        <h1 className="text-[20px] md:text-[24px] pt-4 pb-8 text-center relative text-white">
        Don’t have an account? {" "}
          <Link href="#" className="text-[#971713]">
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
              className="p-4  pl-6  mt-4 w-full text-white text-[20px] rounded-3xl bg-[#5A5A5A]"
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
              value={loginData.password}
              onChange={handleChange}
              className="p-4  pl-6  mt-4 w-full text-white text-[20px] rounded-3xl bg-[#5A5A5A]"
              required
              placeholder="Enter your Password"
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
                  checked={loginData.remember_me}
                  onChange={handleCheckboxChange}
                />
                <span className="checkbox-icon"></span>
                <div className=" text-[20px]">Remember me?</div>
              </label>
            </div>
            <div>
              <Link className="text-[20px] text-[#971713]" href="#">
                Forgot Password?
              </Link>
            </div>
          </div>

          <div className="flex justify-center border-transparent w-full mt-12 relative z-10">
            <button className="border-4 border-[#971713] bg-[#971713] px-16 py-2 rounded-[50px] hover:bg-transparent text-[32px]">
              Log in
            </button>
          </div>
        </div>
        {/* {error && (
          <div className="text-white text-[13px] font-mont border-2 border-[#150E28] p-2 my-2 bg-red-500">
            {error}
          </div>
        )} */}
      </form>
    </div>
  );
};

export default LoginForm;
