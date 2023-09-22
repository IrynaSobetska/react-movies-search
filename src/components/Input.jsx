import "./Input.css";
import { BiSearch } from "react-icons/bi";
import PropTypes from "prop-types";
import { useState } from "react";

const Input = ({ setValue }) => {
  const [val, setVal] = useState("man");
  const [error, setError] = useState(false);

  const changeValue = (e) => {
    const inpVal = e.target.value.toLowerCase().trim();
    setVal(inpVal);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (val.trim() === "") {
      setError(true);
      return;
    }

    setValue(val);
  };

  return (
    <>
      {error && <h2>{error}</h2>}
      <form className="input" onSubmit={(e) => submitHandler(e)}>
        <input onChange={(e) => changeValue(e)} type="text" value={val} />
        <p className="icon">
          <BiSearch />
        </p>
      </form>
    </>
  );
};

Input.propTypes = {
  setValue: PropTypes.func,
};

export default Input;
