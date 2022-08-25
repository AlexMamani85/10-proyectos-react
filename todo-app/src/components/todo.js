import React, { useState } from 'react';

export default function Todo({item}) {
    const [isEdit,setIsEdit] = useState(false)


    function updateFunction(e){
        e.preventDefault();
        setIsEdit(false);
        console.log(isEdit);
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
                <button onClick={updateFunction}>Update</button>
            </form>
        );
    }

    function TodoElement() {
        return (
            <div>
                {item.title}
                <button onClick={()=>setIsEdit(true)}>Editar</button>
                <button>Eliminar</button>
            </div>
        );
    }
    return (
    <div>
        {isEdit? (<FormEdit value={item.title}/>):(<TodoElement />)}
    </div>
    );
}
