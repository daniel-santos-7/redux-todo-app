import store from './store';
import {addTodo,toggleTodo} from './actions';

it('Adicionar todos',()=> {
    let todos2add = ['estudar','caminhar']
    todos2add.forEach((todo,index)=> {
        store.dispatch(addTodo(todo));
        expect(store.getState().todos[index].text).toBe(todo);
    });
})

it('alterar todo',()=> {
    
    store.getState().todos.forEach((_,index)=> {
    
        store.dispatch(toggleTodo(index));
        expect(store.getState().todos[index].completed).toBe(true);        
        store.dispatch(toggleTodo(index));
        expect(store.getState().todos[index].completed).toBe(false);
    
    });

})