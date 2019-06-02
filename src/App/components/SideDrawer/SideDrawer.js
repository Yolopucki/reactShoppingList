import React from 'react';
import {InputGroup} from 'react-bootstrap';

class SideDrawer extends React.Component {
    state = {
        checked: true
    };
    // debugger
    handlechecked = () => {
        this.setState({checked: !this.state.checked})
    };

    render() {
        const {category, handleCategories} = this.props;
        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Checkbox
                            aria-label="Checkbox for following text input"
                            value={category}
                            onChange={e => {
                                this.handlechecked();
                                handleCategories(e);
                            }}
                            checked={this.state.checked}
                            id={category}
                        />
                    </InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">{category}</InputGroup.Text>
                </InputGroup>
            </div>
        );
    }

};


export default SideDrawer;
