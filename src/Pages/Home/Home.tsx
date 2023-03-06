import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Contacts from "../../Components/Contacts/Contacts";

interface IProps {}

const Home: React.FC<IProps> = () => {
  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Container className="my-4">
      {userInfo ? (
        <Contacts />
      ) : (
        <>
          <h5>Please Create an account first..</h5>
        </>
      )}
    </Container>
  );
};

export default Home;
