import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

interface IState {
    contacts:any;
    show:boolean;
    editShow:boolean;
    loading:boolean;
    fetchCount:number;
}

const useData = ()=>{
    const userLogin = useSelector((state:any) => state.userLogin);
    const { userInfo } = userLogin;


    const [fetchCount, setFetchCount] = React.useState<IState['fetchCount']>(0)
    const [contacts, setContacts] = React.useState<IState['contacts']>([]);
    const [show, setShow] = React.useState<IState['show']>(false);
    const [editShow, setEditShow] = React.useState<IState['show']>(false);
    const [loading, setLoading] = React.useState<IState['loading']>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

    const fetchAllContacts = async()=>{
        setLoading(true);
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userInfo.token}`,
            },
        };

        try {
            const {data} = await axios.get("https://contact-app-server-db3w.onrender.com/api/contact", config)
            setContacts(data);
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }

    const deleteContact = async(id:any)=>{
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userInfo.token}`,
            },
        };

        try {
            await axios.delete(`https://contact-app-server-db3w.onrender.com/api/contact/${id}`,  config);
            fetchAllContacts();
            toast.success("Your Contact delete successfully...")
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong...")
        }
    }

    React.useEffect(()=>{
        fetchAllContacts()
    }, [show, fetchCount]);

    const state:IState ={
        contacts,
        show,
        editShow,
        loading,
        fetchCount,
    }

    return {
        state,
        setContacts,
        setShow,
        setEditShow,
        handleShow,
        handleClose,
        handleEditClose,
        handleEditShow,
        deleteContact,
        setFetchCount,
    }
}

export default useData;
