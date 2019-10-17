import React,{useState} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

const AddTodoField = ({addTodo}) => {
    
    const [text,setText] = useState('');
    
    const handleSubmit = (e)=> {

        e.preventDefault();
        addTodo(text);
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setText(e.target.value)}/>
            <button type="submit">Adicionar</button>
        </form>
    );

}

const mapDispatchToProps = {addTodo};

export default connect(null,mapDispatchToProps)(AddTodoField);
