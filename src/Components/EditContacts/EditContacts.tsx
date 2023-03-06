import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import useData from "./data";

interface IProps {
  editShow: boolean;
  setEditShow: any;
  handleEditShow: any;
  handleEditClose: any;
  contact: any;
  setFetchCount:any;
  fetchCount:number;
}

const EditContacts: React.FC<IProps> = ({
    fetchCount,
    setFetchCount,
  editShow,
  setEditShow,
  handleEditShow,
  handleEditClose,
  contact,
}) => {

  const {
    state,
    setName,
    setMobile,
    setEmail,
    setWebsite,
    setLinkedIn,
    setTwitter,
    setDesc,
    updateContact,
  } = useData();

  const { name, mobile, email, website, linkedIn, twitter, desc, loading } =
    state;

  React.useEffect(() => {
    setName(contact?.name);
    setMobile(contact?.mobile);
    setEmail(contact?.email);
    setWebsite(contact?.website);
    setLinkedIn(contact?.linkedIn);
    setTwitter(contact?.twitter);
    setDesc(contact?.desc);
  }, [contact]);

  return (
    <>
      <Modal show={editShow} onHide={handleEditClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              updateContact(fetchCount, setFetchCount, setEditShow, contact?._id);
            }}>
            {loading ? "Please wait.." : "Update"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditContacts;
