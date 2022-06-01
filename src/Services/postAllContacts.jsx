import http from "./httpService";

export function postAllContacts(data) {
  const token = "SECURE TOKEN";
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return http.post("/Contacts", data, header);
}
