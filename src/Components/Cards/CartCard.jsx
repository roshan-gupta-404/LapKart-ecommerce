import React from 'react'
import QuantityButton from '../Buttons/QuantityButton'
import { useDispatch } from 'react-redux'
import { decrementQuantity, inccrementQuantity, removeFromCart } from '../../store/cartSlice'
import useBharatFormat from '../../Hooks/useBharatFormat'

function CartCard({ product }) {
    const dispatch = useDispatch()
    const onInc = () => {
        if (product.quantity < 5) {
            const id = product.id
            dispatch(inccrementQuantity({ id }))
        }

    }
    const onDec = () => {
        if (product.quantity > 1) {
            const id = product.id
            dispatch(decrementQuantity({ id }))
        }

    }
    const removeProduct = () => {
        const id = product.id
        dispatch(removeFromCart({ id }))
    }
    const price = useBharatFormat(product?.price)
    return (
        <div className='w-full flex flex-col sm:flex-row  border border-b-black border-b-2 bg-slate-200  items-center px-4'>
            <div id='image' className='min-w-40 w-40 m-2'>
                <div className='flex justify-center '><img className='border h-40 border-black' src={product?.imgUrl} /></div>
            </div>
            <div id='product_details' className='sm:pl-8 pt-8 sm:w-1/3'>
                <h3 className='text-lg border-b-2 pb-2'>
                    {product?.title}
                </h3>
                <div className='flex items-center'>
                    <div className='text-sm font-semibold my-4 pl-2'>
                    <sup>₹</sup>{price}
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