import React, { useState } from 'react';

export default function Todo({item}) {
    const [isEdit,setIsEdit] = useState(false)

    return (
    <>
        {isEdit? (
        <div>Modo editar</div>
        ):(
            <div>
                {item.title}
                <button onClick={()=>setIsEdit('true')}>Editar</button>
                <button>Eliminar</button>
            </div>
        )}
    </>
    );
}
