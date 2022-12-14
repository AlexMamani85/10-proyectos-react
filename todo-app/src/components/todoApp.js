import styled from '@emotion/styled'
import React, { useState } from 'react';
import Todo from './todo'

const Container = styled.div`
  width: 500px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  &:hover {
    background-color: gray;
  }
`

const TodosContainer = styled.div`
  padding: 32px;
  background-color: lightblue;
  text-align: center;
  font-size: 16px;
  border-radius: 4px;
  color: gray;
  font-weight: bold;
  width: 90%;
  &:hover {
    color: black;
  }
`

const Form = styled.form`
  display: flex;
  gap: 5px;
`

const Input = styled.input`

type: ${({ type }) => type};
value: ${({value}) => value};
`

const InputText = styled.input`
  flex-grow: 1;
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  border: solid 1px #999;
  type: ${({ type }) => type};
  value: ${({value}) => value};
`



function TodoApp() {

  const [title, setTitle] = useState("Hola222");
  const [todos, setTodos] = useState([]);
  

  function handleChange(e){
    const value = e.target.value;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo]);

    setTitle('')
  }
  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find(item => item.id === id);
    item.title = value
    setTodos(temp);
    
  }
  function handleComplete(id, value) {
    const temp = [...todos];
    const item = temp.find(item => item.id === id);
    item.completed = !item.completed 
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter( item => item.id !== id );
    setTodos(temp);
  }

    return ( <Container>
      <Form>
        <InputText onChange={handleChange} 
            value={title} />
        <Input 
          onClick={handleSubmit} 
          type="submit" 
          value="Create toDO"/>
      </Form>

      <TodosContainer>
        {todos.map(item => (
          <Todo onUpdateFromTodoApp={handleUpdate} 
                onDelete={(e)=>handleDelete(item.id)} 
                onComplete={handleComplete}
                item={item} />

        ))}
      </TodosContainer>



    </Container>);
}

export default TodoApp;

