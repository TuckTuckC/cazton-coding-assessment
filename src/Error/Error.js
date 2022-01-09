import React from 'react'

function Error({error, isActive}) {
    return (
        <div className={isActive ? 'error errorActive' : 'error'}>
            <h1>ERROR: {error}</h1>
        </div>
    )
}

export default Error
