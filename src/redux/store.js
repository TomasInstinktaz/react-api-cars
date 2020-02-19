import carsReducer from "./cars-reducer";


let store = {
    _state: {
        carsPage: {
            posts: [
                {marke: "Peugeot", modelis: "308", metai: "2010", nuotraukos: ['dsadsad'], kaina: "7022.34"},
            ],

            newPostText: 'Add Post'
        }
    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
    debugger;
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },

    dispatch(action) {
        this._state.carsPage = carsReducer(this._state.carsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
// window.store = store;
