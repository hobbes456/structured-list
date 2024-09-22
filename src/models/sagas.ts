import { all } from "redux-saga/effects";

import { watchProductSagas } from "./product/sagas";

export default function* rootSaga() {
    yield all([watchProductSagas()]);
}
