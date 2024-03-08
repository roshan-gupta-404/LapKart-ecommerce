import React from 'react'

function QuantityButton({ productQuantity, onInc, onDec}) {
    return (
        <div id='quantity' className='px-8 my-8'>
            <button className='border w-10 text-xl text-white bg-orange-400' onClick={onDec}>-</button>
            {productQuantity}
            <button className='border w-10 text-xl text-white bg-green-500' onClick={onInc}>+</button>
        </div>
    )
}

export default QuantityButton