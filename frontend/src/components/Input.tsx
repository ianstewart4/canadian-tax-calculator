const Input = ({ label, info }) => {
  return (
    <div>
      <label>{label}</label>
      <div className="tooltip" data-tip={info}>
        <button className="btn">i</button>
      </div>
      <input
        type="text"
        placeholder="$0"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
};
export default Input;
