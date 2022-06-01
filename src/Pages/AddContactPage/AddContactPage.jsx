import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAllContacts } from "../../Services/postAllContacts";

const AddContact = () => {
  const [inputValue, setInputValue] = useState({ name: "", email: "" });
  let navigate = useNavigate();

  const changeHandler = (event) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  function addContact(contact) {
    postAllContacts({ ...contact });
  }

  const submitHandler = (event) => {
    if (!inputValue.name && !inputValue.email) {
      alert("there is no contact to add");
      return;
    }
    event.preventDefault();
    addContact(inputValue);
    setInputValue({ name: "", email: "" });
    navigate("/");
  };
  return (
    <div>
      {" "}
      <h2 style={{ marginTop: "2rem", width: "47%", color: "#656565" }}>
        Add Contact
      </h2>
      <form onSubmit={submitHandler}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            margin: "0 18rem",
          }}
        >
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            value={inputValue.name}
            onChange={changeHandler}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={inputValue.email}
            onChange={changeHandler}
          />
          <button>Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
