import React, { useState } from 'react';
import styled from '@emotion/styled'

const TodoStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    justify-content: space-around;
    align-items: stretch;
    align-content: stretch;
    color: black;
    &:hover {
    color: darkblue;
    border: gray solid 2px;
    border-radius:6px;
    }
`
const Title = styled.span`
    width: 300px;
    color: ${({completed}) => completed ? 'gray' : 'black'}
`


export default function Todo({item, onUpdateFromTodoApp, onDelete, onComplete}) {
    const [isEdit,setIsEdit] = useState(false)

    function updateFunction(id, value){
        setIsEdit(false);
        onUpdateFromTodoApp(id, value)
    }

    function handleComplete(id, value){
        onComplete(id, value);
    }

    function FormEdit({value}) {
        const [newValue, setNewValue] = useState(value)

        function handleSubmit(e) {
            e.preventDefault();
        }
        
        function handleChange(e) {
            const value = e.target.value;
            setNewValue(value);
        }

        return (
            <form onSubmit={handleSubmit}>
                <input  type='text' onChange={handleChange} value={newValue}/>
                <button onClick={()=>updateFunction(item.id,newValue)}>Update</button>
            </form>
        );
    }

    function TodoElement() {
        return (
            <TodoStyled>
                <input checked={item.completed} onChange={(e)=>handleComplete(item.id,e.target.checked)} type="checkbox"></input>
                <Title completed={item.completed}>
                    {
                        item.completed? (<strike>{item.title}</strike>) : (<p>{item.title}</p>)
                    }
                </Title>
                    <button onClick={()=>setIsEdit(true)}>Editar</button>
                    <button onClick={()=>onDelete(item.id)}>Eliminar</button>
            </TodoStyled>
        );
    }


    return (
    <div>
        {isEdit? (<FormEdit value={item.title}/>):(<TodoElement />)}
    </div>
    );
}
