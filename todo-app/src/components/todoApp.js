import styled from '@emotion/styled'
import React, { useState } from 'react';
import Todo from './todo'

const Container = styled.div`
  padding: 32px;
  background-color: red;
  text-align: center;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  width: 50%;
  &:hover {
    color: white;
  }
`

const TodosContainer = styled.div`
  padding: 32px;
  background-color: green;
  text-align: center;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  width: 50%;
  &:hover {
    color: white;
  }
`

const Form = styled.form`

`

const Input = styled.input`
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
      completed: false.valueOf,
    }
    setTodos([...todos, newTodo]);


  }


    return ( <Container>
      <Form>
        <Input onChange={handleChange} 
            value={title} />
        <Input 
          onClick={handleSubmit} 
          type="submit" 
          value="Create toDO"/>
        {title}
      </Form>

      <TodosContainer>
        {todos.map(item => (
          <Todo key={item.key} item={item} />

        ))}
      </TodosContainer>



    </Container>);
}

export default TodoApp;

