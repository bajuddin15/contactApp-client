import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import "./style.scss";

interface IProps {}

const ContactDetail: React.FC<IProps> = () => {
  const location = useLocation();

  const contact = location.state?.contact;
  return (
    <Container className="my-5">
      <div className="contactDetail">
        <div className="contactDetail-header">
          <div className="contactDetail-img">
            <img
              src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
              alt=""
            />
          </div>

          <div className="contactDetail-info">
            <h5>
              {contact?.name}
            </h5>
            <div className="cd-social">
              <div>

              <span className="t-bold">Mo. No. - </span>
              <span style={{fontSize:'15px', color:'blue'}}>
                {contact?.mobile}
              </span>
              </div>

              <div>

              <span className="t-bold">Email - </span>
              <span style={{fontSize:'15px', color:'blue'}}>
                {contact?.email}
              </span>
              </div>
            </div>
          </div>
        </div>

        <div className="contactDetail-body">
          <div className="cd-item">
            <span className="t-bold">Website - </span>
            <span style={{fontSize:'18px', color:'blue'}}>
              {contact?.website}
            </span>
          </div>
          <div className="cd-item">
            <span className="t-bold">LinkedIn - </span>
            <span style={{fontSize:'18px', color:'blue'}}>
              {contact?.linkedIn}
            </span>
          </div>
          <div className="cd-item">
            <span className="t-bold">Twitter - </span>
            <span style={{fontSize:'18px', color:'blue'}}>
              {contact?.twitter}
            </span>
          </div>
          <div className="cd-item">
            <span className="t-bold">About - </span>
            <span style={{fontSize:'18px', lineHeight:'10px', color:'grey'}}>
              {contact?.desc}
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactDetail;
