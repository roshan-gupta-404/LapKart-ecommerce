import React from 'react'
import QuantityButton from '../Buttons/QuantityButton'

function CartCard({ product }) {
    const onInc = ()=>{}
    const onDec = ()=>{}
    const removeProduct = ()=>{}
    return (
        <div className='w-full flex flex-col sm:flex-row  border border-b-black border-b-2 bg-slate-200  items-center px-4'>
            <div id='image' className='min-w-40 w-40 m-2'>
                <div className='flex justify-center '><img className='border h-40 border-black' src={product?.imgUrl} /></div>
            </div>
            <div id='product_details' className='sm:pl-8 pt-8 w-1/3'>
                <h3 className='text-lg border-b-2 pb-2'>
                    {product?.title}
                </h3>
                <div className='flex items-center'>
                    <div className='text-sm font-semibold my-4 pl-2'>
                        {product?.price}
                    </div>
                    <div className='flex items-center'>
                        <QuantityButton productQuantity={product?.quantity} onInc={onInc} onDec={onDec} />
                        <button className=' bg-yellow-400 rounded-md h-fit p-2' onClick={removeProduct}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard