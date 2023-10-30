import React from "react";

const SectionNine = () => {
  const divStyle = {
    backgroundImage: "url('/sectionnine.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    height: "400px",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "linear-gradient(to right, #232526, #414345)",
    opacity: 0.8,
  };

  return (
    <div className="flex justify-center items-center h-screen" style={divStyle}>
      <div style={overlayStyle}></div>
      <div className="text-white text-[36px] text-center z-10 font-outfit">
        “A reader lives a thousand lives before he dies. The man who never reads
        lives only one.“ -George R.R. Martin
      </div>
    </div>
  );
};

export default SectionNine;
