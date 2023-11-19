import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ResetEmail from "@/components/form/ResetEmail";

const ResetPassword = () => {
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
          <div className="bg-[#971713] relative overflow-hidden pt-24">
            <div className=" text-white flex xl:flex-row flex-col items-center gap-8 justify-between px-0 md:px-20">
              <div>
                <h1 className="text-[20px] mb-12 md:text-[60px] w-[500px] text-center font-bold font-outfit relative block">
                  RESET YOUR PASSWORD?
                </h1>

              </div>
              <div className="relative mt-12">
                <div>
                  <ResetEmail />
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

export default ResetPassword;
