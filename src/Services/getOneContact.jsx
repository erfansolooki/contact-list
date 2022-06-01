import http from "./httpService";

const getOneContact = (contactId) => {
  return http.get(`/Contacts/${contactId}`);
};

export default getOneContact;
