import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { ContactService } from "../../services/ContactService";
import Spinner from "../spinner/Spinner";

function ContactList() {
  let [query, setQuery] = useState("");

  let searchContacts = (event) => {
    setQuery(event.target.value);
    let theContacts = state.contacts.filter((contact) => {
      return contact.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setState({
      ...state,
      filteredContacts: theContacts,
    });
  };

  let [state, setState] = useState({
    loading: false,
    contacts: [],
    filteredContacts: [],
    errorMessage: "",
  });

  const getUserData = async () => {
    try {
      setState({ ...state, loading: true });
      let response = await ContactService.getAllContacts();
      // console.log(response.data);
      setState({
        ...state,
        loading: false,
        contacts: response.data,
        filteredContacts: response.data,
      });
    } catch (error) {
      setState({
        ...state,
        loading: false,
      });
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  let clickDelete = async (contactId) => {
    try {
      let response = await ContactService.deleteContact(contactId);
      if (response) {
        let response = await ContactService.getAllContacts();
        setState({
          contacts: response.data,
          filteredContacts: response.data,
        });
      }
    } catch (error) {}
  };

  let { loading, contacts, filteredContacts, errorMessage } = state;

  return (
    <>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-md-12">
                <form className="row mt-5">
                  <div className="col-md-6">
                    <div className="mb-2">
                      <input
                        name="text"
                        value={query}
                        onChange={searchContacts}
                        type="text"
                        className="form-control"
                        placeholder="Search here for Names"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 ms-5">
                    <Link to={"/contacts/add"} className="btn btn-primary ms-5">
                      <AddIcCallIcon />
                      Add New Contact
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {loading ? (
        <Spinner />
      ) : (
        <section className="contact-list">
          <div className="container">
            <div className="row">
              {filteredContacts.length > 0 &&
                filteredContacts.map((contact) => {
                  return (
                    <div className="col-md-12" key={contact.id}>
                      <div className="card my-2">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-3">
                              <img
                                src="https://www.metastellar.com/wp-content/uploads/2021/04/Default-avatar-gender-neutral-dc82769d.jpeg"
                                className="contact-img"
                              />
                            </div>
                            <div className="col-md-8">
                              <ul className="list-group">
                                <li className="list-group-item ">
                                  <span className="fw-bold m-1">Name:</span>
                                  {contact.name}
                                </li>
                                <li className="list-group-item ">
                                  <span className="fw-bold m-1"> Mobile:</span>
                                  {contact.mobile}
                                </li>
                                <li className="list-group-item ">
                                  <span className="fw-bold m-1"> Email:</span>
                                  {contact.email}
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-1 d-flex flex-column align-items-center">
                              <Link
                                to={`/contacts/edit/${contact.id}`}
                                className="btn btn-primary my-2"
                              >
                                <EditIcon />
                              </Link>
                              <button
                                className="btn btn-danger my-2"
                                onClick={() => clickDelete(contact.id)}
                              >
                                <DeleteIcon />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ContactList;

{
}
