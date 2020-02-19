import React from 'react';
import {connect} from "react-redux";
import {getCars} from "../../redux/cars-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import Static from "./Static";
class StaticContainer extends React.Component {

    componentDidMount() {
       this.props.getCars(this.props.location.pathname)
    }

    render() {
        return (
            <Static {...this.props}/>
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
)(StaticContainer);




