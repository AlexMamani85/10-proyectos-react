import React, { useState } from 'react';

export default function Todo({item, onUpdateFromTodoApp, onDelete}) {
    const [isEdit,setIsEdit] = useState(false)

    function updateFunction(id, value){
        setIsEdit(false);
        onUpdateFromTodoApp(id, value)
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
            <div>
                {item.title}
                <button onClick={()=>setIsEdit(true)}>Editar</button>
                <button onClick={()=>onDelete(item.id)}>Eliminar</button>
            </div>
        );
    }
    return (
    <div>
        {isEdit? (<FormEdit value={item.title}/>):(<TodoElement />)}
    </div>
    );
}
