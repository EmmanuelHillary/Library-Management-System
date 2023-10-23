import Navbar from "@/components/navbar/Navbar";
import SectionOne from "@/components/sections/SectionOne";
import SectionTwo from "@/components/sections/SectionTwo";
import SectionThree from "@/components/sections/SectionThree";
import SectionFour from "@/components/sections/SectionFour";

export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/hero.png)",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <SectionOne />
      </div>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}
