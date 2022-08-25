import React, { useState } from 'react';

export default function Todo({item}) {
    return (
    <div>
        {item.title}
        <button>Editar</button>
        <button>Eliminar</button>
    </div>);
}

 