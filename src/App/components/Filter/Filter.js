import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({filterItemsHandler, filteredValue}) => {
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
                    value={filteredValue}
                    onChange={e => filterItemsHandler(e)}
                />
            </label>
        </div>
    );
};
Filter.propTypes = {
    filterItemsHandler: PropTypes.func.isRequired,
    filteredValue: PropTypes.string.isRequired
};

export default Filter;

