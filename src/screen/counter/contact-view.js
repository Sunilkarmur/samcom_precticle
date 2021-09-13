import React from "react";

import { ContactContextProvider } from "../../contexts/contact-context";
import ContactList from "./contact-list";
import ContactSearch from "./contact-search";

export default function ContactView() {
    return (
        <ContactContextProvider>
            <div className="container">
                <div className="contact-list row">
                    <div className="main col-md-8 col-12">
                        <div className="card">
                            <ContactSearch/>
                            <ContactList/>
                        </div>
                    </div>
                </div>
            </div>
        </ContactContextProvider>
    );
}
