import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddContacts from "../AddContacts/AddContacts";
import EditContacts from "../EditContacts/EditContacts";
import Loading from "../Loading";
import useData from "./data";

import "./style.scss";

interface IProps {}

const Contacts: React.FC<IProps> = () => {
  const {
    state,
    setContacts,
    handleShow,
    handleClose,
    setShow,
    setEditShow,
    deleteContact,
    handleEditClose,
    handleEditShow,
    setFetchCount,
  } = useData();
  const { contacts, show, loading, editShow, fetchCount } = state;

  const [contact, setContact] = React.useState();

  return (
    <div className="contacts">
      <div className="contacts-comp">
        <h5>YOUR CONTACTS</h5>
        <AddContacts
          show={show}
          setShow={setShow}
          handleShow={handleShow}
          handleClose={handleClose}
        />
      </div>
      <div className="contacts-container">
        {loading ? (
          <Loading />
        ) : (
          <>
            {contacts &&
              contacts?.map((contact: any) => (
                <div className="contact-single-cont" key={contact._id} >
                  <div className="contact-single">
                    <div className="contactImg">
                      <img
                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                        alt=""
                      />
                    </div>
                    <div className="contactInfo">
                      <h5>{contact.name}</h5>
                      <div className="contactSocial">
                        <span>
                          Mobile No. - <span>{contact.mobile} </span>
                        </span>
                        <span>
                          Email - <span>{contact.email} </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="action-buttons">
                    <Link to={`/contactDetail/${contact._id}`} state={{contact:contact}} style={{textDecoration:'none'}}>
                    <Button
                      variant="warning"
                      size="lg"
                      >
                      Detail
                    </Button>
                      </Link>
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => {
                        setContact(contact);
                        handleEditShow();
                      }}>
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="lg"
                      onClick={() => deleteContact(contact._id)}>
                      Delete
                    </Button>
                  </div>
                </div>
                
              ))}
          </>
        )}
      </div>

      <EditContacts
        fetchCount={fetchCount}
        setFetchCount={setFetchCount}
        editShow={editShow}
        setEditShow={setEditShow}
        handleEditShow={handleEditShow}
        handleEditClose={handleEditClose}
        contact={contact}
      />
    </div>
  );
};

export default Contacts;
