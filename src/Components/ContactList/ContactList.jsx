import Contact from "../Contact/Contact";

const ContactList = ({ name, email }) => {
  return (
    <>
      <Contact name={name} email={email} />
    </>
  );
};

export default ContactList;
