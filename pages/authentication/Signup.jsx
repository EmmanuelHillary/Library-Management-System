import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import SignupForm from "@/components/form/SignupForm";

const Signup = () => {
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
            <div className=" text-white flex xl:flex-row flex-col items-center  gap-8 justify-between px-0 md:px-20">
              <div className="w-full md:w-[484px]">
                <h1 className="text-[35px] mb-12 md:text-[85px] text-center font-bold relative block font-outfit font-outfit">
                  Welcome !
                </h1>
                <p className="text-[35px] text-center font-outfit">
                  Explore a vast collection of books, articles and resourses at
                  your fingertips
                </p>
              </div>
              <div className="mt-12">
                <SignupForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
