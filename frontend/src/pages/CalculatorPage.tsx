import { FormEvent, useState } from "react";
import DataCard from "../components/DataCard";
import InputCard from "../components/InputCard";
import Navbar from "../components/Navbar";
import ProvinceDropdown from "../components/ProvinceDropdown";

export const CalculatorPage = () => {
  const [province, setProvince] = useState("");

  const onChangeProvinceSelect = (e: FormEvent) => {
    setProvince((e.target as HTMLOptionElement).value);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-10">
        <div>
          <ProvinceDropdown onChangeProvinceSelect={onChangeProvinceSelect} />
          <h1 className="flex justify-center mt-10">{province}</h1>
          <div className="flex justify-center mt-10">
            <InputCard />
            <DataCard />
          </div>
        </div>
      </div>
    </>
  );
};
