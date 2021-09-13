import { CONTACT_LIST } from './contact.types';


const INITIAL_STATE = {

    contactList: [],
    pagination:{
        page:1,
        per_page:10,
        total:0
    }

};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case CONTACT_LIST:
            return {
                ...state,
                contactList: action.contactList,
                pagination:{
                    page:action.page,
                    per_page:action.per_page,
                    total:action.total
                }


            };

        default: return state;

    }

};

export default reducer;
