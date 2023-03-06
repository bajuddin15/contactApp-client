import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

interface IState {
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
  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;

  const [loading, setLoading] = React.useState<IState["loading"]>(false);
  const [name, setName] = React.useState<IState["name"]>("");
  const [mobile, setMobile] = React.useState<IState["mobile"]>("");
  const [email, setEmail] = React.useState<IState["email"]>("");
  const [website, setWebsite] = React.useState<IState["website"]>("");
  const [linkedIn, setLinkedIn] = React.useState<IState["linkedIn"]>("");
  const [twitter, setTwitter] = React.useState<IState["twitter"]>("");
  const [desc, setDesc] = React.useState<IState["desc"]>("");

  const updateContact = async (fetchCount:any, setFetchCount:any, setEditShow: any, id: any) => {
    const data = {
      name,
      mobile,
      email,
      website,
      linkedIn,
      twitter,
      desc,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    try {
      await axios.put(`https://contact-app-server-db3w.onrender.com/api/contact/${id}`, data, config);
      setName("");
      setMobile("");
      setEmail("");
      setWebsite("");
      setLinkedIn("");
      setTwitter("");
      setDesc("");
      setEditShow(false);
      toast.success("Contact Updated successfully...");
    } catch (error) {
      console.log(error);
      setEditShow(false);
      toast.error("Something went wrong...");
    }
    setFetchCount(fetchCount + 1);
  };

  React.useEffect(() => {}, []);

  const state: IState = {
    name,
    mobile,
    email,
    website,
    linkedIn,
    twitter,
    desc,
    loading,
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
    updateContact,
  };
};

export default useData;
