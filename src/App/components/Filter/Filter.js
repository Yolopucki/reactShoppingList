import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {FormControl, InputGroup, Button} from "react-bootstrap"

const Filter = (props) => {
    const {handleFilterSearch, searchedValue, searchedCategory} = props;
    useEffect(e => {
        console.log('it updates');
    }, [searchedValue]);
    let url = searchedCategory[0] ? `/${searchedCategory[0]}?${searchedValue}` : `?${searchedValue}`;
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
                        style={{width:'120px'}}
                    >Set search</Button></Link>
                </InputGroup.Prepend>
            </InputGroup>
        </div>

    );
};

export default Filter;

