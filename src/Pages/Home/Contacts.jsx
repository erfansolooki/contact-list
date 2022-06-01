import { useEffect, useState } from "react";
import ContactList from "../../Components/ContactList/ContactList";
import { Link } from "react-router-dom";
import getAllContacts from "../../Services/getAllContacts";
import http from "../../Services/httpService";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
const ContactManager = () => {
  const [contacts, setContacts] = useState([]);

  async function getContact() {
    try {
      const { data } = await getAllContacts("/Contacts");
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteContactHandler = (id) => {
    http.delete(`Contacts/${id}`).then((response) => {
      getAllContacts("/Contacts").then((response) => {
        setContacts(response.data);
      });
    });
  };

  useEffect(() => {
    getContact();
  }, []);

  // In order for the data to be stored in the browser's storage, we store the data in the local storage
  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    // cause savedContacts may not exist and user has not yet enter anything so we use if(savedContacts)
    if (savedContacts) setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="contact-list">
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "0 12rem",
              border: "solid 1px #efefef",
              borderLeft: "none",
              borderRight: "none",
            }}
          >
            <Link
              to={`/selected-contact/${contact.id}`}
              style={{ color: "#545454", textDecoration: "none" }}
              key={contact.id}
            >
              <li>
                <ContactList name={contact.name} email={contact.email} />
              </li>
            </Link>
            <div className="icon-sections">
              <Link to={`/edit/${contact.id}`}>
                <AiOutlineEdit
                  style={{ fontSize: "1.5rem", color: "#5e6061" }}
                />
              </Link>
              <div>
                <button onClick={() => deleteContactHandler(contact.id)}>
                  <BsTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ContactManager;
