import http from "./httpService";

const deleteOneContact = (contactId) => {
  return http.delete(`Contacts/${contactId}`);
};

export default deleteOneContact;
