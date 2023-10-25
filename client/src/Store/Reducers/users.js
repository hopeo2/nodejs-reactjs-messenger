import userActions from "../Actions/userActions";

const usersState = {};

const users = (state = usersState, action) => {
    let newState = state;
    switch(action.type) {
        case userActions.USER_REGISTER_SUCCESS:
            break;
        case userActions.USER_REGISTER_FAILED:
            break;
        default:
            newState = state;
            break;
    }
    return newState;
};

export default users;