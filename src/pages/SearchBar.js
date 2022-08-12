import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { search, searchNotReducer } from '../store/actions/search/searchAction';

export default function SearchBar() {
  const [checkbox, SetCheckbox] = useState(false);
  const dispatch = useDispatch();

  return (
    <form>
      <input
        type="text"
        onChange={e => {
          checkbox &&
            dispatch(
              search({ payload: `经过saga的dispatch触发${e.target.value}` })
            );
          !checkbox &&
            dispatch(
              searchNotReducer({
                payload: { data: `未经过的dispatch触发${e.target.value}` },
              })
            );
        }}
        placeholder="Search..."
      />
      <label>
        <input
          type="checkbox"
          checked={checkbox}
          onChange={e => SetCheckbox(e.target.checked)}
        />{' '}
        经过saga
      </label>
    </form>
  );
}
