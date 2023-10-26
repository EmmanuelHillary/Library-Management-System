import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import LoginForm from "@/components/form/LoginForm";

const AdminLogin = () => {
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
            <div className=" text-white flex xl:flex-row flex-col items-center gap-8 justify-center p-auto px-12 md:px-20">
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

export default AdminLogin;
