import Navbar from "../components/Navbar";
import ProvinceDropdown from "../components/ProvinceDropdown";
import { useState } from "react";

export const CompareProvincesPage = () => {
  const [province, setProvince] = useState<string>("");

  const onChangeProvinceSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProvince(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <ProvinceDropdown onChangeProvinceSelect={onChangeProvinceSelect} />
      <h1>{province}</h1>
    </div>
  );
};
