import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import LoginForm from "@/components/form/LoginForm";

const Login = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <div>
          <div className="bg-[#971713] relative overflow-hidden  pt-24">
            <div className=" text-white flex xl:flex-row flex-col items-center gap-8 justify-between px-0 md:px-20">
              <div>
                <h1 className="text-[20px] mb-12 md:text-[60px] w-[500px] text-center font-bold relative block">
                  WHAT WILL YOU READ TODAY ?
                </h1>
                <p className="text-[35px] text-center w-[500px] font-outfit">
                  Download your favourite books to read offline, no matter where
                  you are.
                </p>
              </div>
              <div className="relative mt-12">
                <div>
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
