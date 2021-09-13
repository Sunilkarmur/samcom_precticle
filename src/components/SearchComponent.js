import React, {useState} from 'react';


function SearchComponent(props) {
    const [showSearch,setSearchShow] = useState(false);
    const [search, setSearch] = useState('');

    const onSearch = (value) => {
        // setSearchShow(!showSearch)
        setSearch(value)
      props.onSearch(value)
    }

    return (
        <div className="input-group mb-3">
            {
                showSearch && (
                    <input type="text" className="form-control" value={search} onChange={(e)=>onSearch(e.target.value)} placeholder="Search this Contact..."/>
                )
            }

            <div className="input-group-append">
                <a href="#" className="hide-search text-secondary"
                   data-command="toggle-search"
                   data-toggle="tooltip"
                   data-placement="top" title="Toggle Search" onClick={()=>{setSearchShow(!showSearch)}}>
                    <i className="fa fa-search"/>
                </a>
            </div>

        </div>
    );
}

export default SearchComponent;
