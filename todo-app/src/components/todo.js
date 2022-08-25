import React, { useState } from 'react';

export default function Todo({item}) {
    const [isEdit,setIsEdit] = useState(false)


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
