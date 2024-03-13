import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import QuantityButton from '../Buttons/QuantityButton'
import Container from '../Container'
import useFetch from '../../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import useBharatFormat from '../../Hooks/useBharatFormat'

function ProductDetails() {
    const {slug} = useParams()
    const [productQuantity, setProductQuantity] = useState(1)
    const {data:product, loading, error } = useFetch(`/products?populate=*&filters[id]=${slug}`)
    const dispatch = useDispatch()
    const msgBox = useRef(null)

    const price = useBharatFormat((product[0]?.attributes?.price)?(product[0]?.attributes?.price):0)
    const onInc = ()=>{
        setProductQuantity(productQuantity + 1)
    }
    const onDec = ()=>{
        if((productQuantity) > 1)
        setProductQuantity(productQuantity - 1)
    }
    const handleAddToCart = ()=>{
        const quantity = Number(productQuantity)
        const id = product[0].id
        const title = product[0].attributes?.title
        const price = product[0].attributes?.price
        const imgUrl = product[0]?.attributes.imgUrl
        dispatch(addToCart({quantity, id , title, price, imgUrl}))
        msgBox.current.classList.toggle("hidden");
        setTimeout(() => {
            msgBox.current.classList.toggle("hidden");
        }, 2000);

    }
  return (
    <Container>
                {product?(
                    <div className='md:flex my-8 mx-2  '>
                    <div className='z-10 hidden fixed top-28 right-10 bg-yellow-300 text-xl rounded-md px-2' ref={msgBox}> Product added to Cart </div>
                    <div id='image' className='md:w-1/2 lg:w-2/3 flex flex-col lg:flex-row md:mr-2'>
                        <div className=' lg:order-last lg:w-10/12'>
                        <img className='p-2 border max-h-[472px] border-black'  src={product[0]?.attributes.imgUrl} />
                        </div>
                        <div className='flex lg:flex-col overflow-x-auto lg:w-2/12 m-1'>
                            <div className='p-2 w-32 border  border-black m-1 lg:w-fit'><img className='max-h-[200px]' src={product[0]?.attributes.imgUrl} /></div>
                            {/* <div className='p-2 w-32 border border-black m-1 lg:w-fit'><img src={config.imgUrl+data[0]?.attributes.img1?.data?.attributes?.url} /></div> */}
                        </div>
                    </div>
                    <div id='product_details' className='md:w-1/2 lg:w-1/3 pt-8'>
                        <h1 className='text-3xl border-b-2 pb-2'>
                        {product[0]?.attributes?.desc}
                        </h1>
                        <div className='text-2xl font-semibold my-4 px-8'>
                        <sup>₹</sup>{price} /-
                        </div>

                        <QuantityButton productQuantity={productQuantity} onInc={onInc}  onDec = {onDec}/>

                        <div className='my-4 px-8 flex justify-between gap-x-2'>
                            <button className='w-52 bg-yellow-400 p-2 text-xl rounded-md' onClick={handleAddToCart} >Add To Cart</button>
                            {/* <button className='w-52 bg-yellow-400 p-2 text-xl rounded-md'>Buy Now</button> */}
                        </div>
                        <div className='flex flex-wrap px-8'>
                            <span className='border bg-teal-400 p-2 rounded-md mr-2 mb-2'>Seller: {product[0]?.attributes?.seller} </span>
                            <span className='border bg-teal-400 p-2 rounded-md mr-2 mb-2'>Category: {product[0]?.attributes?.categories.data[0].attributes.title}</span>
                            <span className='border bg-teal-400 p-2 rounded-md mr-2 mb-2'>Warrany: 1 yrs </span>
                            <span className='border bg-teal-400 p-2 rounded-md mr-2 mb-2'>Delivery in: {product[0]?.attributes?.delivery_time} </span>
                        </div>
                    </div>
                </div>
                ):null}
            </Container>
  )
}

export default ProductDetails