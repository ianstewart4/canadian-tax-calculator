import Navbar from "../components/Navbar";
import ProvinceDropdown from "../components/ProvinceDropdown";
import { useState } from "react";
import InputCard from "../components/InputCard";
import DataCard from "../components/DataCard";
import Slider from "../components/Slider";

export const CompareProvincesPage = () => {
  const [province, setProvince] = useState<string>("");

  const onChangeProvinceSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProvince(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-10">
        <div>
          <ProvinceDropdown onChangeProvinceSelect={onChangeProvinceSelect} />
          <h1 className="flex justify-center mt-10">{province}</h1>
          <div className="flex-col justify-center mt-10">
            <div className="flex">
              <InputCard />
              <DataCard />
            </div>
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
};
