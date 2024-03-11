import React from 'react'
import CartCard from '../Cards/CartCard';
import Container from '../Container';
import { useDispatch, useSelector } from 'react-redux';
import useBharatFormat from '../../Hooks/useBharatFormat';
import { emptyCart } from '../../store/cartSlice';

function Cart() {
    const cart = useSelector((state) => state.products)
    console.log(cart);
    const dispatch = useDispatch()
    let totalSum = 0;
    cart?.forEach(product => {
        totalSum = totalSum  + (Number(product.price) * Number(product.quantity))
    });

    totalSum = useBharatFormat(totalSum)

    const handlePayment = async ()=>{}
    const resetCart = async ()=>{
        dispatch(emptyCart())
    }

    return (
        <Container>
            <div className='my-8 flex flex-col items-center'>
                {cart.length ?
                    cart.map((product) => (<CartCard key={product.id} product={product} />))
                    : <h1>No Items in Cart</h1>
                }

                <div className='w-2/12 text-center my-4'>
                    <h3><sup>₹</sup>{totalSum}</h3>
                    <button className='w-full bg-yellow-400 rounded-md p-2 mt-2' disabled={true} onClick={handlePayment}>Ckeckout</button>
                    <button className='w-full bg-yellow-400 rounded-md p-2 mt-2'  onClick={resetCart}>resetCart</button>
                </div>
            </div>
        </Container>
    )
}

export default Cart