import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

interface IState {
  // show:boolean;
  loading: boolean;
  name: string;
  mobile: string;
  email: string;
  website: string;
  linkedIn: string;
  twitter: string;
  desc: string;
}

const useData = () => {
  const userLogin = useSelector((state:any) => state.userLogin);
  const { userInfo } = userLogin;

  const [loading, setLoading] = React.useState<IState["loading"]>(false);
  const [name, setName] = React.useState<IState["name"]>("");
  const [mobile, setMobile] = React.useState<IState["mobile"]>("");
  const [email, setEmail] = React.useState<IState["email"]>("");
  const [website, setWebsite] = React.useState<IState["website"]>("");
  const [linkedIn, setLinkedIn] = React.useState<IState["linkedIn"]>("");
  const [twitter, setTwitter] = React.useState<IState["twitter"]>("");
  const [desc, setDesc] = React.useState<IState["desc"]>("");

  // const [show, setShow] = React.useState<IState['show']>(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const submitHandler = async (setShow:any) => {
    setLoading(true);
    const data = { name, mobile, email, website, linkedIn, twitter, desc };
    console.log("bajud", data);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    try {
      await axios.post("https://contact-app-server-db3w.onrender.com/api/contact/create", data, config);
      setLoading(false);
      setName("");
      setMobile("");
      setEmail("");
      setWebsite("");
      setLinkedIn("");
      setTwitter("");
      setDesc("");
      setShow(false);
      toast.success("Contact created successfully...")
    } catch (err) {
      setLoading(false);
      toast.error("Something is wrong...")
    }
  };

  const state: IState = {
    name,
    mobile,
    email,
    website,
    linkedIn,
    twitter,
    desc,
    loading,
    // show
  };

  return {
    state,
    setName,
    setMobile,
    setEmail,
    setWebsite,
    setLinkedIn,
    setTwitter,
    setDesc,
    submitHandler,
    // setShow,
    // handleClose,
    // handleShow
  };
};

export default useData;
