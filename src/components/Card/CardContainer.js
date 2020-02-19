import React from 'react';
import {connect} from "react-redux";
import {getCars} from "../../redux/cars-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import CardComponent from "./Card";

class CardContainer extends React.Component {

    render() {
        return (
            <CardComponent {...this.props}
                     posts={this.props.posts}
                    // postai={this.props.postai}
            />
        )
    }
}

let mapStateToProps = (state) => {

    return ({
        posts: state.carsPage.posts,
        // postai: state.carsPage.postai
    })
}

export default compose(
    connect(mapStateToProps, {getCars}),
    withRouter
)(CardContainer);
