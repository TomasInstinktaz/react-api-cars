import {carsAPI} from "../api/api";

const ADD_POST = 'ADD_POST';

const initialState = {
    posts: []
}
const carsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {...action.newPost}],
            };
        }
        default:
            return state;
    }
}



export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost})

export const getCars = () => async (dispatch) => {
    const response = await carsAPI.getCars();
    dispatch(addPostActionCreator(response.data));
}


export default carsReducer;
