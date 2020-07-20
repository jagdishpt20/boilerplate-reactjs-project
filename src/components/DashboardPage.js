import React from 'react';
import {connect} from 'react-redux';

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);        
    }    

    render() {
        return (
            <div>
                <h3>Dashboard page content</h3>                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    
});

export default connect(undefined, mapDispatchToProps)(DashboardPage);
