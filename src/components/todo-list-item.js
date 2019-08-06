import React from 'react';

function TodoListItem({ label, important = false }) {

  const liStyle = {
    color: important? 'tomato' : 'black',
  };


  return (
      <span style={liStyle}>{ label }</span>
  );
}

export default TodoListItem;