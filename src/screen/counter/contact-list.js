import React, { useContext,useEffect } from "react";
import { ContactContext } from "../../contexts/contact-context";

export default function ContactList() {
    const [contactList,handleSearch,pagination] = useContext(ContactContext);
    useEffect(()=>{
        handleSearch('',pagination)
    },[])
console.log(contactList)
    return (
        <ul className="list-group" id="user-list">
            {
                contactList.map((value,key)=>{

                    return(
                        <li className="list-group-item m-3" key={key}>
                            <div className="row">
                                <div className="col-md-12 col-12">
                                    <div className="row">
                                        <div className="col-md-2 col-2 user-img text-center pt-1">
                                            <img src={value.avatar} alt={value.first_name+' '+value.last_name}
                                                 className="img-responsive img-circle rounded-circle"/>
                                        </div>
                                        <div className="col-md-8 col-10">
                                            <h5 className="font-weight-bold mb-1">
                                                <i className="fa fa-online mr-1"
                                                   aria-hidden="true"/>
                                                {value.first_name+' '+value.last_name}</h5>
                                            <div className="user-detail">
                                                <p className="m-0">
                                                    <i className="fa fa-envelope mr-1"
                                                       aria-hidden="true"/> {value.email}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-2">
                                            <p className="m-0">10:42 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })
            }

        </ul>
    );
}
