import React from 'react';
import {Link} from "react-router-dom";
import {FormControl, InputGroup, Button} from "react-bootstrap"

const Filter = ({handleFilterSearch, searchedValue, searchedCategory}) => {
    let url = searchedCategory[0] ? `/${searchedCategory[0]}?${searchedValue}` : `/?${searchedValue}`;
//!TODO make shouldcomponentupdate
    return (
        <div className="col-12 row">
            <InputGroup className="mb-3 mt-3 justify-content-center">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">
                        Filter:
                    </InputGroup.Text>
                    <FormControl
                        placeholder={searchedValue}
                        value={searchedValue}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={e => handleFilterSearch(e)}
                    />
                    <Link to={url}> <Button
                        variant='success'
                        size='lg'
                    >Search</Button></Link>
                </InputGroup.Prepend>
            </InputGroup>
        </div>

    );
};

export default Filter;

