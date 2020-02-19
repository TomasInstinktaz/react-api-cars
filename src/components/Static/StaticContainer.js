import React from 'react';
// import Profile from "./Profile";
import {connect} from "react-redux";
import {getCars} from "../../redux/cars-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import Static from "./Static";
// import {getCars} from "../../redux/cars-reducer";

class StaticContainer extends React.Component {

    // refreshProfile() {
    //     this.props.posts.getCars();
    // }


    componentDidMount() {
       this.props.getCars()
    }


    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (this.props.posts != prevProps.posts ) {
    //         this.refreshProfile();
    //     }
    // }

    render() {
        return (
            <Static {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    //console.log('mapStateToProps PROFILE')
    return ({
        posts: state.carsPage.posts,
    })
}

export default compose(
    connect(mapStateToProps, {getCars}),
    withRouter
)(StaticContainer);




