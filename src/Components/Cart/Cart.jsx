import React from 'react'
import CartCard from '../Cards/CartCard';
import Container from '../Container';
import { useDispatch, useSelector } from 'react-redux';
import useBharatFormat from '../../Hooks/useBharatFormat';
import { emptyCart } from '../../store/cartSlice';
import {loadStripe} from '@stripe/stripe-js';
import makeRequest from '../../makeRequest';

function Cart() {
    const cart = useSelector((state) => state.products)
    const dispatch = useDispatch()
    let totalSum = 0;
    cart?.forEach(product => {
        totalSum = totalSum + (Number(product.price) * Number(product.quantity))
    });

    totalSum = useBharatFormat(totalSum)

    const stripePromise = loadStripe('pk_test_51OpqtzSAYOLn2xQF0Rzl0aDqiyEiURdKZTUmzMSVUUTT2Hm4UX7yrbCMQp1y1R1ETENX6Jvl9jtiy6VZPlDP8uT500bw9CpyMH');
    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post("/orders", {
                cart,
            })
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    const resetCart = async () => {
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
                    <button className='w-full bg-yellow-400 rounded-md p-2 mt-2' disabled={!(cart.length)} onClick={handlePayment}>Ckeckout</button>
                    <button className='w-full bg-yellow-400 rounded-md p-2 mt-2' onClick={resetCart}>resetCart</button>
                </div>
            </div>
        </Container>
    )
}

export default Cart