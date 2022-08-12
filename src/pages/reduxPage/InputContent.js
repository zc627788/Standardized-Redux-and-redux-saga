import React from 'react';
import { useSelector } from 'react-redux';

function InputContent() {
  const content = useSelector(state => state.searchReducer.content);
  return <div>{content}</div>;
}

export default InputContent;
