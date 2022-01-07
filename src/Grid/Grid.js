import React from 'react'
import Box from '../Box/Box';

function Grid({order}) {
console.log(order);

    return (
        <div>
            {order.map((num, index) => {
                console.log(num);
                return(
                    <Box key={index} num={num} />
                )
            })}
        </div>
    )
}

export default Grid
