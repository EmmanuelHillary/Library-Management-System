import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AdminLoginForm from "@/components/form/AdminLoginForm";

const Admin = () => {
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
          <div className="bg-transparent relative overflow-hidden">
            <div className=" text-white flex xl:flex-row flex-col items-center gap-8 justify-center px-0 md:px-20">
              <div className=" mt-24">
                <div>
                  <AdminLoginForm />
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

export default Admin;
