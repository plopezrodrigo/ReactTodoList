import React, {useState } from "react";

const SubmitForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const change1 = (e) => {
    setInputValue(e.target.value);
  };
 const deleteItem = (index) => {
 return setTodos(
   todos.filter((item, i) => {
     return i !== index;
    })
   );
  };

  return (
    <div className="form form-control ">
      <form class="form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="text-black task-input"
          type="text"
          value={inputValue}
          onChange={change1}
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
              {todos.map((itemvalue, index) => {
              return (
                <div>
                <li className="text-black" id={index}>{itemvalue}
                  <button className="btn" >
                  <i className="far fa-trash-alt" onClick={() => deleteItem(index)}/>
                  </button>
                </li>
                </div>
                );
              })}
            </ul>
          </div>
         
		  <div className="task-ammount text-muted">{todos.length} item left</div>
        </div>
      }
    </div>
  );
};

export default SubmitForm;
