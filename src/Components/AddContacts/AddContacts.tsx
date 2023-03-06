import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import useData from "./data";

interface IProps {
  show:boolean;
  setShow:any;
  handleShow:any;
  handleClose:any
}

const AddContacts: React.FC<IProps> = ({show, setShow, handleShow, handleClose}) => {
  

  const {
    state,
    setName,
    setMobile,
    setEmail,
    setWebsite,
    setLinkedIn,
    setTwitter,
    setDesc,
    submitHandler,
  } = useData();

  const { name, mobile, email, website, linkedIn, twitter, desc, loading } = state;


  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        ADD CONTACTS
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add a new Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="7818023705"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://exapmle.com"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>LinkedIn</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://linkedin.com/in/username"
                value={linkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Twitter</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://www.twitter.com/username"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>About Your Contact</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {submitHandler(setShow)}}>
            {loading ? "Please wait.." : "Create"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddContacts;
