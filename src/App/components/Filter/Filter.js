import React from 'react';
import PropTypes from 'prop-types';

import {FormControl, InputGroup} from "react-bootstrap"

const Filter = ({handleFilter, filteredByInput}) => {
    return (
        <div className="col-12 row">
            <InputGroup className="mb-3 mt-3 justify-content-center">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">
                        Filter:
                    </InputGroup.Text>
                    <FormControl
                        placeholder={filteredByInput}
                        value={filteredByInput}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={e => handleFilter(e)}
                    />
                </InputGroup.Prepend>
            </InputGroup>
        </div>

    );
};
Filter.propTypes = {
    handleFilter: PropTypes.func.isRequired,
    filteredByInput: PropTypes.string.isRequired
};

export default Filter;

