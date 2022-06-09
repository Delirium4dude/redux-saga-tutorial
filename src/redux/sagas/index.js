import { takeEvery, takeLatest, takeLeading, select } from 'redux-saga/effects';
// take - блокирующий эффект. Пока не задиспатчится INCREASE код дальше не отработает
// takeEvery - вызывает каждую операцию
// takeLatest - вызывает только последнюю отменяя предыдущие
// takeLeading - вызывает первую отменяя последующие

import { INCREASE, DECREASE } from '../constants';


const delay = (time) => new Promise((resolve, reject) => {
  setTimeout(resolve, time * 1000);
})

/* WORKERS запускаемые действия с бизнес логикой приложения */
export function* workerSaga() { 
  const count = yield select(({counter}) => counter.count);
  yield delay(2);
  console.log('request ' + count);
 }

/* WATCHERS следит за экшенами и запускает действие */
export function* watchClickSaga() {
  // yield take(INCREASE); // take - блокирующий эффект. Пока не задиспатчится INCREASE код дальше не отработает
  // console.log('watchClickSaga');
  // yield;

  yield takeLeading(INCREASE, workerSaga);
  yield takeLatest(INCREASE, workerSaga); 
}

/* EFFECTS */
export default function* rootSaga() {
  yield watchClickSaga();
};
