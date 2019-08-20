import React from 'react';

const listItem = ({id, text, onClick}) => {
    return (
        <li>
            {id} - {text}
            <button onClick={onClick.bind(this, id)}>-</button>
        </li>
    );
}

export default listItem;