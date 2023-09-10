export default function ProvinceDropdown({ onChangeProvinceSelect }) {
  const options: {
    province: string;
    value: string;
  }[] = [
    { province: "Alberta", value: "alberta" },
    { province: "British Columbia", value: "british-columbia" },
    { province: "Manitoba", value: "manitoba" },
    { province: "New Brunswick", value: "new-brunswick" },
    {
      province: "Newfoundland and Labrador",
      value: "newfoundland-and-labrador",
    },
    { province: "Nova Scotia", value: "nova-scotia" },
    { province: "Ontario", value: "ontario" },
    { province: "Prince Edward Island", value: "prince-edward-island" },
    { province: "Quebec", value: "quebec" },
    { province: "Saskatchewan", value: "saskatchewan" },
    { province: "Northwest Territories", value: "northwest-territories" },
    { province: "Nunavut", value: "nunavut" },
    { province: "Yukon", value: "yukon" },
  ];

  return (
    <div>
      <div className="join flex">
        <select
          className="select select-bordered join-item"
          onChange={onChangeProvinceSelect}
          defaultValue={"province"}
        >
          <option value={"province"} disabled>
            Province
          </option>
          {options.map((option) => {
            return (
              <option value={option.province} key={option.value}>
                {option.province}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
