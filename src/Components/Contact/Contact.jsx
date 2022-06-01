import { BsPerson } from "react-icons/bs";

const Contact = ({ email, name }) => {
  return (
    <div className="contact">
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
          <p style={{ fontWeight: "600" }}>{name}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
