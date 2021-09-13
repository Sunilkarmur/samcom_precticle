import React, { useContext,useState } from "react";
import { ContactContext } from "../../contexts/contact-context";
import SearchComponent from "../../components/SearchComponent";

export default function ContactSearch() {

    const [ contactList,handleSearch,pagination] = useContext(ContactContext);

    const [search, setSearch] = useState('');
    const [pageSize, setPageSize] = useState(pagination.per_page);



    const handleChange = (event) => {
        setPageSize(event.target.value)
        pagination.per_page = event.target.value
        handleSearch(search,pagination)
    };

    const onSearch = (value) => {
        setSearch(value)
        handleSearch(value,pagination)
    }

    return (
        <div className="border-0 pl-2 pr-2">
            <div className="row">
                <div className="col-md-2">
                    <select className="form-select mt-2"
                            value={pageSize}
                            onChange={handleChange}
                    >
                        <option>All</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                    </select>
                </div>
                <div className="col-md-10">
                    <ul className="pull-right m-0">
                        <li className="mt-2">
                            <SearchComponent onSearch={onSearch} />

                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}
