import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Contact from "../../Components/Contact/Contact";
import getOneContact from "../../Services/getOneContact";
import deleteOneContact from "../../Services/deleteOneContact";
import { BsPerson, BsTrash } from "react-icons/bs";

const SelectedContact = () => {
  const [contact, setContact] = useState("");
  const contactId = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    const selectedContact = async () => {
      const { data } = await getOneContact(contactId);
      setContact(data);
    };
    selectedContact();
  }, [contactId]);

  const deleteHandler = async () => {
    await deleteOneContact(contactId);
    navigate("/");
  };

  let contactDetail = <p>please select a comment for show</p>;

  if (contactId) contactDetail = <p>Loading ... </p>;

  if (contact) {
    contactDetail = (
      <div
        className="contact"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "60%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "12rem",
            justifyContent: "space-between",
          }}
        >
          <i
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "2rem",
            }}
          >
            <BsPerson />
          </i>
          <div style={{ textAlign: "start", width: "8rem" }}>
            <p style={{ fontWeight: "600" }}>{contact.name}</p>
            <p>{contact.email}</p>
          </div>
        </div>
        <button className="delete-button" onClick={deleteHandler}>
          {" "}
          <BsTrash />
        </button>
      </div>
    );
  }

  return (
    <div
      className="selected-contact"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh",
      }}
    >
      {contactDetail}
      <Link to="/">
        <button className="Back-button">Contact List Page</button>
      </Link>
    </div>
  );
};

export default SelectedContact;
