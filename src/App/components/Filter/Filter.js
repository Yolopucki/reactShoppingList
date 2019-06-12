import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import {FormControl, InputGroup, Button} from "react-bootstrap";
import classes from "./filter.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Filter = (props) => {
    const {handleFilterSearch, searchedValue, searchedCategory} = props;

    useEffect(() => {
    }, [searchedValue]);

    let url = searchedCategory ? `/${searchedCategory}?${searchedValue}` : `?${searchedValue}`;

    return (
        <Col xs={12}>
            <Row data-test="filterComponent">
                <InputGroup className="mb-3 mt-3 justify-content-center">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon3">
                            Filter:
                        </InputGroup.Text>
                        <FormControl
                            placeholder='search'
                            value={searchedValue}
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={e => handleFilterSearch(e)}
                        />
                        <Link to={url}> <Button
                            variant="success"
                            className={classes.button}
                        >Set search</Button></Link>
                    </InputGroup.Prepend>
                </InputGroup>
            </Row>
        </Col>

    );
};
Filter.propTypes = {
    handleFilterSearch: PropTypes.func,
    searchedValue: PropTypes.string,
    searchedCategory: PropTypes.string
};

export default Filter;

