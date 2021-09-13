import React, { useState, createContext } from "react";
import {useDispatch, useSelector} from "react-redux";
import {setContactList, getContactList} from "../redux/contact/contact.actions";

// Create Context Object
export const ContactContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const ContactContextProvider = props => {
    const {contactList,pagination} = useSelector(state => state.contact)
    const dispatch = useDispatch();

    const handleSearch = (search,pagination=null) => {
        getContactList(search,pagination.page,pagination.per_page)
            .then((response)=>{
                const sources = response.data;
console.log()
                dispatch(setContactList(sources.data,sources.page,sources.per_page,sources.total))

            })
            .catch((error)=>{
                const sources = error.response;
                dispatch(setContactList([]))
            })

    }
    return (
        <ContactContext.Provider value={[contactList, handleSearch,pagination]}>
            {props.children}
        </ContactContext.Provider>
    );
};
