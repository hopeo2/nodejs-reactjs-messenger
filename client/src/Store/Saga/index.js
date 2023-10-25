import { takeEvery, takeLatest, put, call, all } from "redux-saga/effects";

import * as userHandler from "./users";

export default function* root() {
    yield all([
        userHandler.userRegisterWatcher()
    ])
};