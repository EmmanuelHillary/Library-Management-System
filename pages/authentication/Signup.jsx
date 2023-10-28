import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import SignupForm from "@/components/form/SignupForm";

const Signup = () => {
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
            <div className=" text-white flex xl:flex-row flex-col items-center  gap-8 justify-between p-auto px-12 md:px-20">
              <div className=" w-[484px]">
                <h1 className="text-[20px] mb-12 md:text-[85px] text-center font-bold relative block font-outfit">
                  Welcome !
                </h1>
                <p className="text-[35px] text-center font-outfit">
                  Explore a vast collection of books, articles and resourses at
                  your fingertips
                </p>
              </div>
                  <SignupForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
