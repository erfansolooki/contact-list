import http from "./httpService";

export default function updateContact(id, data) {
  return http.put(`/Contacts/${id}`, data);
}
