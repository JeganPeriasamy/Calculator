import React from "react";
import { add, sub, multi, div} from "./opeReducer";
import {setInput1} from "./input1Reducer"
import { setInput2 } from "./input2Reducer";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  // const {Data} = useSelector((state) => state.calculate);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const dispatch = useDispatch();
  // const {} = useSelector((state) => state.users);

  var num1;
  var num2;
  var Operation;

  const handleInput1 = (e) => {
    num1 = e;
    console.log(num1);
  };
  const handleInput2 = (e) => {
    num2 = e;
    console.log(num2);
  };
  const handleInput= (e) => {
       console.log(e);
  };
  const handleOperation = (e) => {
  // dispatch((e)) 
  };

  const handleDelete = () => {
    console.log("Delete");
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="container mt-5 py-5">
      <div className="d-flex">
        <input
          type="number"
          value={num1}
          placeholder="Enter a Input1"
          // onChange={(e) => dispatch(setInput1(e.target.value))}
        ></input>
        <select onChange={(e)=>handleOperation(e)}>
          <option onChange={(e)=>dispatch(add(e))}>+</option>
          <option onChange={(e)=>dispatch(sub(e))}>-</option>
          <option onChange={(e)=>dispatch(multi(e))}>*</option>
          <option onChange={(e)=>dispatch(div(e))}>/</option>s
        </select>

        <input
          type="number"
          placeholder="Enter a Input2"
          value={num2}
          onChange={(e) => dispatch(setInput2(e.target.value))}
        ></input>

        <label className="ms-5 ">Output : </label>
      </div>

      {}
      <button type="button" onClick={() => handleSubmit()} className="bt ms-5">
        Submit{" "}
      </button>
      <button
        type="button"
        onClick={() => handleDelete("delete")}
        className="btn "
      >
        Clear
      </button>
      <div className="d-flex gap-3 ">
        {numbers.map((value, index) => (
          <button
            key={index}
            type="button"
            onClick={(e) => dispatch(setInput2(value))}
            className="btn back"
          >
            {value}
          </button>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default Page;
