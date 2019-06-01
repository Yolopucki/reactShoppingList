import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({handleFilter, filteredByInput}) => {
    return (
        <div
            style={{
                marginTop: '10px',
                textAlign: 'center'
            }}
        >
            <label> Filter:
                <input
                    type="text"
                    style={{marginLeft: '10px'}}
                    value={filteredByInput}
                    onChange={e => handleFilter(e)}
                />
            </label>
        </div>
    );
};
Filter.propTypes = {
    handleFilter: PropTypes.func.isRequired,
    filteredByInput: PropTypes.string.isRequired
};

export default Filter;

