import { takeEvery, takeLatest, takeLeading, select, put, call } from 'redux-saga/effects';
import { getLatestNews } from '../../api'
import { setLatestNews } from '../actions/actionCreators';
// take - блокирующий эффект. Пока не задиспатчится INCREASE код дальше не отработает
// takeEvery - вызывает каждую операцию
// takeLatest - вызывает только последнюю отменяя предыдущие
// takeLeading - вызывает первую отменяя последующие

import { INCREASE, DECREASE, GET_NEWS } from '../constants';

/* WORKERS запускаемые действия с бизнес логикой приложения */
export function* handleNews() { 
  const { hits } = yield call(getLatestNews, 'react');
  yield put(setLatestNews(hits));
}

/* WATCHERS следит за экшенами и запускает действие */
export function* watchClickSaga() {
  yield takeLeading(GET_NEWS, handleNews);
}

/* EFFECTS */
export default function* rootSaga() {
  yield watchClickSaga();
};
