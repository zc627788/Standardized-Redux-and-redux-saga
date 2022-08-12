import { all } from 'redux-saga/effects';
// import * as commonType from '@store/actions/common/commonActionType';
import { searchSaga } from './search/searchSaga';

export default function* rootSaga() {
  try {
    yield all([...searchSaga]);
  } catch (error) {
    // 弹窗警告
    // yield put({
    //   type: commonType.OPEN_WARN_SNACKBAR,
    //   message: error.message ? error.message : 'Service error',
    // });
  }
}
