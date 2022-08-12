import { take, put } from 'redux-saga/effects';
// import axios from '@services/axiosInstance';
import * as searchType from '../../actions/search/searchActionType';

function* search_content() {
  while (true) {
    //  const apiUrl = '';
    const { payload } = yield take(searchType.SEARCH_CONTENT);
    console.log('payload', payload);

    try {
      // 请求
      // let { data }  = yield call(axios.get,params)

      yield put({
        type: searchType.SEARCH_CONTENT_REDUCER,
        payload: {
          data: payload,
        },
      });
    } catch (error) {
      // 关闭弹窗
      // 弹出报错信息
    }
  }
}

export const searchSaga = [search_content()];
