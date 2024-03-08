import React from 'react'
import { useParams } from 'react-router-dom'
import QuantityButton from '../Buttons/QuantityButton'
import Container from '../Container'

function ProductDetails() {
    const {slug} = useParams()
    const [productQuantity, setProductQuantity] = useState(1)
    const product = [{
        img: 'https://m.media-amazon.com/images/I/81uZ0m4puHL._AC_UY218_.jpg',
        desc: 'Kuro RTX Gaming PC RGB - Intel 12th Gen i7 12700F- 12C/20T, 32GB DDR4 RAM, 500GB SSD, RTX 3060 12GB Graphics',
        id: 'p1',
        price: '₹1,47,890 ',
        categories:{
            title:'PC'
        },
        delivery_time:3,
        seller:'Lapkart'
    },]
    
    const onInc = ()=>{
        setProductQuantity(productQuantity + 1)
    }
    const onDec = ()=>{
        if((productQuantity) > 1)
        setProductQuantity(productQuantity - 1)
    }
    const handleAddToCart = ()=>{}
  return (
    <Container>
                {product?(
                    <div className='md:flex my-8 mx-2 '>
                    <div id='image' className='md:w-1/2 lg:w-2/3 flex flex-col lg:flex-row md:mr-2'>
                        <div className=' lg:order-last lg:w-10/12'>
                        <img className='p-2 border max-h-[472px] border-black'  src={product?.imgUrl} />
                        </div>
                        <div className='flex lg:flex-col overflow-x-auto lg:w-2/12 m-1'>
                            <div className='p-2 w-32 border  border-black m-1 lg:w-fit'><img className='max-h-[200px]' src={product?.imgUrl} /></div>
                            {/* <div className='p-2 w-32 border border-black m-1 lg:w-fit'><img src={config.imgUrl+data.img1?.data?.attributes?.url} /></div> */}
                        </div>
                    </div>
                    <div id='product_details' className='md:w-1/2 lg:w-1/3 pt-8'>
                        <h1 className='text-3xl border-b-2 pb-2'>
                        {product?.desc}
                        </h1>
                        <div className='text-2xl font-semibold my-4 px-8'>
                         ₹ {product?.price} /-
                        </div>

                        <QuantityButton productQuantity={productQuantity} onInc={onInc}  onDec = {onDec}/>

                        <div className='my-4 px-8 flex justify-between gap-x-2'>
                            <button className='w-52 bg-yellow-400 p-2 text-xl rounded-md' onClick={handleAddToCart} >Add To Cart</button>
                            <button className='w-52 bg-yellow-400 p-2 text-xl rounded-md'>Buy Now</button>
                        </div>
                        <div className='flex flex-wrap px-8'>
                            <span className='border bg-teal-400 p-2 rounded-md mr-2 mb-2'>Seller: {product?.seller} </span>
                            <span className='border bg-teal-400 p-2 rounded-md mr-2 mb-2'>Category: {product?.categories.title}</span>
                            <span className='border bg-teal-400 p-2 rounded-md mr-2 mb-2'>Warrany: 1 yrs </span>
                            <span className='border bg-teal-400 p-2 rounded-md mr-2 mb-2'>Delivery in: {product?.delivery_time} </span>
                        </div>
                    </div>
                </div>
                ):null}
            </Container>
  )
}

export default ProductDetails