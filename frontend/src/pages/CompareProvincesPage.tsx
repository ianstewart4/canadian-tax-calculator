import Navbar from "../components/Navbar";
import ProvinceDropdown from "../components/ProvinceDropdown";
import { useState } from "react";

export const CompareProvincesPage = () => {
  const [province, setProvince] = useState("");

  const onChangeProvinceSelect = (e: FormEvent) => {
    setProvince((e.target as HTMLOptionElement).value);
  };

  return (
    <div>
      <Navbar />
      <ProvinceDropdown onChangeProvinceSelect={onChangeProvinceSelect} />
      <h1>{province}</h1>
    </div>
  );
};
