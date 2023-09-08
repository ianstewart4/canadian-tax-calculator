export default function ProvinceDropdown() {
  return (
    <div>
      <div className="join">
        <select className="select select-bordered join-item">
          <option disabled selected>
            Province
          </option>
          <option>Alberta</option>
          <option>British Columbia</option>
          <option>Manitoba</option>
          <option>New Brunswick</option>
          <option>Newfoundland and Labrador</option>
          <option>Nova Scotia</option>
          <option>Ontario</option>
          <option>Prince Edward Island</option>
          <option>Quebec</option>
          <option>Saskatchewan</option>
          <option>Northwest Territories</option>
          <option>Nunavut</option>
          <option>Yukon</option>
        </select>
      </div>
    </div>
  );
}
