import { Pie } from "react-chartjs-2";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const PieChart = () => {
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalOverBooks, setTotalOverBooks] = useState(0);
  const [returnedBooks, setReturnedBooks] = useState(0);

  useEffect(() => {
    const fetchTotalBooks = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/books/gettotalbookvalue/books`
        );
        setTotalBooks(response.data);
      } catch (error) {
        console.error("Error fetching total books:", error);
      }
    };

    const fetchTotalOverdueBooks = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/books/gettotaloverduebookvalue/books`
        );
        setTotalOverBooks(response.data);
      } catch (error) {
        console.error("Error fetching total overdue books:", error);
      }
    };

    fetchTotalBooks();
    fetchTotalOverdueBooks();
  }, []);

  useEffect(() => {
    // Calculate the number of returned books based on the available data
    setReturnedBooks(totalBooks - totalOverBooks);
  }, [totalBooks, totalOverBooks]);

  const data = {
    labels: ["Returned books", "Overdue books"],
    datasets: [
      {
        data: [totalOverBooks, returnedBooks ],
        backgroundColor: ["#EAAA00", "#971713"],
        hoverBackgroundColor: ["#EAAA00", "#971713"],
      },
    ],
  };

  const legendData = [
    { label: "Returned books", color: "#971713" },
    { label: "Overdue books", color: "#EAAA00" },
  ];

  return (
    <div className="bg-white mt-8 h-[335px] flex justify-center items-center rounded-lg">
      <div
        style={{
          width: "250px",
          height: "250px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          bottom: "30px",
        }}
      >
        <h2 className="text-[25px] font-outfit">Total Books</h2>
        <Pie data={data} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "200%",
          }}
        >
          {legendData.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "20px",
              }}
            >
              <div
                style={{
                  backgroundColor: item.color,
                  width: "10px",
                  height: "10px",
                  marginRight: "5px",
                }}
              ></div>
              <span className="text-[13px] font-outfit">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChart;
