import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams, useNavigate } from "react-router-dom";
import { ContactService } from "../../services/ContactService";

function Edit() {
  let { contactId } = useParams();
  let navigate = useNavigate();

  let [state, setState] = useState({
    contact: {
      name: "",
      mobile: "",
      email: "",
    },
  });

  const getUserDataforEdit = async () => {
    try {
      let response = await ContactService.getContact(contactId);
      setState({
        contact: response.data,
      });
    } catch (error) {
      console.log("I am error", error);
    }
  };

  useEffect(() => {
    getUserDataforEdit();
  }, [contactId]);

  let updateInput = (event) => {
    // console.log(event.target.name, "and", event.target.value);
    setState({
      contact: {
        ...state.contact,
        [event.target.name]: event.target.value,
      },
    });
  };

  let submitForm = async (event) => {
    event.preventDefault();
    // console.log("I clicked on update");
    try {
      let response = await ContactService.updateContact(
        state.contact,
        contactId
      );
      // console.log(response);
      if (response) {
        navigate("/contacts/list", { replace: true });
      }
    } catch (error) {
      // console.log(error);
      navigate(`/contacts/edit/${contactId}`, { replace: false });
    }
  };

  let { contact } = state;

  return (
    <>
      <section className="edit-contact">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 fw-bold text-center mt-5">Edit Contact</p>
            </div>
          </div>
        </div>
        <div className="row text-center mt-4">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={submitForm}>
              <div className="mb-2">
                <input
                  required={true}
                  name="name"
                  value={contact.name}
                  onChange={updateInput}
                  type="text"
                  placeholder="Name"
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <input
                  required={true}
                  name="mobile"
                  value={contact.mobile}
                  onChange={updateInput}
                  type="number"
                  placeholder="Phone"
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <input
                  required={true}
                  name="email"
                  value={contact.email}
                  onChange={updateInput}
                  type="email"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className="mb-2 mt-5">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Update"
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

export default Edit;
