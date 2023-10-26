import React from "react";
import Link from "next/link";

const DashboardCard = ({ title, number, icon: Icon }) => {
  return (
    <Link href="#">
      <div className="bg-white  rounded-2xl p-4 w-[280px] sm:w-[370px] h-[130px] shadow-2xl flex justify-between items-center">
        <div>
          <p className="text-black text-[16px] font-roboto font-outfit">{title}</p>
          <p className="text-[28px] font-bold text-black font-roboto font-outfit">
            {number}
          </p>
        </div>
        <div className="rounded-full bg-white p-3">
          <Icon style={{ width: '25px', height: '25px' }} className=" text-3xl text-white bg-[#971713] p-1 rounded" />
        </div>
      </div>
    </Link>
  );
};

export default DashboardCard;