import {ssoInstance} from '../../utils/Axios';
import { CONTACT_LIST } from './contact.types';


export const setContactList = (contactList,page,per_page,total) => {

    return {

        type: CONTACT_LIST,
        contactList,
        page,
        per_page,
        total
    };

};

export const getContactList = (search,page,per_page) => {

    return  ssoInstance.get('/users?per_page='+per_page+'&page='+page)

}
