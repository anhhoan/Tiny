import * as actions from '../actions/index'
import * as types from '../constants'
import { put, takeEvery } from '@redux-saga/core/effects'
import callApi from '../fetchAPIs/callAPI'
function* getItem() {
    try {
        const res = yield callApi('GET', '')
        yield put(actions.getStudentSuccess({ res: res.data }))

    } catch (error) {
        yield put(actions.getStudentFailure(error))
    }
}
function* addItem(data) {
    try {
        yield callApi('POST', 'tiny', data.payload)
        yield put(actions.addStudentSuccess())
        yield put(actions.getStudentRequest())
    } catch (error) {
        yield put(actions.addStudentFailure(error))
    }
}
function* deleteItem(data) {
    try {
        yield callApi('DELETE', `${data.payload.id}`)
        yield put(actions.deleteStudentSuccess())
        yield put(actions.getStudentRequest())

    } catch (error) {
        yield put(actions.deleteStudentFailure(error))
    }
}
function* updateItem(data) {
    try {
        yield callApi('PUT', `${data.payload.id}`, data.payload)
        yield put(actions.updateStudentSuccess())
        yield put(actions.getStudentRequest())
    } catch (error) {
        yield put(actions.updateStudentFailure(error))
    }
}

export const ItemSaga = [takeEvery(types.GET_STUDENT_REQUEST, getItem),
                        takeEvery(types.ADD_STUDENT_REQUEST, addItem),
                        takeEvery(types.UPDATE_STUDENT_REQUEST, updateItem),
                        takeEvery(types.DELETE_STUDENT_REQUEST, deleteItem)]