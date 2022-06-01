import AddContactPage from "./Pages/AddContactPage/AddContactPage";
import EditContact from "./Pages/EditContact/EditContact";
import Contacts from "./Pages/Home/Contacts";
import SelectedContact from "./Pages/SelectedContact/SelectedContact";

const routes = [
  { path: "/", element: <Contacts /> },
  { path: "/add-contact", element: <AddContactPage /> },
  { path: "/selected-contact/:id", element: <SelectedContact /> },
  { path: "/edit/:id", element: <EditContact /> },
];

export default routes;
