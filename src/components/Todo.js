import React from 'react';

const Todo = ({text,completed,onToggle}) => <li><input type="checkbox" onChange={onToggle} checked={completed}/>{text}</li>;

export default Todo;
