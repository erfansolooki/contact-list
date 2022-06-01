import http from "./httpService";

const getAllContacts = () => {
  return http.get("/Contacts");
};

export default getAllContacts;
