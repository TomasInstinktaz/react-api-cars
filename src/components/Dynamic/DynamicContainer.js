import React from 'react';
import Dynamic from "./Dynamic";
import {connect} from "react-redux";
import {getCars} from "../../redux/cars-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class DynamicContainer extends React.Component {

    render() {
        return (
            <Dynamic {...this.props}
                    posts={this.props.posts}/>
        )
    }
}



let mapStateToProps = (state) => {
    return ({
        posts: state.carsPage.posts,
    })
}

export default compose(
    connect(mapStateToProps, {getCars}),
    withRouter
)(DynamicContainer);
