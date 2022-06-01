import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import getOneContact from "../../Services/getOneContact";
import updateContact from "../../Services/updateContact";

const EditContact = () => {
  const [inputValue, setInputValue] = useState({ name: "", email: "" });
  let navigate = useNavigate();
  let params = useParams().id;

  const changeHandler = (event) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  async function editContact() {
    try {
      const { data } = await updateContact(params, inputValue);
      setInputValue(data);
    } catch (error) {}
  }

  const submitHandler = (event) => {
    if (!inputValue.name && !inputValue.email) {
      alert("there is no contact to add");
      return;
    }
    event.preventDefault();
    editContact(inputValue);
    setInputValue({ name: "", email: "" });
    navigate("/");
  };

  useEffect(() => {
    async function localFetch() {
      try {
        const { data } = await getOneContact(params);
        setInputValue({ name: data.name, email: data.email });
      } catch (error) {}
    }
    localFetch();
  }, []);
  return (
    <div>
      {" "}
      <h2 style={{ marginTop: "2rem", width: "47%", color: "#656565" }}>
        Edit Contact
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
          <button>Edit</button>
        </div>
      </form>
    </div>
  );
};

export default EditContact;
