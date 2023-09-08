import DataCard from "../components/DataCard";
import InputCard from "../components/InputCard";
import Navbar from "../components/Navbar";
import ProvinceDropdown from "../components/ProvinceDropdown";

export const CalculatorPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-10">
        <div>
          <ProvinceDropdown />
          <div className="flex justify-center mt-10">
            <InputCard />
            <DataCard />
          </div>
        </div>
      </div>
    </>
  );
};
