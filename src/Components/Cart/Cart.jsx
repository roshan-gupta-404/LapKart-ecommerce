import React from 'react'
import CartCard from '../Cards/CartCard';
import Container from '../Container';

function Cart() {
    const cart = [{
        imgUrl: 'https://m.media-amazon.com/images/I/81uZ0m4puHL._AC_UY218_.jpg',
        desc: 'Kuro RTX Gaming PC RGB - Intel 12th Gen i7 12700F- 12C/20T, 32GB DDR4 RAM, 500GB SSD, RTX 3060 12GB Graphics',
        title: 'Kuro RTX Gaming PC RGB - Intel 12th Gen i7 12700F- 12C/20T, 32GB DDR4 RAM, 500GB SSD, RTX 3060 12GB Graphics',
        id: 'p1',
        quantity:5,
        price: '147890'
    }]
    let totalSum = 0;
    cart?.forEach(product => {
        totalSum = totalSum  + (Number(product.price) * Number(product.quantity))
    });

    const handlePayment = async ()=>{}

    return (
        <Container>
            <div className='my-8 flex flex-col items-center'>
                {cart.length ?
                    cart.map((product) => (<CartCard key={product.id} product={product} />))
                    : <h1>No Items in Cart</h1>
                }

                <div className='w-2/12 text-center my-4'>
                    <h3>{totalSum}</h3>
                    <button className='w-full bg-yellow-400 rounded-md p-2 mt-2' disabled={true} onClick={handlePayment}>Ckeckout</button>
                </div>
            </div>
        </Container>
    )
}

export default Cart