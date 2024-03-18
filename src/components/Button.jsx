import React from 'react'

function Button({ title, handler, className }) {
    return (

        <button 
        onClick={handler}
        className={`bg-transparent border-2 px-12 py-2 font-semibold ${className}`}>
            {title}
        </button>
    )
}

export default Button