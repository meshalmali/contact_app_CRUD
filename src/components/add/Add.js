import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContactService } from "../../services/ContactService";

function Add() {
  let navigate = useNavigate();

  let [state, setState] = useState({
    contact: {
      name: "",
      mobile: "",
      email: "",
    },
  });

  let updateInput = (event) => {
    // console.log(event.target.name, "and", event.target.value);
    setState({
      contact: {
        ...state.contact,
        [event.target.name]: event.target.value,
      },
    });
  };

  let formSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await ContactService.createContact(contact);
      if (response) {
        navigate("/contacts/list", { replace: true });
      }
    } catch (error) {
      navigate("/contact/add", { replace: false });
    }
  };

  let { contact } = state;

  return (
    <>
      <section className="add-contact">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 fw-bold text-center mt-5">Create Contact</p>
            </div>
          </div>
        </div>
        <div className="row text-center mt-4">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={formSubmit}>
              <div className="mb-2">
                <input
                  name="name"
                  required={true}
                  type="text"
                  placeholder="Name"
                  defaultValue={contact.name}
                  onChange={updateInput}
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <input
                  name="mobile"
                  required={true}
                  type="text"
                  placeholder="Phone"
                  defaultValue={contact.mobile}
                  onChange={updateInput}
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <input
                  name="email"
                  required={true}
                  type="email"
                  placeholder="Email"
                  defaultValue={contact.email}
                  onChange={updateInput}
                  className="form-control"
                />
              </div>
              <div className="mb-2 mt-5">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Create"
                />
                <Link to={"/contacts/list"} className="btn btn-dark ms-2">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Add;
