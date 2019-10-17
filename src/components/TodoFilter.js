import React from 'react';
import {VisibilityFilters,setVisibilityFilter} from '../actions';
import {useDispatch} from 'react-redux';

const TodoFilter = () => {
    
    const dispatch = useDispatch();

    const handleFilter = (e) => {
        let {value} = e.target;
        dispatch(setVisibilityFilter(value));
    }

    return (

        <form>
            <select onChange={handleFilter}>
                <option value={VisibilityFilters.SHOW_ALL}>Todos</option>
                <option value={VisibilityFilters.SHOW_COMPLETED}>Completos</option>
                <option value={VisibilityFilters.SHOW_ACTIVE}>Ativos</option>
            </select>
        </form>
    );
}

export default TodoFilter;
