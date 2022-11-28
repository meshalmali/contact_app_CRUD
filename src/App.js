import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ContactList from "./components/contactList/ContactList";
import Add from "./components/add/Add";
import Edit from "./components/edit/Edit";
import Spinner from "./components/spinner/Spinner";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/contacts/list"} />} />
        <Route path={"/contacts/list"} element={<ContactList />} />
        <Route path={"/contacts/add"} element={<Add />} />
        <Route path={"/contacts/edit/:contactId"} element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
