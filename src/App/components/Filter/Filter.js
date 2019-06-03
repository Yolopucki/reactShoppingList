import React from 'react';
import PropTypes from 'prop-types';

import {FormControl, InputGroup} from "react-bootstrap"

const Filter = ({handleFilterSearch, searchedValue}) => {
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
                </InputGroup.Prepend>
            </InputGroup>
        </div>

    );
};

export default Filter;

