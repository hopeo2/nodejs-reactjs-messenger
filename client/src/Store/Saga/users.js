import { takeLatest, put, call } from "redux-saga/effects";
import userActions from "../Actions/userActions";
import HttpService from "../../Services/HttpService";
const httpService = new HttpService();

export const userRegisterworker = function* (action) {
    try {
        const result = yield call(() => {
            return httpService.post("auth/register", action.payload)
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};
export const userRegisterWatcher = function* () {
    yield takeLatest(userActions.USER_REGISTER, userRegisterworker);
};
