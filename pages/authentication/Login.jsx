import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import LoginForm from "@/components/form/LoginForm";

const Login = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/hero.png)",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <div>
          <div className="bg-transparent relative overflow-hidden">
            <div className=" text-white flex xl:flex-row flex-col items-center gap-8 justify-between p-auto px-12 md:px-20">
              <div>
                <h1 className="text-[20px] mb-12 md:text-[60px] w-[500px] text-center font-bold relative block">
                  WHAT WILL YOU READ TODAY ?
                </h1>
                <p className="text-[35px] text-center w-[500px]">
                  Download your favourite books to read offline, no matter where
                  you are.
                </p>
              </div>
              <div className="relative">
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
