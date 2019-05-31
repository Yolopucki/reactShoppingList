import React from 'react';

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

export default Filter;

