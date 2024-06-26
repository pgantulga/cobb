import React from 'react';

function Button({ children, onClick, type = 'button', className = '' }) {

    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2  text-primary rounded hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${className}`}
        >
            {children}
        </button>
    )
}

export default Button