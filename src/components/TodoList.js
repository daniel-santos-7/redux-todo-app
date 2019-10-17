import React from 'react';
import Todo from './Todo';
import {useSelector,useDispatch} from 'react-redux';
import {toggleTodo,VisibilityFilters} from '../actions';

const TodoList = () => {
    
    let todos = useSelector(state=>state.todos);
    let visibilityFilter = useSelector(state=>state.visibilityFilter);
    const dispatch = useDispatch();

    const filter = (todo)=> {

        if(visibilityFilter===VisibilityFilters.SHOW_ALL) {
            return true;
        }

        if(visibilityFilter===VisibilityFilters.SHOW_COMPLETED) {
            return todo.props.completed;
        }

        if(visibilityFilter===VisibilityFilters.SHOW_ACTIVE) {
            return !todo.props.completed;
        }

        return true;

    }

    return (
        <ul>
            {todos.map((todo,index)=><Todo key={index} {...todo} onToggle={()=>dispatch(toggleTodo(index))}/>).filter(filter)}
        </ul>
    );

}

export default TodoList;
