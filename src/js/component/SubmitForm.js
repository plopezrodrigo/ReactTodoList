import React, {useState } from "react";

const SubmitForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleFilter = (index) => {
    let filtered = todos.filter((task, i) => {
      index != i
    });
    setTodos(filtered);
  }

  return (
    <div className="form form-control ">
      <form class="form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="text-black task-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setTodos([...todos, inputValue]);
              setInputValue("");
            }
          }}
          placeholder="What needs to be done?"
        ></input>
      </form>
      {
        <div className="list">
          <div className="">
            <ul class="list-group list-group-flush">
              {todos.map((item, index) => (
                <li className="text-black" key={index}>
                  {item}
                  <button className="btn" >
                  <i className="far fa-trash-alt" onClick={() => handleFilter(index)} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
         
		  <div className="task-ammount text-muted">{todos.length} item left</div>
        </div>
      }
    </div>
  );
};

export default SubmitForm;
