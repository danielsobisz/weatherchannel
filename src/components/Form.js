import React from "react";
import '../styles/Form.css'
const Form = props => {
  return (
    <>
      <form className="form" onSubmit={props.submit}>

        <label>
          <input
            type="text"
            value={props.value}
            placeholder="Wpisz miasto..."
            onChange={props.change}
          />
          <button>Potwierdź</button>
        </label>
      </form>
    </>
  );
};

export default Form;
