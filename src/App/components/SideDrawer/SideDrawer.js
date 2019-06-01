import React from 'react';

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
                <label>{category}
                    <input
                        type="checkbox"
                        value={category}
                        onChange={e => {
                            this.handlechecked();
                            handleCategories(e);
                        }}
                        checked={this.state.checked}
                    />
                </label>
            </div>
        );
    }

};


export default SideDrawer;
