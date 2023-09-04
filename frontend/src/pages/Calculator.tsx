import Navbar from "../components/Navbar";

export const Calculator = () => {
  return (
    <>
      <Navbar />
      <div className="join">
        <div>
          <div>
            <input
              className="input input-bordered join-item"
              placeholder="Search"
            />
          </div>
        </div>
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
        <div className="indicator">
          <button className="btn join-item">Search</button>
        </div>
      </div>
    </>
  );
};
