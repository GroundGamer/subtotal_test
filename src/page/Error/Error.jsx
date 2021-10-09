import React from 'react';

import './Error.scss'

const Error = (props) => {
    return (
        <div className='error'>
            <p>В скором времени ошибку исправят!</p>
            <button onClick={() => props.history.push('/')}>Перейти на главную страницу</button>
        </div>
    );
};

export default Error;